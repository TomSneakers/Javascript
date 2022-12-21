function translateNumber(nbr) {
    // tableau des unité 
    const unite = ["", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix", "onze", "douze", "treize", "quatorze", "quinze", "seize", "dix-sept", "dix-huit", "dix-neuf"];
    // tableau des dixaine
    const tens = ["", "dix", "vingt", "trente", "quarante", "cinquante", "soixante", "soixante-dix", "quatre-vingt", "quatre-vingt-dix"];
    //utilisation du premier tableau si le nombre est inférieur a 20
    if (nbr < 20) {
    
    return unite[nbr];
    
    }
    //utilisation du deuxieme tableau si le nombre est inférieur a 100 et superieur a 20
    else if (nbr < 100) {
    
    return tens[Math.floor(nbr / 10)] + ((nbr % 10 != 0) ? "-" + unite[nbr % 10] : "");
    // la partie de droite du return apres le + permet de savoir si ya une unité au nbr (un peu aider d'internet j'avoue mais bien compris )
    }
    //message d'erreur si le nombre est superieur a 100
    else {
    
    return "impossible de prendre votre nombre";
    
    }
    
    }
    
    
    
    console.log(translateNumber(1))