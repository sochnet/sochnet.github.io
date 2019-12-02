import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import Impact from './Components/Impact';
import Initiatives from './Components/Initiatives';
import NotFound from './Components/NotFound'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';

const routing = (
    <Router>
        <div>
            <Navbar collapseOnSelect bg="primary" variant="dark" expand="lg" fixed="top">
                <Navbar.Brand as={Link} to="/">SOCH</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/initiatives">Initiatives</Nav.Link>
                        <Nav.Link as={Link} to="/impact">Impact</Nav.Link>
                        <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                        <Nav.Link as={Link} to="/support">Support</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/initiatives" component={Initiatives} />
                <Route path="/impact" component={Impact} />
                <Route component={NotFound} />
            </Switch>

        </div>

        <footer class="footer">
            <div class="footer-copyright text-center py-3">© 2019 Copyright: Sochnet.com</div>
        </footer>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
