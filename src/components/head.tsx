import { Helmet } from 'react-helmet';

import img from '../assets/img/images';

const urlsite = "https://jcommaret.github.io";
const title = "Jérôme Commaret - Code, Manage, Innove";
const description = "Jérôme Commaret, développeur React et manager technique passionné par l'innovation.";

function Head() {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content="Jérôme Code, Manage, Innove"/>

      <meta property="og:url" content="https://jcommaret.github.io/"/>
      <meta property="og:type" content="website"/>
      <meta property="og:title" content="Jérôme Commaret - Portfolio"/>
      <meta property="og:description" content="Jérôme Code, Manage, Innove"/>
      <meta property="og:image" content="https://opengraph.b-cdn.net/production/images/89750128-d4c1-444f-b6b5-e41ee112b0c1.jpg?token=jnpzfGGTGRQ-VdJv0lLP9vppgkTSfDjNumq_3vbb1rc&height=630&width=1200&expires=33259666954"/>

      <meta name="twitter:card" content="summary_large_image"/>
      <meta property="twitter:domain" content="jcommaret.github.io"/>
      <meta property="twitter:url" content="https://jcommaret.github.io/"/>
      <meta name="twitter:title" content="Jérôme Commaret - Portfolio"/>
      <meta name="twitter:description" content="Jérôme Code, Manage, Innove"/>
      <meta name="twitter:image" content="https://opengraph.b-cdn.net/production/images/89750128-d4c1-444f-b6b5-e41ee112b0c1.jpg?token=jnpzfGGTGRQ-VdJv0lLP9vppgkTSfDjNumq_3vbb1rc&height=630&width=1200&expires=33259666954"/>
    </Helmet>
  );
}

export default Head;
