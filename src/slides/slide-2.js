import React from 'react';
import { Card } from '../components/cards';
import { Appear, Heading, CodePane } from 'spectacle';

const Slide_Two = () => (
  <div>
    <Heading elementNum={1} fontSize='h3' >Identifying Components</Heading>
    <div style={{ display: 'flex', justifyContent: 'center', margin: '16px' }}>
      <Card title="How does it work?" body="We identify components in our design and isolate them into reusable code"></Card>
    </div>
    <Appear transitionEffect={{ to: { opacity: 1 }, from: { opacity: 0 } }}>
      <CodePane elementNum={2} autoFillHeight={true} highlightStart={5} highlightEnd={20} language="javascript">
        {`
        class App extends Component {
          render() {
            return (
              <div>
                <div>
                  <h2>How does it work?</h2>
                </div>
                <div>
                  <p>We identify logical units in our design and isolate them into reusable code</p>
                </div>
              </div>
            );
          }
        }
      `}
      </CodePane>
    </Appear>
  </div >
)

export default Slide_Two;