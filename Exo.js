// console.log('bonjour')

//Exercice JS formation Renaud ZAOU
// function readFile(path, options) {
//     return new Promise((resolve, reject) => {
//         readFile(path, options, (err, data) => {
//             if (err) {
//                 reject(err)
//                 return
//             }
//             resolve(data)
//         })
//     })
// } 
// readFile()

// async function asyncStuff() {
//     const x = await Promise.resolve(1)
//     const y = await Promise.resolve(2)
//     const z = Promise.reject(3)
//     return x + y + z
// }
// asyncStuff()
//     .then(value => console.log(value))
//     .catch(err => console.log(err))

// const pSetTimeOut = ms => new Promise(resolve => setTimeout(() => resolve(), ms))
// pSetTimeOut(1000)
//     .then(() => pSetTimeOut(1000))
//     .then(() => console.log('foo'))
//     .then(() => {
//         pSetTimeOut(1000)
//     })
//     .then(() => console.log('bar'))

// pSetTimeOut(1000)
//     .then(() => console.log('qux'))

// console.log('baz')
    
// async function mightCrash() {
//     let result
//     try {
//         return Promise.reject(Error('y'))
//     } catch (err) {
//         console.log('i got this...')
//         return 'x'
//     }
// }
// mightCash()
//     .then(result => console.log(result))
//     .catch(err => console.log(err.message))
//----------------------------------------------------------

//Exercice JS formation Renaud ZAOU "SYNTAXE"

//Opérateurs
/*
 +(Implemente et ou addition); -(deplemente et ou soustraction); %(modulo, pair,impaire); 
<<(Decalage binaire g(*2)); >>(Decalage binaire d(/2)); 
&(); &&();
^(); 
void(); in(); 
|(); ||(); ==(); ===()
*/

//----------------------------------------------------------
function deepClone(obj){
    // doit retourner une copie profonde de `obj`

} 

    const original = {
    n: 1,
    subObj: {
    s: 'foo'
    }
}
    const clone = deepClone(original)
    if ([
     () => clone !== original,
     () => clone.n === original.n,
     () => typeof clone.subObj === 'object',
     () => clone.subObj !== original.subObj,
     () => clone.subObj.s === original.subObj.s
    ].some(check => !check()))
     throw Error('not a deep clone !')

     //-----------------------------------------------------------

     