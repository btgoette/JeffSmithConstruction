import Hero from "components/Hero";

let hero = {
  title:"Construction Gallery"
}

export default function Gallery() {
  return (
    <div>
      <Hero {...hero}/>
    </div>
  );
}
