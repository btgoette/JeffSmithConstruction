import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";

export default function Cards() {
  return (
    <>
      <section className="py-5">
        <Container>
          <Row className="my-4">
            <Col className="px-4">
              <h2 className="text-gold">Why Choose Us?</h2>
              <p>
                At Jeff Smith Construction, we&apos;re on a mission to
                revolutionize the commercial improvement and renovation
                experience. Since day one, we&apos;ve been driven by a family
                legacy of quality, integrity, and affordability. Let us bring
                our commitment to excellence to your next project and exceed
                your expectations.
              </p>
            </Col>
          </Row>
          <Row className="my-4">
            <Col lg={4} className="p-4">
              <Card className="hvr-grow-rotate">
                <Card.Img variant="top" src="/images/home/home-1.webp" />
                <Card.Body>
                  <Card.Title>Customized Budgeting</Card.Title>
                  <Card.Text>
                    We understand that every customer has unique needs and
                    priorities. That&apos;s why we offer a range of options to
                    fit your budget and design expectations. Whether you&apos;re
                    looking for the very best or the most cost-effective
                    solution, we&apos;ll work with you to tailor a price that
                    meets your project demands. Let us bring your vision to life
                    while staying within your budget.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} className="p-4">
              <Card className="hvr-grow-rotate">
                <Card.Img variant="top" src="/images/home/home-2.webp" />
                <Card.Body>
                  <Card.Title>Always Organized</Card.Title>
                  <Card.Text>
                    Navigating a construction project can be complex and
                    overwhelming. That&apos;s why at our company, we&apos;re
                    committed to guiding you through every step of the process.
                    Our team of experts will work closely with you to ensure
                    that your project stays on time and on budget. Trust us to
                    handle the moving parts, so you can enjoy a stress-free
                    construction experience.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} className="p-4">
              <Card className="hvr-grow-rotate">
                <Card.Img variant="top" src="/images/home/home-3.webp" />
                <Card.Body>
                  <Card.Title>Always with quality</Card.Title>
                  <Card.Text>
                    We treat our clients like extended family, and we approach
                    every project as if it were our own. While we offer a
                    standard 1-year warranty, you can rest assured that
                    we&apos;ll be there for you down the road if you ever need
                    help resolving an issue. Let us earn your trust and exceed
                    your expectations with our exceptional service and
                    commitment to your satisfaction.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="my-4">
            <Col className="pt-3 pb-5 px-4">
              <p>
                We&apos;re on a mission to revolutionize the traditional
                construction experience and provide the level of service you
                deserve in today&apos;s world. We invite you to explore our
                website to learn more about our services and past projects. If
                you have any questions or would like to schedule a consultation,
                please don&apos;t hesitate to contact us at{" "}
                <a href="tel:916-663-3000">916-663-3000</a>. We also offer the
                convenience of online service requests. Let us help bring your
                vision to life today!
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
