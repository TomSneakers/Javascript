function removeVoyelles(str) {
    // créer une variable résultat qui contient la chaine de caractère avec les 'a' supprimée
      let result = str.replaceAll("a", "");
      // supprime les 'e' du résultat précedent
      result = result.replaceAll("e", "");
      // supprime les 'i' du résultat précedent
      result = result.replaceAll("i", "");
      // supprime les 'o' du résultat précedent
      result = result.replaceAll("o", "");
      // supprime les 'u' du résultat précedent
      result = result.replaceAll("u", "");
      // supprime les 'y' du résultat précedent
      result = result.replaceAll("y", "");
      // retourne le résultat final
      return result;
    }
    //fonction qui compte le nombre de voyelle grace a la fonction précédente
    function countVoyelles(str){
      let result = removeVoyelles(str);
      return result.length;
    }
    
    console.log(countVoyelles("bonjour"));