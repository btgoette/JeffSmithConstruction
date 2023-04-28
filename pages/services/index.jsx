import Hero from "components/Hero";

let hero = {
  title: "Our Services",
};

export default function Services() {
  return (
    <div>
      <Hero {...hero} />
    </div>
  );
}
