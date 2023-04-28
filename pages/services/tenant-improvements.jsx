import Hero from "components/Hero";

let hero = {
  title: "Tenant Improvements",
};

export default function TenantImprovements() {
  return (
    <div>
      <Hero {...hero} />
    </div>
  );
}
