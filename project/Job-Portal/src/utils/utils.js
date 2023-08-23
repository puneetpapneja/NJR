export const setSession=(value)=>{
    sessionStorage.setItem("token", value);
}

export const getSession=()=>{
    sessionStorage.getItem("token");
}

