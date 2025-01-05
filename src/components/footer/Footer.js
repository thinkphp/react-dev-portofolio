import "./Footer.sass";
import { React } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <article className="footer">
      <a
        href="https://github.com/thinkphp/"
        target="_blank"
        rel="noopener noreferrer">
        Adrian Statescu &copy;2024 - {currentYear}
      </a>
    </article>
  );
};

export default Footer;
