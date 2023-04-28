import Hero from "components/Hero";

let hero = {
  title:"About Jeff Smith Construction"
}

export default function About() {
  return (
    <div>
      <Hero {...hero}/>
    </div>
  );
}
