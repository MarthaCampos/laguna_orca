const select = document.querySelector('form select');
const motoInfo = document.querySelector('.moto-info');
const inputTipo = document.querySelector('input[name=tipo]');

const motos = [
    {
        nome: 'Kawasaki',
        img: 'img/moto-1.png',
        dimensoes: '2.10m x 0.77m x 1.12m',
        peso: '195kg'
    },
    {
        nome: 'Ninja',
        img: 'img/moto-2.png',
        dimensoes: '2.15m x 0.83m x 1.15m',
        peso: '205kg'
    }
];

for(let i = 0; i < motos.length; i++){
    let moto = motos[i];
    
    let option = document.createElement('option');
    option.innerHTML = moto.nome;
    option.value = i;

    select.appendChild(option);
}

motoInfo.innerHTML = `
    <img src="${motos[0].img}" alt="">
    <div>
        <p class="title">Dimensões Médias</p>
        <p>${motos[0].dimensoes}</p>
        <p class="title">Peso Médio</p>
        <p>${motos[0].peso}</p>
    </div>
`;
inputTipo.value = motos[0].nome;

select.onchange = () => {
    let motoSelecionada = motos[select.value];
    motoInfo.innerHTML = `
        <img src="${motoSelecionada.img}" alt="">
        <div>
            <p class="title">Dimensões Médias</p>
            <p>${motoSelecionada.dimensoes}</p>
            <p class="title">Peso Médio</p>
            <p>${motoSelecionada.peso}</p>
        </div>
    `;

    inputTipo.value = motoSelecionada.nome;
}