// let str = ['geeksforgeeks', 'gemkstones', 'acknowledges', 'aguelikes',]
// let next = []
// for (let i = 0; i < str.length ; i++) {
//     next[i] = str[i].split('')
//     if(next[i].includes(str[i][i])){
        
//         console.log(next[i][i])
//     }
   
//     }

    

function caracteresComuns(strings) {
    if (!strings || strings.length === 0) {
      return ""; // Retorna string vazia se a entrada for inválida ou vazia
    }
  
    const primeiraString = strings[0];
    const caracteresComunsSet = new Set();
    
    for (let i = 0; i < primeiraString.length; i++) {
      const char = primeiraString[i];
      let presenteEmTodas = true;
  
      for (let j = 1; j < strings.length; j++) {
        if (!strings[j].includes(char)) {
          presenteEmTodas = false;
          break; // Sai do loop interno se o caractere não estiver presente em uma das strings
        }
      }
  
      if (presenteEmTodas) {
        caracteresComunsSet.add(char);
      }
    }
 
    // Converte o Set para um array e ordena alfabeticamente
    const caracteresComunsArray = Array.from(caracteresComunsSet).sort();
  
    return caracteresComunsArray.join(""); // Retorna uma string com os caracteres concatenados
  }
  
  // Exemplos de uso:
  const exemplos = [
      ["banana", "bandana", "abacaxi"],
      ["casa", "casamento", "casar"],
      ["maca", "banana", "abacaxi"], // exemplo sem caracteres em comum
      ["", "teste", "outro"], // exemplo com string vazia
      [], // exemplo com array vazio
      ["teste"], // exemplo com apenas uma string
      ["aabb", "aabc", "aade"]
  ];
  
  exemplos.forEach(exemplo => {
      const resultado = caracteresComuns(exemplo);
      console.log(`Strings: [${exemplo}] -> Caracteres Comuns: "${resultado}"`);
  });
  
  // Outro exemplo para demonstrar melhor a ordem alfabética
  const exemplo2 = ["zebra", "zoo", "zoológico"];
  const resultado2 = caracteresComuns(exemplo2);
  console.log(`Strings: [${exemplo2}] -> Caracteres Comuns: "${resultado2}"`);