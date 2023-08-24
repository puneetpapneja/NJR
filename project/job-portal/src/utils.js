
// export const getSessionStorageItem = (key) => {
//   return sessionStorage.getItem(key);
// };
// export const setSessionStorageItem = (key, value) => {
//   sessionStorage.setItem(key, value);
// };

export const getSession = () => {
  return sessionStorage.getItem("token");
};
export const setSession = (value) => {
  return sessionStorage.setItem("token", value);
};