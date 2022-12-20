function remove(str) {
    // créer une variable résultat qui contient la chaine de caractère avec les 'a' supprimée et le remplace par ca majuscule
       let result = str.replaceAll("a", "A");
       // supprime les 'e' du résultat précedent et le remplace par ca majuscule
       result = result.replaceAll("e", "E");
       // supprime les 'i' du résultat précedent et le remplace par ca majuscule
       result = result.replaceAll("i", "I");
       // supprime les 'o' du résultat précedent et le remplace par ca majuscule
       result = result.replaceAll("o", "O");
       // supprime les 'u' du résultat précedent et le remplace par ca majuscule
       result = result.replaceAll("u", "U");
       // supprime les 'y' du résultat précedent et le remplace par ca majuscule
       result = result.replaceAll("y", "Y");
       // retourne le résultat final
       return result;
    }
    
    console.log(remove("coucou")); // => cOUcOU