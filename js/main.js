
let clubAmerica = 'AMERICA'
let clubAtlas = 'ATLAS'
let clubGuadalajara = 'ATLAS'
let totalVotes = 20;
let voteEquipAmerica = 0;
let voteEquipAtlas = 0;
let voteEquipGuadalajara = 0;
let modal = document.querySelector('#modal-example');
let message = document.querySelector('.message');


let totalamerica = document.querySelector('.totalamerica')
let totalatlas = document.querySelector('.totalatlas')
let totalguadalajara = document.querySelector('.totalguadalajara')

totalamerica.innerHTML = 0;
totalatlas.innerHTML = 0;
totalguadalajara.innerHTML = 0;

function reset() {
    voteEquipAmerica = 0
    voteEquipAtlas = 0
    voteEquipGuadalajara = 0
    totalamerica.innerHTML = 0;
    totalatlas.innerHTML = 0;
    totalguadalajara.innerHTML = 0;
}

document.querySelector('#btn1').addEventListener('click', () => {
    voteEquipAmerica++;
    if (voteEquipAmerica === totalVotes) {
        reset()
        message.innerHTML = 'Ha ganado ' + clubAmerica
        modal.setAttribute('open', true);
        confetti()
        
        
    }
    totalamerica.innerHTML = ` ${voteEquipAmerica} votos`;
})

document.querySelector('#btn2').addEventListener('click', () => {
    voteEquipAtlas++;
    if (voteEquipAtlas === totalVotes) {
        voteEquipAmerica = 0;
        voteEquipAtlas = 0;
        voteEquipGuadalajara = 0;
        reset()
        message.innerHTML = 'Ha ganado ' + clubAtlas
        confetti()
        modal.setAttribute('open', true);
    }
    totalatlas.innerHTML = ` ${voteEquipAtlas} votos`;
})
document.querySelector('#btn3').addEventListener('click', () => {
    voteEquipGuadalajara++;
    if (voteEquipGuadalajara === totalVotes) {
        voteEquipAmerica = 0;
        voteEquipAtlas = 0;
        voteEquipGuadalajara = 0;
        reset()
        message.innerHTML = 'Ha ganado ' + clubGuadalajara
        modal.setAttribute('open', true);
        confetti()
    }
    totalguadalajara.innerHTML = ` ${voteEquipGuadalajara} votos`;

})


