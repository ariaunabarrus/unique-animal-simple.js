var pokemonList =[
    {name: 'Butterfree', 
     height: 1.1,
     type: ['Bug', 'Flying']
    },
    {name: 'Gastly', 
     height: 1.3, 
     type: ['Ghost', 'Poison']
    },
    {name: 'Gligar', 
     height: 1.1, 
     type:['Ground', 'Flying']
    }
]
// for (let i=0; i<pokemonList.length; i++){
    //if (pokemonList[i].height< 1.2 && pokemonList[i].height>1){
   //     document.write(pokemonList[i].name + " "+ "("+ pokemonList[i].height + "m)" + " is a smaller sized Pokemon.<br>");
   // }else if (pokemonList[i].height>1.2 && pokemonList[i].height<1.5){
  //      document.write(pokemonList[i].name + " " + "(" + pokemonList[i].height + "m)" + " is a Larger sized Pokemon!<br>")
 //   }
//}
pokemonList.forEach(function(pokemon) {
    console.log('Butterfree' + pokemon.name);
    console.log(1.1 + pokemon.height);
    console.log('Gastly' + pokemon.name);
    console.log(1.3 + pokemon.height);
    console.log('Gligar' + pokemon.name);
    console.log(1.1 + pokemon.height);
  });
  var pokemonRepository = (function() {
    var pokemonList = []; // Pokemon array
  
    function getAll() {
      return pokemonList;
    }
  
    function add(pokemon) {
      if (typeof pokemon === "object") {
        pokemonList.push(pokemon);
      } else {
        console.log("Invalid data. Only objects can be added to the repository.");
      }
    }
  
    return {
      getAll: getAll,
      add: add
    };
  })();
  