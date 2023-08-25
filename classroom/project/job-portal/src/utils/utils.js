export const getSession = () => {
  return sessionStorage.getItem("token");
};
export const setSession = (value) => {
  return sessionStorage.setItem("token", value);
};