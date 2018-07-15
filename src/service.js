export const doFakeLogin = () => {
    sessionStorage.setItem("isLoginIn", true);
}

export const isLoggedIn = () => {
    return sessionStorage.getItem("isLoginIn");
}

export const doFakeLogout = () => {
    sessionStorage.removeItem("isLoginIn");
}
