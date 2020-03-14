import React, { Component } from 'react';
import { Deck, Slide } from 'spectacle';
import CustomTheme from './custom-theme/theme';
import {
  SlideOne, SlideTwo, SlideThree, SlideFour,
  SlideFive, SlideSix, SlideSeven, SlideEight,
  SlideNine, SlideTen, SlideEleven, SlideTwelve
} from './slides/slides';

class App extends Component {
  render() {
    return (
      <Deck theme={CustomTheme}>
        <Slide>
          <SlideOne />
        </Slide>
        <Slide>
          <SlideTwo />
        </Slide>
        <Slide>
          <SlideThree />
        </Slide>
        <Slide>
          <SlideFour />
        </Slide>
        <Slide>
          <SlideFive />
        </Slide>
        <Slide>
          <SlideSix />
        </Slide>
        <Slide>
          <SlideSeven />
        </Slide>
        <Slide>
          <SlideEight />
        </Slide>
        <Slide>
          <SlideNine />
        </Slide>
        <Slide>
          <SlideTen />
        </Slide>
        <Slide>
          <SlideEleven />
        </Slide>
        <Slide>
          <SlideTwelve />
        </Slide>
      </Deck>
    )
  }
}

export default App;
