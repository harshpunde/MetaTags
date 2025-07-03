import { Helmet } from 'react-helmet-async';
import Contact from '../components/Contact';

const ContactPage = () => {
  return (
    <>
    

 <Helmet>
  <title>Get in Touch | Jincora’s E-commerce & Shopify Experts</title>
  <meta
    name="description"
    content="nee a custom ecommerce solution? Contact Jincora’s Shopify experts today for professional support, website design, and development services."
  />
  <meta
    name="keywords"
    content="contact Jincora, Shopify experts, ecommerce help, website support, web development contact"
  />
  <link rel="canonical" href="https://www.jincora.com/ContactUsPage" />


</Helmet>
  
      <div style={{ textAlign: 'center', padding: '60px 20px' }}>
        <h2>Contact Us</h2>
        <Contact />
      </div>
    </>
  );
};

export default ContactPage;
