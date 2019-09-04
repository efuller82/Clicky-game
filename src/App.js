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

//! function for changing isClicked value here??


class App extends Component {
  state = {
    toolobs
    //score
    //topScore
  };

  handleCorrectGuess = (newData) => {
    // declare new top score, add to score

    // set.state; //call shuffle on toolobs(key)
    console.log("correct guess!")
  }

  handleIncorrectGuess = (newData) => {
    // set score to 0
    this.setState({
      toolobs: this.resetData(newData),
      score: 0
    })
    // handle reset; can be done on set.state

    console.log('incorrect guess!');
  }

  // reset data function; use .map; sets every item to false; then run shuffle
  resetData = (newData) => {
    const resetData = newData.map(item => ({ ...item, isClicked: false }));
    return this.handleShuffle(resetData);
  }

  //! function to set state after isClicked is toggled
  // pass id of clicked item (toolcard)this.id
  handleIsClicked = (id) => {
    // evaluate click 
    let checkCorrectly = false;
    console.log(id);




    // switchcase to carry out guess correct or false

    checkCorrectly
      ? this.handleCorrectGuess(newToolObs)
      : this.handleIncorrectGuess(newToolObs)
  }

  handleShuffle = () => {
    let shuffled = shuffle(toolobs);
    this.setState({ toolobs: shuffled })
  };

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
