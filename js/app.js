//! recupero gli elementi di interesse dal dom
const container = document.getElementById('container');
const row = document.getElementById('row');


// Creare l’array di oggetti con le informazioni fornite.
const team = [
    {   
        name:'Wayne',
        surname:'Barnett',
        fullName:'Wayne Barnett',
        role:'Founder & CEO',
        img:'wayne-barnett-founder-ceo.jpg',
    },
    {
        name:'Angela',
        surname:'Caroll',
        fullName:'Angela Caroll',
        role:'Chief Editor',
        img:'angela-caroll-chief-editor.jpg',
    },
    {
        name:'Walter',
        surname:'Gordon',
        fullName:'Walter Gordon',
        role:'Office Manager',
        img:'walter-gordon-office-manager.jpg',
    },
    {
        name:'Angela',
        surname:'Lopez',
        fullName:'Angela Lopez',
        role:'Social Media Manager',
        img:'angela-lopez-social-media-manager.jpg',
    },
    {
        name:'Scott',
        surname:'Estrada',
        fullName:'Scott Estrada',
        role:'Developer',
        img:'scott-estrada-developer.jpg',
    },
    {
        name:'Barbara',
        surname:'Ramos',
        fullName:'Barbara Ramos',
        role:'Graphic Designer',
        img:'barbara-ramos-graphic-designer.jpg',
    },

]


// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

for (const person of team) {
    console.log(person.fullName + ' ' + person.role + ' ' + person.img);
    // Stampare le stesse informazioni su DOM sottoforma di stringhe
    //todo ci sará una parte commentata in commenti html, questo per preservare la milestone precedente
    // Trasformare la stringa foto in una immagine effettiva
/*     container.innerHTML += `
    <span>${person.fullName}</span>
    <span>${person.role}</span>
    
    
    <!-- <span>${person.img}</span><br> -->

    <img src="./img/${person.img}" alt="${person.name}"><br>`
     */

    row.innerHTML += `
    <div class='col-12 col-md-4'>
    
        <div class="card m-4" style="">

            <img src="./img/${person.img}" class="card-img-top" alt="${person.name}">

            <div class="card-body">

                <h5 class="card-title">${person.fullName}</h5>
                <p class="card-text">${person.role}</p>

            </div>
        </div>

    </div>
    `
}

