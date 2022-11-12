const detalles = document.querySelector('.containerDetalles')


const query = new URLSearchParams(window.location.search);
const names = query.get('name')
console.log(names);



document.addEventListener('DOMContentLoaded', e => {
    fetchData()
})

const fetchData = async () => {
    try {

        const response = await fetch(`https://restcountries.com/v3.1/name/${names}`);
        const data = await response.json()
        // console.log(data);
        viewDetalles(data)

    } catch(err){
        console.log(err);
    }
}

const viewDetalles = data =>{
    let elementos = ``;
    data.forEach(element => {

        console.log(element);
        elementos += `
            <div class="card">
                <div class="column column1">
                    <img src="${element.flags.svg}">
                    <div class="boxtext">
                        <p class="text"><b>Nombre Oficial:</b> ${element.name.official}</p>
                        <p class="text"><b>Capital: </b> ${element.capital}</p>
                    </div>
                </div>
                <div class="column column-mid">
                    <img class="imgCoat" src="${element.coatOfArms.svg}">
                    <div class="boxtext">
                        <p class="text"><b>Lenguajes: </b> ${Object.values(element.languages).map((e)=> e)}</p>
                        <p class="text"><b>Fronteras: </b> ${element.borders}</p>
                    </div>
                </div>
                <div class="column column">
                    <div class="boxtext">
                        <p class="text"><b>Region: </b> ${element.region}</p>
                        <p class="text"><b>Población: </b> ${element.population}</p>
                        <p class="text"><b>Zona horaria: </b> ${element.timezones}</p>
                    </div>
                </div>
            </div>
        `
    });

    detalles.innerHTML = elementos;
}
