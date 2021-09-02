const elAccueil = new Array();
const imgArticle = new Array();
const description = new Array();
const mousemove = document.querySelector(".mousemove");
const nbrPanier = document.querySelector('#nbr-panier');
const boutonPanier = new Array();
let i = 0;
const form = document.querySelector("#form");
const panier = document.querySelector("#panier");
const corbeille = new Array();
const articlePanier = new Array();
const boutonPanierAcceuil = new Array();
const btnCommander = document.querySelector("#bouton-commander");
let iArticle0 = 1;

selectElAccueil ();//1
selectImgArticle ();//1
selectDescription ();//1
elAccueilNone ();//2
elDesAfficher ();//3
cursor ();//4
// panierIncrement();//5
ajoutNom();//9
ajoutDescription();//10
ajoutPrix();//11
couleurArticle0();//12
couleurArticle1();//13
couleurArticle2();//14
couleurArticle3();//15
couleurArticle4();//16
namePanier();//17
prixPanier();//18
supprArticlesPanier();//19
ajoutArticlePanier();//20


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
};
//5 INCREMENTE LE PANIER QUAND CLIQUE SUR BOUTON PANIER ////////////////////////:://///////////////////////

// function panierIncrement(){
//     for(let i = 0; i < 5; i++){
//         boutonPanier[i] = document.querySelector('#bouton-panier-'+i);
//         boutonPanier[i].addEventListener('click', () =>{
//             i++;
//             nbrPanier.innerHTML = i;
//         });  
//     }
// }

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
    fetch('http://localhost:3000/api/teddies')
        .then(response => response.json())
        .then(data => document.getElementById("name-0").innerHTML = data[0].name);
    fetch('http://localhost:3000/api/teddies')
        .then(response => response.json())
        .then(data => document.getElementById("name-1").innerHTML = data[1].name);
    fetch('http://localhost:3000/api/teddies')
        .then(response => response.json())
        .then(data => document.getElementById("name-2").innerHTML = data[2].name);
    fetch('http://localhost:3000/api/teddies')
        .then(response => response.json())
        .then(data => document.getElementById("name-3").innerHTML = data[3].name);
    fetch('http://localhost:3000/api/teddies')
        .then(response => response.json())
        .then(data => document.getElementById("name-4").innerHTML = data[4].name);
};

//10 AJOUTES LES DESCRIPTION DE L'API SUR LES ARTICLES ////////////////////////////

function ajoutDescription(){
    fetch('http://localhost:3000/api/teddies')
        .then(response => response.json())
        .then(data => document.getElementById("txt-description-0").innerHTML = data[0].description);
    fetch('http://localhost:3000/api/teddies')
        .then(response => response.json())
        .then(data => document.getElementById("txt-description-1").innerHTML = data[1].description);
    fetch('http://localhost:3000/api/teddies')
        .then(response => response.json())
        .then(data => document.getElementById("txt-description-2").innerHTML = data[2].description);
    fetch('http://localhost:3000/api/teddies')
        .then(response => response.json())
        .then(data => document.getElementById("txt-description-3").innerHTML = data[3].description);
    fetch('http://localhost:3000/api/teddies')
        .then(response => response.json())
        .then(data => document.getElementById("txt-description-4").innerHTML = data[4].description);
};

//11 AJOUTES LES PRIX DE L'API SUR LES ARTICLES ////////////////////////////

function ajoutPrix(){

    fetch('http://localhost:3000/api/teddies')
        .then(response => response.json())
        .then(data => document.getElementById("price-0").innerHTML = data[0].price/100+"€");
    fetch('http://localhost:3000/api/teddies')
        .then(response => response.json())
        .then(data => document.getElementById("price-1").innerHTML = data[1].price/100+"€");
    fetch('http://localhost:3000/api/teddies')
        .then(response => response.json())
        .then(data => document.getElementById("price-2").innerHTML = data[2].price/100+"€");
    fetch('http://localhost:3000/api/teddies')
        .then(response => response.json())
        .then(data => document.getElementById("price-3").innerHTML = data[3].price/100+"€");
    fetch('http://localhost:3000/api/teddies')
        .then(response => response.json())
        .then(data => document.getElementById("price-4").innerHTML = data[4].price/100+"€");
};

//12 AJOUTES LES COULEURS SUR ARTICLE 0 /////////////////////////////////

function couleurArticle0(){
    fetch('http://localhost:3000/api/teddies')
        .then(response => response.json())
        .then(data => document.getElementById("article-0-option-0").innerHTML = data[0].colors[0]);
    fetch('http://localhost:3000/api/teddies')
        .then(response => response.json())
        .then(data => document.getElementById("article-0-option-1").innerHTML = data[0].colors[1]);
    fetch('http://localhost:3000/api/teddies')
        .then(response => response.json())
        .then(data => document.getElementById("article-0-option-2").innerHTML = data[0].colors[2]);
    fetch('http://localhost:3000/api/teddies')
        .then(response => response.json())
        .then(data => document.getElementById("article-0-option-3").innerHTML = data[0].colors[3]);
};

// //13 AJOUTES LES COULEURS SUR ARTICLE 1 /////////////////////////////////

function couleurArticle1(){
    fetch('http://localhost:3000/api/teddies')
        .then(response => response.json())
        .then(data => document.getElementById("article-1-option-0").innerHTML = data[1].colors[0]);
    fetch('http://localhost:3000/api/teddies')
        .then(response => response.json())
        .then(data => document.getElementById("article-1-option-1").innerHTML = data[1].colors[1]);
    fetch('http://localhost:3000/api/teddies')
        .then(response => response.json())
        .then(data => document.getElementById("article-1-option-2").innerHTML = data[1].colors[2]);
};

////14 AJOUTES LES COULEURS SUR ARTICLE 2 /////////////////////////////////

function couleurArticle2(){
    fetch('http://localhost:3000/api/teddies')
        .then(response => response.json())
        .then(data => document.getElementById("article-2-option-0").innerHTML = data[2].colors[0]);
};

////15 AJOUTES LES COULEURS SUR ARTICLE 3 /////////////////////////////////

function couleurArticle3(){
    fetch('http://localhost:3000/api/teddies')
        .then(response => response.json())
        .then(data => document.getElementById("article-3-option-0").innerHTML = data[3].colors[0]);
    fetch('http://localhost:3000/api/teddies')
        .then(response => response.json())
        .then(data => document.getElementById("article-3-option-1").innerHTML = data[3].colors[1]);
    fetch('http://localhost:3000/api/teddies')
        .then(response => response.json())
        .then(data => document.getElementById("article-3-option-2").innerHTML = data[3].colors[2]);

};

//////16 AJOUTES LES COULEURS SUR ARTICLE 4 /////////////////////////////////

function couleurArticle4(){
    fetch('http://localhost:3000/api/teddies')
        .then(response => response.json())
        .then(data => document.getElementById("article-4-option-0").innerHTML = data[4].colors[0]);
    fetch('http://localhost:3000/api/teddies')
        .then(response => response.json())
        .then(data => document.getElementById("article-4-option-1").innerHTML = data[4].colors[1]);
    fetch('http://localhost:3000/api/teddies')
        .then(response => response.json())
        .then(data => document.getElementById("article-4-option-2").innerHTML = data[4].colors[2]);
};

//////17 RÉCUPÈRE LES NOMS DE L'API POUR LE PANIER  /////////////////////////////////

function namePanier(){
    fetch('http://localhost:3000/api/teddies')
        .then(response => response.json())
        .then(data => document.getElementById("name-0-panier").innerHTML = data[0].name);
    fetch('http://localhost:3000/api/teddies')
        .then(response => response.json())
        .then(data => document.getElementById("name-1-panier").innerHTML = data[1].name);
    fetch('http://localhost:3000/api/teddies')
        .then(response => response.json())
        .then(data => document.getElementById("name-2-panier").innerHTML = data[2].name);
    fetch('http://localhost:3000/api/teddies')
        .then(response => response.json())
        .then(data => document.getElementById("name-3-panier").innerHTML = data[3].name);
    fetch('http://localhost:3000/api/teddies')
        .then(response => response.json())
        .then(data => document.getElementById("name-4-panier").innerHTML = data[4].name);
}

//////18 RÉCUPÈRE LES PRIX DE L'API POUR LE PANIER  /////////////////////////////////

function prixPanier(){

    fetch('http://localhost:3000/api/teddies')
        .then(response => response.json())
        .then(data => document.getElementById("prix-panier-0").innerHTML = data[0].price/100+"€");
        console.log(iArticle0)
    fetch('http://localhost:3000/api/teddies')
        .then(response => response.json())
        .then(data => document.getElementById("prix-panier-1").innerHTML = data[1].price/100+"€");
    fetch('http://localhost:3000/api/teddies')
        .then(response => response.json())
        .then(data => document.getElementById("prix-panier-2").innerHTML = data[2].price/100+"€");
    fetch('http://localhost:3000/api/teddies')
        .then(response => response.json())
        .then(data => document.getElementById("prix-panier-3").innerHTML = data[3].price/100+"€");
    fetch('http://localhost:3000/api/teddies')
        .then(response => response.json())
        .then(data => document.getElementById("prix-panier-4").innerHTML = data[4].price/100+"€");
}

//////19 SUPPRIME LES ARTICLES DU PANIER  //////////////////////////////////////////////////

function supprArticlesPanier(){
    
    for (let i = 0; i < elAccueil.length; i++){
        corbeille[i] = document.querySelector("#corbeille-"+i);
        articlePanier[i] = document.querySelector("#article-panier-"+i);
    };
    corbeille[0].addEventListener("click", () =>{
        articlePanier[0].classList.add("none");
    });
    corbeille[1].addEventListener("click", () =>{
        articlePanier[1].classList.add("none");
    });
    corbeille[2].addEventListener("click", () =>{
        articlePanier[2].classList.add("none");
    });
    corbeille[3].addEventListener("click", () =>{
        articlePanier[3].classList.add("none");
    });
    corbeille[4].addEventListener("click", () =>{
        articlePanier[4].classList.add("none");
    });
}

//////20 AJOUTER LA BOX DE L'ARTICLE CORRESPONDANT DANS LE PANIER AU CLICK SUR LE BOUTON PANIER  ////////////////////////////////// 

function ajoutArticlePanier(){

    for(let i = 0; i < elAccueil.length; i++){
        boutonPanierAcceuil[i] = document.querySelector("#bouton-panier-"+i);
    }
    
    boutonPanierAcceuil[0].addEventListener("click", () =>{
        articlePanier[0].classList.remove("none");
        iArticle0++
        console.log(iArticle0);
    });
    boutonPanierAcceuil[1].addEventListener("click", () =>{
        articlePanier[1].classList.remove("none");
    });
    boutonPanierAcceuil[2].addEventListener("click", () =>{
        articlePanier[2].classList.remove("none");
    });
    boutonPanierAcceuil[3].addEventListener("click", () =>{
        articlePanier[3].classList.remove("none");
    });
    boutonPanierAcceuil[4].addEventListener("click", () =>{
        articlePanier[4].classList.remove("none");
    });
};

//////21 ALERT APRÈS CLIQUE SUR LE BOUTON COMMANDER  //////////////////////////////////

function openModal(){
    document.getElementById("modal").style.top = "0px";
}

function closeModal(){
    document.getElementById("modal").style.top = "-5000px";
}


//////21 ////////////////////////////////// 
 

