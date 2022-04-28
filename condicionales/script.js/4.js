function futuro() {
    let nombre = document.getElementById('n').value;

    swal({
        title: "¿Eres programador?",
        buttons: ['no', 'si'],
      })
      .then((si) => {
        if (si) {
          swal('¿Te gusta ser programador?', {
            buttons: ['no', 'si'],
          })

          .then((si) => {
            if (si) {
              swal('¿Sabes Inglés?',{
                buttons: ['no', 'si'],
            })
            .then((si) => {
                if(si) {
                    swal(`Felicidades ${nombre}`,'Te irá muy bien en la vida y nunca te hará falta trabajo')
                }else{
                    swal(`${nombre}`, 'aprende inglés y te irá mejor como programador')
                }
            })
            } else {
              swal(`${nombre}`, 'mejor busca algo que realmente te apasione y asi te irá mejor');
            }
          });
        } else {
          swal("¿Al menos estas estudiando para ser programador?", {
            buttons: ['no', 'si'] 
        })
        .then((si) => {
            if(si){
                swal('¿Te gusta estudiar programación?', {
                    buttons: ['no', 'si'],
                })
                .then((si) => {
                    if(si) {
                        swal(`Felicidades ${nombre}`, 'vas por buen camino y te irá muy bien');
                    }
                    else {
                        swal(`Te irá muy mal ${nombre}`, 'mejor busca lo que te guste');
                    }
                })
            } else {
                swal('¿Pero si te gustaría ser programador?', {
                    buttons: ['no', 'si'],
                })
                .then((si) => {
                    if(si){
                        swal(`¿Qué esperas ${nombre}?`, 'empieza ahora o no serás un buen programador')
                    }
                    else {
                        swal(`${nombre}`, 've y busca lo que te gusta');
                    }
                })
            }
        })
        }
      });
}