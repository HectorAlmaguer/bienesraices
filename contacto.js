function enviar(){
    event.preventDefault();
        Swal.fire({
        title: '¿Tus datos son correctos?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si',
        cancelButtonText: "No",
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
      }).then((result) => {
        if (result.value) {
        document.formulario_registro.submit();
        }
        return false;
      })
    }
function validarEmail() {
        var email = document.getElementById('username');
        if (!(/\S+@\S+\.\S+/.test(email))){
            return false;
        }
    }