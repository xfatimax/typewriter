const sentence = "Fatima Khan"; 
let x = 0
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write (char + "\n") ;
  }, x) // <= 1s delay to make it noticeable. Can dial it down later.
  x = x + 100
}
