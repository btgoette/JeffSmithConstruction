import Hero from "components/Hero";

let hero = {
  title:"Commercial Construction"
}

export default function CommercialConstruction() {
  return (
    <div>
      <Hero {...hero}/>
    </div>
  );
}
