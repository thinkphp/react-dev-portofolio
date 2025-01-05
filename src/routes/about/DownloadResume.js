import DownloadIcon from "../../assets/images/download-icon.png";
import Resume from "../../assets/documents/Adrian-Statescu.pdf";
import { React } from 'react';

const DownloadResume = () => {
  return (
    <section>
      <a className="download-btn" href={Resume} download="Adrian-Statescu">
        <img
          src={DownloadIcon}
          alt="Resume download button"
        />
        Download Resume
      </a>
    </section>
  );
};

export default DownloadResume;
