import { Container, Row, Col, Image } from "react-bootstrap";

export default function Section() {
  return (
    <section className="bg-blue text-white py-5">
      <Container>
        <Row className="align-items-center">
          <Col lg={{ span: 8, offset: 2 }} className="p-4">
            <h1 className="text-gold text-center mb-3">
              Discover Jeff Smith Construction
            </h1>
            <p>
              As a trusted general contractor based in Rocklin, CA, we
              specialize in commercial construction throughout the greater
              Sacramento area, including Auburn, Cameron Park, Citrus Heights,
              Colfax, El Dorado Hills, Elk Grove, Fair Oaks, Folsom, Granite
              Bay, Lincoln, Loomis, Placerville, Rancho Cordova, Rescue,]
              Roseville, Sacramento, Shingle Springs, Tahoe, Winters, Woodland,
              Yolo, and beyond. Let us help bring your vision to life.
            </p>
            <p>
              We excel at understanding and connecting with each client&apos;s
              unique vision. Our goal is to bring that vision to life by
              starting with the end result in mind. Whether it&apos;s design,
              budgeting, value engineering, renovation, or construction, we have
              the expertise and experience to deliver exceptional results. Let
              us help you achieve your goals and create a space that exceeds
              your expectations.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
