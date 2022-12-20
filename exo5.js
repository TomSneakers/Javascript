function translateNumber(nbr) {

    const unite = ["", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix", "onze", "douze", "treize", "quatorze", "quinze", "seize", "dix-sept", "dix-huit", "dix-neuf"];
    
    const tens = ["", "dix", "vingt", "trente", "quarante", "cinquante", "soixante", "soixante-dix", "quatre-vingt", "quatre-vingt-dix"];
    
    if (nbr < 20) {
    
    return units[nbr];
    
    }
    
    else if (nbr < 100) {
    
    return tens[Math.floor(nbr / 10)] + ((nbr % 10 != 0) ? "-" + unite[nbr % 10] : "");
    // la partie de droite du return apres le + permet de savoir si ya une unité au nbr (un peu aider d'internet j'avoue mais bien compris )
    }
    
    else {
    
    return "impossible de prendre votre nombre";
    
    }
    
    }
    
    
    
    console.log(translateNumber(99))