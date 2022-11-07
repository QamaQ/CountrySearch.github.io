const inputHtml = document.querySelector('#search-input');
const contryHtml = document.querySelector('#contry');

// const card = document.getElementById('card');

let datosPaices = [];
let namePaices = []

// Cuando el DOM esté listo
window.addEventListener('DOMContentLoaded', async () => {
    const data = await apiContry();
    datosPaices = data;
    renderContry(datosPaices);
    test()

})

// API
async function apiContry(){
    const paices = await fetch('https://restcountries.com/v3.1/all');
    return await paices.json();
}



function cardContry(contry){
    // console.log(card.name.common)
    let names = `
        <div class="card" id="card">
            <hr>
            <div class="flag">
                <img src="${contry.flags.svg}">
                <p class="name" id="name">${contry.name.common}</p>
                <p class="region">${contry.region}</p>
            </div>
            <button class="button-info" id="button-info">Más Info</button>
        </div>
        <div class="card-info" id="card-info">

        </div>
    `


    // test(names)
    return names;
    // return `
    //     <div class="card" id="card">
    //         <hr>
    //         <div class="flag">
    //             <img src="${contry.flags.svg}">
    //             <p class="name" id="name">${contry.name.common}</p>
    //             <p class="region">${contry.region}</p>
    //         </div>
    //         <button class="button-info" id="button-info">Más Info</button>
    //     </div>
    //     <div class="card-info" id="card-info">

    //     </div>
    // `

}



// Nombre de los pices y detalles
function creatContry(contry) {
    contry.map(cardContry).join('');
}

function renderContry(contryName){
    const itemString = creatContry(contryName);
    contryHtml.innerHTML = itemString

}




function test(nam){
    // const contryName = document.getElementById('region');
    console.log(namePaices);
}
