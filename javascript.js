

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
    <td><button id="btnElimina${elemento.id}" type="button" class="btn btn-danger">Eliminar</button></td>`
    filas.appendChild(tr)



    let btnStock = document.getElementById(`btnStock${elemento.id}`)
    let btnElimina = document.getElementById(`btnElimina${elemento.id}`)

    
            

        btnElimina.addEventListener('click',()=>{
            let el = parseInt(prompt("indique el ID del material a eliminar"))
            let numeroId = stockProductos.findIndex( x => x.id === el )
            if (numeroId === -1) {
                alert("ingrese un ID valido.")
                
            } else {
                stockProductos.splice(numeroId,1)
            }
            
           
        filas.innerHTML= "" 
        mostrarProductos(stockProductos) 
        
    })

   

    
 
     /*  btnStock.addEventListener('click',()=>{
        let newStock = parseInt(prompt("ingrese el stock para agregar"))
        let stockFinal = newStock + elemento.stock

         }) */


        
        

    })   
    
    



}









