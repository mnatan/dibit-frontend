import React from 'react';
import {Children} from 'react';
import {FormattedMessage} from 'react-intl';

import {Link}from 'react-router';
import messages from './messages';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {createSelector, createStructuredSelector} from 'reselect';


class ReduxNavItem extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    this.props = {...this.props};
    const className = this.props.activeRoute === this.props.to ? 'active' : '';

    // Bootstrap fix
    delete this.props.activeKey;
    delete this.props.activeHref;

    return (
      <li className={className}>
        <Link to={this.props.to}>{this.props.text}</Link>
      </li>
    )
  }
}


class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Navbar fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Dibit</a>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              {/*<LinkContainer to="/">*/}
              {/*<NavItem eventKey={1}>*/}
              <ReduxNavItem text="Home" to="/" activeRoute={this.props.activeRoute}/>
              <ReduxNavItem text="Features" to="/features" activeRoute={this.props.activeRoute}/>
              {/*<Link to="/features">Features</Link>*/}
              {/*</NavItem>*/}
              {/*</LinkContainer>*/}
              {/*<LinkContainer to="/">*/}
              {/*<NavItem eventKey={2}>Features</NavItem>*/}
              {/*</LinkContainer>*/}
              <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider/>
                <MenuItem eventKey={3.4}>Separated link</MenuItem>
              </NavDropdown>
            </Nav>
            <Nav pullRight>
              <NavDropdown eventKey={4} title="Settings" id="basic-nav-dropdown">
                <MenuItem eventKey={4.1}>Test</MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {/*<NavBar>*/}
        {/*<HeaderLink to="/">*/}
        {/*<FormattedMessage {...messages.home} />*/}
        {/*</HeaderLink>*/}
        {/*<HeaderLink to="/features">*/}
        {/*<FormattedMessage {...messages.features} />*/}
        {/*</HeaderLink>*/}
        {/*</NavBar>*/}
      </div>
    );
  }
}

Header.propTypes = {
  activeRoute: React.PropTypes.string,
};

const selectRoute = store => store.get('route');
const selectBeforeTransitions = createSelector(
  selectRoute,
  (state) => state.get('locationBeforeTransitions')
);
const selectPathname = createSelector(
  selectBeforeTransitions,
  (routeState) => {
    if (routeState === null) return '';
    return routeState.get('pathname')
  }
);

const mapStateToProps = function mapStateToProps(state) {
  return {
    activeRoute: selectPathname(state)
  }
};

import {connect} from 'react-redux';
export default connect(mapStateToProps)(Header);

