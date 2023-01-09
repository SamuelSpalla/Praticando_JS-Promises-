var nome = prompt('Qual seu nome')
alert('É um prazer te conhecer, ' + nome)

const myPromise = new Promise((resolve, reject) => {
    const nomep = 'Samuel'

    if (nomep === nome){
        resolve('Usuário Samuel encontrado!')
    } else{
        reject(`O usuário ${nome} não foi encontrado`)
    }
})

myPromise.then((dados) => {
    console.log(dados)
})
.catch((e) => {
    console.log('Aconteceu um erro: ' + e)
})


const r1 = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve('r1 ok! time')
    }, 2000)
})
const r2 = new Promise((resolve, reject) =>{
        resolve('r2 ok!')
})

const r3 = new Promise((resolve, reject) =>{
    resolve('r3 ok!')
})

const resolveAllRace = Promise.race([r1, r2, r3]).then((dados) =>{
    console.log(dados)
})





const userName = 'SamuelSpalla'

fetch(`https://api.github.com/users/${userName}` , {
    method: 'GET',
    headers: {
        Accept: 'application/vnd.github.v3+json',
    },
})  .then((response) => {
        return response.json()
    })
    .then((dados) =>{
        console.log(`O nome de usuário é: ${dados.name}`)
        console.log(`A bio do usuário é: ${dados.bio}`)
    })
    .catch((e) => {
        console.log(`Houve um erro: ${e}`)
    })
    
