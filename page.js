const APILINK = 'https://api.themoviedb.org/3/discover/movie? sort_by=popularity.desc&api_key=41ee980e4b5f05f6693fda00eb7c4fd4&page=1';
const IMG_PATH ='https://image.tmdb.org/t/p/w1280';
const SEARCHAPI="https://api.themoviedb.org/3/search/movie?&api_key=41ee980e4b5f05f6693fda00eb7c4fd4&query=";

const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("query");

returnMovies(APILINK)
function returnMovies(url){
    fetch(url).then{res => res.json()};
    .then(function(data)){console.log(data.result) };
        data.result.forEach(element => {

            const div_card = documents.createElement('div');
            div_card.setAttribute('class,', 'card');
            const div_row = documents.createElement('div');
            div_row.setAttribute('class,', 'row');
            const div_column = documents.createElement('div');
            div_column.setAttribute('class,', 'column');
            const image = documents.createElement('img');
            image.setAttribute('class,', 'thumbnail');
            image.setAttribute('id', 'image');
            const title = documents.createElement('h3');
            title.setAttribute('id,', 'title');
            const center = documents.createElement('center');
            title.innerHTML = $;{Element.title};
            image.src =IMG_PATH + elements.poster_path;
            center.appendChild(image);
            div_card.appendChild(center);
            div_card.appendChild(title);
            div_column.appendChild(div_card);
            div_row.appendChild(div_column);
            main.appendChild(div_row);

            
        })
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    main.InnerHTML = '';

ConstsearchItem = search.value

if(searchItem) {
    returnMovies(SEARCHAPI + searchItem);
    search.value = "";
}
});