import React from 'react';
import { CodePane } from 'spectacle';
const Slide_Four = () => (
  <div>
    <p >Before</p>
    <CodePane autoFillHeight={true} highlightStart={5} highlightEnd={12} language="javascript">
      {`
        class App extends Component {
          render() {
            return (
              <div>
                <div>
                  <h2>React Native</h2>
                </div>
                <div>
                  <p>I'm a component now!</p>
                </div>
              </div>
            );
          }
        }
      `}
    </CodePane>
    <p>After</p>
    <CodePane autoFillHeight={true} highlightStart={5} highlightEnd={5} language="javascript">
      {`
                class App extends Component {
                    render() {
                        return (
                            <Card title="React Native" body="I'm a component now!" />
                        )
                    }
                }
            `}
    </CodePane>
  </div >
)

export default Slide_Four;