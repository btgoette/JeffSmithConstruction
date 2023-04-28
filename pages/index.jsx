import Head from "components/Head";
import Carousels from "components/Carousels";
import Section from "components/Section";
import Cards from "components/Cards";

let head = {
  title: "Jeff Smith Construction JSCS Inc.",
  description:
    "Commercial General Contractor Sacramento CA.  Jeff Smith Construction - Commercial Construction, Tenant Improvement, Commercial Design & Build. Restaurants, Offices, Retail Commercial Construction. Commercial Construction Rocklin Roseville Folsom Auburn",
  image: "https://jeffsmithconstruction.com/images/logos/jscs-gradient.webp",
  imageType: "image/webp",
  robots: "INDEX, FOLLOW",
};

export default function Home() {
  return (
    <div>
      <Head {...head} />
      <Carousels />
      <Section />
      <Cards />
    </div>
  );
}
