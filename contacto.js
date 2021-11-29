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
            Swal.fire(
                'Tus datos se han enviado',
                'Un asesor se pondra en contacto lo mas pronto posible',
                'success'
              )
        document.formulario_registro.submit();
        }
        return false;
      })
    }
function validarEmail() {
        var email = document.getElementById('inputEmail4');
        if (!(/\S+@\S+\.\S+/.test(email))){
            return false;
        }
    }