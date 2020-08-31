import sys
from typing import Generator, Any

def get_next_natural(number: int) -> int:
    yield number
    yield from get_next_natural(number + 1)


def get_next_prime(number: Generator[int, Any, Any]) -> Generator[int, Any, Any]:
    next_number = next(number)

    yield next_number
    yield from get_next_prime(i for i in number if i % next_number != 0)


def main():
    natural_generator = get_next_natural(2)
    new_prime = get_next_prime(natural_generator)

    while True:
        if input(f"Press Enter or enter anything and press Enter to quit:\n") == "":
            print(next(new_prime))
        else:
            print("Exiting. Bye!")
            sys.exit()
