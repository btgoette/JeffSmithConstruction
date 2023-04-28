import Hero from "components/Hero";

let hero = {
  title: "404 Page Not Found",
};

export default function Error404() {
  return (
    <div>
      <Hero {...hero} />
    </div>
  );
}
