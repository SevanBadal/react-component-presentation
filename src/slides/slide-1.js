import React from 'react';
import { FullScreen, Heading, UnorderedList } from 'spectacle';
import solarizedColors from '../Constants/colors';
import { ListCard } from '../components/cards';

const Slide_One = () => (
    <div>
        <Heading>React Native - Lifecycles</Heading>
        <UnorderedList>
            <ListCard number="1" content="Component Composition ⚛️" />
            <ListCard number="2" content="State VS Props 🧮" />
            <ListCard background={{ background: solarizedColors.magenta }} number="3" content="Component Lifecycles 👶🏽 ⇢ 🧔🏽 ⇢ 👴🏽" />
            <ListCard number="4" content="Example React Native Application" />
        </UnorderedList>
        <div style={{ position: 'absolute', top: '32px', left: '32px' }}>
            <FullScreen />
        </div>
    </div>
);

export default Slide_One