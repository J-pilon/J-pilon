const input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
console.log(input[0]['x']);

const result = input.map(index => (index['x']*index['x']) + (index['y']*index['y']));

for (let i = 0; i < input.length; i++) {
  
  console.log(`${input[i]['x']}^2 + ${input[i]['y']}^2 = ${result[i]}  `);
}

// console.log(result[0] === 5);
// console.log(result[1] === 13);
// console.log(result[2] === 17);