import type { LeaderboardEntry, LeaderboardPeriod, QuizAttemptRecord, User } from './types';

export function getQuizAttempts(): QuizAttemptRecord[] {
  return JSON.parse(localStorage.getItem('lipro_quiz_attempts') || '[]');
}

export function saveQuizAttempts(attempts: QuizAttemptRecord[]): void {
  localStorage.setItem('lipro_quiz_attempts', JSON.stringify(attempts));
}

export function recordQuizAttempt(user: User, courseCode: string, scorePercent: number): User {
  const attempts = getQuizAttempts();
  attempts.push({
    matric: user.matricNumber,
    courseCode,
    score: scorePercent,
    timestamp: new Date().toISOString(),
  });
  saveQuizAttempts(attempts);

  const updated = { ...user };
  if (!updated.quizAttempts[courseCode]) {
    updated.quizAttempts[courseCode] = { bestScore: 0, attempts: 0 };
  }
  updated.quizAttempts[courseCode].attempts++;
  if (scorePercent > updated.quizAttempts[courseCode].bestScore) {
    updated.quizAttempts[courseCode].bestScore = scorePercent;
  }
  return updated;
}

export function getTopScorers(courseCode: string, period: LeaderboardPeriod): LeaderboardEntry[] {
  const attempts = getQuizAttempts();
  const now = new Date();
  let startDate: Date;

  switch (period) {
    case 'daily':
      startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      break;
    case 'weekly':
      startDate = new Date(now);
      startDate.setDate(now.getDate() - 7);
      break;
    case 'monthly':
      startDate = new Date(now.getFullYear(), now.getMonth(), 1);
      break;
    case 'yearly':
      startDate = new Date(now.getFullYear(), 0, 1);
      break;
  }

  const filtered = attempts.filter(a => a.courseCode === courseCode && new Date(a.timestamp) >= startDate);
  const userBest = new Map<string, number>();
  filtered.forEach(a => {
    if (!userBest.has(a.matric) || a.score > userBest.get(a.matric)!) {
      userBest.set(a.matric, a.score);
    }
  });

  const users: User[] = JSON.parse(localStorage.getItem('lipro_users') || '[]');
  return Array.from(userBest.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([matric, score], idx) => {
      const u = users.find(u => u.matricNumber === matric);
      return { rank: idx + 1, matric, name: u?.fullName ?? matric, score };
    });
}

export function processMonthlyRewards(): void {
  const now = new Date();
  const monthKey = `${now.getFullYear()}-${now.getMonth()}`;
  if (localStorage.getItem('lipro_last_reward_month') === monthKey) return;

  const users: User[] = JSON.parse(localStorage.getItem('lipro_users') || '[]');
  const courseCodes = ['GST101', 'BIO101', 'CHM101', 'PHY101', 'ANA201', 'ANA204', 'NSG201', 'NSG203', 'NSG205', 'NSG301', 'NSG303', 'NSG401', 'NSG501', 'NUR601'];
  const rewardAmounts = [3000, 2000, 1000];

  courseCodes.forEach(code => {
    const leaders = getTopScorers(code, 'monthly');
    leaders.slice(0, 3).forEach((leader, i) => {
      const user = users.find(u => u.matricNumber === leader.matric);
      if (user) {
        user.wallet = (user.wallet || 0) + rewardAmounts[i];
        user.transactions.push({
          id: crypto.randomUUID(),
          date: new Date().toISOString(),
          amount: rewardAmounts[i],
          type: 'reward',
          description: `Monthly leaderboard reward — #${i + 1} in ${code}`,
        });
        user.notifications.unshift(`🏆 You ranked #${i + 1} in ${code} this month! Wallet credited.`);
      }
    });
  });

  localStorage.setItem('lipro_users', JSON.stringify(users));
  localStorage.setItem('lipro_last_reward_month', monthKey);
}
