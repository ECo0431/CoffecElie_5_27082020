const elAccueil = new Array();
const imgArticle = new Array();
const description = new Array();
const mousemove = document.querySelector(".mousemove");

selectElAccueil ();//1
selectImgArticle ();//1
selectDescription ()//1
elAccueilNone ();//2
elDesAfficher ();//3
cursor ();//4
panierIncrement()//5

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
const nbrPanier = document.querySelector('#nbr-panier');
const boutonPanier = new Array();
let i = 0;

function panierIncrement(){
    for(let i = 0; i < 5; i++){
        boutonPanier[i] = document.querySelector('#bouton-panier-'+i);
        boutonPanier[i].addEventListener('click', () =>{
            i++;
            nbrPanier.innerHTML = i;
        });  
    }
}




