import React, { Component } from 'react';
import NavBar from './components/NavBar';
import './App.css';
import Wrapper from './components/Wrapper';
import toolobs from './toolobs.json'
import ToolCard from './components/ToolCard';

class App extends Component {
  state = {
    toolobs
  };


  render() {
    return (
      <Wrapper>
        <NavBar>Clicky Game!</NavBar>
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
