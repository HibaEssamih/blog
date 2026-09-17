import React, { useEffect, useRef, useState } from "react";
import "./motivog.css";
import "./motivog-nav.css";

import heroBg from "../../assets/hero-background.png";
import heroTea from "../../assets/hero-tea.png";
import heroFlower from "../../assets/hero-flower.png";
import trendBeauty from "../../assets/trend-beauty.png";
import trendWellness from "../../assets/trend-wellness.png";
import trendTravel from "../../assets/trend-travel.png";
import trendDesign from "../../assets/trend-design.png";
import trendCulture from "../../assets/trend-culture.png";
import trendMindful from "../../assets/trend-mindful.png";
import storyMorning from "../../assets/story-slow-morning.png";
import storyCoast from "../../assets/story-kinder-coast.png";
import storyHome from "../../assets/story-meaningful-home.png";
import storySkin from "../../assets/story-skincare.png";
import storySpace from "../../assets/story-better-spaces.png";
import storyFood from "../../assets/story-brighter-food.png";
import inspiredLife from "../../assets/inspired-life.png";
import chapterTravel from "../../assets/chapter-travel.png";
import chapterWellness from "../../assets/chapter-wellness.png";
import chapterCulture from "../../assets/chapter-culture.png";
import chapterDesign from "../../assets/chapter-design.png";
import chapterBeauty from "../../assets/chapter-beauty.png";
import shopBanner from "../../assets/shop-banner.png";
import shopBooks from "../../assets/shop-books.png";
import contributor from "../../assets/contributor.png";
import newsletterArt from "../../assets/newsletter-art.png";
import newsletterPlant from "../../assets/newsletter-plant.png";

const navItems = [["01", "Home", "#top"], ["02", "Stories", "#latest"], ["03", "Topics", "#topics"], ["04", "The edit", "#curated"], ["05", "Journal", "#newsletter"]];
const topics = [
  ["Beauty", "124 stories", trendBeauty, "#8d1e3d"], ["Wellness", "98 stories", trendWellness, "#c66a6a"],
  ["Travel", "76 stories", trendTravel, "#2d568f"], ["Design", "66 stories", trendDesign, "#7b8668"],
  ["Culture", "92 stories", trendCulture, "#a87958"], ["Mindful Living", "71 stories", trendMindful, "#c38392"],
];
const stories = [
  ["Travel", "Hidden gems for a kinder coast", storyCoast], ["Culture", "The art of a meaningful home", storyHome],
  ["Beauty", "Skincare that feels like self-care", storySkin], ["Design", "Spaces that inspire better days", storySpace],
  ["Wellness", "Food that fuels a brighter you", storyFood],
];
const chapters = [
  ["Travel", "5 breathtaking escapes for mindful travelers", chapterTravel], ["Wellness", "A gentler approach to a stronger you", chapterWellness],
  ["Culture", "The small towns with big stories", chapterCulture], ["Design", "Design ideas for a calmer home", chapterDesign],
  ["Beauty", "Everyday beauty rituals we love", chapterBeauty],
];

const Arrow = ({ direction = "right" }) => <span aria-hidden="true">{direction === "right" ? "↗" : "↙"}</span>;
const Tag = ({ children }) => <span className="mv-tag">{children}</span>;

function Reveal({ children, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.unobserve(node); }
    }, { threshold: 0.1, rootMargin: "0px 0px -8%" });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`mv-reveal ${visible ? "is-visible" : ""} ${className}`}>{children}</div>;
}

function SectionHeading({ eyebrow, title, copy, action }) {
  return <div className="mv-section-head"><div>{eyebrow && <p className="mv-eyebrow">{eyebrow}</p>}<h2>{title}</h2>{copy && <p>{copy}</p>}</div>{action && <a className="mv-text-button" href="#latest">{action} <Arrow /></a>}</div>;
}

export default function MotivogHome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeFilter, setActiveFilter] = useState("All");
  const heroRef = useRef(null);

  useEffect(() => {
    const update = () => {
      const top = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(top > 24); setScrollProgress(total > 0 ? (top / total) * 100 : 0);
      if (heroRef.current && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) heroRef.current.style.setProperty("--scroll-y", `${Math.min(top, 700)}px`);
    };
    update(); window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  useEffect(() => { document.body.style.overflow = menuOpen ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const filteredStories = activeFilter === "All" ? stories : stories.filter(([tag]) => tag === activeFilter);

  return <main className="mv-page">
   
    <section id="top" ref={heroRef} className="mv-hero">
      <img className="mv-hero-bg" src={heroBg} alt="Woman surrounded by magnolia blossoms at sunrise" />
      <div className="mv-hero-shade"/><div className="mv-hero-grain"/><div className="mv-hero-orbit"/>
      <img className="mv-hero-flower" src={heroFlower} alt="" aria-hidden="true" />
      <div className="mv-petal mv-petal-one"/><div className="mv-petal mv-petal-two"/><div className="mv-petal mv-petal-three"/>
      <div className="mv-hero-content"><p className="mv-kicker"><span/> A brighter, kinder you</p><h1><span>Stories for a</span><em>more inspired life.</em></h1><p className="mv-hero-copy">Thoughtful stories, beautiful living and practical ideas for a healthier, happier, more meaningful you.</p><div className="mv-hero-actions"><a className="mv-primary" href="#latest"><span>Explore stories</span><Arrow /></a><a className="mv-secondary" href="#curated">Today’s edit <span>05</span></a></div><a className="mv-scroll" href="#topics"><i>↓</i><span>Scroll to discover</span></a></div>
      <article className="mv-floating-card"><div className="mv-card-image"><img src={heroTea} alt="Magnolia botanical tea"/><span>05 min</span></div><div><Tag>Wellness</Tag><h3>Small rituals.<br/>A brighter you.</h3></div><a href="#latest" aria-label="Read story"><Arrow /></a></article>
      <div className="mv-side-note"><span>Beauty</span><span>Wellness</span><span>Culture</span><span>Travel</span></div><div className="mv-hero-index"><b>01</b><span/><small>06</small></div>
    </section>

    <div className="mv-marquee" aria-hidden="true"><div>GOOD IDEAS, BRIGHTER DAYS ✦ WELLNESS FOR REAL LIFE ✦ A MORE MINDFUL TOMORROW ✦ PEOPLE, PLACES, PERSPECTIVES ✦ BEAUTY IN THE EVERYDAY ✦ GOOD IDEAS, BRIGHTER DAYS ✦ WELLNESS FOR REAL LIFE ✦ A MORE MINDFUL TOMORROW ✦</div></div>
    <Reveal><section id="topics" className="mv-section mv-topics"><SectionHeading eyebrow="Explore by mood" title="Trending topics" action="Explore all"/><div className="mv-topic-row">{topics.map(([name,count,image,color], index) => <a className="mv-topic" href="#latest" key={name} style={{"--delay": `${index * 60}ms`}}><div className="mv-topic-image"><img src={image} alt={name}/><span><Arrow /></span><b>0{index + 1}</b></div><div className="mv-topic-meta"><i style={{background:color}}/><div><h3>{name}</h3><p>{count}</p></div></div></a>)}</div></section></Reveal>
    <Reveal><section id="latest" className="mv-section mv-latest"><SectionHeading eyebrow="The new edit" title="Latest stories" copy="Fresh perspectives for a more inspired life."/><div className="mv-filters">{["All","Beauty","Wellness","Culture","Travel","Design"].map(x => <button className={activeFilter === x ? "active" : ""} onClick={() => setActiveFilter(x)} key={x}>{x}</button>)}</div><div className={`mv-story-grid ${activeFilter !== "All" ? "is-filtered" : ""}`}>
      {(activeFilter === "All" || activeFilter === "Wellness") && <article className="mv-feature-card"><img src={storyMorning} alt="A slow morning with tea"/><div className="mv-feature-overlay"><Tag>Wellness</Tag><h3>The power<br/>of a slower<br/><em>morning</em></h3><p>How small rituals can create a calmer, happier you.</p><a href="#curated">Read the story <Arrow /></a></div><span className="mv-card-number">01</span></article>}
      {filteredStories.map(([tag,title,image],index) => <article className={`mv-small-story mv-small-${index + 1}`} key={title}><img src={image} alt={title}/><div><Tag>{tag}</Tag><h3>{title}</h3><a href="#curated">Read more <Arrow /></a></div><span className="mv-card-number">0{index + 2}</span></article>)}
    </div></section></Reveal>
    <Reveal><section className="mv-inspired"><img src={inspiredLife} alt="Magnolia flowers on a deep burgundy background"/><div className="mv-inspired-shade"/><div className="mv-inspired-copy"><p className="mv-eyebrow">Our point of view</p><blockquote>“A more<br/><em>inspired life</em><br/>is a kinder life.”</blockquote><span>Real people. Brighter perspectives.</span></div><button className="mv-play" aria-label="Watch our story"><i>▶</i><small>Watch<br/>our story</small></button></section></Reveal>
    <Reveal><section id="curated" className="mv-section mv-curated"><SectionHeading eyebrow="Handpicked for you" title="Curated for your next chapter" action="Explore more"/><div className="mv-chapter-grid">{chapters.map(([tag,title,image],index) => <article className="mv-chapter-card" key={title}><div><img src={image} alt={title}/><span>0{index + 1}</span></div><Tag>{tag}</Tag><h3>{title}</h3><a href="#latest">Discover <Arrow /></a></article>)}</div><div className="mv-dots"><i className="active"/><i/><i/><i/></div></section></Reveal>
    <Reveal><section className="mv-shop"><img className="mv-shop-bg" src={shopBanner} alt="Mindful living collection"/><div className="mv-shop-light"/><img className="mv-shop-books" src={shopBooks} alt="Clothbound lifestyle books"/><div className="mv-shop-copy"><p className="mv-eyebrow">The Motivog shop · Edition 01</p><h2>Beautiful things<br/><em>for a brighter you.</em></h2><p>Curated tools, books and everyday essentials for a more mindful life.</p><a className="mv-primary" href="#newsletter"><span>Shop the collection</span><Arrow /></a></div></section></Reveal>
    <Reveal><section className="mv-contributor"><div className="mv-contributor-image"><img src={contributor} alt="Writer working at a warm home studio"/><span>Tell your story</span></div><div className="mv-contributor-copy"><p className="mv-eyebrow">Become a contributor</p><h2>Share your voice<br/><em>with Motivog.</em></h2><p>We’re always looking for fresh perspectives, personal stories and new ideas.</p><a className="mv-primary" href="#newsletter"><span>Write for us</span><Arrow /></a></div><ul><li><b>01</b><span>Real stories</span></li><li><b>02</b><span>Diverse voices</span></li><li><b>03</b><span>A kinder community</span></li></ul></section></Reveal>
    <Reveal><section id="newsletter" className="mv-newsletter"><div><p className="mv-eyebrow">A thoughtful note, weekly</p><h2>Join our<br/><em>newsletter</em></h2><p>Inspiring stories, fresh ideas and exclusive edits, delivered with care.</p></div><form onSubmit={e => e.preventDefault()}><label><span className="sr-only">Email address</span><input type="email" placeholder="Your email address" required/><button type="submit">Subscribe <Arrow /></button></label><div><span>✓ Inspiring stories</span><span>✓ Exclusive edits</span><span>✓ No noise</span></div></form><img className="mv-newsletter-art" src={newsletterArt} alt="Illustrated editorial notes"/><img className="mv-newsletter-plant" src={newsletterPlant} alt="" aria-hidden="true"/></section></Reveal>
    <footer className="mv-footer"><div className="mv-footer-brand"><a className="mv-logo" href="#top">Motivog</a><p>Stories for a more inspired life.</p><div>Instagram &nbsp; Pinterest &nbsp; Journal</div></div>{[["Explore","Beauty","Wellness","Culture","Travel","Design"],["About","Our story","Contributors","Work with us","Shop","Contact"],["Support","Help center","Guidelines","Terms","Privacy","Accessibility"]].map(([title,...items]) => <div className="mv-footer-col" key={title}><h3>{title}</h3>{items.map(x => <a href="#top" key={x}>{x}</a>)}</div>)}<blockquote>“A kinder<br/>brighter world<br/><em>through stories.</em>”</blockquote><div className="mv-copyright">© 2026 Motivog. All rights reserved.<span>Made for a more inspired tomorrow.</span></div></footer>
  </main>;
}
