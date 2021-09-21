const sentence = "Hello there from LightHouse Labs!";

// prints each char of sentence 100 ms after the previous, in a same line
for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => process.stdout.write(sentence[i]), 100*i);
}
// after that, makes new line
setTimeout(() => process.stdout.write('\n'), 100*sentence.length);