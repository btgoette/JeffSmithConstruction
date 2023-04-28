import Hero from "components/Hero";

let hero = {
  title: "403 Page Forbidden",
};

export default function Error403() {
  return (
    <div>
      <Hero {...hero} />
    </div>
  );
}
