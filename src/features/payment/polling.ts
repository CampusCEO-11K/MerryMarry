export function paymentPolling(): Promise<string> {
  return new Promise((resolve, reject) => {
    const timer = setInterval(() => {
      const status = localStorage.getItem('payment_status') as paymentPolling.Status | null;
      if (!status) {
        return;
      }

      switch (status) {
        case 'success': {
          const pg_token = localStorage.getItem('payment_pg_token');
          if (pg_token) {
            resolve(pg_token);
          } else {
            reject('no_token');
          }
          break;
        }
        default: {
          reject(status);
          break;
        }
      }

      localStorage.removeItem('payment_status');
      localStorage.removeItem('payment_pg_token');
      clearInterval(timer);
    }, 1000);
  })
}

export declare namespace paymentPolling {
  export type Result = string;

  export type Status = 'success' | 'failure' | 'cancel' | 'no_token';
}
