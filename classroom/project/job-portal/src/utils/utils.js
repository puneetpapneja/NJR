export const setSession = (value) => {
  sessionStorage.setItem("token", value);
};

export const getSession = () => {
  return sessionStorage.getItem("token");
};
export const setKey = (value) => {
  sessionStorage.setItem("key", value);
};

export const getKey = () => {
  return sessionStorage.getItem("key");
};
