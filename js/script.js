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
//this for loop will give me the a message based on their heights, i also added a 
//<br> at the end of the document.write to ensure that there is a line break in the document.
//now i am going to add the height next to the pokemon name
for (let i=0; i<pokemonList.length; i++){
    if (pokemonList[i].height< 1.2 && pokemonList[i].height>1){
        document.write(pokemonList[i].name + " "+ "("+ pokemonList[i].height + "m)" + " is a smaller sized Pokemon.<br>");
    }else if (pokemonList[i].height>1.2 && pokemonList[i].height<1.5){
        document.write(pokemonList[i].name + " " + "(" + pokemonList[i].height + "m)" + " is a Larger sized Pokemon!<br>")
    }
}
//This code, i have tried to write it in the index, as well as js but i cannot seem to figure out why it will not read the variable or the key can you explain why?.
//if (pokemonList.type==='Poison'){
 //   document.write("CAUTION POISONOUS.")
// }