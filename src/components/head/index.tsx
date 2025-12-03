import { Helmet, HelmetProvider } from 'react-helmet-async';
import { defaultSEO, generatePersonStructuredData } from '../../utils/seo';

function Head() {
  const personStructuredData = generatePersonStructuredData();

  return (
    <HelmetProvider>
      <Helmet>
        {/* Open Graph */}
        <meta property="og:url" content={defaultSEO.siteUrl}/>
        <meta property="og:type" content="website"/>
        <meta property="og:image" content={defaultSEO.defaultImage}/>
        <meta property="og:locale" content="fr_FR"/>
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="twitter:domain" content={defaultSEO.siteUrl}/>
        <meta property="twitter:url" content={defaultSEO.siteUrl}/>
        <meta name="twitter:image" content={defaultSEO.defaultImage}/>
        
        {/* Canonical URL */}
        <link rel="canonical" href={defaultSEO.siteUrl} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(personStructuredData)}
        </script>
        
        {/* Others metas are inside each page */} 
      </Helmet>
    </HelmetProvider>
  );
}

export default Head;
