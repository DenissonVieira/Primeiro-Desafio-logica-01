// Desafio de projeto 01 : Classificador de Nivel de Heroi
// Dev: Denisson Vieira
// Data: 20/09/2025


let nomeHeroi = ["Homem Aranha", "Flash", "Homem Formiga", "Batman", "Homem de Ferro", "DeadPool"]
let xpHeroi = [1250, 2250, 3500, 5500, 6500, 10000]

for (let i = 0; i < nomeHeroi.length; i++){

    let nome = nomeHeroi[i]
    let xp = xpHeroi[i]
    let nivel
if(xp <= 1000){
    nivel = "Bronze"

} else if (xp >=1000 &&  xp <= 2000){
    nivel = "Prata" 

} else if (xp >= 2001 && xp <= 3000){
    nivel = "Ouro"

} else if (xp >= 3001 && xp <= 4500){
    nivel = "Diamante"

} else if (xp >= 4501 && xp <= 6000){
    nivel = "Platina"

} else if (xp >= 6001 &&  xp <= 7000){
    nivel = "Ascendente"

} else if (xp >= 7001 && xp <= 10000){
    nivel = "Imortal"
}

console.log ("O heroi ", nome, "Está no nivel ", nivel)
}