// Hero Section

import Hero from "../HeroSection/HeroSection";
// CSS
import "./About.css"

export default function About() {
  return (
    <>
      {/* Hero Banner */}
      <Hero className={"about-fluid"} page={"About"} />

      <div className="container-about-page">
        {/* Left Column */}
        <div className="idea-para">
          <h1 className="about-heading"> The Idea</h1>
          <p className="about-text">
            The idea for <strong>The ShopTopOne Pages</strong> came about because people often asked us
            for advice about which ShopTopOne they should buy. The more this happened—
            and it happened a lot—the more we realized that searching for a ShopTopOne
            online is a minefield of information.
          </p>
          <p className="about-text">
            Leveraging our 20 years of experience in the ShopTopOne industry, we
            understood the intricacies of selecting the perfect timepiece.
            Visiting individual brand websites is great, but with hundreds of
            brands in Switzerland alone, the search can be overwhelming.
          </p>
          <p className="about-text">
            Recognizing this need, we created <strong>The ShopTopOne Pages</strong> — not just
            a website, but a comprehensive platform where you can explore new
            ShopTopOnees worldwide, compare models, check prices, and discover
            emerging brands — all in one place.
          </p>
        </div>

        {/* Right Column */}
        <div className="about-right">
          <h1 className="about-heading">The ShopTopOne Page Shop</h1>
          <p className="about-text">
            Our shop features a curated selection of genuine ShopTopOnees, sourced
            directly from manufacturers. We continuously add new brands and
            models, ensuring you always find something unique. As authorized
            retailers, we guarantee authenticity, excellent service, and great
            value.
          </p>

          <div className="ShopTopOne-finder">
            <h2 className="about-subheading">The ShopTopOne Finder</h2>
            <p className="about-text">
              Today, <strong>The ShopTopOne Pages</strong> hosts the world’s largest ShopTopOne
              database, featuring over <strong>150 brands</strong> and more than{" "}
              <strong>20,000 ShopTopOnees</strong> — and growing every week.
            </p>
            <p className="about-text">
              Whether you're a beginner or an expert, our filters make finding
              your dream ShopTopOne effortless. It’s as simple as booking a vacation
              on Airbnb — set your preferences and let our search do the work!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

