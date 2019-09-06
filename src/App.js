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
    highScore: 0,
  };

  handleShuffle = () => {
    let shuffled = shuffle(this.state.toolobs);
    this.setState({ toolobs: shuffled })
  };

  // pass id of clicked item (toolcard)this.id
  handleIsClicked = (id) => {
    let newToolObs = this.state.toolobs;
    for (let i = 0; i < this.state.toolobs.length; i++) {
      if (id === this.state.toolobs[i].id) {
        console.log(id);
        console.log(this.state.toolobs[i].id);
        if (newToolObs[i].isClicked === true) {
          return this.handleIncorrectGuess();
        } else {
          newToolObs[i].isClicked = true;
          this.setState({ toolobs: [...newToolObs] })
          return this.handleCorrectGuess();
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
    let newScore = this.state.score + 1;
    this.setState({ score: this.state.score + 1 })
    console.log(newScore);

  }

  handleIncorrectGuess = () => {
    // handle reset; can be done on set.state
    console.log('incorrect');
    // create new high score
    if (this.state.score > this.state.highScore) {
      this.setState({ highScore: this.state.score })
    }
    // reset data
    this.resetData();
    // shuffle data
    this.handleShuffle();
    alert('you lose');
  }

  // reset data function; use .map; sets every item to false; then run shuffle
  resetData = () => {
    const resetData = this.state.toolobs.map(item => {
      item.isClicked = false;
      return item
    });
    this.setState({ toolobs: [...resetData], score: 0 });
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
                <h4>Click an image to begin!</h4>
              </div>
              <div className='col-4'>
                <span id='score'>Score: {this.state.score} | High Score: {this.state.highScore}</span>
              </div>
            </div>
          </div>
        </NavBar>
        <Banner>
          <h1>Clicky Game!</h1>
          <h3>Don't click the same image more than once!</h3>
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
