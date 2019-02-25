import React from 'react';
import { Container, Navbar, NavbarBrand} from 'reactstrap';
import { Link } from 'react-router-dom';

export default class NavMenu extends React.Component {
  constructor (props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle () {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render () {
    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3" light >
          <Container>
            <NavbarBrand tag={Link} to="/">What Should We Eat Today</NavbarBrand>
          </Container>
        </Navbar>
      </header>
    );
  }
}
