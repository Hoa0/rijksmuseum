export function setArts(response, element) {
    const collectionOfArt = [];
    
  response.artObjects.forEach(artCollect => {
    collectionOfArt.push({
      title: artCollect.longTitle,
      img: artCollect.webImage.url
    });
  });
  element.textContent = "";
  element.classList.remove("state-loading");
  overviewInfo(collectionOfArt); //gebruikt functie hieronder, dus hoeft niet geexporteerd te worden

  console.log(`log collectionOfArt`, collectionOfArt);
}

function overviewInfo(data) {
  data.forEach(item => {
    //li wil je een href meegeven met een #details/:id (nl-BK-17496) dan navigeer je naar detail pagina die de details rendert
    let artItem = document.createElement('li');
     let output = '<figure><img src="' + item.img + '" alt="image of arts"><figcaption>' + item.title + '</figcaption></figure>';
          artItem.innerHTML = output;
      document.getElementById('art-collection').appendChild(artItem);
  })
}

/* add details */
function detailsArt(params) {
  
}

const detailsArt = `
<section>
  <h2>${data.titel}</h2>
  <img src="${data.item.img}" alt="">
  <p>${data.item.description}</p>
  <a>${data.links.web}</a> 
  button.backToHome {url naar home}
</section>
`
// a -> rijksmuseumlink