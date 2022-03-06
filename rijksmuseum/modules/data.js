function getData(){
    const endpoint ='https://www.rijksmuseum.nl/api/nl/collection?key=m37TFPjT'
    //const key ='m37TFPjT'
    //let url=''
    const display = document.getElementById('art-collection');
    display.textContent = "loading, even geduld a.u.b";
    const collectionOfArt = [];
}


export { getAndRenderData};