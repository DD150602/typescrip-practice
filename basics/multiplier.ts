// los parametros son tienen implicito el typo any
const multiplicator= (a: number, b: number, printText: string) => {
  console.log(printText, a*b)
}

// argv es un array el cual son los argumentos de la linea de comandos
const a: number= Number(process.argv[2])
const b: number= Number(process.argv[3])
const printText: string= process.argv[4]
multiplicator(a, b, printText)