import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Footer from '@/layout/footer';
import Content from '@/components';
import './index.less';

const Page = () => {
  const [title] = useState('My Resume');

  return (
    <React.Fragment>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Content />
      <Footer />
    </React.Fragment>
  );
};

export default Page;
