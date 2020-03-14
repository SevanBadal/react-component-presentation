import React from 'react';
import { Card } from '../components/cards';
import { Heading, CodePane } from 'spectacle';
const Slide_Four = () => (
    <div>
        <Heading fontSize='h3'>Components in Action</Heading>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '16px' }}>
            <Card title="React Native" body="I'm a component now!" />
        </div>
        <CodePane autoFillHeight={true} language="javascript">
            {`
                class App extends Component {
                    render() {
                        return (
                            <Card title="React Native" body="I'm a component now!" />
                        );
                    }
                }
            `}
        </CodePane>
    </div>
)

export default Slide_Four;