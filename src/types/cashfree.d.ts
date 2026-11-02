declare module "@cashfreepayments/cashfree-js" {
  interface CashfreeInstance {
    subscriptionsCheckout(options: {
      subsSessionId: string;
      redirectTarget: string;
    }): void;

    checkout(options: {
      paymentSessionId: string;
      redirectTarget: string;
    }): void;
  }

  export function load(options: { mode: "sandbox" | "production" }): Promise<CashfreeInstance>;
}
