import Hero from "components/Hero";

let hero = {
  title:"Retail Gallery"
}

export default function RetailGallery() {
  return (
    <div>
      <Hero {...hero}/>
    </div>
  );
}
