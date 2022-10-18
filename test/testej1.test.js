import {add,sub} from '../src/ejemplo1'

describe('TEST EJEMPLO 1 suma',() =>{
    it('sumar dos enteros',() =>{
        const result = add(2,3)
        expect(result).toBe(5)
    })
})

describe('TEST EJEMPLO 1 resta',() =>{
    it('resta dos enteros',() =>{
        const result = sub(3,2)
        expect(result).toBe(1)
    })

    it('resta dos nulos',() =>{
        expect(() => sub()).toThrow()
    })
/*    it('resta dos frases',() =>{
        const result = sub("hola","adios")
        expect(result).toBe(0)
    })
   */
})