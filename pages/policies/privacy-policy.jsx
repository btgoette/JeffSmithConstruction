import Hero from "components/Hero";

let hero = {
  title: "Privacy Policy",
};

export default function PrivacyPolicy() {
  return (
    <div>
      <Hero {...hero} />
    </div>
  );
}
