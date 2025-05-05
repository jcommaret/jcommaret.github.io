import { Helmet, HelmetProvider } from 'react-helmet-async';

function Head() {
  const url = "https://jcommaret.github.io/";
  const image = "https://opengraph.b-cdn.net/production/images/89750128-d4c1-444f-b6b5-e41ee112b0c1.jpg?token=jnpzfGGTGRQ-VdJv0lLP9vppgkTSfDjNumq_3vbb1rc&height=630&width=1200&expires=33259666954";

  return (
    <HelmetProvider>
      <Helmet>
        <meta property="og:url" content={url}/>
        <meta property="og:type" content="website"/>
        <meta property="og:image" content={image}/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="twitter:domain" content={url}/>
        <meta property="twitter:url" content={url}/>
        <meta name="twitter:image" content={image}/>
        {/* Others metas are inside each page */} 
      </Helmet>
    </HelmetProvider>
  );
}

export default Head;
