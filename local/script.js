let btn = document.querySelector("#btn")
let user = document.querySelector("#user")
let welcome = document.querySelector("#welcome")

/* 1 - salvar LocalStorage */ 

/* 3 - apagar item LocalStage*/


const sair = ()=> {
    localStorage.removeItem("username")
    welcome.innerHTML = "Faça seu Login"
}

exit.addEventListener("click", Sair)

function pegarNome() {
    localStorage.setItem("username", user.value)
    let username = localStorage.getItem("username")
    
    if(username == null) {
        welcome.innerHTML = "Faça seu login"
     }else
    }


    welcome.innerHTML = `ola ${username}, Seja bem-vindo`
 }
function pegarValorLocal() {
  let username = localStorage.getItem("username")

  welcome.innerHTML = `ola ${username}, Seja bem-vindo`
}
pegarValorLocal()

btn.addEventListener("click", pegarNome)
    

