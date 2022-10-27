let listaContactos =  [ {nombre : "Maxwell Wright",telefono: "(0191)7196495",correo : "Curabitur.egestas.nun@nonummyac.co.uk"},
                        {nombre : "Raja Villareal",telefono : "0866 398 2895",correo : "posuere.vulputate@sed.com"},
                        {nombre : "Helen Richards ", telefono : "0800 1111", correo : "libero@convalis.edu"}
                    ];

listaContactos.push ({nombre : "Maisie Haley", telefono : "0913 531 3030", correo : "risus.Quisque@urna.ca"});

// Auxiliar validador 
let validar = false ; 

do {
let elegir = Number(prompt("Selecciona que quieres hacer ,\n  (1) •	Mostrar todos los contactos ( todos o seleccion), \n "+
        " (2) •	Validar contactos del array ,    \n (3) •	Añadir un nuevo contacto (nuevo) , "+
        "\n (5) Salir")) ; 
  

switch(elegir) {
    case 1:
        let longitud = listaContactos.length-1 ; 
        let indice = Number(prompt("¿ Que numero de elementos quieres mostrar con un máximo de "+longitud+"?"));
        showContact(listaContactos , indice);
    break;
    case 2 : 
        console.log( showAllContacts(listaContactos));
    break ; 
    case 3:

      let nombreIntroducido = prompt("Introduce el nombre") ; 
      let correoTelefono = prompt("Introduce correo");
      let telefonoIntroducido = prompt("Introduce el telefono");

      addNewContact (listaContactos , nombreIntroducido , correoTelefono , telefonoIntroducido);
        break;
    case 5 :
        validar=true ; 
       break ; 
    default:
      console.log("ERROR");
      window.alert("ERROR");
    break;
  }
}while(validar!= true);



function showContact(listaContactos , indice)
{
       /* let i = 0 ; 
        for (const iterator of listaContactos) {
               console.log(iterator)
               alert(iterator);
             i = i + 1 ; 
        }
        */
       if(listaContactos instanceof Array){
        for(let i = 0 ; i < listaContactos.length ; i++)
        {
            if(i < indice )
            {
                console.log(listaContactos[i]);
            }
        }
      }
}


function showAllContacts(listaContactos)
{
      console.log(listaContactos instanceof Array);
}

function addNewContact (listaContactos , nombreIntroducido , correoTelefono , telefonoIntroducido)
{
  if(listaContactos instanceof Array)
  {

    if(nombreIntroducido.length == 0  || telefonoIntroducido.length == 0 || correoTelefono.length == 0 )
    {   
        window.alert("ERROR ARGUMENTOS INVALIDOS . ");
    }
    else
    {
      listaContactos.push({nombre : nombreIntroducido , telefono : telefonoIntroducido , correo : correoTelefono} );
      console.log(listaContactos[listaContactos.length-1]);
      window.alert(listaContactos[listaContactos.length-1].nombre);
    }
  }
  else
  {
    console.log("Los argumentos del array no son validos .");
  }
}






