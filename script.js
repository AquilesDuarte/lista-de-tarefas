function adicionar(){

    console.log("testando")

    let text = document.getElementById("texto").value;
    let list = document.getElementById("lista").innerHTML;


    list += "<p>" +text+ "</p>"

    document.getElementById("lista").innerHTML = list

}

function remover(){

    location.reload()


}