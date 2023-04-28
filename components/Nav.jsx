import {
  Button,
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  NavDropdown,
  Offcanvas,
  Image,
} from "react-bootstrap";
import Link from "next/link";

export default function CustomNav() {
  return (
    <Navbar collapseOnSelect expand="xl" className="bg-blue" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <div className="nav-logo logo d-flex align-items-center">
            <figure className="mb-0">
              <Image
                src="/images/logos/jscs-gradient.webp"
                alt="Jeff Smith Construction"
              />
            </figure>
            <p className="ps-3 mt-3 mb-0">JSCS Inc.</p>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            {/* <Nav.Link href="/">Home</Nav.Link> */}
            <Nav.Link href="/about/">About Us</Nav.Link>
            <NavDropdown title="Services">
              <NavDropdown.Item href="/services/">
                Our Services
              </NavDropdown.Item>
              <NavDropdown.Item href="/services/commercial-construction">
                Commercial Design/Build
              </NavDropdown.Item>
              <NavDropdown.Item href="/services/tenant-improvements">
                Tenant Improvements
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/featured-projects/">Featured Projects</Nav.Link>
            <NavDropdown title="Gallery">
              <NavDropdown.Item href="/gallery/">
                Gallery
              </NavDropdown.Item>
              {/* <NavDropdown.Divider className="d-none d-xl-block" /> */}
              <NavDropdown.Item href="/gallery/office-gallery">
                Office Gallery
              </NavDropdown.Item>
              <NavDropdown.Item href="/gallery/restaurant-gallery">
                Restaurant Gallery
              </NavDropdown.Item>
              <NavDropdown.Item href="/retail-gallery">
                Retail Gallery
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/testimonials/">Testimonials</Nav.Link>
            <NavDropdown title="Contact">
              <NavDropdown.Item href="/contact/">
                Contact Us
              </NavDropdown.Item>
              <NavDropdown.Item href="/contact/careers">
                Careers
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <a href="/contact/">
              <Button className="btn btn-primary">
                Request Services
              </Button>
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
