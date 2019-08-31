import React, { Component } from 'react';
import NavBar from './components/NavBar';
import './App.css';
import Wrapper from './components/Wrapper';
import toolobs from './toolobs.json'
import ToolCard from './components/ToolCard';
import Banner from './components/Banner';

class App extends Component {
  state = {
    toolobs
  };


  render() {
    return (
      <Wrapper>
        <NavBar>Clicky Game!</NavBar>
        <Banner>
          <h1>Clicky Game!</h1>
          <p>Don't click the same image more than once!</p>
        </Banner>
        {this.state.toolobs.map(toolob => (
          <ToolCard
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
