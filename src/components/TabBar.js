import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import "../style.css"

export class TabBar extends Component {
    render() {
        return (
            <div style={{ width: '100%' }}>
                <ul className="nav nav-tabs">
                    {
                        this.props.tabs.map(tab => {
                            const active = (tab === this.props.selected ? 'active ' : '');
                            return (
                                <li className="nav-item" key={tab} style={{ width: "15%" }}>
                                    <a className={"nav-link " + active} onClick={() => this.props.setSelected(tab)}>
                                        {tab}
                                    </a>
                                </li>
                            );
                        })
                    }
                </ul>
                {this.props.children}
            </div>
        )
    }
}

export default TabBar

