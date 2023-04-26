import { Container, Row, Col, Image } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import Link from "next/link";

export default function Footer() {
  const today = new Date();

  return (
    <>
      <footer>
        <section className="bg-blue text-white">
          <Container className="px-4 py-5">
            <Row className="align-items-center">
              <Col md="6" lg={{ span: 4, offset: 1 }}>
                <div className="footer-logo logo d-flex align-items-center">
                  <figure>
                    <Image
                      src="images/logos/jscs-gradient.webp"
                      alt="Jeff Smith Construction"
                    />
                  </figure>
                  <p className="ps-3 mb-0">JSCS Inc.</p>
                </div>
                <p>
                  General Contractor License #634094 (CA) Fully Licensed, Bonded
                  and Insured
                </p>
                <p className="footer-socials">
                  <a href="https://www.yelp.com/biz/jeff-smith-construction-rocklin">
                    <Image src="images/footer/yelp.webp" alt="Yelp" />
                  </a>
                  <a href="https://www.facebook.com/JSCS-Inc-101017868396872">
                    <Image src="images/footer/facebook.webp" alt="Facebook" />
                  </a>
                  <a href="https://www.bbb.org/us/ca/newcastle/profile/general-contractor/jeff-smith-construction-1156-90029915">
                    <Image src="images/footer/bbb.webp" alt="BBB" />
                  </a>
                </p>
                <p className="footer-address">
                  <a href="tel=9166633000">916-663-3000</a>
                  <br />
                  5406 Crosssing Dr.
                  <br />
                  Suite 102-385
                  <br />
                  Rocklin, CA 95677
                </p>
              </Col>
              <Col md="6" lg={{ span: 4, offset: 1 }}>
                <Row className="mb-2">
                  <Col>
                    <Link href="/about-jeffsmithconstruction">About Us</Link>
                    <br />
                    <Link href="/construction-services">Our Services</Link>
                    <br />
                    <div className="border-start ps-2">
                      <Link href="/commercial-construction">
                        Commercial Design/Build
                      </Link>
                      <br />
                      <Link href="/tenant-improvements">
                        Tenant Improvements
                      </Link>
                      <br />
                    </div>
                    <Link href="/featured-projects">Featured Projects</Link>
                  </Col>
                  <Col>
                    <Link href="/construction-gallery">Gallery</Link>
                    <br />
                    <div className="border-start ps-2">
                      <Link href="/office-construction-gallery">
                        Office Gallery
                      </Link>
                      <br />
                      <Link href="/restaurant-construction-gallery">
                        Restaurant Gallery
                      </Link>
                      <br />
                      <Link href="/retail-construction-gallery">
                        Retail Gallery
                      </Link>
                      <br />
                    </div>
                    <Link href="/jscs-testimonials">Testimonials</Link>
                  </Col>
                </Row>

                <p>
                  We were founded with the desire to do it better. Working
                  together with teams of highly skilled architects, designers
                  and tradesmen that want to develop a better way to build.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="bg-gray-900">
          <Container fluid>
            <Row>
              <Col>
                <Marquee speed="40">
                  <p className="mt-3">
                    <a
                      href="commercial-construction-auburn.htm"
                      title="General Contractor Commercial Construction Commercial Design & Build Tenant Improvements Auburn CA Jeff Smith Construction"
                    >
                      General Contractor in Auburn, CA
                    </a>
                    &nbsp;|&nbsp;
                    <a
                      href="commercial-construction-citrusheights.htm"
                      title="General Contractor Commercial Construction Commercial Design & Build Tenant Improvements Citrus Heights CA  Jeff Smith Construction"
                    >
                      General Contractor in Citrus Heights, CA
                    </a>
                    &nbsp;|&nbsp;
                    <a
                      href="commercial-construction-eldoradohills.htm"
                      title="General Contractor Commercial Construction Commercial Design & Build Tenant Improvements El Dorado Hills CA  Jeff Smith Construction"
                    >
                      General Contractor in El Dorado Hills, CA
                    </a>
                    &nbsp;|&nbsp;
                    <a
                      href="commercial-construction-folsom.htm"
                      title="General Contractor Commercial Construction Commercial Design & Build Tenant Improvements Folsom CA  Jeff Smith Construction"
                    >
                      General Contractor in Folsom, CA
                    </a>
                    &nbsp;|&nbsp;
                    <a
                      href="commercial-construction-lincoln.htm"
                      title="General Contractor Commercial Construction Commercial Design & Build Tenant Improvements Lincoln CA  Jeff Smith Construction"
                    >
                      General Contractor in Lincoln, CA
                    </a>
                    &nbsp;|&nbsp;
                    <a
                      href="commercial-construction-loomis.htm"
                      title="General Contractor Commercial Construction Commercial Design & Build Tenant Improvements Loomis CA  Jeff Smith Construction"
                    >
                      General Contractor in Loomis, CA
                    </a>
                    &nbsp;|&nbsp;
                    <a
                      href="commercial-construction-ranchocordova.htm"
                      title="General Contractor Commercial Construction Commercial Design & Build Tenant Improvements Rancho Cordova CA  Jeff Smith Construction"
                    >
                      General Contractor in Rancho Cordova, CA
                    </a>
                    &nbsp;|&nbsp;
                    <a
                      href="commercial-construction-rocklin.htm"
                      title="General Contractor Commercial Construction Commercial Design & Build Tenant Improvements Rocklin CA  Jeff Smith Construction"
                    >
                      General Contractor in Rocklin, CA
                    </a>
                    &nbsp;|&nbsp;
                    <a
                      href="commercial-construction-roseville.htm"
                      title="General Contractor Commercial Construction Commercial Design & Build Tenant Improvements Roseville CA  Jeff Smith Construction"
                    >
                      General Contractor in Roseville, CA
                    </a>
                    &nbsp;|&nbsp;
                    <a
                      href="commercial-construction-sacramento.htm"
                      title="General Contractor Commercial Construction Commercial Design & Build Tenant Improvements Sacramento CA  Jeff Smith Construction"
                    >
                      General Contractor in Sacramento, CA
                    </a>
                    &nbsp;|&nbsp;
                    <a
                      href="commercial-construction-westsacramento.htm"
                      title="General Contractor Commercial Construction Commercial Design & Build Tenant Improvements West Sacramento CA  Jeff Smith Construction"
                    >
                      General Contractor in West Sacramento, CA
                    </a>
                    &nbsp;|&nbsp;
                    <a
                      href="commercial-construction-woodland.htm"
                      title="General Contractor Commercial Construction Commercial Design & Build Tenant Improvements Woodland CA  Jeff Smith Construction"
                    >
                      General Contractor in Woodland, CA
                    </a>
                    {/* <!-- Nov 2020 --> */}&nbsp;|&nbsp;
                    <a
                      href="tenant-improvement-folsom.htm"
                      title="Tenant Improvement Folsom CA - General Contractor Commercial Construction Commercial Design & Build Tenant Improvements Folsom CA  Jeff Smith Construction"
                    >
                      Tenant Improvement Folsom, CA
                    </a>
                    &nbsp;|&nbsp;
                    <a
                      href="tenant-improvement-roseville.htm"
                      title="Tenant Improvement Roseville CA - General Contractor Commercial Construction Commercial Design & Build Tenant Improvements Roseville CA  Jeff Smith Construction"
                    >
                      Tenant Improvement Roseville, CA
                    </a>
                    &nbsp;|&nbsp;
                    <a
                      href="tenant-improvement-sacramento.htm"
                      title="Tenant Improvement Sacramento CA - General Contractor Commercial Construction Commercial Design & Build Tenant Improvements Sacramento CA  Jeff Smith Construction"
                    >
                      Tenant Improvement Sacramento, CA
                    </a>
                    {/* <!-- Sept 2021 start Commercial Remodeling Contractor Auburn Citrus Heights El Dorado Hills Folsom Lincoln Loomis Rancho Cordova Rocklin Roseville CA --> */}
                    &nbsp;|&nbsp;
                    <a
                      href="commercial-remodeling-contractor-auburn.htm"
                      title="Commercial Remodeling Contractor Auburn CA Commercial Design Build Tenant Improvements Commercial Contractor Auburn CA  Jeff Smith Construction"
                    >
                      Commercial Contractor Auburn, CA
                    </a>
                    &nbsp;|&nbsp;
                    <a
                      href="commercial-remodeling-contractor-citrusheights.htm"
                      title="Commercial Remodeling Contractor Citrus Heights CA Commercial Design Build Tenant Improvements Commercial Contractor Citrus Heights CA  Jeff Smith Construction"
                    >
                      Commercial Contractor Citrus Heights, CA
                    </a>
                    &nbsp;|&nbsp;
                    <a
                      href="commercial-remodeling-contractor-eldoradohills.htm"
                      title="Commercial Remodeling Contractor El Dorado Hills CA Commercial Design Build Tenant Improvements Commercial Contractor El Dorado Hills CA  Jeff Smith Construction"
                    >
                      Commercial Contractor El Dorado Hills, CA
                    </a>
                    &nbsp;|&nbsp;
                    <a
                      href="commercial-remodeling-contractor-folsom.htm"
                      title="Commercial Remodeling Contractor Folsom CA Commercial Design Build Tenant Improvements Commercial Contractor Folsom CA  Jeff Smith Construction"
                    >
                      Commercial Contractor Folsom, CA
                    </a>
                    &nbsp;|&nbsp;
                    <a
                      href="commercial-remodeling-contractor-lincoln.htm"
                      title="Commercial Remodeling Contractor Lincoln CA Commercial Design Build Tenant Improvements Commercial Contractor Lincoln CA  Jeff Smith Construction"
                    >
                      Commercial Contractor Lincoln, CA
                    </a>
                    &nbsp;|&nbsp;
                    <a
                      href="commercial-remodeling-contractor-loomis.htm"
                      title="Commercial Remodeling Contractor Loomis CA Commercial Design Build Tenant Improvements Commercial Contractor Loomis CA  Jeff Smith Construction"
                    >
                      Commercial Contractor Loomis, CA
                    </a>
                    &nbsp;|&nbsp;
                    <a
                      href="commercial-remodeling-contractor-ranchocordova.htm"
                      title="Commercial Remodeling Contractor Rancho Cordova CA Commercial Design Build Tenant Improvements Commercial Contractor Rancho Cordova CA  Jeff Smith Construction"
                    >
                      Commercial Contractor Rancho Cordova, CA
                    </a>
                    &nbsp;|&nbsp;
                    <a
                      href="commercial-remodeling-contractor-rocklin.htm"
                      title="Commercial Remodeling Contractor Rocklin CA Commercial Design Build Tenant Improvements Commercial Contractor Rocklin CA  Jeff Smith Construction"
                    >
                      Commercial Contractor Rocklin, CA
                    </a>
                    &nbsp;|&nbsp;
                    <a
                      href="commercial-remodeling-contractor-roseville.htm"
                      title="Commercial Remodeling Contractor Roseville CA Commercial Design Build Tenant Improvements Commercial Contractor Roseville CA  Jeff Smith Construction"
                    >
                      Commercial Contractor Roseville, CA
                    </a>
                    {/* <!-- Sept 2021 end Commercial Remodeling Contractor Auburn Citrus Heights El Dorado Hills Folsom Lincoln Loomis Rancho Cordova Rocklin Roseville CA -->
  <!-- march 2022 --> */}
                    &nbsp;|&nbsp;
                    <a
                      href="tenant-improvement-remodeler-eldoradohills.htm"
                      title="Tenant Improvement Remodeler El Dorado Hills CA - Commercial Remodeling Contractor El Dorado Hills CA Commercial Design Build Tenant Improvements Commercial Contractor El Dorado Hills CA  Jeff Smith Construction"
                    >
                      Tenant Improvement Remodeler in El Dorado Hills, CA
                    </a>
                    &nbsp;|&nbsp;
                    <a
                      href="tenant-improvement-remodeler-folsom.htm"
                      title="Tenant Improvement Remodeler Folsom CA - Commercial Remodeling Contractor Folsom CA Commercial Design Build Tenant Improvements Commercial Contractor Folsom CA  Jeff Smith Construction"
                    >
                      Tenant Improvement Remodeler in Folsom, CA
                    </a>
                    &nbsp;|&nbsp;
                    <a
                      href="tenant-improvement-remodeler-ranchocordova.htm"
                      title="Tenant Improvement Remodeler Rancho Cordova CA - Commercial Remodeling Contractor Rancho Cordova CA Commercial Design Build Tenant Improvements Commercial Contractor Rancho Cordova CA  Jeff Smith Construction"
                    >
                      Tenant Improvement Remodeler in Rancho Cordova, CA
                    </a>
                    &nbsp;|&nbsp;
                    <a
                      href="tenant-improvement-remodeler-rocklin.htm"
                      title="Tenant Improvement Remodeler Rocklin CA - Commercial Remodeling Contractor Rocklin CA Commercial Design Build Tenant Improvements Commercial Contractor Rocklin CA  Jeff Smith Construction"
                    >
                      Tenant Improvement Remodeler in Rocklin, CA
                    </a>
                    &nbsp;|&nbsp;
                    <a
                      href="tenant-improvement-remodeler-eldoradohills.htm"
                      title="Tenant Improvement Remodeler Roseville CA - Commercial Remodeling Contractor Roseville CA Commercial Design Build Tenant Improvements Commercial Contractor Roseville CA  Jeff Smith Construction"
                    >
                      Tenant Improvement Remodeler in Roseville, CA
                    </a>
                    {/* <! sept 2022 --> */}&nbsp;|&nbsp;
                    <a
                      href="commercial-contractor-tenant-improvement-auburn-ca.htm"
                      title="Commercial Contractor Tenant Improvement Auburn CA Jeff Smith Construction Auburn CA"
                    >
                      Commercial Contractor Tenant Improvement Auburn, CA
                    </a>
                    &nbsp;|&nbsp;
                    <a
                      href="commercial-contractor-tenant-improvement-citrusheights-ca.htm"
                      title="Commercial Contractor Tenant Improvement Citrus Heights CA Jeff Smith Construction Citrus Heights CA"
                    >
                      Commercial Contractor Tenant Improvement Citrus Heights,
                      CA
                    </a>
                    &nbsp;|&nbsp;
                    <a
                      href="commercial-contractor-tenant-improvement-eldoradohills-ca.htm"
                      title="Commercial Contractor Tenant Improvement El Dorado Hills CA Jeff Smith Construction El Dorado Hills CA"
                    >
                      Commercial Contractor Tenant Improvement El Dorado Hills,
                      CA
                    </a>
                    &nbsp;|&nbsp;
                    <a
                      href="commercial-contractor-tenant-improvement-folsom-ca.htm"
                      title="Commercial Contractor Tenant Improvement Folsom CA Jeff Smith Construction Folsom CA"
                    >
                      Commercial Contractor Tenant Improvement Folsom, CA
                    </a>
                    &nbsp;|&nbsp;
                    <a
                      href="commercial-contractor-tenant-improvement-lincoln-ca.htm"
                      title="Commercial Contractor Tenant Improvement Lincoln CA Jeff Smith Construction Lincoln CA"
                    >
                      Commercial Contractor Tenant Improvement Lincoln, CA
                    </a>
                    &nbsp;|&nbsp;
                    <a
                      href="commercial-contractor-tenant-improvement-loomis-ca.htm"
                      title="Commercial Contractor Tenant Improvement Loomis CA Jeff Smith Construction Loomis CA"
                    >
                      Commercial Contractor Tenant Improvement Loomis, CA
                    </a>
                    &nbsp;|&nbsp;
                    <a
                      href="commercial-contractor-tenant-improvement-ranchocordova-ca.htm"
                      title="Commercial Contractor Tenant Improvement Rancho Cordova CA Jeff Smith Construction Rancho Cordova CA"
                    >
                      Commercial Contractor Tenant Improvement Rancho Cordova,
                      CA
                    </a>
                    &nbsp;|&nbsp;
                    <a
                      href="commercial-contractor-tenant-improvement-rocklin-ca.htm"
                      title="Commercial Contractor Tenant Improvement Rocklin CA Jeff Smith Construction Rocklin CA"
                    >
                      Commercial Contractor Tenant Improvement Rocklin, CA
                    </a>
                    &nbsp;|&nbsp;
                    <a
                      href="commercial-contractor-tenant-improvement-roseville-ca.htm"
                      title="Commercial Contractor Tenant Improvement Roseville CA Jeff Smith Construction Roseville CA"
                    >
                      Commercial Contractor Tenant Improvement Roseville, CA
                    </a>
                    &nbsp;|&nbsp;
                    <a
                      href="commercial-contractor-tenant-improvement-sacramento-ca.htm"
                      title="Commercial Contractor Tenant Improvement Sacramento CA Jeff Smith Construction Sacramento CA"
                    >
                      Commercial Contractor Tenant Improvement Sacramento, CA
                    </a>
                    &nbsp;|&nbsp;
                    <a
                      href="commercial-contractor-tenant-improvement-woodland-ca.htm"
                      title="Commercial Contractor Tenant Improvement Woodland CA Jeff Smith Construction Woodland CA"
                    >
                      Commercial Contractor Tenant Improvement Woodland, CA
                    </a>
                  </p>
                </Marquee>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="bg-black">
          <Container>
            <Row>
              <Col>
                <p className="mt-3 text-center text-sm">
                  &copy; {today.getFullYear()} Jeff Smith Construction - JSCS,
                  Inc.
                  <br />
                  All rights reserved. All files, images, and information
                  contained in this Website copyright by JSCS, Inc. and may not
                  be duplicated, copied, modified, or adapted, in any way
                  without our written permission.
                  <br />
                  <a
                    href="https://websitedesign-roseville.net"
                    target="top"
                    title="Website design by Brymels LLC Website Designer Roseville CA"
                  >
                    &nbsp;
                    <u className="color">Website Design</u>&nbsp;
                  </a>
                  by Brymels LLC.&nbsp;|&nbsp;
                  <a href="privacy-policy.htm" title="privacy policy">
                    <u className="color">Privacy Policy</u>
                  </a>
                </p>
              </Col>
            </Row>
          </Container>
        </section>
      </footer>
    </>
  );
}
