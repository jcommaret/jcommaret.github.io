import { Helmet, HelmetProvider } from 'react-helmet-async';

function Head() {
  const url = "https://jcommaret.github.io/";
  const title = "Jérôme Commaret";
  const description = "Jérôme Code, Manage, Innove";
  const image = "https://opengraph.b-cdn.net/production/images/89750128-d4c1-444f-b6b5-e41ee112b0c1.jpg?token=jnpzfGGTGRQ-VdJv0lLP9vppgkTSfDjNumq_3vbb1rc&height=630&width=1200&expires=33259666954";

  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description}/>

        <meta property="og:url" content={url}/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content={`${title} - Portfolio`}/>
        <meta property="og:description" content={description}/>
        <meta property="og:image" content={image}/>

        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="twitter:domain" content={url}/>
        <meta property="twitter:url" content={url}/>
        <meta name="twitter:title" content={`${title} - Portfolio`}/>
        <meta name="twitter:description" content={description}/>
        <meta name="twitter:image" content={image}/>
      </Helmet>
    </HelmetProvider>
  );
}

export default Head;
