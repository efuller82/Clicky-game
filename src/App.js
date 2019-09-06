import React, { Component } from 'react';
import NavBar from './components/NavBar';
import './App.css';
import Wrapper from './components/Wrapper';
import toolobs from './toolobs.json'
import ToolCard from './components/ToolCard';
import Banner from './components/Banner';

// shuffle 
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


class App extends Component {
  state = {
    toolobs,
    score: 0,
    topScore: 0,
  };

  handleShuffle = () => {
    let shuffled = shuffle(toolobs);
    this.setState({ toolobs: shuffled })
  };

  // pass id of clicked item (toolcard)this.id
  handleIsClicked = (id) => {
    for (let i = 0; i < this.state.toolobs.length; i++) {
      if (id === toolobs[i].id) {
        console.log(id);
        console.log(toolobs[i].id);
        let newToolObs = this.state.toolobs;
        if (newToolObs[i].isClicked === true) {
          this.handleIncorrectGuess();
        } else {
          this.handleCorrectGuess();
          newToolObs[i].isClicked = true;
          this.setState({ toolobs: [...newToolObs] })
          console.log(newToolObs[i]);
        }
      }
    }
  }

  handleCorrectGuess = () => {
    // declare new top score, add to score
    // let score = 0;
    console.log('correct');
    this.handleShuffle();

    //! Getting a newscore of 1 each time
    // let newScore = this.state.score + 1;

    // console.log(newScore);
    // set.state; //call shuffle on toolobs(key)

  }

  handleIncorrectGuess = () => {
    // set score to 0
    // handle reset; can be done on set.state
    console.log('incorrect');
    this.handleShuffle();
    alert('you lose');
  }

  // reset data function; use .map; sets every item to false; then run shuffle
  resetData = (newData) => {
    const resetData = newData.map(item => ({ ...item, isClicked: false }));
    return this.handleShuffle(resetData);
  }



  render() {
    return (
      <Wrapper>
        <NavBar>
          <div className='container'>
            <div className='row'>
              <div className='col-4'>
                <h3>Clicky Game</h3>
              </div>
              <div className='col-4'>
                Click an image to begin!
            </div>
              <div className='col-4'>
                <span id='score'>Score: 0 | High Score: 0</span>
              </div>
            </div>
          </div>
        </NavBar>
        <Banner>
          <h1>Clicky Game!</h1>
          <p>Don't click the same image more than once!</p>
        </Banner>
        {this.state.toolobs.map(toolob => (
          <ToolCard
            handleIsClicked={this.handleIsClicked}
            handleShuffle={this.handleShuffle}
            id={toolob.id}
            key={toolob.id}
            image={toolob.image}
            isClicked={toolob.isClicked}
          />
        ))}
      </Wrapper>

    )
  };
}
export default App;
