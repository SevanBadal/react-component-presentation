import React from 'react';
import { Card } from '../components/cards';
import { Heading, CodePane } from 'spectacle';
const Slide_Three = () => (
    <div>
        <Heading fontSize='h3' >Component Composition</Heading>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '16px' }}>
            <Card title="Title" body="Body"></Card>
        </div>
        <CodePane autoFillHeight={true} language="javascript">
            {`
                class Card extends Component {
                    render() {
                        return (
                        <div>
                            <div>
                                <h2>{this.props.title}</h2>
                            </div>
                            <div>
                                <p>{this.props.body}</p>
                            </div>
                        </div>
                        );
                    }
                }
            `}
        </CodePane>
    </div>
)

export default Slide_Three;