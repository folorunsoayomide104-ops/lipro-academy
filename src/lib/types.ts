export type SubscriptionTier = 'free' | 'premium' | 'ultimate';
export type UserRole = 'student' | 'admin';
export type LeaderboardPeriod = 'daily' | 'weekly' | 'monthly' | 'yearly';

export interface User {
  id: string;
  matricNumber: string;
  passwordHash: string;
  fullName: string;
  faculty: string;
  department: string;
  level: 100 | 200 | 300 | 400 | 500 | 600;
  deviceId: string;
  subscriptionTier: SubscriptionTier;
  subscriptionExpires: string | null;
  isActive: boolean;
  role: UserRole;
  university: string;
  enrolledCourses: string[];
  quizAttempts: Record<string, { bestScore: number; attempts: number }>;
  notifications: string[];
  aiMessageCount: { date: string; count: number };
  wallet: number;
  transactions: Transaction[];
}

export interface Transaction {
  id: string;
  date: string;
  amount: number;
  type: string;
  description: string;
}

export interface Course {
  code: string;
  title: string;
  level: 100 | 200 | 300 | 400 | 500 | 600;
  units: number;
  premium: boolean;
  description?: string;
  youtubeId?: string;
  thumbnailUrl?: string;
}

export interface Question {
  id: string;
  courseCode: string;
  text: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface Note {
  id: string;
  courseCode: string;
  title: string;
  level: number;
  author: string;
  date: string;
  content: string;
  premium: boolean;
}

export interface QuizAttemptRecord {
  matric: string;
  courseCode: string;
  score: number;
  timestamp: string;
}

export interface Restaurant {
  id: string;
  name: string;
  description: string;
  emoji: string;
  items: FoodItem[];
}

export interface FoodItem {
  id: string;
  name: string;
  price: number;
  description: string;
  emoji: string;
}

export interface CartItem {
  foodItem: FoodItem;
  quantity: number;
  restaurantName: string;
}

export interface LeaderboardEntry {
  rank: number;
  matric: string;
  name: string;
  score: number;
}
