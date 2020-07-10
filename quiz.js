

//Função para validar o nome
function resposta1() {
    var nome = window.document.getElementById("nome").value
    var resultado = window.document.getElementById("res1")
    if(nome.length == "") {
        window.alert("[ERRO] Digite o seu nome")
    } resultado.innerHTML = (`Muito Prazer ${nome}, eu sou o sistema que o Renan está criando.`)
}

//Função para validar idade
function resposta2() {
    var nome = window.document.getElementById("nome").value
    var idade = window.document.getElementById("idade").value
    var resultado = window.document.getElementById("res2")
    if(nome.length == "") {
        window.alert()
    }
    if(idade.length == 0) {
        window.alert("[ERRO] Digite a sua idade")
    } else {
        resultado.innerHTML = (`Então até agora sabemos que o seu nome é ${nome} e você tem ${idade} anos`)
    }
}

//Função de pergunta
function yes() {
    window.alert("Pergunte coisas básicas, como por exemplo")
    window.alert("Quando eu fui desenvolvida, Aonde você pode encontrar o meu dev, quanto é 1+1 ")
    window.prompt("Qual a sua pergunta?")
}
function no(){
    window.alert("Obrigado por me testar, O Renan vai continuar me atualizado de acordo com os seus estudos!")
}