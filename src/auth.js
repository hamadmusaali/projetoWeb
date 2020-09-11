export function autenticado() {

    if (localStorage.getItem("acesso") === "true")
        return true;
    else
        alert("Você não esta cadastrado");
        return false;
}