function verificarPasswords() {

    pass1 = document.getElementById('pass1');
    pass2 = document.getElementById('pass2');
 
    if (pass1.value != pass2.value) {
 
        document.getElementById("error").classList.add("mostrar");
 
        return false;
    } 
    else {
 
        document.getElementById("error").classList.remove("mostrar");
 
        document.getElementById("ok").classList.remove("ocultar");
 
        document.getElementById("login").disabled = true;
 
        setTimeout(function() {
            location.reload();
        }, 3000);
 
        return true;
    }
 
}