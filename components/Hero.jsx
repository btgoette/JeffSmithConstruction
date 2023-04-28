import { Container, Row, Col } from "react-bootstrap";

export default function Hero(hero) {
  return (
    <>
      <section className="hero">
        <Container>
          <Row>
            <Col className="text-center py-5">
              <h1>{hero.title}</h1>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
