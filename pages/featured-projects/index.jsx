import Hero from "components/Hero";

let hero = {
  title:"Featured Projects"
}

export default function FeaturedProjects() {
  return (
    <div>
      <Hero {...hero}/>
    </div>
  );
}
