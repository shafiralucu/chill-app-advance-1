import { useRef } from "react";

export default function CarouselSection({ title, items }) {
  const scrollerRef = useRef(null);
  const scrollBy = (px) => scrollerRef.current?.scrollBy({ left: px, behavior: "smooth" });

  return (
    <section className="continue-section">
      <h2>{title}</h2>
      <div className="continue-carousel-wrapper">
        <button className="scroll-btn left" onClick={() => scrollBy(-400)}>❮</button>
        <div className="continue-carousel" ref={scrollerRef}>
          {items.map((m, i) => (
            <div className="movie-card" key={i}>
              <img src={m.img} alt={m.title} />
              <div className="movie-info">
                <span>{m.title}</span>
                <span className="rating">★ {m.rating}</span>
              </div>
            </div>
          ))}
        </div>
        <button className="scroll-btn right" onClick={() => scrollBy(400)}>❯</button>
      </div>
    </section>
  );
}
