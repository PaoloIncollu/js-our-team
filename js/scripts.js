
/*

step 

1. creare un array con le informazioni
2. stampare in console per ogni membro le informazioni
3. stampare le informazioni sul dom 
*/

//step 1
const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'img/wayne-barnett-founder-ceo.jpg',
    },

    {
        name:'Angela Caroll',
        role:'Chief Editor',
        image:'img/angela-caroll-chief-editor.jpg',
    },

    {
        name:'Walter Gordon',
        role:'Office Manager',
        image:'img/walter-gordon-office-manager.jpg',
    },

    {
        name:'Angela Lopez',
        role:'Social Media Manager',
        image:'img/angela-lopez-social-media-manager.jpg',
    },

    {
        name:'Scott Estrada',
        role:'Developer',
        image:'img/scott-estrada-developer.jpg',
    },

    {
        name:'Barbara Ramos',
        role:'Graphic Designer',
        image:'img/barbara-ramos-graphic-designer.jpg',
    },
];

//step 2

console.log('Info sui componenti del team');
// primo modo selezionarli singolarmente

console.log(team[0]);
console.log(team[1]);
console.log(team[2]);
console.log(team[3]);
console.log(team[4]);
console.log(team[5]);

// secondo modo selezionarli con un ciclo for in 

/*for (let key in team){

    console.log (key, team[key]);
}*/

//step 3

//const main = document.querySelector('main');
//const user1 = document.createElement('div');
console.log('name:', team[0]['name'], 'role:', team[0]['role'], 'image:', team[0]['image']) ;
//main.append(user1);


userInfo();


//console.log (team);

/*
Caricamento info componenti del team nel dom in stringa
function userInfo(){

    for (let i = 0; i < team.length; i++){
        const user = document.createElement('div');
        user.innerHTML += 'Nome:' + ' ' + team[i].name + ' '  + 'Ruolo:' +  ' ' + team[i].role + ' ' + 'Foto Profilo' + ' ' + team[i].image + ' ';
        main.append(user);
    }
    
}*/

//Caricamento info componenti del team nel dom organizzandoli in card
function userInfo (){

    for (let i = 0; i < team.length; i++){

        const card = document.createElement('div');
        main.append(card);
        const userName = document.createElement('h2');
        userName.innerHTML += 'Nome:' + ' ' + team[i].name;
        card.append(userName);

        const userRole = document.createElement('h3');
        userRole.innerHTML += 'Ruolo:' + ' ' + team[i].role;
        card.append(userRole);

        const imgContainer = document.createElement('div');
        
        const userImage = document.createElement('img');
        userImage.src +=team[i].image;
        imgContainer.append(userImage);
        card.append(imgContainer);
        
    }

    
}
