


 function crea_card(objeto){
    for (let propiedad of objeto) {
        
        let const_smoke = ``
        let const_pet = ``

        if (propiedad.fumador) {const_smoke = `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>`} else {const_smoke = `<p class="text-danger"><i class="fas fa-smoking"></i> No se permite fumar</p>`}
        if (propiedad.mascotas) {const_pet = `<p class="text-success"><i class="fas fa-smoking"></i> Mascotas permitidas</p>`} else {const_pet = `<p class="text-danger"><i class="fas fa-smoking"></i> No se permiten mascotas</p>`}

        fila.innerHTML += `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img
                    src="${propiedad.imagen}"
                    class="card-img-top"
                    alt="Imagen del departamento"
                />
                <div class="card-body">
                    <h5 class="card-title">
                    ${propiedad.descripcion}
                    </h5>
                    <p class="card-text">
                    ${propiedad.descripcion_ext}
                    </p>
                    <p>
                    <i class="fas fa-map-marker-alt"></i> ${propiedad.direccion}
                    </p>
                    <p>
                    <i class="fas fa-bed"></i> ${propiedad.desc_habitaciones}
                    <i class="fas fa-bath"></i> ${propiedad.desc_baño}
                    </p>
                    <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
                    ${const_smoke}
                    ${const_pet}
                </div>
            </div>
        </div>`
    }
 }   

