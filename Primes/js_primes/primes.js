

function* getNatural(start = 0) {
    while(true) {
        let num = ++start;
        yield num;
    }
}

const naturalGenerator = getNatural();

function range(start, stop, step) {
    if (start >= stop) {
        console.log(`start value was larger than stop value`);
        return [stop]
    }
    const arr = Array.from({length: stop - start}, (_, i) => start + (i * step));
    return arr;
}


function* getPrime() {
    let prime;

    while(prime == undefined) {
        let natural = naturalGenerator.next().value;
        const getDivisors = (start, stop) => {
            if (stop <= start) {
                console.log("Stop was less or equal than start");
                return [];
            }
            return Array.from({ length: stop - start}, (v, k) => k + 1);
        }
        let divisors = getDivisors(2, Math.floor(Math.sqrt(natural)));
        console.log(`Divisors: ${divisors}`);
        if (divisors) {
            prime = natural;
            yield prime;
        }
    }
    
}


export const primeGenerator = getPrime();
