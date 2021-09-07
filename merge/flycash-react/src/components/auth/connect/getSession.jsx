
export const getUser = () => {
    const userStr = sessionStorage.getItem("user_status");

    if(userStr) return JSON.parse(userStr);
    else return null;
}

export const getEmail = () => {
    return sessionStorage.getItem("email") || null;
}

export const setUserSession = (email,user_status) => {
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("user_status", JSON.stringify(user_status));
}

export const removeUserSession = () => {
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("user_status");
}