const { protocol, hostname } = window.location;

export const API_SERVER = (process.env.NODE_ENV === 'production')
  ? 'https://api.merrymarry.hyunsub.kim'
  : `${protocol}//${hostname}:8080`;

