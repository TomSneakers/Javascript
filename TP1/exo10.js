function remove(str) {
    
       let result = str.replaceAll("b", "B");
       
       result = result.replaceAll("c", "C");
       
       result = result.replaceAll("d", "D");
       
       result = result.replaceAll("f", "F");
       
       result = result.replaceAll("g", "G");
       
       result = result.replaceAll("h", "H");
      
       result = result.replaceAll("j", "J");

       result = result.replaceAll("k", "K");

       result = result.replaceAll("l", "L");

       result = result.replaceAll("m", "M");

       result = result.replaceAll("n", "N");

       result = result.replaceAll("p", "P");

       result = result.replaceAll("q", "Q");

       result = result.replaceAll("r", "R");

       result = result.replaceAll("s", "S");

       result = result.replaceAll("t", "T");

       result = result.replaceAll("v", "V");

       result = result.replaceAll("w", "W");

       result = result.replaceAll("x", "X");

       result = result.replaceAll("z", "Z");


       return result;
    }
    
    console.log(remove("hello")); // => HeLLo
    