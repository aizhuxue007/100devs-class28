//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){

  const choice = document.querySelector('input').value
  const url = `https://openlibrary.org/api/books?bibkeys=ISBN:${choice}&jscmd=data&format=json`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        // assign title to data property title
        let title = data['ISBN:9780980200447']['title']
        // declare titles as a string
        let titles = ''
        let localStorageTitles = localStorage.getItem('titles')

        // if localStorage title empty 
        if (!localStorageTitles) {
          // concat titles to title
          titles += title
        } else { // else 
          // concat titles with localStorage title with ';' delimiter and title
          titles += localStorage.getItem('titles') + ';' + title
        }
        // render to h2
        document.querySelector('h2').innerText = titles;

        // set localStorage title to title
        localStorage.setItem('titles', titles)
      })
      .catch(err => {
          console.log(`error ${err}`);
      });
}

