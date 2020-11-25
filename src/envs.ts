const { protocol, hostname } = window.location;

export const API_SERVER = (process.env.NODE_ENV === 'production')
  ? 'https://api.merrymarry.hyunsub.kim'
  : `${protocol}//${hostname}:8080`;

export const TOSS_CLIENT_KEY = 'test_ck_YyZqmkKeP8gljEa7ZmK3bQRxB9lG';
