const contryHtml = document.querySelector('#contry');
const form = document.getElementById('form')
const searchInput = document.getElementById('search-input')

document.addEventListener('DOMContentLoaded', async e => {
    return await fetchData()

})

const fetchData = async () => {
    try {
        const res = await fetch('https://restcountries.com/v3.1/all')
        const data = await res.json()
        contry(data);
        formSearch(data)
        // test(data)

    } catch (error) {
        console.log(error)
    }
}

let contryName = [];
const contry = data => {
    let contryData = "";
    data.forEach(element => {
        contryData += `
            <div class="card" id="card">
                <hr>
                <div class="flag">
                    <img src="${element.flags.svg}">
                    <p class="name" id="name">${element.name.common}</p>
                    <p class="region">${element.region}</p>
                </div>
                <a href="#detalles" id="refer">Más info</a>
            </p>
            </div>
        `;

        contryName.push(element.name.common);
    });
    contryHtml.innerHTML = contryData;
    // console.log(contryData);
}



const formSearch = data => {
    form.addEventListener('keyup', e => {
        const letraCliente = searchInput.value.toLowerCase()
        const arrayFiltrado = data.filter(item => {
            const letraApi = item.name.common.toLowerCase()
            if (letraApi.indexOf(letraCliente) !== -1) {
                return item
            }
        })
        contry(arrayFiltrado)
    })
}


function test() {
    const card = document.getElementById('card');
    console.log(card);
}