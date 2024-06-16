function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  //  ✨ add your code here
  document.querySelectorAll('section div').forEach(widget => widget.classList.add('widget'))
  // 👉 TASK 2 - Build a "Quote of the Day" widget
  //  ✨ add your code here
  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
  console.log(randomQuote)
  let quoteDiv = document.createElement('div')
  quoteDiv.textContent = randomQuote['quote']
  let authorDiv = document.createElement('div')
  authorDiv.textContent = randomQuote['author'] + ' in ' + (randomQuote['date'] === null ? 'an unknown date' : randomQuote['date'])
  document.querySelector('.quoteoftheday').append(quoteDiv)
  document.querySelector('.quoteoftheday').append(authorDiv)
  // 👉 TASK 3 - Build a "Corporate Speak" widget
  //  ✨ add your code here
  function randNum(multiplier) {
    return Math.floor(Math.random() * multiplier.length)
  }

  let corpJarg = document.createElement('p')
  corpJarg.textContent = `We need to ${verbs[randNum(verbs)]} our ${nouns[randNum(nouns)]} ${adverbs[randNum(adverbs)]} in order to ${verbs[randNum(verbs)]} our ${nouns[randNum(nouns)]} ${adverbs[randNum(adverbs)]}.`
  document.querySelector('.corporatespeak').append(corpJarg)
  // 👉 TASK 4 - Build a "Countdown" widget
  //  ✨ add your code here

  // 👉 TASK 5 - Build a "Friends" widget
  //  ✨ add your code here

  // 👉 TASK 6 - Make it so user can tab through the widgets
  //  ✨ add your code here

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
