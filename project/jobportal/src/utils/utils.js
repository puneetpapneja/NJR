export const getsession = () => {
    return sessionStorage.getItem("token");
}

export const setsession = (value) => {
    return sessionStorage.setItem("token",value);
}