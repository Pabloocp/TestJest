import {fusion} from '../src/ejemplo2'

describe('TEST EJEMPLO 2 ',() =>{
    it('array de 3 elementos',() =>{
       const frase = fusion(['Angel','Pepep','Bea'])
       expect(frase).toBe('ANGELBEA')
    })
    it('array de 2 elementos',() =>{
        const frase = fusion(['Angel','Pepe'])
        expect(frase).toBe('ANGELPEPE')
     })
     it('array de 1 elemento',() =>{
        expect(() =>fusion(['Angel'])).toThrow()
     })
})
