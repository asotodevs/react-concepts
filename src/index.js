import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import * as serviceWorker from './serviceWorker';
import {shuffle,sample} from 'underscore';
import {BrowserRouter, Route}  from 'react-router-dom';
import AddAuthorForm from './AddAuthorForm';



const authors = [
{
    name: 'David Bowie', 
    imageUrl: 'images/authors/David-Bowie.jpg', 
    imageSource: 'Wikimedia Commons',
    songs: ['Space Oddity', 'Heroes', 'Rebel Rebel', 'Life on Mars?', 'Let\'s Dance']

},

{
    name: 'Angus Young', 
    imageUrl: 'images/authors/Angus_Young.jpg', 
    imageSource: 'Wikimedia Commons',
    songs: ['Dirty Deeds', 'Hells Bell', 'Dog Eat Dog', 'Moneytalks', 'Hard as a Rock']

},

{
    name: 'Bon Scott', 
    imageUrl: 'images/authors/bon-scott.jpg', 
    imageSource: 'Wikimedia Commons',
    songs: ['Highway to Hell', 'Love Bomb', 'Whole Lotta Rosie', 'The Jack', 'High Voltage']

}, 


{
    name: 'Keith Richards', 
    imageUrl: 'images/authors/Keith-Richards.jpg', 
    imageSource: 'Wikimedia Commons',
    songs: ['Paint it Black', 'Gimme Shelter', 'Satisfaction', 'Angie', 'Start Me Up']

}

, 


{
    name: 'Janis Joplin', 
    imageUrl: 'images/authors/Janis_Joplin.jpg', 
    imageSource: 'Wikimedia Commons',
    songs: ['Kozmic Blues', 'Mercedez Benz', 'Cry Baby', 'May be', 'Try']

}

];

function getTurnData(authors){

    const allSongs = authors.reduce(function (p,c,i){

        return p.concat(c.songs);

    },[]);

    const fourRandomSongs = shuffle(allSongs).slice(0,4);
    const answer = sample(fourRandomSongs);

    return{
            songs: fourRandomSongs, 
            author: authors.find((author) => author.songs.some((title) => title === answer))
    }
}

const state = {
    // turnData: {
    //         author: authors[0], 
    //         songs: authors[0].songs
    //          }
    turnData: getTurnData(authors),
              highlight: 'none'
};

function onAnswerSelected(answer) {

    const isCorrect = state.turnData.author.songs.some((song) => song === answer);
    state.highlight = isCorrect ? 'correct' : 'wrong';
    render();

}



function App(){

    return<AuthorQuiz {...state} onAnswerSelected={onAnswerSelected}/>;
}

function AuthorWrapper(){
    return <AddAuthorForm onAddAuthor={console.log} />

}

function render(){

    ReactDOM.render(
    <BrowserRouter>
        <React.Fragment>
      <Route exact path="/" component={App} p/>
      <Route path="/add" component={AuthorWrapper} />
      </React.Fragment>
     </BrowserRouter>, document.getElementById('root'));


}

render();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
