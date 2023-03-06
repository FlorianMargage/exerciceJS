// Générer 10 nombres aléatoires et afficher la plus grande valeur et la plus petite valeur 
// (sans faire de tableau et sans utiliser 10 variables)
function exo1()
{
    for (let i=0; i<10; i++)
    {
        min = -10
        max = 10
        r = Math.floor(Math.random() * (max - min + 1) ) + min

        if (i == 0) 
        {
            min = r;
            max = r;
        }

        if (min > r) min = r;

        if (max < r) max = r;
        console.log('r = ',r);
    }

    console.log("le resultat le plus petit est ", min)
    console.log("le resultat le plus grand est ", max)
}
    
// Créer une fonction qui prend un tableau en paramètre et affiche la plus petite valeur et la plus grande valeur de ce tableau. 
// Ensuite, appeler cette fonction en lui passant un tableau de 5 nombres aléatoires. ! 
// Ne pas utiliser les fonctions min et max

// générer tableau
function genTab()
{
    min = -10
    max = 10
    const tableau = []
    for (let i = 0; i < 5; i++) {
        tableau[i] = Math.floor(Math.random() * (max - min + 1) ) + min;
    }
    return tableau
}

function exo2(tab)
{
    min = tab[0]
    max = tab[0]

    tab.forEach(i => {
        if (min > i) min = i;
        if (max < i) max = i;
    });

    console.log("le resultat le plus petit est ", min)
    console.log("le resultat le plus grand est ", max)
}

// Créer un programme nodejs qui affiche successivement des entiers aléatoires. 
// Le script s'arrête dès qu'il génère quatre fois le même entier.

function exo3()
{
    min = -10
    max = 10
    const tab = []
    verif = true
    while (verif)
    {
        tab[tab.length] = Math.floor(Math.random() * (max - min + 1) ) + min;
        for (let i = min; i < max+1; i++) {
            count = 0
            tab.forEach(element => {
                if (element == i) count++;
                if (count == 4) verif = false;

            });
        }
    }
}

// Utiliser la fonction setTimeout pour afficher un nombre aléatoire après 1 seconde
function exo()
{
    min = -10
    max = 10
    setTimeout(() => {
        console.log(Math.floor(Math.random() * (max - min + 1) ) + min)
    }, 1000);
}

// Créer une fonction qui utilise la fonction setTimeout ou setInterval pour afficher chaque 0.5s un nombre aléatoire. 
// Si le même nombre généré est deux fois, la fonction s’arrête.
function exo5()
{
    min = -10
    max = 10
    const tab = []
    interval = setInterval(() => {
        tab[tab.length] = Math.floor(Math.random() * (max - min + 1) ) + min;
        console.log(tab[tab.length-1])
        for (let i = min; i < max+1; i++) {
            count = 0
            tab.forEach(element => {
                if (element == i) count++;
                if (count == 2) clearInterval(interval);

        });}
    }, 500);
}

// Appeler la fonction plus haut deux fois, en mettant des délais de génération différents.
//     Trouver un moyen pour afficher quelle fonction s’est arrêtée en premier.
//     Afficher également le dernier entier généré par cette fonction

function exo6()
{
    min = -10
    max = 10
    continu = true

    tab1 = []
    tab2 = []
    
    interval_1 = setInterval(() => {
        tab1[tab1.length] = Math.floor(Math.random() * (max - min + 1) ) + min;
        console.log("interval 1 :"+tab1[tab1.length-1])
        for (let i = min; i < max+1; i++) {
            count = 0
            tab1.forEach(element => {
                if (element == i) count++;
                if (count == 2) 
                {
                    clearInterval(interval_1);
                    if (continu) {
                        console.log("l'interval 1 s'est arreté en premier avec "+element+" comme dernière valeur")
                        continu = false
                    }
                }
        });}
    }, 500);

    interval_2 = setInterval(() => {
        tab2[tab2.length] = Math.floor(Math.random() * (max - min + 1) ) + min;
        console.log("interval 2 :"+tab2[tab2.length-1])
        for (let i = min; i < max+1; i++) {
            count = 0
            tab2.forEach(element => {
                if (element == i) count++;
                if (count == 2) 
                {
                    clearInterval(interval_2);
                    if (continu) {
                        console.log("l'interval 2 s'est arreté en premier avec "+element+" comme dernière valeur")
                        continu = false
                    }
                }
        });}
    }, 200);
}

exo6()