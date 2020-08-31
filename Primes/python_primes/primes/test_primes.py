import pytest
from assertpy import assert_that, soft_assertions
from .primes import get_next_prime, get_next_natural


def test_primes():
        nat = get_next_natural(2)
        new_prime = get_next_prime(nat)

        for _ in range(int(100)):
            val = next(new_prime)
            mod = val % 2 if val > 2 else 1
            assert_that(mod).is_greater_than(0)
