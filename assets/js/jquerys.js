$(document).ready(function(){


    $('#btndg').click(function (){
    
        $('#contenido').empty();
        $('#rookie').empty();
            
        const url = 'https://digimon-api.vercel.app/api/digimon';
        fetch (url) 
        .then( response => response.json())
        .then( json => {

            const list = $('#contenido')
            let contenido = ''
            for (let index =0; index < json.length; index++) {
                const user = json[index]
                contenido = contenido + `<div class="card col-5 col-md-3 col-lg-2 m-1"> 
                                            <div class="card-body ">
                                                <p class="card-title">${user.name}</p>
                                                <p class="card-text"></p> 
                                            </div>
                                            <img src="${user.img}" alt="Imagen Digimon" class="card-img-bottom" width="100" height="100">
                                            <p>Nivel: ${user.level}</p>
                                        </div>`
            }                    
            list.append(contenido)
            
        })
    })


    $('.dropdown-item').click(function (){
  
        $('#contenido').empty();
        level = $(this).val();

        const url = `https://digimon-api.vercel.app/api/digimon/level/${level}`;
        fetch (url) 
        .then( response => response.json())
        .then( (json) => {
    
            const list = $('#rookie')
            let contenido = ''
            for (let index =0; index < json.length; index++) {
                const digimon = json[index] 
                    contenido = contenido + `<div class="card col-5 col-md-3 col-lg-2 m-1"> 
                                                <div class="card-body ">
                                                    <p class="card-title">${digimon.name}</p>
                                                    <p class="card-text"></p> 
                                                </div>
                                                <img src="${digimon.img}" alt="Imagen Digimon" class="card-img-bottom" width="100" height="100">
                                                <p>Nivel: ${digimon.level}</p>
                                                </div>`           
            }
            list.empty(); 
            list.append(contenido); 
            
        })

        $('#close').click(function() {
            $('#rookie').empty();
            $(this).hide();
        }) 
    })
 

    $('#srchnmbtn').click(function() {  

        let name = $('#srchtxt').val();
        if (!name) {
            alert('Debes ingresar un nombre');
            return;
        }
        const url = `https://digimon-api.vercel.app/api/digimon/name/${name}`;
        fetch(url)
            .then(response => response.json())
            .then((data) =>{

                const digimon = data[0];        
                if (!digimon ) {
                    alert('Digimon no encontrado, por favor verifica los datos ingresados');
                    return;
                }   
                const html = `<div class="modal " id="myModal"> 
                                <div class="modal-dialog modal-sm modal-dialog-centered">
                                <div class="modal-content text-center p-2">
                                <h2 >${digimon.name}</h2>
                                <img src="${digimon.img}" width="200" height="200" class="mx-auto d-block">
                                <p>Nivel: ${digimon.level}</p>
                                <div class="modal-footer">
                                <button type="button" class="btn btn-danger close" data-bs-dismiss="modal">Close</button></div></div></div>
                                </div>`

                const $modal = $(html);
                const $closeBtn = $modal.find('.close');
                    
                $closeBtn.click(function() {
                    $modal.hide();
                    $modal.empty();
                });
                    
                $('body').append($modal);
                $modal.show();
            });                                 
    })

})