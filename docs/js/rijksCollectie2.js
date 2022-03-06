getAndRenderData()
const display = document.getElementById('art-collection');
display.textContent = "loading, even geduld a.u.b";

const collectionOfArt = [];

function getAndRenderData() {
   // const getURL = 'https://www.rijksmuseum.nl/api/nl/collection?key=m37TFPjT&involvedMaker=Rembrandt+van+Rijn'
    const getURL = 'https://www.rijksmuseum.nl/api/nl/collection?key=m37TFPjT'

    fetch(getURL)
       // .then(response => response.json())
       .then(response => {
           return response.json();
       })
        .then(response => {
            console.log(response)

            response.artObjects.forEach(artCollect => {
                collectionOfArt.push({
                    title: artCollect.longTitle,
                    img: artCollect.webImage.url
                });
            })
            display.textContent="";
            display.classList.remove("state-loading");
            overviewInfo(collectionOfArt)
        }).catch(error => console.log(error))
}

console.log(collectionOfArt);

function overviewInfo(data) {
 
    data.forEach(item => {
        artItem = document.createElement('li');
            output = '<figure><img src="' + item.img + '" alt="image of arts"><figcaption>' + item.title + '</figcaption></figure>';
            artItem.innerHTML = output;
        document.getElementById('art-collection').appendChild(artItem);
    })
}


