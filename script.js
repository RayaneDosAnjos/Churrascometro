let inputadultos = document.getElementById("adultos")
let inputcriancas = document.getElementById("criancas")
let inputduracao = document.getElementById("duracao")

let res = document.getElementById("res")
function calcular(){
    var adultos = inputadultos.value
    var criancas = inputcriancas.value
    var duracao = inputduracao.value


    var qtdTotalCarne = carnepp(duracao) * adultos + (carnepp(duracao) /2 * criancas)
    var qtdTotalCerveja = cervejapp(duracao) * adultos 
    var qtdTotalBebidas = bebidaspp(duracao) * adultos + (bebidaspp(duracao) / 2 * criancas)


    res.innerHTML = `<p>${qtdTotalCarne/1000}Kg de carne</p>`
    res.innerHTML += `<p>${Math.ceil(qtdTotalCerveja/355)} latas de Cerveja</p>`
    res.innerHTML += `<p>${Math.ceil(qtdTotalBebidas/2000)} garrafas de bebidas</p>`
}
function carnepp(duracao){
    if (duracao >= 6){
        return 650
    }else{
        return 400
    }
}

function cervejapp(duracao) {
    if (duracao >= 6) {
        return 2000
    } else {
        return 1200
    }
}

function bebidaspp(duracao) {
    if (duracao >= 6) {
        return 1500
    } else {
        return 1000
    }
}