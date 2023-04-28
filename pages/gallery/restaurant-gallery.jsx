import Hero from "components/Hero";

let hero = {
  title:"Restaurant Gallery"
}

export default function RestaurantGallery() {
  return (
    <div>
      <Hero {...hero}/>
    </div>
  );
}
