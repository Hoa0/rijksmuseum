export function setArts(response, element) {
    const collectionOfArt = [];
    
  response.artObjects.forEach(artCollect => {
    collectionOfArt.push({
      title: artCollect.longTitle,
      img: artCollect.webImage.url,
      artid: artCollect.objectNumber,
      link: artCollect.links.web
    });
  });
  element.textContent = "";
  element.classList.remove("state-loading");
  overviewInfo(collectionOfArt); //gebruikt functie hieronder, dus hoeft niet geexporteerd te worden

  console.log(`log collectionOfArt`, collectionOfArt);
}

function overviewInfo(data) {
  //Controler als art-collection niet bestaat, bestaat het niet dan maak een nieuwe aan.
  if(!document.getElementById('art-collection')) {
    let createList = document.createElement('ul')
    createList.setAttribute('id','art-collection')
    document.querySelector('main').appendChild(createList)
  }
  //hier maak ik een nieuwe unordered list aan dus hier moet je een check schrijven 
  if(document.getElementById('detailsOfArt')) {
    const artDetail = document.querySelector('#detailsOfArt')
    document.querySelector('main').removeChild(artDetail)
  }

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
  })
}

/* add details */
export const setDetails = (data) => {
  console.log(`een hoopje data`)
  console.log(data)
  //Kijk als main container een kind heeft, zoja verwijder deze (loading state verwijderen)
  const mainContainer = document.querySelector('main')
  while (mainContainer.firstChild){
    mainContainer.removeChild(mainContainer.firstChild)
  }

  // template literal `` || variabele binnen een template literal ${}
const detailsArt = `
  <section id="detailsOfArt">
    <h2>${data.artObject.longTitle}</h2>
    <img src="${data.artObject.webImage.url}" alt="foto">
    <p>${data.artObject.description}</p>

    <a>materiaal: ${data.artObject.materials}</a> 
    <a id="bnt" href="#overview">Terug</a>
  </section>
  `
// a link web -> rijksmuseumlink
// voor de data elementen die je op je detailpagina wilt zien moet je naar het object artObject kijken en de keys daaruit pakken

mainContainer.insertAdjacentHTML('beforeend', detailsArt)
// return true
}