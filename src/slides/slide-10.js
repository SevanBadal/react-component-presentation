import React from 'react';
import { ListCard } from '../components/cards';
import { Heading, UnorderedList } from 'spectacle';
import solarizedColor from '../Constants/colors';
const SlideTen = () => {
    return (
        <div>
            <Heading fontSize='h3'>Updating</Heading>
            <h1 style={{ textAlign: 'center' }} ><span role="img" aria-label="man">🧔🏽</span></h1>


            <UnorderedList>
                <ListCard background={{ background: solarizedColor.violet }} number={1} content="render( )" />
                <ListCard background={{ background: solarizedColor.violet }} number={2} content="componentDidUpdate( )" />
            </UnorderedList>
        </div >
    );
}

export default SlideTen;