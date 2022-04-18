let formulario = document.querySelector('#formCadastro')

formulario.onsubmit = function(evento){
    evento.preventDefault()
    let inputNome = document.forms['formCadastro']['nome']
    let inputEmail = document.forms['formCadastro']['email']
    let inputCidade = document.forms['formCadastro']['cidade']


    if(!inputNome.value){
      inputNome.classList.add('inputError')
      let span =inputNome.nextSibling.nextSibling
      span.innerText = 'Digite o nome corremtamente'
    } else{
      inputNome.classList.remove('inputError')
      let span =inputNome.nextSibling.nextSibling
      span.innerText = ''
    }


    if(!inputEmail.value){
      inputEmail.classList.add('inputError')
      let span =inputEmail.nextSibling.nextSibling
      span.innerText = 'Digite o Email corremtamente'  
    } else{
      inputEmail.classList.remove('inputError')
      let span =inputEmail.nextSibling.nextSibling
      span.innerText = ''
    }


    
    if(inputCidade.value === ''){
      inputCidade.classList.add('inputError')
      let span =inputCidade.nextSibling.nextSibling
      span.innerText = 'Selecione alguma cidade '
      
    }else{
      inputCidade.classList.remove('inputError')
      let span =inputCidade.nextSibling.nextSibling
      span.innerText = ''
    }



}