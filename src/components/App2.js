import React, { Component } from 'react'
import Tab from './Tab';
import TabNav from './TabBar'
import '../style.css'
import Overview from './Overview';

export class App2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 'Overview'
        }
    }
    setSelected = (tab) => {
        this.setState({ selected: tab });
    }
    render() {
        return (
            <div className="App mt-4">
                <TabNav tabs={['Overview', 'Q&A', 'Announcements']} selected={this.state.selected} setSelected={this.setSelected}>
                    <Tab isSelected={this.state.selected === 'Overview'}>
                        {/* <h1>Overview of the course</h1> */}
                        <Overview />
                    </Tab>
                    <Tab isSelected={this.state.selected === 'Q&A'}>
                        <h1>QnA section lies here</h1>
                    </Tab>
                    <Tab isSelected={this.state.selected === 'Announcements'}>
                        <h1>Announcements lies here</h1>
                    </Tab>
                </TabNav>
            </div>
        );
    }
}

export default App2
