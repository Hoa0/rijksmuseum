import {getData} from './modules/data.js'
import {setArts} from './modules/render.js'
// https://gitmoji.dev/ get ur gitemojis now
getAndRenderData()
const display = document.getElementById('art-collection');
display.textContent = "loading, even geduld a.u.b";

function getAndRenderData() {
   // const getURL = 'https://www.rijksmuseum.nl/api/nl/collection?key=m37TFPjT&involvedMaker=Rembrandt+van+Rijn'
    const getURL = 'https://www.rijksmuseum.nl/api/nl/collection?key=m37TFPjT'

       getData(getURL)
        .then(response => {
            console.log(response)
            setArts(response, display);
        })
        .catch(error => console.warn(error))
}
