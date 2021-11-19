import { deleteAllCookies } from ".";

export const logout = (linkLogin: string) => {
  deleteAllCookies()
  localStorage.clear();
  window.location.replace(linkLogin);
};
