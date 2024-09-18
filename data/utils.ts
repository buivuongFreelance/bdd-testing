export const TIMEOUT = 5000;
export const LARGE_TIMEOUT = 30000;
export const TINY_TIMEOUT = 500;

export function isEmail(email: string) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
