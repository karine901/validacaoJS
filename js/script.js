function ValidarCampos(){
    let nome = document.getElementById("nome");
    let email = document.getElementById("email");

    if(nome.value == ""){
        alert("DiGITE O NOME !");
        nome.focus();
        return;

    }

    else
    {
        if(nome.value.length > 20){
            alert("Campo com mais de 20 caracteres!");
            nome.value = "";
            nome.focus();
            return;  
        }
    }

    
    if(email.value == ""){
        alert("Digite o e-mail!");
        email.focus();
        return;
    }

    else
    {
        if(!ValidaEmail(email.value.trim())){
            alert(" e-mail  inválido!");
            nome.value = "";
            email.focus();
            return;  
        }
        else{

            //let parteEmail = email.value.substring(0,5);
            //alert(parteEmail);

            let antesDoArroba = email.value.substring(0, email.value.indexOf("@"));
            alert(antesDoArroba);
        }   

    }

}

function ValidaEmail(email){
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
}


