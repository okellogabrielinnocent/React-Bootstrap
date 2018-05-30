import React, { Component } from 'react';
import logo from '../images/logo.jpg';
import logo1 from '../images/logo1.jpg';
import logo2 from '../images/logo2.jpg';
import logo3 from '../images/logo3.jpg';
import thumbnail from '../images/thumbnail.png';
import { Navbar, Nav,Tab,Grid,Panel, Media,Badge, Table, Row, Col,MenuItem,Carousel, NavDropdown, NavItem, Jumbotron, Button, ProgressBar } from 'react-bootstrap';
import '../css/App.css';

class App extends Component {
  render() {
    return (
  <div className="App">

        
  <Navbar collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#brand">React-Bootstrap</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
    <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#">
            Link
          </NavItem>
          <NavItem eventKey={2} href="#">
            Link
          </NavItem>
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">
          Link Right
        </NavItem>
        <NavItem eventKey={2} href="#">
          Link Right <Badge>42</Badge> 
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>;

  <Carousel>
    <Carousel.Item>
      <img width={900} height={500} src ={logo1} alt="900x500" />
         <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={900} height={500} src ={logo2} alt="900x500" />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={900} height={500} src ={logo3} alt="900x500" />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>;

  <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row className="clearfix">
    <Col sm={4}>
      <Nav bsStyle="pills" stacked>
        <NavItem eventKey="first">Tab 1</NavItem>
        <NavItem eventKey="second">Tab 2</NavItem>
        <NavItem eventKey="third">Tab 3</NavItem>
        <NavItem eventKey="fourth">Tab 4</NavItem>
      </Nav>
    </Col>
    <Col sm={8}>
      <Tab.Content animation>
        <Tab.Pane eventKey="first">

          <Table striped bordered condensed hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
          </Table>;  
        </Tab.Pane>
        <Tab.Pane eventKey="second">        
          <div>
            <Media>
              <Media.Left align="top">
                <img width={64} height={64} src ={logo1} alt="thumbnail" />

                    </Media.Left>
              <Media.Body>
                <Media.Heading>Top aligned media</Media.Heading>
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                  ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                  tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                  fringilla. Donec lacinia congue felis in faucibus.
                </p>

                <p>
                  Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
                  leo. Cum sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus.
                </p>
              </Media.Body>
            </Media>
            <Media>
              <Media.Left align="middle">
                <img width={64} height={64} src ={logo1} alt="thumbnail" />
              </Media.Left>
              <Media.Body>
                <Media.Heading>Middle aligned media</Media.Heading>
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                  ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                  tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                  fringilla. Donec lacinia congue felis in faucibus.
                </p>

                <p>
                  Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
                  leo. Cum sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus.
                </p>
              </Media.Body>
            </Media>
            <Media>
              <Media.Left align="bottom">
                <img width={64} height={64} src ={logo1} alt="thumbnail" />
              </Media.Left>
              <Media.Body>
                <Media.Heading>Bottom aligned media</Media.Heading>
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                  ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                  tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                  fringilla. Donec lacinia congue felis in faucibus.
                </p>

                <p>
                  Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
                  leo. Cum sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus.
                </p>
              </Media.Body>
            </Media>
          </div>; 
  
        </Tab.Pane>
        <Tab.Pane eventKey="third">
          <Panel bsStyle="primary">
            <Panel.Heading>
              <Panel.Title componentClass="h3">Panel heading</Panel.Title>
            </Panel.Heading>
            <Panel.Body>Panel content</Panel.Body>
          </Panel>

        </Tab.Pane>
        <Tab.Pane eventKey="fourth">
        <Grid>
            <Row className="show-grid">
              <Col xs={12} md={8}>
                <code>&lt;{'Col xs={12} md={8}'} /">">&gt;</code>
              </Col>
              <Col xs={6} md={4}>
                <code>&lt;{'Col xs={6} md={4}'} /">">&gt;</code>
              </Col>
            </Row>

            <Row className="show-grid">
              <Col xs={6} md={4}>
                <code>&lt;{'Col xs={6} md={4}'} /">">&gt;</code>
              </Col>
              <Col xs={6} md={4}>
                <code>&lt;{'Col xs={6} md={4}'} /">">&gt;</code>
              </Col>
              <Col xsHidden md={4}>
                <code>&lt;{'Col xsHidden md={4}'} /">">&gt;</code>
              </Col>
            </Row>

            <Row className="show-grid">
              <Col xs={6} xsOffset={6}>
                <code>&lt;{'Col xs={6} xsOffset={6}'} /">">&gt;</code>
              </Col>
            </Row>

            <Row className="show-grid">
              <Col md={6} mdPush={6}>
                <code>&lt;{'Col md={6} mdPush={6}'} /">">&gt;</code>
              </Col>
              <Col md={6} mdPull={6}>
                <code>&lt;{'Col md={6} mdPull={6}'} /">">&gt;</code>
              </Col>
            </Row>
          </Grid>;
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
  </Tab.Container>;

    <Col xs={6} md={4}>
        <ProgressBar bsStyle="success" now={40} />
        <ProgressBar bsStyle="info" now={20} />
        <ProgressBar bsStyle="warning" now={60} />
        <ProgressBar bsStyle="danger" now={80} />
        <ProgressBar>
        <ProgressBar striped bsStyle="success" now={35} key={1} />
        <ProgressBar bsStyle="warning" now={20} key={2} />
        <ProgressBar active bsStyle="danger" now={10} key={3} />
        </ProgressBar>;
    </Col>

      </div>
    );
  }
  
}

export default App;
