import React from 'react';
import { ListCard } from '../components/cards';
import { Heading, UnorderedList } from 'spectacle';
import solarizedColor from '../Constants/colors';
const SlideNine = () => {
    return (
        <div>
            <Heading fontSize='h3'>Mounting</Heading>
            <h1 style={{ textAlign: 'center' }} ><span role="img" aria-label="baby">👶🏽</span></h1>
            <UnorderedList>
                <ListCard background={{ background: solarizedColor.violet }} number={1} content="constructor( )" />
                <ListCard background={{ background: solarizedColor.violet }} number={2} content="render( )" />
                <ListCard background={{ background: solarizedColor.violet }} number={3} content="componentDidMount( )" />
            </UnorderedList>
        </div >
    );
}

export default SlideNine;