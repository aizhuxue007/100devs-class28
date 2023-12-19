//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const apiKey = `AIzaSyAaNNj_vVi5Anpleai94uNzsgNVrV49kjE`
  const url = `https://www.googleapis.com/books/v1/volumes?q=${choice}&key=${apiKey}`

  fetch(url)
      .then(res => res.json())
      .then(data => {
        renderData(data)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function renderData(data) {
    const h2 = document.querySelector('h2')
    const imgOutput = document.querySelector('img')
    const p = document.querySelector('p')

    h2.innerText = data.items[0].volumeInfo.title;
    imgOutput.src = data.items[0].volumeInfo.imageLinks.thumbnail;
    p.innerText = data.items[0].volumeInfo.description;   
}
