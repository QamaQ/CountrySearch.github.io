//Seleccionas todos los nodo que tenga la clase .textSelect
const selectFilter = document.querySelectorAll(".textSelect");
const contry = document.getElementById("contry")
const btnDetalles =document.querySelectorAll('#btn-detalles');


window.addEventListener('DOMContentLoaded', async e =>{
    const dataContryAll = await fetchByContryAll();
    renderContry(dataContryAll)
})




const fetchByContryAll = async () =>{
    const response = await fetch("https://restcountries.com/v3.1/all");
    return await response.json();
}



const renderContry = nameContry => {
    templateContrys(nameContry);
}

const templateContrys = elementos =>{
    let contrysData = ``;
    elementos.forEach(element =>{
        contrysData += `
            <div class="card">
                <hr>
                <div class="card-data">
                    <img src="${element.flags.svg}" >
                    <p class="name" id="name">${element.name.common}</p>
                    <p class="region">${element.region}</p>
                </div>
                <label for="btn-details" id="btn-detalles">Más info</label>
            </div>
        `;
    })
    contry.innerHTML = contrysData
}





//api filter regions
const fetchByRegion =  async e =>{
    const response = await fetch(`https://restcountries.com/v3.1/region/${e}`);
    const data = await response.json();
    return data;
}
//accedemos a cada elemento
selectFilter.forEach(elementos =>{
    //agregamos un evento cunado hacemos un click al elemento
    elementos.addEventListener('click', (elemento) => {
        //obtenemos el contenido del texto de cada elemento y lo almacenamos en una variable
        let textFilter = elemento.target.textContent;
        //pasamos la variable al funcion fetchByRegion() 
        renderRegion(textFilter)
    })
})

const renderRegion = async region =>{
    const dataRegion = await fetchByRegion(region);
    templatesRegion(dataRegion);
    console.log(dataRegion);

}

const templatesRegion = elementos =>{
    let regionData = ``
    elementos.forEach(elementos => {
        regionData += `
            <div class="card">
                <hr>
                <div class="card-data">
                    <img src="${elementos.flags.svg}" >
                    <p class="name" id="name">${elementos.name.common}</p>
                    <p class="region">${elementos.region}</p>
                </div>
                <a href="#detalles" id="refer">Más info</a>
            </div>
        `;
    });
    contry.innerHTML = regionData
}


function text(){
    console.log(btnDetalles);
}