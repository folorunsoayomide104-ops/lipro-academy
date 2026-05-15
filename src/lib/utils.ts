import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { SubscriptionTier } from './types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNaira(amount: number): string {
  return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', minimumFractionDigits: 0 }).format(amount);
}

export function formatDate(isoString: string): string {
  return new Date(isoString).toLocaleDateString('en-NG', { day: 'numeric', month: 'short', year: 'numeric' });
}

export function getLevelColor(level: number): string {
  const map: Record<number, string> = {
    100: 'bg-green-100 text-green-800',
    200: 'bg-blue-100 text-blue-800',
    300: 'bg-yellow-100 text-yellow-800',
    400: 'bg-orange-100 text-orange-800',
    500: 'bg-red-100 text-red-800',
    600: 'bg-purple-100 text-purple-800',
  };
  return map[level] ?? 'bg-gray-100 text-gray-800';
}

export function getScoreGrade(score: number): { grade: string; color: string } {
  if (score >= 70) return { grade: 'A', color: 'text-green-600' };
  if (score >= 60) return { grade: 'B', color: 'text-blue-600' };
  if (score >= 50) return { grade: 'C', color: 'text-yellow-600' };
  if (score >= 45) return { grade: 'D', color: 'text-orange-600' };
  return { grade: 'F', color: 'text-red-600' };
}

export function isPremium(tier: SubscriptionTier, expires: string | null): boolean {
  return tier === 'premium' && (!expires || new Date(expires) > new Date());
}

export function isUltimate(tier: SubscriptionTier, expires: string | null): boolean {
  return tier === 'ultimate' && (!expires || new Date(expires) > new Date());
}

export function uuidv4(): string {
  return crypto.randomUUID();
}
