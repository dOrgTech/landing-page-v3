import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';

const SEO: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Fragment>
      <Helmet>
        <script type="application/ld+json">
          {{
            '@context': 'http://schema.org',
            '@id': 'dorg.tech/#/',

            '@type': 'Organization',
            email: 'mailto:contact@dorg.tech',
            name: `dOrg`,
            url: 'https://www.dorg.tech/#/',
            address: '',
            keywords: [
              'web3',
              'fullstack',
              'development',
              'web services',
              'dapp',
              'web3 dapp',
              'decentralize',
              'web',
              'onchain',
              'swarm',
              'builders',
              'community',
              'web3 community',
            ],
            knowsAbout: [
              'web3',
              'fullstack',
              'development',
              'web services',
              'dapp',
              'web3 dapp',
              'decentralize',
              'web',
              'onchain',
              'swarm',
              'builders',
              'community',
              'web3 community',
            ],
            slogan: 'Building for the decentralized web',
            sameAs: ['https://www.linkedin.com/company/dorg-tech/'],
            ethicsPolicy: 'https://www.dorg.tech/#/privacy-policy',
          }}
        </script>
        {/* Facebook tags */}
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.dorg.tech/assets/seo/dorg-logo-seo.png"
        />
        <meta property="og:url" content="https://dorg.tech/" />
        <meta
          property="og:title"
          content="dOrg | Full stack Web3 development collective"
        />
        <meta
          property="og:description"
          content="We help Web3's top projects design, code and ship."
        />
        <meta property="og:image:height" content="1570" />
        <meta property="og:image:width" content="2998" />
        {/* End Facebook tags */}
        {/* Twitter tags */}
        <meta name="twitter:title" content="dOrg" />
        <meta
          name="twitter:description"
          content="We are an autonomous collective building decentralized infrastructure and applications"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@dOrg_tech" />
        <meta name="twitter:creator" content="@dOrg_tech" />
        <meta
          name="twitter:image"
          content="https://www.dorg.tech/assets/seo/dorg-logo-twitter.png"
        />
        <meta name="twitter:image:width" content="2998" />
        <meta name="twitter:image:height" content="1570" />
        {/* End Twitter tags */}
      </Helmet>
      {children}
    </Fragment>
  );
};

export default SEO;
