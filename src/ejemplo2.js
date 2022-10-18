/*
funcion se le pasa un array
esta devolvera el primer y segundo elemento del array concatenado y en mayuscula
si tiene menos de dos elementos el array,excepccion
test


*/

export function fusion(values){
    if(values.length < 2) throw new Error('array muy pequeño')
    return values[0].toUpperCase()+values[values.length-1].toUpperCase()
}