import Hero from "components/Hero";

let hero = {
  title:"Office Gallery"
}

export default function OfficeGallery() {
  return (
    <div>
      <Hero {...hero}/>
    </div>
  );
}
