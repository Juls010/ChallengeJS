/*En el taller de Santa, los elfos tienen una lista de regalos que desean 
fabricar y un conjunto limitado de materiales.

Los regalos son cadenas de texto y los materiales son 
caracteres. Tu tarea es escribir una función que, dada una lista de regalos 
y los materiales disponibles, devuelva una lista de los regalos que se pueden fabricar.

Un regalo se puede fabricar si contamos con todos los materiales necesarios para fabricarlo.

const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

manufacture(gifts, materials) // ["tren", "oso"]
// 'tren' SÍ porque sus letras están en 'tronesa'
// 'oso' SÍ porque sus letras están en 'tronesa'
// 'pelota' NO porque sus letras NO están en 'tronesa'

const gifts = ['juego', 'puzzle']
const materials = 'jlepuz'

manufacture(gifts, materials) // ["puzzle"]

const gifts = ['libro', 'ps5']
const materials = 'psli'

manufacture(gifts, materials) // [] */

const gifts = ['libro', 'ps5']
const materials = 'psli'


function manufacture(gifts, materials) {
    let craftable = [];
    gifts.forEach((gift) => {
        let count = 0;
        for (let i = 0; i < gift.length; i++) {
            if(materials.includes(gift.at(i))){
                count++;
            }
        }
        if (gift.length === count){
            craftable.push(gift);
        }
    });
    console.log(craftable);
};

console.log(manufacture(gifts, materials));

//otra manera:
/*  const manufacture = (gifts, materials) => {
        const manufacturable =  gifts.filter(g => {
            for (const letter in g) {
                if (!materials.includes(g[letter])) {
                    return false;
                }
            }
            return true;
        });
        console.log(manufacturable);
}*/

//.at(index)
const word = "hello";
console.log(word.at(0)); //devuelve la h
console.log(word.at(-1)); //devuelve la o, en número negativo empieza a contar por el final

//.reverse
const arR = [1,2,3];
arR.reverse();
console.log(arR); //devuelve [3,2,1]

//Math
console.log(Math.max(3,7,2)); //devuelve el mayor

const arr = [1,2,3];
console.log(Math.max(arr));    // NAN - not a number
console.log(Math.max(...arr)); //3

const arr1 = [1,2,3];
const arr2 = [4,5,6];
const combined = [...arr1, ...arr2];
console.log(combined);    // [1,2,3,4,5,6]

const original = [1,2,3];
const copy = [...original];

copy.push(4);  //añadir
