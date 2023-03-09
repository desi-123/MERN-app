import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Welcome To Habesha Cultural Clothe Store | ሐበሻ የባህል ልብስ መሸጫ ድህረ ገፅ',
  description: 'We sell the best handmade Habesha Dresses',
};
export default Meta;
