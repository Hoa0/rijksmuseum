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
    let artItem = document.createElement('li');
     let output = '<figure><img src="' + item.img + '" alt="image of arts"><figcaption>' + item.title + '</figcaption></figure>';
          artItem.innerHTML = output;
      document.getElementById('art-collection').appendChild(artItem);
  })
}