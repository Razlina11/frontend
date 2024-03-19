export function logout(){
    localStorage.removeItem("store-token");
    window.location.href="/"
}