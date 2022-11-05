const input = document.querySelector('#search-input');
const contry  = document.querySelector('#contry');

let users = [];

window.addEventListener('DOMContentLoaded', async () =>{

    // Cuando la pagina carga
    contry.innerHTML = "<h1>Cargando</h1>";

    const data =  await apiContry();
    // users = data;
    renderContry(data);
})

// 
input.addEventListener('keyup', e =>{
    // console.log(input.value)
    // users.filter(user => user.name.common.includes(input.value))
    
})
// acceso a api
async function apiContry(){
    const paices = await fetch('https://restcountries.com/v3.1/all');
    return await paices.json();
}


const creatContryName = contryName => contryName.map(name => `<p class="name-contry">${name.name.common}</p>`).join(' ')
const creatContryRegion = contryRegion => contryRegion.map()

function renderContry(contryName){
    // console.log(contryName)
    const itemString = creatContryName(contryName);
    contry.innerHTML = itemString;

    // for(let i=0; i<contryName.length; i++){
    //     console.log(contryName[i].name);
    //     let itemsString = contryName[i].name.common;
    //     contry.innerHTML = itemsString; 
    // }
    // contry.innerHTML = "Hola"
}



