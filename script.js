// const arrayString = ['thais','almeida','cariri']
// const arrayNumbers = [4, 2, 3,15 ,25,6,4]
// const arrayMisto = [2,'aula-010',true]
// const arrayUmvalor = [24]
// const arrayVazio = []

//Array 1
// console.log(arrayString.length)
// console.log(arrayString [2]) = mostra o indice 



//exemplo do que não fazer 
// const copiaArray = arrayNumbers
// console.log(copiaArray)

// copiaArray.push (4)

// console.log('copia :',copiaArray)
// console.log('Array antigo:',arrayNumbers)
// como deve ser feito 
// const copiaDeVerdade = arrayNumbers.slice()
// // slice cria uma copia para que eu não tenha que mudar 
// // a variavel original 
// copiaDeVerdade.push(4)
// console.log('COpia de varival',copiaDeVerdade)
// console.log(arrayNumbers)

// copiaDeVerdade.splice(i,n) a sintaxe 
// i = indice (começa a tirar a partir dessa item )
// n = a quantidade de elementos 

// copiaDeVerdade.splice(2,2)
// console.log(copiaDeVerdade)

// console.log(arrayString.sort())
// console.log(arrayNumbers.sort())
//sort() = comportamento padrão
// futurament:utilizar comportamentos customizados das funções



const arrayNumbers = [2,38,9,25,64,33,15]
console.log(arrayNumbers)
console.log('ordem cresente',arrayNumbers.sort())
console.log('ordem reversa',arrayNumbers.reverse())
// da para deixar o pop e o reverse na mesma linha 
arrayNumbers.pop()
console.log('tira o ultimo numero',arrayNumbers)
arrayNumbers.push(6)
// pusch ==> sempre no final 
// unshift ==> sempre adiciona no inicio 
console.log('coloco a o numero',arrayNumbers)
arrayNumbers.splice(2,1)
console.log('tira o indice 2',arrayNumbers)

