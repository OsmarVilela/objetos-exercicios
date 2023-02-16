const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
}
//a)
const copiaPokemon = {
	...pokemon1,
	nome: "Squirtle",
	tipo: "Água"
}
//b)
pokemon1.ataques = []

//c)
const ataque = {
nome: "Investida",
dano: 40,
tipo: "Normal",
precisao: 100
}
pokemon1.ataques.push(ataque)

//d)
//copiaPokemon.ataques = [] //com espalhamento não consegui
copiaPokemon.ataques = [...pokemon1.ataques]
//e)
const ataque2 = {
nome: "Folha Navalha",
dano: 45,
tipo: "Grama",
precisao: 100
}
pokemon1.ataques.push(ataque2)

//f)
const ataque3 = {
nome: "Jato de Água",
dano: 40,
tipo: "Água",
precisao: 100
}
copiaPokemon.ataques.push(ataque3)

//g)
console.log(pokemon1)
console.log(copiaPokemon)