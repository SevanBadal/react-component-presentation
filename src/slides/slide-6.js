import React from 'react';
import { Card, StatefullCard } from '../components/cards';
import { Heading } from 'spectacle';
const centerText = {
    textAlign: 'center',
}
const Slide_Six = () => (
    <div>
        <Heading fontSize='h3' >Component Data</Heading>
        <h3 style={centerText} >Props - values passed to the component</h3>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '16px' }}>
            <Card title="Title" body="This card is only using props, its data never changes"></Card>
        </div>
        <hr />
        <h3 style={centerText} fontSize='h3' >State - dynamic data managed by the component</h3>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '16px' }}>
            <StatefullCard title="Title"></StatefullCard>
        </div>
    </div>
)

export default Slide_Six;