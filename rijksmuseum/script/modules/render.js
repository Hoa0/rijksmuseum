export function setArts(response, element) {
    const collectionOfArt = [];
    
  response.artObjects.forEach(artCollect => {
    collectionOfArt.push({
      title: artCollect.longTitle,
      img: artCollect.webImage.url,
      artid: artCollect.objectNumber
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
    // console.log(`overview`,item)
    //  let output = 
    //  '<figure><img src="' + item.img + '" alt="image of arts"><figcaption>' + item.title + '</figcaption></figure>';
     let output =`
     <a href="#detail/${item.artid}">
      <figure>
        <img src="${item.img}" alt="image of arts"><figcaption>${item.title}</figcaption>
      </figure>
     </a>
     ` 
          artItem.innerHTML = output;
      document.getElementById('art-collection').appendChild(artItem);


      /* 
      const overViewItem = `
      <a href="#detail/${key.id}">
        <article>
        <img src="${key.attributes.posterImage.small}" alt="${title}">
        <p>${title}</p>
        </article>
      </a>`
      
      */
  })
}

/* add details */
export const setDetails = (data) => {

  //Kijk als main container een kind heeft, zoja verwijder deze (loading state verwijderen)
  const mainContainer = documen.querySelector('main')
  while (mainContainer.firstChild){
    mainContainer.removeChild(mainContainer.firstChild)
  }

  // template literal `` || variabele binnen een template literal ${}
const detailsArt = `
  <section id="detailsOfArt">
    <h2>${data.title}</h2>
    <img src="${data.img}" alt="">
    <p>${data.description}</p>
    <a>${data.links.web}</a> 
    <a id="bnt" href="#overview">Terug</a>
  </section>
  `
// a link web -> rijksmuseumlink
/*
0:
  hasImage: true
  headerImage: {guid: 'a355f7dd-d274-4797-9d71-e8f2fb0661ec', offsetPercentageX: 0, offsetPercentageY: 0, width: 1822, height: 437, …}
  id: "nl-BK-17496"
  links: {self: 'http://www.rijksmuseum.nl/api/nl/collection/BK-17496', web: 'http://www.rijksmuseum.nl/nl/collectie/BK-17496'}
  longTitle: "Blauwe ara, Meissener Porzellan Manufaktur, 1731"
  objectNumber: "BK-17496"
  permitDownload: true
  principalOrFirstMaker: "Meissener Porzellan Manufaktur"
  productionPlaces: (3) ['Meissen', 'Meissen', 'Meissen']
  showImage: true
  title: "Blauwe ara"

*/

mainContainer.insertAdjacentHTML('beforeend', detailsArt)
// return true
}