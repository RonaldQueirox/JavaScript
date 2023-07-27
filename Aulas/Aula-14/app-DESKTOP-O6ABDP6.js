// Switch

function verifiCor() {
    let cor = document.getElementById("cor").value;

    switch(cor) {
        case "azul":
            //o que acontece
            document.body.style.backgroundColor = "blue";
        case "vermelho":
            document.body.style.backgroundColor = "red";
        case "verde":
            document.body.style.backgroundColor = "green";
        case "roxo":
            document.body.style.backgroundColor = "purple";
        default:
            document.getElementById("text").innerHTML = "Nenhuma cor disponivel: " + cor;
    }
}
