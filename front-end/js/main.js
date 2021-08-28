// Fait disparaitre les articles au click //////////////////////////////////////////////////////

const boxArticleAll = document.querySelectorAll('.box-article__image')

for (var i = 0; i < boxArticleAll.length; i++){

    let boxArticle = boxArticleAll[i];
    
    function none(){
        for (i = 0; i < 6 ; i++){
            document.querySelector('.box-article').className = ('box-article, none');
        }
    };
    
    boxArticle.addEventListener('click', none);
};
// Affiche la presentation d'un article ////////////////////////////////////////////////////////
let article = new Array();
let presentation = new Array();

for(let i = 0; i < 6; i++){
    article[i] = document.querySelector('.article'+i);
    presentation[i] = document.querySelector('.presentation'+i);
}


function flex(){
    presentation[0].classList.remove('none');
};
article[0].addEventListener('click', flex);

function flex(){
    presentation[1].classList.remove('none');
};
article[1].addEventListener('click', flex);

var flex = function(){
    presentation[2].classList.remove('none');
};
article[2].addEventListener('click', flex);

var flex = function(){
    presentation[3].classList.remove('none');
};
article[3].addEventListener('click', flex);

var flex = function(){
    presentation[4].classList.remove('none');
};
article[4].addEventListener('click', flex);


//Incrémentation panier1 ///////////////////////////////////////////////////////////////////////

const nbrPanier = document.querySelector('#nbr-panier');
let incrementation = 0;
let boutonPanier = new Array();

for(let i = 0; i < 6; i++){
    boutonPanier[i] = document.querySelector('#bouton-panier'+i);
}

function fonctionI() {
  incrementation++;
  nbrPanier.innerHTML = incrementation;
}

for(let i = 0; i < boutonPanier.length; i++){
    boutonPanier[i].addEventListener('click', fonctionI);
}
