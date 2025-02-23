// const operations = ['multiply', 'divide', 'add', 'subtract']
// los tipos agrupan una variedad de lo que se quiere chequear
type operation = 'multiply' | 'divide' | 'add' | 'subtract'
type Result = number | string

// * los chequeos que hace typescrip siempre ocurre en buildtime
const calculator = (a: number, b: number, operator: operation): Result => {
  if (operator === 'multiply'){
    return a * b
  }
  if (operator === 'divide'){
    if (b === 0){
      throw new Error('cannot divide by 0')
    }
    return a / b
  }
  if (operator === 'add'){
    return a + b
  }
  if (operator === 'subtract'){
    return a - b
  }
}

console.log(process.argv)