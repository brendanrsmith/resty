function reverse(string) {
  const n = string.length;
  
  const last = string.substring(string.length - 1 );
  const first = string.substring(0, string.length -1);

  if (n > 1) {
    reverse(first);
    string = last + first;
  }
  return string
}

console.log(reverse('hello'));
