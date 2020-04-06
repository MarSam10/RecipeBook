import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'

class RecipeNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToHome: false
        }
    }

    // // this function in onvoked after every render (but not the first)
    // componentDidUpdate() {
    //     if (this.state.redirectToHome) {
    //         this.setState({redirectToHome: false})
    //     }
    // }

    

    render() {
        const { activeUser } = this.props;
        const { redirectToHome } = this.state;

        if (redirectToHome) {
            return <Redirect to="/"/>
        }

        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#/">Recipe Book</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#/recipes">Recipes</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default RecipeNavbar;
