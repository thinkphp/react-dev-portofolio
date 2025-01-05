import { React } from 'react';

const PortfolioDescription = () => {
  return (
    <section className="portfolio-content">
      <h2 className="title-font pink-text h2-tag">Portfolio</h2>
      <p className="white-text p-tag">
        I've invested substantial time in a variety of projects, thoroughly enjoying the process of building things from the ground up. Here are a few of my cherished endeavors that encapsulate my expertise. Feel free to explore these on my {" "}
        <span>
          <a
            href="https://github.com/thinkphp?tab=repositories"
            className="pink-text"
            target="_blank"
            rel="noopener noreferrer">
            GitHub
          </a>
        </span>
      </p>
    </section>
  );
};

export default PortfolioDescription;
