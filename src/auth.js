export function autenticado() {

    if (localStorage.getItem("acesso") === "true")
        return true;
    else
        return false;
}