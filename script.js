let boton = document.querySelectorAll('.acordeon-plus');
let cajon = document.querySelectorAll('.caja');
let cajonononon = document.querySelectorAll('.div-funciones');

cajonononon.forEach((elemento, index) => {
    elemento.addEventListener('click', () =>{
        let cajaCorrespondiente = cajon[index];
        cajon[index].classList.toggle('open');

        if (cajaCorrespondiente.classList.contains('open')){
            boton[index].src = 'assets/images/icon-minus.svg';
        } else {
            boton[index].src = 'assets/images/icon-plus.svg';
        }
        
        
    })
})
