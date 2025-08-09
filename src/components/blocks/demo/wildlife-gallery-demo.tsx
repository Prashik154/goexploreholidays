// components/demo/wildlife-gallery-demo.tsx
import { WildlifeGallery } from "@/components/wildlife-gallery/wildlife-gallery";  

export function WildlifeGalleryDemo() {
  const wildlifeCards = [
    {
      title: "BabyBird",
      src: "/images/sightings/BabyBird.jpg",
      width: 1000,
      height: 800
    },
    {
      title: "Barasinga",
      src: "/images/sightings/Barasinga.jpg",
      width: 1000,
      height: 800
    },
    {
      title: "Bear",
      src: "/images/sightings/Bear.jpg",
      width: 1000,
      height: 800
    },
    {
      title: "Bengal Tiger",
      src: "/images/sightings/Bengal Tiger.jpg",
      width: 1000,
      height: 800
    },
    {
      title: "Birds",
      src: "/images/sightings/Birds.jpg",
      width: 1000,
      height: 800
    },
    {
      title: "Bison",
      src: "/images/sightings/Bison.jpg",
      width: 1000,
      height: 800
    },
    {
      title: "BlueBird",
      src: "/images/sightings/BlueBird.jpg",
      width: 1000,
      height: 800
    },
    {
      title: "Crocodile",
      src: "/images/sightings/Crocodile.jpg",
      width: 1000,
      height: 800
    },
    {
      title: "Crow",
      src: "/images/sightings/Crow.jpg",
      width: 1000,
      height: 800
    },
    {
      title: "Cruel Tiger",
      src: "/images/sightings/Cruel Tiger.jpg",
      width: 1000,
      height: 800
    },
    {
      title: "Deer",
      src: "/images/sightings/Deer.jpg",
      width: 1000,
      height: 800
    },
    {
      title: "Eagle",
      src: "/images/sightings/Eagle.jpg",
      width: 1000,
      height: 800
    },
    {
      title: "Group",
      src: "/images/sightings/Group.jpg",
      width: 1000,
      height: 800
    },
    {
      title: "Hawk",
      src: "/images/sightings/Hawk.jpg",
      width: 1000,
      height: 800
    },
    {
      title: "Kite",
      src: "/images/sightings/Kite.jpg",
      width: 1000,
      height: 800
    },
    {
      title: "Leopard",
      src: "/images/sightings/Leopard.jpg",
      width: 1000,
      height: 800
    },
    {
      title: "Stork",
      src: "/images/sightings/Stork.jpg",
      width: 1000,
      height: 800
    },
    {
      title: "Tiger1",
      src: "/images/sightings/Tiger1.jpg",
      width: 1000,
      height: 800
    },
    {
      title: "Tiger2",
      src: "/images/sightings/Tiger2.jpg",
      width: 1000,
      height: 800
    }
];  

  return (
    <section className="py-20">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-roboto">
          Wildlife Gallery
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Discover the magnificent wildlife you&apos;ll encounter on our safaris
        </p>
        <WildlifeGallery cards={wildlifeCards} />
      </div>
    </section>
  );
}