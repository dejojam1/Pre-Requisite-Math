var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Section",
  "number": "1.1",
  "title": "Adding Fractions",
  "body": " Adding Fractions  When adding fractions with the same denominator, the numerators can be added;   Adding Fractions with a Common Denominator   Calculate .    Since these fractions have the same denominator, we can add the numerators. The denominator remains the same, so      Fill-In, New Markup Numbers   I love . What number am I thinking of, accurate to two decimal places?           The decimal approximation of is , but to two decimal places we write .        Your answer is within 0.1 of the value I wanted.        That is a reasonable guess, but no.        You chose a value between 3 and 4.        You chose a value that rounds to 3.       "
},
{
  "id": "sec-section-name-3",
  "level": "2",
  "url": "sec-section-name.html#sec-section-name-3",
  "type": "Example",
  "number": "1.1.1",
  "title": "Adding Fractions with a Common Denominator.",
  "body": " Adding Fractions with a Common Denominator   Calculate .    Since these fractions have the same denominator, we can add the numerators. The denominator remains the same, so    "
},
{
  "id": "fillin-numbers-many-tests",
  "level": "2",
  "url": "sec-section-name.html#fillin-numbers-many-tests",
  "type": "Checkpoint",
  "number": "1.1.2",
  "title": "Fill-In, New Markup Numbers.",
  "body": " Fill-In, New Markup Numbers   I love . What number am I thinking of, accurate to two decimal places?           The decimal approximation of is , but to two decimal places we write .        Your answer is within 0.1 of the value I wanted.        That is a reasonable guess, but no.        You chose a value between 3 and 4.        You chose a value that rounds to 3.      "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
