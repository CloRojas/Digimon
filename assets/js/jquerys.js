$(document).ready(function(){


$('#contenido').show(function (){
        
    const url = 'https://digimon-api.vercel.app/api/digimon'
    fetch (url) 
        .then( response => response.json())
        .then( json => {

           const list = $('#contenido')
           let contenido = ''
           for (let index =0; index < json.length; index++) {
               const user = json[index]
               contenido = contenido + `<div class="card col-2 m-1" > 
                                        <div class="card-body "><p class="card-title">${user.name}</p><p class="card-text"></p> 
                                        </div><img src="${user.img}" alt="Imagen Digimon" class="card-img-bottom" width="100" height="100"><p>Nivel: ${user.level}</p></div>`
           }
          list.append(contenido)
           
          
    })
})


  $('.dropdown-item').click(function (){
     level = $(this).val();
     const url = `https://digimon-api.vercel.app/api/digimon/level/${level}`;

    fetch (url) 
       .then( response => response.json())
       .then( (json) => {
  
            const list = $('#rookie')
            let contenido = ''
            for (let index =0; index < json.length; index++) {
               const digimon = json[index] 
                    
               contenido = contenido + `<div class="card col-2 m-1" > 
                                         <div class="card-body "><p class="card-title">${digimon.name}</p><p class="card-text"></p> 
                                         </div><img src="${digimon.img}" alt="Imagen Digimon" class="card-img-bottom" width="100" height="100"><p>Nivel: ${digimon.level}</p></div>`
           
                 }
           list.append(contenido)
        
          
     })
 })

$('#srchnmbtn').click(function() {  
    let name = $('#srchtxt').val();
    const url = `https://digimon-api.vercel.app/api/digimon/name/${name}`;
      
    fetch(url)
        .then(response => response.json())
        .then((data) => {

            const digimon = data[0]; 
             
            if (!digimon) {
                alert('No se encontró ningún Digimon con ese nombre.');
                return;
                }
                
            const html = `<div class="modal "> 
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
          });
                
                 $('body').append($modal);
             $modal.show();
              });
          });
      

      
     
       
          
          
          
})