import React, { createContext, useContext, useReducer, useEffect } from 'react';
import type { User, CartItem } from './types';

export interface AppState {
  currentUser: User | null;
  darkMode: boolean;
  cart: CartItem[];
  toasts: { id: string; message: string; type: 'success' | 'error' | 'info' }[];
}

type AppAction =
  | { type: 'LOGIN'; user: User }
  | { type: 'LOGOUT' }
  | { type: 'UPDATE_USER'; user: User }
  | { type: 'TOGGLE_DARK' }
  | { type: 'ADD_TO_CART'; item: CartItem }
  | { type: 'REMOVE_FROM_CART'; foodItemId: string }
  | { type: 'CLEAR_CART' }
  | { type: 'ADD_TOAST'; toast: AppState['toasts'][0] }
  | { type: 'REMOVE_TOAST'; id: string };

function reducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, currentUser: action.user };
    case 'LOGOUT':
      return { ...state, currentUser: null, cart: [] };
    case 'UPDATE_USER': {
      const users = JSON.parse(localStorage.getItem('lipro_users') || '[]') as User[];
      const idx = users.findIndex(u => u.matricNumber === action.user.matricNumber);
      if (idx !== -1) {
        users[idx] = action.user;
        localStorage.setItem('lipro_users', JSON.stringify(users));
      }
      return { ...state, currentUser: action.user };
    }
    case 'TOGGLE_DARK': {
      const next = !state.darkMode;
      localStorage.setItem('lipro_dark', String(next));
      return { ...state, darkMode: next };
    }
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, action.item] };
    case 'REMOVE_FROM_CART':
      return { ...state, cart: state.cart.filter(c => c.foodItem.id !== action.foodItemId) };
    case 'CLEAR_CART':
      return { ...state, cart: [] };
    case 'ADD_TOAST':
      return { ...state, toasts: [...state.toasts, action.toast] };
    case 'REMOVE_TOAST':
      return { ...state, toasts: state.toasts.filter(t => t.id !== action.id) };
    default:
      return state;
  }
}

const AppContext = createContext<{ state: AppState; dispatch: React.Dispatch<AppAction> } | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, {
    currentUser: null,
    darkMode: localStorage.getItem('lipro_dark') === 'true',
    cart: [],
    toasts: [],
  });

  useEffect(() => {
    if (!localStorage.getItem('lipro_users')) {
      const seed: User[] = [{
        id: crypto.randomUUID(),
        matricNumber: '2024/59386',
        passwordHash: btoa('password123'),
        fullName: 'Adetayo Emmanuel',
        faculty: 'Health Sciences',
        department: 'Nursing Science',
        level: 200,
        deviceId: getDeviceFingerprint(),
        subscriptionTier: 'free',
        subscriptionExpires: null,
        isActive: true,
        role: 'student',
        university: 'Osun State University (UNIOSUN)',
        enrolledCourses: ['GST101', 'BIO101'],
        quizAttempts: {},
        notifications: ['🎉 Welcome to Lipro Academy!'],
        wallet: 0,
        transactions: [],
        aiMessageCount: { date: new Date().toDateString(), count: 0 },
      }];
      localStorage.setItem('lipro_users', JSON.stringify(seed));
    }
    if (!localStorage.getItem('lipro_quiz_attempts')) {
      localStorage.setItem('lipro_quiz_attempts', JSON.stringify([]));
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', state.darkMode);
  }, [state.darkMode]);

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}

export function getDeviceFingerprint(): string {
  let fp = localStorage.getItem('lipro_device_fp');
  if (!fp) {
    fp = 'device_' + Math.random().toString(36).substring(2);
    localStorage.setItem('lipro_device_fp', fp);
  }
  return fp;
}
