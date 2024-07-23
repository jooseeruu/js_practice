function is_prime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}
console.log(is_prime(1)); // false
console.log(is_prime(2)); // true
console.log(is_prime(-1)); // false
