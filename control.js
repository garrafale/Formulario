var form = document.querySelector('form')
var usuario = document.getElementById('usuario')
var clave = document.getElementById('clave')
var submit = document.getElementById('ingresar')

form.onsubmit = function(event) {
    if (usuario.value === '' || clave.value === '' || usuario.value.match('@') == null) {
      event.preventDefault()
    }    
}