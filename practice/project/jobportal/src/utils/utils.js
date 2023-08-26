export const setSession = (value) => {
    sessionStorage.setItem("token", value);
};
  
export const getSession = () => {
    return sessionStorage.getItem("token");
};