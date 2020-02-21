import React  from 'react';
import PropTypes from 'prop-types';
import './App.css';
import './bootstrap.min.css';
import {Link} from 'react-router-dom';

function Hero(){
  return(<div className="row">
      <div className="jumbotron col-10 offset-1">
        
        <h1>Music Quiz</h1>
        <p>Select the correct answer </p>
      </div>
  </div>


  )}

  function Song({title, onClick}){
  return (<div className="answer" onClick={() => {onClick(title);}}>
    <h4>{title}</h4></div>)

  }

  function Turn({author, songs, highlight, onAnswerSelected}){

    function highlightToBgColor(highlight){
        const mapping = {

          'none': '',
          'correct': 'green',
           'wrong': 'red'
        };
        return mapping[highlight];

    }
    return (<div className="row turn" style={{backgroundColor: highlightToBgColor(highlight)}}>
    
            <div className="col-4 offset-1">

                <img src={author.imageUrl} className="authorimage" alt="Author" />

            </div>

            <div className="col-6">
              {/* Aqui es donde un DOM Event se convierte en un Compenent Event */}
             {songs.map((title) => <Song title={title} key={title} onClick={onAnswerSelected}></Song>)}
            
             
            </div>
      
            </div>  );

  }

  Turn.propTypes = {
    author: PropTypes.shape({

      name:PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      imageSource:PropTypes.string.isRequired,
      songs: PropTypes.arrayOf(PropTypes.string).isRequired

    }),
    songs:PropTypes.arrayOf(PropTypes.string).isRequired,
    onAnswerSelected:PropTypes.func.isRequired,
    highlight: PropTypes.string.isRequired

  };


  function Continue(){
    return (<div/>);

  }

  function Footer(){
    return(<div id="footer" className="row">
              <div className="col-12">
                 <p className="text-muted credit">All images are from  <a href="https://commons.wikimedia.org/wiki/Main_Page"> Wikimedia</a>
                 </p>
              </div>
             </div>
          );
       

  }

function AuthorQuiz({turnData, highlight, onAnswerSelected}){
    return(

      <div className="container-fluid">
      <Hero/>
      <Turn {...turnData} highlight={highlight} onAnswerSelected={onAnswerSelected}/>
      <Continue/>
      <p><Link to="/add">Add an Author</Link> </p>
      <Footer/>
      </div>  

   
  );
}


export default AuthorQuiz;
 