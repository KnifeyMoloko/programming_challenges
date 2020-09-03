import {should} from "chai";
import {describe, it} from "mocha";
import {primeGenerator} from  "../primes";


should();


function isPrime(number) {
    if (!Number.isInteger(number)) return false;
    for (let m = 2; m <= Math.sqrt(number); m++) {
        console.log(`Testing for primeness: ${number} % ${m}`)
        if (number % m == 0) return false;
    }
    return true;
}

describe("Prime number generator tests", () => {
    it("Generate a 100 numbers and check if they are primes", () => {
        const generator = primeGenerator;

        for (let i = 1; i < 10; i++) {
            let number = generator.next().value; 
            console.log(`The generated prime candidate is: ${number}; is it a prime number? ${isPrime(number)}`);
            isPrime(number).should.be.true;
        }
    })
})