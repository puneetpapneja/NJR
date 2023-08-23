export const getSessionStorageItem = (key) => {
  return sessionStorage.getItem(key);
};

export const setSessionStorageItem = (key, value) => {
  sessionStorage.setItem(key, value);
};
