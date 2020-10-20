console.log("TEST")

console.log("Deu bom:");

const names = ["Jordan", 'Hudson', "Gabriel", "Ana", "Lucia", "Leonardo", "ALexandre", "Maria Lucia", "Joao Eduardo", "Maria Gabriela"];

/*names.forEach((nome) => {
    const firstword = nome.slice(0, 1);
    if (firstword === "L"){
        console.log(nome)
    }
})*/

const novoArray = names.filter((nome) => {
  const letraL = nome.indexOf("L") // pos (0,1,2,3,4,5,6...)
  if (letraL === 0) {
    return true;
  } else {
    return false;
  }

});

// const novoArrayMap = names.map(nome => {
//   return true || false
// })

// console.log("Novo array map", novoArrayMap)

const nomeComposto = composto(names);
function composto(arrayX) {
  // const filtrados = arrayX.map(nome => {
  //   if (nome.split(" ").length > 1) {
  //     return nome
  //   } else {
  //     return "Não é Composto";
  //   }
  // })

  // const filtrados = arrayX.filter(nome => {
  //   return nome.split(" ").length > 1;
  // })

  // const filtrados = arrayX.find(nome => {
  //   return nome.split(" ").length > 1
  // })

  const filtrados = arrayX.find(nome => {
    return nome.split(" ").length > 1;
  })
  
  return filtrados
}
console.log(nomeComposto)
// Criar uma função que retorna a partir de um array X se cada elemento é um nome composto ou não
// forEach, filter, map, find
// console.log('novoArray', novoArray)
