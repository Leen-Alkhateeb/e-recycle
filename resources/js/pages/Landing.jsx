import React, { useEffect, useState } from "react";
import "./landing.css";

const accessoryProducts = [
  {
    name: "ReLoop Phone Card Holder",
    description: "Keep your everyday essentials close with a slim, practical design.",
    price: "JOD 8.90",
    oldPrice: "JOD 11.00",
    colors: ["#17201f", "#5946b8", "#e8e8e8", "#0b5146"],
    image: "https://m.media-amazon.com/images/I/716CgNdIi5L.jpg",
    tag: "20% OFF",
  },
  {
    name: "ReLoop Magnetic Grip",
    description: "A comfortable grip that makes using your phone easier.",
    price: "JOD 8.90",
    oldPrice: "JOD 11.00",
    colors: ["#17201f", "#5946b8", "#e8e8e8", "#0b5146"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDg5HRzAetYbaf2bloSjtMSXkhR7BEaDtiDUld6LSC3A&s=10",
    tag: "20% OFF",
  },
  {
    name: "ReLoop Charging Cable",
    description: "A durable everyday cable for charging and syncing your devices.",
    price: "JOD 7.50",
    oldPrice: "JOD 9.50",
    colors: ["#17201f", "#e8e8e8"],
    image: "https://ghostek.com/cdn/shop/files/Ghostek_iPhone17ProMax_Bundle_ClearMatte_1_2044x2044.png?v=1763155948",
    tag: "20% OFF",
  },
  {
    name: "ReLoop Protective Case",
    description: "Lightweight protection with a clean, low-profile finish.",
    price: "JOD 9.90",
    oldPrice: "JOD 12.50",
    colors: ["#0b5146", "#5946b8", "#171717", "#e8e8e8"],
    image: "https://img-1.kwcdn.com/product/open/5200a2d21bc542d0a511543718b390fc-goods.jpeg?imageView2/2/w/800/q/70/format/avif",
    tag: "20% OFF",
  },
];

const audioProducts = [
  {
    title: "ReLoop Studio Headphones",
    subtitle: "Rich sound. Thoughtful design.",
    description: "Comfortable listening with long-lasting battery life.",
    price: "JOD 59",
    image: "https://globaltechparts.co.za/cdn/shop/collections/head-phone-earbuds-with-white-back-ground_1.png?v=1754728604",
    tag: "20% OFF",
  },
  {
    title: "ReLoop Wireless Buds",
    subtitle: "Small in size. Big on sound.",
    description: "Everyday wireless audio, made to keep you moving.",
    price: "JOD 35",
    image: "https://limamobilejordan.com/cdn/shop/files/huawei-se2-google-merchant-v2_ecd2bb65-426c-4969-8591-c319c6a52b8d.png?v=1791386442&width=832",
    tag: "",
  },
];

function Arrow() {
  return <span className="rl-arrow" aria-hidden="true">→</span>;
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="rl-header">
      <a className="rl-logo" href="#top">reloop<span>.</span></a>
      <button className="rl-menu" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
        <span /><span />
      </button>
      <nav className={open ? "rl-nav rl-nav-open" : "rl-nav"}>
        <a href="#shop" onClick={() => setOpen(false)}>Shop</a>
        <a href="#about" onClick={() => setOpen(false)}>About</a>
        <a href="#stories" onClick={() => setOpen(false)}>ReLoop Stories</a>
        <span className="rl-nav-gap" />
        <a href="#club" onClick={() => setOpen(false)}>Points Club</a>
        <a href="#trade" onClick={() => setOpen(false)}>Trade-in</a>
        <a href="#footer" onClick={() => setOpen(false)}>Support</a>
      </nav>
      <div className="rl-actions">
        <a href="/account" aria-label="Account" className="rl-account">♙</a>
        <a href="/cart" aria-label="Cart" className="rl-cart">🛒<b>0</b></a>
        <span className="rl-language">EN</span>
      </div>
    </header>
  );
}

function ProductCard({ product }) {
  const [color, setColor] = useState(0);
  return (
    <article className="rl-product-card">
      <span className="rl-discount">{product.tag}</span>
      <a className="rl-product-photo" href="/shop">
        <img loading="lazy" src={product.image} alt={product.name} onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "/reloop-fallback.svg"; }} />
      </a>
      <div className="rl-product-info">
        <h3>{product.name}</h3>
        <div className="rl-swatches" aria-label="Available colours">
          {product.colors.map((c, i) => (
            <button key={c + i} aria-label={`Colour ${i + 1}`} className={color === i ? "selected" : ""} style={{ "--swatch": c }} onClick={() => setColor(i)} />
          ))}
        </div>
        <p>{product.description}</p>
        <div className="rl-price-row">
          <div><strong>{product.price}</strong><del>{product.oldPrice}</del></div>
          <a href="/shop" className="rl-round-arrow" aria-label={`View ${product.name}`}><Arrow /></a>
        </div>
      </div>
    </article>
  );
}

function FeaturePhone() {
  return (
    <section className="rl-feature">
      <div className="rl-feature-images">
        <img className="rl-feature-single" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPXxdp_zA8CZi-hQ3_t2ropdRustUaWibs4IK6nXqeSQ&s=10" alt="ReLoop refurbished smartphones, front and back" />
      </div>
      <div className="rl-feature-panel">
        <span className="rl-discount">FEATURED DEVICE</span>
        <h2>The ReLoop<br />Renewed Series</h2>
        <h3>Better tech. Better value.</h3>
        <ul>
          <li>Professionally checked and tested</li>
          <li>Quality grades you can trust</li>
          <li>Warranty included with every device</li>
        </ul>
        <div className="rl-free-box"><span>READY</span><b>＋</b><span>RENEWED</span></div>
        <div className="rl-feature-price">From <strong>JOD 199</strong></div>
        <a href="/shop" className="rl-button">LEARN MORE <Arrow /></a>
      </div>
    </section>
  );
}

function CategoryFeature({ item }) {
  return (
    <article className="rl-category-feature">
      <div className="rl-category-image">
        <img loading="lazy" src={item.image} alt={item.title} onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "/reloop-fallback.svg"; }} />
      </div>
      <div className="rl-category-copy">
        {item.tag && <span className="rl-discount">{item.tag}</span>}
        <h3>{item.title}</h3>
        <h4>{item.subtitle}</h4>
        <p>{item.description}</p>
        <strong className="rl-category-price">{item.price}</strong>
        <a className="rl-button" href="/shop">LEARN MORE <Arrow /></a>
      </div>
    </article>
  );
}

export default function Landing() {
  useEffect(() => {
    const reveal = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("rl-visible");
          reveal.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".rl-reveal").forEach((el) => reveal.observe(el));
    return () => reveal.disconnect();
  }, []);

  return (
    <div className="reloop">
      <Header />
      <main id="top">
        <section className="rl-hero rl-hero-product">
          <div className="rl-hero-content rl-reveal">
            <span className="rl-discount">MEET YOUR NEXT DEVICE</span>
            <h1>Your next phone.<br />A <em>smarter choice.</em></h1>
            <p>Premium refurbished smartphones, carefully checked<br />and ready for a fresh start.</p>
            <a href="#shop" className="rl-button">EXPLORE SMARTPHONES <Arrow /></a>

          </div>
          <div className="rl-hero-device" aria-label="ReLoop refurbished smartphone product image">
            <span className="rl-device-orbit rl-device-orbit-one" />
            <span className="rl-device-orbit rl-device-orbit-two" />
            <img src="https://bdeea.com/wp-content/uploads/2026/09/9361542223-iphone-14-png.png" alt="Two premium ReLoop smartphones, front and back" />
            <span className="rl-float-label">RENEWED<br /><b>BETTER.</b></span>
          </div>
        
        </section>

        <section className="rl-sale-banner rl-reveal">
          <div><span>THE RELOOP EDIT</span><h2>Shop smart. Choose <em>better.</em></h2><p>Discover this season's renewed favourites.</p></div>
          <a href="#shop" className="rl-button rl-button-light">DISCOVER THE COLLECTION <Arrow /></a>
        </section>

        <section className="rl-accessories rl-reveal" id="shop">
          <div className="rl-product-grid">
            {accessoryProducts.map((product) => <ProductCard key={product.name} product={product} />)}
          </div>
        </section>

        <FeaturePhone />

        <section className="rl-audio rl-reveal" id="audio">
          <div className="rl-category-label">Audio</div>
          <div className="rl-category-grid">
            {audioProducts.map((item) => <CategoryFeature key={item.title} item={item} />)}
          </div>
        </section>

        <section className="rl-repair rl-reveal" id="about">
          <div className="rl-repair-image"><img loading="lazy" src="" alt="Electronic device components" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "/https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdilRTy76dHCdnD4GXrs8aWutwdWD-VUe1ZBp8_Hi9DMs882VC7yWumwaD&s=10"; }} /></div>
          <div className="rl-repair-copy">
            <span classNamcontacte="rl-overline">REPAIR OVER REPLACE</span>
            <h2>Keep good tech<br />in <em>circulation.</em></h2>
            <p>Choosing renewed technology helps reduce electronic waste and gives great devices more time to do what they do best.</p>
            <a href="/about" className="rl-button">WHY RELOOP <Arrow /></a>
          </div>
        </section>

        <section className="rl-impact rl-reveal" id="trade">
          <div className="rl-impact-content">
            <span className="rl-overline">YOUR OLD DEVICE HAS VALUE</span>
            <h2>Pass it on.<br /><em>Power the next.</em></h2>
            <p>Trade in your old device and make room for something new to you.</p>
            <a href="/evaluate" className="rl-button rl-button-light">START A TRADE-IN <Arrow /></a>
          </div>
        </section>

        <section className="rl-club rl-reveal" id="club">
          <div className="rl-club-art"><span>RE<br />LOOP</span><b>✳</b></div>
          <div><span className="rl-overline">GOOD CHOICES COME AROUND</span><h2>Join the <em>ReLoop Club.</em></h2><p>Earn points when you shop, trade in, and give technology another chance.</p><a href="/register" className="rl-button">JOIN THE CLUB <Arrow /></a></div>
        </section>

        <section className="rl-stories rl-reveal" id="stories">
          <div className="rl-section-heading"><span className="rl-overline">THE RELOOP JOURNAL</span><h2>Stories worth <em>sharing.</em></h2></div>
          <div className="rl-story-grid">
            <a href="/stories"><img loading="lazy" src="https://media.action.jo/cdn-cgi/image/w=2000,h=2000,f=webp,q=100,fit=contain/https://media.action.jo/55479/oUzMwmXDQ6kDNQ0JRTVnwsC3gCf2nB1glXR4j57p.png" alt="People working with technology" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "/reloop-fallback.svg"; }} /><h3>Give your tech a second life <Arrow /></h3></a>
            <a href="/stories"><img loading="lazy" src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15?auto=format&fit=crop&w=900&q=90" alt="Recycling and reuse" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "/reloop-fallback.svg"; }} /><h3>Rethink the way you upgrade <Arrow /></h3></a>
            <a href="/stories"><img loading="lazy" src="https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=900&q=90" alt="Consumer electronics" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "/reloop-fallback.svg"; }} /><h3>Small choices. Real impact <Arrow /></h3></a>
          </div>
        </section>
      </main>
      <footer className="rl-footer" id="footer">
        <div className="rl-footer-newsletter">
          <div><span className="rl-overline">STAY IN THE LOOP</span><h2>Good tech news.<br /><em>Nothing extra.</em></h2><p>New arrivals, smart offers and ideas for making tech last longer.</p></div>
          <form className="rl-newsletter-form" onSubmit={(e) => { e.preventDefault(); window.alert("Thanks for joining the ReLoop list!"); }}><label className="sr-only" htmlFor="rl-email">Email address</label><input id="rl-email" type="email" placeholder="Your email address" required /><button type="submit" aria-label="Subscribe">JOIN <Arrow /></button></form>
        </div>
        <div className="rl-footer-columns">
          <div className="rl-footer-brand"><a className="rl-logo" href="#top">reloop<span>.</span></a><p>Better tech. Longer life.<br />A smarter way to upgrade.</p></div>
          <div><b>EXPLORE</b><a href="#shop">Shop devices</a><a href="#audio">Audio & accessories</a><a href="#trade">Trade-in</a></div>
          <div><b>RELOOP</b><a href="#about">Our approach</a><a href="#stories">Stories</a><a href="#club">Points Club</a></div>
          <div><b>WE'RE HERE</b><a href="/contact">Contact us</a><a href="/support">Help & support</a><a href="/shipping">Shipping & returns</a></div>
        </div>
        <div className="rl-footer-bottom"><span>© 2026 RELOOP. ALL RIGHTS RESERVED.</span><span>MADE FOR A SECOND LIFE.</span><a href="#top">BACK TO TOP ↑</a></div>
      </footer>
      <button className="rl-chat" aria-label="Chat with ReLoop"><span /></button>
    </div>
  );
}
