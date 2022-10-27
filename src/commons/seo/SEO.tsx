import React, { Fragment } from "react";
import { Helmet } from "react-helmet-async";

const SEO: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const URL = window.location.origin;
  return (
    <Fragment>
      <Helmet>
        {/* Facebook tags */}
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content={`${URL}/assets/seo/dorg-logo-seo.png`}
        />
        <meta property='og:url' content='https://dorg.tech/' />
        <meta
          property='og:title'
          content='dOrg | Full stack Web3 development collective'
        />
        <meta
          property='og:description'
          content="We help Web3's top projects design, code and ship."
        />
        <meta property='og:image:height' content='1570' />
        <meta property='og:image:width' content='2998' />
        {/* End Facebook tags */}
        {/* Twitter tags */}
        <meta name='twitter:title' content='dOrg' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@dOrg_tech' />
        <meta name='twitter:creator' content='@dOrg_tech' />
        <meta
          name='twitter:image'
          content={`${URL}/assets/seo/dorg-logo-twitter.png`}
        />
        <meta name='twitter:image:width' content='2998' />
        <meta name='twitter:image:height' content='1570' />
        {/* End Twitter tags */}
      </Helmet>
      {children}
    </Fragment>
  );
};

export default SEO;
