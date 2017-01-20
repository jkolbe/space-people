import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Navigation = (props) => (
	<div>
		<Navbar  collapseOnSelect fixedTop>
			<Navbar.Header>
				<Navbar.Brand>
					<LinkContainer to="/">
						<NavItem eventKey={1}>Space People</NavItem>
					</LinkContainer>
				</Navbar.Brand>
				<Navbar.Toggle />
			</Navbar.Header>
			<Navbar.Collapse>
				<Nav pullRight>
					<LinkContainer to="/craft">
						<NavItem eventKey={1}>Craft</NavItem>
					</LinkContainer>
					<LinkContainer to="/location">
						<NavItem eventKey={2}>Location</NavItem>
					</LinkContainer>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
		{props.children}
	</div>
);
export default Navigation;