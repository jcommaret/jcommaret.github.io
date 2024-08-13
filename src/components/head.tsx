import { Helmet } from 'react-helmet';

import img from '../assets/img/images';

const socialPreview = img.socialPreview;
const urlsite = "https://jcommaret.github.io";
const title = "Jérôme Commaret - Code, manage, innove";
const description = "Jérôme Commaret, développeur React et manager technique passionné par l'innovation.";

function Head() {
  return (
    <Helmet>
      <title>{title}</title>
      
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={urlsite} />
      <meta property="og:image" content={socialPreview} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="Portfolio de Jérôme Commaret" />
      <meta name="author" content="Jérôme Commaret" />
  
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@jcommaret" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={socialPreview} />
    </Helmet>
  );
}

export default Head;
