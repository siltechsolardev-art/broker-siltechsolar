const usuario = document.getElementById('input-usuario-login')
const senha = document.getElementById('input-senha-login')
const botaoAcessar = document.getElementById('btn-acessar');
const pError = document.getElementById('p-error');

usuario.addEventListener('input',() =>{

    pError.classList.add('hidden')

})
senha.addEventListener('input',() =>{

    pError.classList.add('hidden')

})


const mostrarSenha = document.getElementById('mostrar-senha')
let usuarioAtivo = 0

botaoAcessar.addEventListener('click', () =>{

        
}) 




usuario.addEventListener('input',()=>{

    pError.classList.remove('mostrar')

})
senha.addEventListener('input',()=>{

    pError.classList.remove('mostrar')

})
mostrarSenha.addEventListener('click', ()=>{

    if (senha.type === "password"){

        senha.type = "text"
        mostrarSenha.className = "bi bi-eye text-title color-third"
    }
    else {

        mostrarSenha.className = "bi bi-eye-slash text-title color-third"
            senha.type = 'password' 
    }
   
})

