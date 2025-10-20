import Hero from "../components/Hero.jsx";
import CarouselSection from "../components/CarouselSection.jsx";
import Footer from "../components/Footer.jsx";
import useBodyClass from "../hooks/useBodyClass.js";

const melanjutkan = [
  { img: "/assets/dont look up.png", title: "Don't Look Up", rating: "4.5/5" },
  { img: "/assets/all of us are dead.png", title: "The Batman", rating: "4.2/5" },
  { img: "/assets/bluelock.png", title: "Blue Lock", rating: "4.6/5" },
  { img: "/assets/a man called otto.png", title: "A Man Called Otto", rating: "4.4/5" },
  { img: "/assets/dont look up.png", title: "Don't Look Up", rating: "4.5/5" },
  { img: "/assets/all of us are dead.png", title: "The Batman", rating: "4.2/5" },
  { img: "/assets/bluelock.png", title: "Blue Lock", rating: "4.6/5" },
  { img: "/assets/a man called otto.png", title: "A Man Called Otto", rating: "4.4/5" },
  { img: "/assets/all of us are dead.png", title: "The Batman", rating: "4.2/5" },
  { img: "/assets/bluelock.png", title: "Blue Lock", rating: "4.6/5" },
];

const topRating = [
  { img: "/assets/image 219 (3).png", title: "Don't Look Up", rating: "4.5/5" },
  { img: "/assets/image 230.png", title: "The Batman", rating: "4.2/5" },
  { img: "/assets/image 234.png", title: "Blue Lock", rating: "4.6/5" },
  { img: "/assets/image 214.png", title: "A Man Called Otto", rating: "4.4/5" },
  { img: "/assets/image 217.png", title: "Don't Look Up", rating: "4.5/5" },
  { img: "/assets/image 230.png", title: "The Batman", rating: "4.2/5" },
  { img: "/assets/image 234.png", title: "Blue Lock", rating: "4.6/5" },
];

const trending = [
  { img: "/assets/image 212.png", title: "Don't Look Up", rating: "4.5/5" },
  { img: "/assets/image 221.png", title: "The Batman", rating: "4.2/5" },
  { img: "/assets/image 235.png", title: "Blue Lock", rating: "4.6/5" },
  { img: "/assets/image 215.png", title: "A Man Called Otto", rating: "4.4/5" },
  { img: "/assets/image 211.png", title: "Don't Look Up", rating: "4.5/5" },
  { img: "/assets/image 230.png", title: "The Batman", rating: "4.2/5" },
  { img: "/assets/image 234.png", title: "Blue Lock", rating: "4.6/5" },
];

const rilisBaru = [
  { img: "/assets/image 212.png", title: "Don't Look Up", rating: "4.5/5" },
  { img: "/assets/image 221.png", title: "The Batman", rating: "4.2/5" },
  { img: "/assets/image 235.png", title: "Blue Lock", rating: "4.6/5" },
  { img: "/assets/image 215.png", title: "A Man Called Otto", rating: "4.4/5" },
  { img: "/assets/image 211.png", title: "Don't Look Up", rating: "4.5/5" },
  { img: "/assets/image 230.png", title: "The Batman", rating: "4.2/5" },
  { img: "/assets/image 234.png", title: "Blue Lock", rating: "4.6/5" },
];

export default function Beranda() {
  useBodyClass(""); // ensure no auth bg
  return (
    <>
 
      <Hero />
      <CarouselSection title="Melanjutkan Tonton Film" items={melanjutkan} />
      <CarouselSection title="Top Rating Film dan Series Hari ini" items={topRating} />
      <CarouselSection title="Film Trending" items={trending} />
      <CarouselSection title="Rilis Baru" items={rilisBaru} />

    </>
  );
}
