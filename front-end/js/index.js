const elAccueil = new Array();
const imgArticle = new Array();
const description = new Array();
const mousemove = document.querySelector(".mousemove");
const nbrPanier = document.querySelector('#nbr-panier');
const boutonPanier = new Array();
let i = 0;
const form = document.querySelector("#form");
const panier = document.querySelector("#panier");

selectElAccueil ();//1
selectImgArticle ();//1
selectDescription ()//1
elAccueilNone ();//2
elDesAfficher ();//3
cursor ();//4
panierIncrement()//5
ajoutNom();//9
ajoutDescription()//10
ajoutPrix()//11
couleurArticle0()//12
couleurArticle1()//13
couleurArticle2()//14
couleurArticle3()//15
couleurArticle4()//16


//1 SÉLÉCTION DES ID ///////////////////////////////////////////////////////////////////////////////////////
function selectElAccueil () {  
    for(let i = 0; i < 6; i++){
        elAccueil[i] = document.querySelector("#el-accueil-"+i)
    }
};

function selectImgArticle () {  
    for(let i = 0; i < 5; i++){
        imgArticle[i] = document.querySelector("#img-article-"+i);
    };
};

function selectDescription () {  
    for(let i = 0; i < 5; i++){
        description[i] = document.querySelector("#description-"+i)
    }
};
//2 RETIRE LES ÉLÉMENTS DE LA PAGE ACCUEIL AU CLIQUE SUR ARTICLE //////////////////////////////////////////
function elAccueilNone () {
    for(let i = 0; i < imgArticle.length; i++){
        imgArticle[i].addEventListener("click", () => {
            for(let i = 0; i < elAccueil.length; i++){
                elAccueil[i].classList.add("none");
            };
        });
    };
}
//3 AFFICHE LA DESCRIPTION APRES CLIQUE SUR ARTICLE ////////////////////////////////////////////////////////
function elDesAfficher (){
    for(let i = 0; i < imgArticle.length; i++){
        imgArticle[i].addEventListener("click", () =>{
            description[i].classList.remove("none");
            
        });
    };
};

//4 CURSEUR PERSONNALISÉ //////////////////////////////////////////////////////////////////////////////////
function cursor (){
    window.addEventListener("mousemove", (e) =>{
        mousemove.style.left = e.pageX + "px";
        mousemove.style.top = e.pageY + "px";
    });
    window.addEventListener("mousedown", () => {
        mousemove.style.transform = "scale(2) translate(-25%, -25%)";
      });     
    window.addEventListener("mouseup", () => {
    mousemove.style.transform = "scale(1) translate(-50%, -50%)";
    });
}
//5 INCREMENTE LE PANIER QUAND CLIQUE SUR BOUTON PANIER ////////////////////////:://///////////////////////

function panierIncrement(){
    for(let i = 0; i < 5; i++){
        boutonPanier[i] = document.querySelector('#bouton-panier-'+i);
        boutonPanier[i].addEventListener('click', () =>{
            i++;
            nbrPanier.innerHTML = i;
        });  
    }
}

//6 LIEN PANIER ///////////////////////////////////////////////////////////////

panier.addEventListener("click", () =>{
    form.classList.remove("none");
    for(let i = 0; i < elAccueil.length; i++){
        elAccueil[i].classList.add("none");
    };
    for(let i = 0; i < imgArticle.length; i++){
        description[i].classList.add("none");          
    };
});
//7 TEST CONNECTION À L'API ///////////////////////////////////////////////////

// fetch("http://localhost:3000/api/teddies")
//   .then((response) => {
//     console.log(response)
//   })
//   .catch((err) => console.log(err));

//8 AFFICHE LE CONTENU DE L'API ////////////////////////////////////////////////

// fetch('http://localhost:3000/api/teddies')
//   .then(response => response.json())
//   .then(data => console.log(data));

//9 AJOUTES LES NOMS DE L'API SUR LES ARTICLES /////////////////////////////////

function ajoutNom(){
    for(let i = 0; i < elAccueil.length; i++){
        fetch('http://localhost:3000/api/teddies')
            .then(response => response.json())
            .then(data => document.getElementById("name-"+i).innerHTML = data[i].name);
    };
};

//10 AJOUTES LES DESCRIPTION DE L'API SUR LES ARTICLES ////////////////////////////

function ajoutDescription(){
    for(let i = 0; i < elAccueil.length; i++){
        fetch('http://localhost:3000/api/teddies')
            .then(response => response.json())
            .then(data => document.getElementById("txt-description-"+i).innerHTML = data[i].description);
    };
};

//11 AJOUTES LES PRIX DE L'API SUR LES ARTICLES ////////////////////////////

function ajoutPrix(){
    for(let i = 0; i < elAccueil.length; i++){
        fetch('http://localhost:3000/api/teddies')
            .then(response => response.json())
            .then(data => document.getElementById("price-"+i).innerHTML = data[i].price);
    };
};

//12 AJOUTES LES COULEURS SUR ARTICLE 0 /////////////////////////////////

function couleurArticle0(){
    for(let i = 0; i < 10; i++){
        fetch('http://localhost:3000/api/teddies')
            .then(response => response.json())
            .then(data => document.getElementById("article-0-option-"+i).innerHTML = data[0].colors[i]);
    };
};

//13 AJOUTES LES COULEURS SUR ARTICLE 1 /////////////////////////////////

function couleurArticle1(){
    for(let i = 0; i < 10; i++){
        fetch('http://localhost:3000/api/teddies')
            .then(response => response.json())
            .then(data => document.getElementById("article-1-option-"+i).innerHTML = data[1].colors[i]);
    };
};

//14 AJOUTES LES COULEURS SUR ARTICLE 2 /////////////////////////////////

function couleurArticle2(){
    for(let i = 0; i < 10; i++){
        fetch('http://localhost:3000/api/teddies')
            .then(response => response.json())
            .then(data => document.getElementById("article-2-option-"+i).innerHTML = data[2].colors[i]);
    };
};

//15 AJOUTES LES COULEURS SUR ARTICLE 3 /////////////////////////////////

function couleurArticle3(){
    for(let i = 0; i < 10; i++){
        fetch('http://localhost:3000/api/teddies')
            .then(response => response.json())
            .then(data => document.getElementById("article-3-option-"+i).innerHTML = data[3].colors[i]);
    };
};

//16 AJOUTES LES COULEURS SUR ARTICLE 4 /////////////////////////////////

function couleurArticle4(){
    for(let i = 0; i < 10; i++){
        fetch('http://localhost:3000/api/teddies')
            .then(response => response.json())
            .then(data => document.getElementById("article-4-option-"+i).innerHTML = data[4].colors[i]);
    };
};




