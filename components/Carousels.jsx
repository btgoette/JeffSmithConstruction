import { Carousel, Row, Col, Image } from "react-bootstrap";

export default function Carousels() {
  return (
    <>
      <section>
        <Carousel fade>
          <Carousel.Item>
            <Image
              className="d-none d-xl-block w-100"
              src="/images/home/hero-1.webp"
              alt="First slide"
            />
            <Image
              className="d-none d-sm-block d-xl-none w-100"
              src="/images/home/hero-t-1.webp"
              alt="Third slide"
            />
            <Image
              className="d-block d-sm-none w-100"
              src="/images/home/hero-m-1.webp"
              alt="Third slide"
            />
            <Carousel.Caption className="text-start">
              <Row>
                <Col xl="8">
                  <h2>Building The Future Together</h2>
                  <p>
                    At our core, we&apos;re driven by a desire to exceed
                    expectations. That&apos;s why we partner with top-tier
                    architects, designers, and tradespeople who share our
                    commitment to innovation and excellence in construction.
                    Together, we&apos;re constantly striving to develop new and
                    better ways to build. Join us in creating something
                    extraordinary.
                  </p>
                </Col>
              </Row>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-none d-xl-block w-100"
              src="/images/home/hero-3.webp"
              alt="Second slide"
            />
            <Image
              className="d-none d-sm-block d-xl-none w-100"
              src="/images/home/hero-t-3.webp"
              alt="Third slide"
            />
            <Image
              className="d-block d-sm-none w-100"
              src="/images/home/hero-m-3.webp"
              alt="Third slide"
            />
            <Carousel.Caption className="text-start">
              <Row>
                <Col xl="8">
                  <h2>
                    Design your dream. Creating our vision.
                  </h2>
                  <p>
                    We&apos;re revolutionizing the construction industry by
                    addressing the pain points of traditional building
                    experiences. Our mission is to provide a level of service
                    that exceeds your expectations in today&apos;s modern world.
                    Experience the difference with our innovative approach to
                    construction.
                  </p>
                </Col>
              </Row>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-none d-xl-block w-100"
              src="/images/home/hero-4.webp"
              alt="Third slide"
            />
            <Image
              className="d-none d-sm-block d-xl-none w-100"
              src="/images/home/hero-t-4.webp"
              alt="Third slide"
            />
            <Image
              className="d-block d-sm-none w-100"
              src="/images/home/hero-m-4.webp"
              alt="Third slide"
            />
            <Carousel.Caption className="text-start">
              <Row>
                <Col xl="8">
                  <h2>Our Process:</h2>
                  <p>
                    We begin by carefully planning your space based on your
                    unique needs and vision. From there, we work closely with
                    you to personalize and integrate your design ideas every
                    step of the way, from permitting to construction to final
                    close-out. You can count on our team to be there with you
                    throughout the entire process, providing expert guidance and
                    exceptional service.
                  </p>
                </Col>
                <Col xl="4">
                  <Image
                    className="d-none d-xl-block"
                    src="/images/home/plans.webp"
                    alt="Floor Plans"
                  />
                </Col>
              </Row>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  );
}
