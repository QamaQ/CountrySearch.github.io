const inputHtml = document.querySelector('#search-input');
const contryHtml = document.querySelector('#contry');

// Cuando el DOM esté listo
window.addEventListener('DOMContentLoaded', async () => {
    const data = await apiContry()

    // console.log(data)
    renderContry(data);
})

// API
async function apiContry(){
    const paices = await fetch('https://restcountries.com/v3.1/all');
    return await paices.json();
}




function cardContry(contry){
    // console.log(card.name.common)
    return `<div class="card">
                <div class="flag">
                    <img src="${contry.flags.svg}">
                </div>
                <div class="name">
                    <p>${contry.name.common}</p>
                </div>
                <div class="name">
                    <p>${contry.region}</p>
                </div>
            </div>`
}
// Nombre de los pices
const creatContry = contry => contry.map(cardContry).join('');



function renderContry(contryName){
    const itemString = creatContry(contryName)
    contryHtml.innerHTML = itemString

}