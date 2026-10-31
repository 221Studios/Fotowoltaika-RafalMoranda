"use client";

import { useCallback, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";

import { customerReviews } from "@/data/customerReviews";
import styles from "./CustomerReviews.module.css";

gsap.registerPlugin(ScrollTrigger);

const CARD_GAP = 20;
const LERP_FACTOR = 0.075;
const VELOCITY_DAMPING = 0.95;
const VELOCITY_THRESHOLD = 0.05;
const REVIEW_PHOTOS = [
  "/images/realizacje/stary-nakwasin.webp",
  "/images/realizacje/przespolew-koscielny.webp",
  "/images/realizacje/prazuchy-nowe.webp",
];

function Rating({ large = false }) {
  return (
    <div
      className={`${styles.rating} ${large ? styles.largeRating : ""}`}
      role="img"
      aria-label="Ocena: 5 na 5 gwiazdek"
    >
      {Array.from({ length: 5 }, (_, index) => (
        <span key={index} aria-hidden="true">★</span>
      ))}
    </div>
  );
}

export default function CustomerReviews() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const slideByRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const cards = gsap.utils.toArray(track.querySelectorAll("[data-review-card]"));
    const navButtons = section.querySelectorAll("[data-review-nav]");
    if (!cards.length) return;

    gsap.set(navButtons, { scale: 0 });
    gsap.set(cards, { scale: 0.85, autoAlpha: 0 });

    const entrance = ScrollTrigger.create({
      trigger: section,
      start: "top 75%",
      once: true,
      onEnter: () => {
        gsap.to(navButtons, {
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: 0.1,
          delay: 0.3,
        });
        gsap.to(cards, {
          scale: 1,
          autoAlpha: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.1,
          delay: 0.2,
        });
      },
    });

    // Reuse the horizontal drag, inertia, and wrap behavior from the
    // salle-blanche Testimonials slider; only card sizing is adapted here.
    let itemWidth = 0;
    let totalWidth = 0;
    let wrapPosition = (value) => value;
    let targetX = 0;
    let currentX = 0;
    let isDragging = false;
    let dragStartPointerX = 0;
    let dragStartTargetX = 0;
    let velocityX = 0;
    let lastPointerX = 0;
    let lastPointerTime = 0;

    const measure = (reset = false) => {
      gsap.set(cards, { clearProps: "height" });
      // offsetWidth ignores the entrance scale, so spacing stays correct once
      // ScrollTrigger animates the cards from 0.85 to their full size.
      const cardWidth = cards[0].offsetWidth;
      itemWidth = cardWidth + CARD_GAP;
      totalWidth = cards.length * itemWidth;
      wrapPosition = gsap.utils.wrap(-itemWidth, totalWidth - itemWidth);
      const cardHeights = cards.map((card) => card.scrollHeight);
      const trackHeight = Math.max(...cardHeights);

      if (reset) {
        targetX = 0;
        currentX = 0;
      }

      gsap.set(cards, {
        position: "absolute",
        left: 0,
        top: 0,
        height: (index) => cardHeights[index],
        x: (index) => wrapPosition(index * itemWidth + currentX),
      });
      gsap.set(track, { height: trackHeight });
    };

    measure(true);
    slideByRef.current = (direction) => {
      velocityX = 0;
      targetX += direction * itemWidth;
    };

    const updateCardPositions = () => {
      if (!isDragging) {
        targetX += velocityX;
        velocityX *= VELOCITY_DAMPING;
        if (Math.abs(velocityX) < VELOCITY_THRESHOLD) velocityX = 0;
      }

      currentX += (targetX - currentX) * LERP_FACTOR;
      cards.forEach((card, index) => {
        gsap.set(card, { x: wrapPosition(index * itemWidth + currentX) });
      });
    };

    gsap.ticker.add(updateCardPositions);

    const handlePointerDown = (event) => {
      if (event.target.closest("button, a")) return;
      isDragging = true;
      dragStartPointerX = event.clientX;
      dragStartTargetX = targetX;
      velocityX = 0;
      lastPointerX = event.clientX;
      lastPointerTime = Date.now();
      track.setPointerCapture(event.pointerId);
      track.style.cursor = "grabbing";
    };

    const handlePointerMove = (event) => {
      if (!isDragging) return;
      targetX = dragStartTargetX + event.clientX - dragStartPointerX;

      const now = Date.now();
      const timeDelta = now - lastPointerTime;
      if (timeDelta > 0) {
        velocityX = ((event.clientX - lastPointerX) / timeDelta) * 16;
        lastPointerX = event.clientX;
        lastPointerTime = now;
      }
    };

    const handlePointerUp = () => {
      isDragging = false;
      track.style.cursor = "grab";
    };

    let dragEnabled = false;
    const enableDrag = () => {
      if (dragEnabled) return;
      track.addEventListener("pointerdown", handlePointerDown);
      track.addEventListener("pointermove", handlePointerMove);
      track.addEventListener("pointerup", handlePointerUp);
      track.addEventListener("pointercancel", handlePointerUp);
      track.style.cursor = "grab";
      track.style.touchAction = "pan-y";
      dragEnabled = true;
    };

    const disableDrag = () => {
      if (!dragEnabled) return;
      track.removeEventListener("pointerdown", handlePointerDown);
      track.removeEventListener("pointermove", handlePointerMove);
      track.removeEventListener("pointerup", handlePointerUp);
      track.removeEventListener("pointercancel", handlePointerUp);
      track.style.cursor = "default";
      track.style.touchAction = "auto";
      isDragging = false;
      dragEnabled = false;
    };

    const handleResize = () => {
      measure();
      enableDrag();
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      entrance.kill();
      gsap.ticker.remove(updateCardPositions);
      disableDrag();
      window.removeEventListener("resize", handleResize);
      slideByRef.current = null;
      gsap.killTweensOf([...cards, ...navButtons]);
      cards.forEach((card) => gsap.set(card, { clearProps: "all" }));
      gsap.set(track, { clearProps: "height" });
    };
  }, []);

  const handlePrev = useCallback(() => slideByRef.current?.(1), []);
  const handleNext = useCallback(() => slideByRef.current?.(-1), []);

  return (
    <section className={styles.section} ref={sectionRef} aria-labelledby="reviews-title">
      <div className={`container ${styles.container}`}>
        <aside className={styles.summary}>
          <p className={`mono ${styles.kicker}`}>Opinie klientów</p>
          <h2 id="reviews-title">Opinie o współpracy z ALFA</h2>
          <Rating large />
          <p className={styles.summaryText}>
            Klienci piszą o montażu, obsłudze i kontakcie.
          </p>
          <div className={styles.googleWordmark} aria-label="Google">
            <span>G</span><span>o</span><span>o</span><span>g</span><span>l</span><span>e</span>
          </div>
          <a
            className={styles.googleLink}
            href="https://www.google.com/maps/place/?q=place_id%3AChIJW7gAcBXfGkcRpLSZ251ae5E"
            target="_blank"
            rel="noreferrer"
          >
            Zobacz opinie w Google <span aria-hidden="true">↗</span>
          </a>
        </aside>

        <div className={styles.carouselArea}>
          <div className={styles.controls}>
            <button
              className={styles.control}
              data-review-nav
              type="button"
              onClick={handlePrev}
              aria-label="Poprzednia opinia"
            >
              <FiArrowLeft aria-hidden="true" />
            </button>
            <button
              className={styles.control}
              data-review-nav
              type="button"
              onClick={handleNext}
              aria-label="Następna opinia"
            >
              <FiArrowRight aria-hidden="true" />
            </button>
          </div>
          <div className={styles.carousel}>
            <div className={styles.track} ref={trackRef}>
              {customerReviews.map((review, index) => (
                <article
                  className={styles.card}
                  data-review-card
                  key={`${review.author}-${index}`}
                  aria-label={`Opinia ${index + 1} z ${customerReviews.length}`}
                >
                  <div className={styles.cardContent}>
                    <div className={styles.cardHeader}>
                      <span className={styles.avatar} aria-hidden="true">
                        {review.author.trim().charAt(0).toLocaleUpperCase("pl-PL")}
                      </span>
                      <div className={styles.authorInfo}>
                        <h3>{review.author}</h3>
                        <span>Opinia Google</span>
                      </div>
                      <FcGoogle className={styles.googleIcon} aria-label="Google" />
                    </div>
                    <Rating />
                    <p>{review.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
