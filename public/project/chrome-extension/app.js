const URL = 'https://favqs.com/api/qotd';
// const URL = 'https://breaking-bad-quotes.herokuapp.com/v1/quotes';

const quote = document.querySelector('.quote');
const quoteAuthor = document.querySelector('.quoteAuthor');

fetch(URL)
  .then((res) => res.json())
  .then((res) => {
    quote.textContent = res.quote.body;
    quoteAuthor.textContent = res.quote.author;
  });
