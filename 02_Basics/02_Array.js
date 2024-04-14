const marvelHeros = ['Thor','Ironmen','Spidermen']
const dcHeros = ['Supermen','Flash','Batman']

// marvelHeros.push(dcHeros)
// console.log(marvelHeros);

const allHeros = marvelHeros.concat(dcHeros)
console.log(allHeros);

const allNewHeros = [...marvelHeros,...dcHeros]
console.log(allNewHeros);

const matrix = [1,2,3,4,[2,4,6,8,[3,5,46,[5,6,7,8]]],[6,7,8,9,0]]
console.log(matrix.flat(Infinity));