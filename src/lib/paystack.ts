const PAYSTACK_PUBLIC_KEY = 'pk_test_REPLACE_WITH_YOUR_KEY';

export interface PaystackConfig {
  email: string;
  amount: number;
  onSuccess: (ref: string) => void;
  onClose: () => void;
  metadata?: Record<string, unknown>;
}

export function initiatePaystackPayment(config: PaystackConfig): void {
  console.log('Paystack payment initiated:', config);
  alert(`[DEV MODE] Simulating Paystack payment of ₦${config.amount / 100}.\nIn production, install @paystack/inline-js and replace key.`);
  config.onSuccess('simulated_ref_' + Date.now());
}
