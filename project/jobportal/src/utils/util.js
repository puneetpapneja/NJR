export const getSession = () => {
    return sessionStorage.getItem("token");
}
export const setSessionet = (value) => {
    return sessionStorage.setItem("token", value);
}