import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | Source Investments</title>
        <meta name="description" content="Welcome to Source Investments. We help you grow your business." />
        <meta name="keywords" content="investment, finance, hero, landing" />
        <link rel="canonical" href="https://yourdomain.com/" />
      </Helmet>
      <Hero />
    </>
  );
};

export default Home;
