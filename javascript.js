

const filas = document.getElementById('filas');



mostrarProductos(stockProductos)


function mostrarProductos(){

    stockProductos.forEach(elemento => {
    let tr = document.createElement('tr')
    
    tr.innerHTML=`<th scope="row">${elemento.id}</th>
    <td>${elemento.material}</td>
    <td>${elemento.medida}</td>
    <td>${elemento.espesor}</td>
    <td>${elemento.peso}</td>
    <td>${elemento.valor}</td>
    <td>${elemento.stock}</td>
    <td> <button id="btnStock${elemento.id}" type="button" class="btn btn-success">Cambiar stock</button> <button id="btnElimina${elemento.id}" type="button" class="btn btn-danger">Eliminar</button></td>`
    filas.appendChild(tr)

    let btnStock = document.getElementById(`btnStock${elemento.id}`)
    let btnElimina = document.getElementById(`btnElimina${elemento.id}`)

      btnStock.addEventListener('click',()=>{
       console.log(elemento.id); 

         })

    }) 

    

}


