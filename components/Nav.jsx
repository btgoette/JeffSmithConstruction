import {
  Button,
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  NavDropdown,
  Offcanvas,
  Image
} from "react-bootstrap";
import Link from "next/link";
import { ReactSVG } from "react-svg";

export default function CustomNav() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-blue" variant="light">
      <Container>
        <Navbar.Brand href="/">
          <Image
            src="/images/logos/jscs.png"
            alt="Jeff Smith Construction"
            className="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            {/* <Nav.Link href="/">Home</Nav.Link> */}
            <Nav.Link href="/about-jeffsmithconstruction">About Us</Nav.Link>
            <NavDropdown title="Services">
              <NavDropdown.Item href="/construction-services">
                Our Services
              </NavDropdown.Item>
              <NavDropdown.Item href="/commercial-construction">
                Commercial Design/Build
              </NavDropdown.Item>
              <NavDropdown.Item href="/tenant-improvements">
                Tenant Improvements
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/featured-projects">Featured Projects</Nav.Link>
            <NavDropdown title="Gallery">
              <NavDropdown.Item href="/construction-gallery">
                Gallery
              </NavDropdown.Item>
              {/* <NavDropdown.Divider className="d-none d-xl-block" /> */}
              <NavDropdown.Item href="/office-construction-gallery">
                Office Gallery
              </NavDropdown.Item>
              <NavDropdown.Item href="/restaurant-construction-gallery">
                Restaurant Gallery
              </NavDropdown.Item>
              <NavDropdown.Item href="/retail-construction-gallery">
                Retail Gallery
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/jscs-testimonials">Testimonials</Nav.Link>
            <NavDropdown title="Contact">
              <NavDropdown.Item href="/contact-jeffsmithconstruction">
                Contact Us
              </NavDropdown.Item>
              <NavDropdown.Item href="/jeffsmithconstruction-careers">
                Careers
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/contact-jeffsmithconstruction">
              <Button className="btn btn-primary">
                Tell Us About Your Project
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
