import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from "react-router-dom";

const colors = ['red','blue']
export default class MenuExampleInverted extends Component {
    state = { activeItem: 'home' }
  
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
        const { color } = this.props
      const { activeItem } = this.state
  
      return (
        <Menu color={'blue'} inverted position="left" widths={5}>
          <Menu.Item
            as={Link} to="/uni" basic
            name='Dashboard'
            active={activeItem === 'Dashboard'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link} to="/uni/application" basic
            name='Application'
            active={activeItem === 'Application'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            position="right"
            as={Link} to="/" basic
            name='Log Out'
            active={activeItem === 'Log Out'}
            onClick={this.handleItemClick}
          />
        </Menu>
      )
    }
  }
  