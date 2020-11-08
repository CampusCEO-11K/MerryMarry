export function paymentPolling(): Promise<string> {
  return new Promise((resolve, reject) => {
    const timer = setInterval(() => {
      const status = localStorage.getItem('payment_status');

      if (status) {
        localStorage.removeItem('payment_status');
        switch (status) {
          case 'success': {
            const pg_token = localStorage.getItem('payment_pg_token');
            localStorage.removeItem('payment_pg_token');
            if (pg_token) {
              resolve(pg_token);
            } else {
              reject('no_token');
            }
            return;
          }
          case 'failure': {
            reject('failure');
            return;
          }
          case 'cancel': {
            reject('cancel');
            return;
          }
          default: {
            return;
          }
        }
        clearInterval(timer);
      }
    }, 1000);
  })
}

export declare namespace paymentPolling {
  export type Result = string;

  export type Error = 'no_token' | 'failure' | 'cancel';
}
