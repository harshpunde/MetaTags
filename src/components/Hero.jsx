import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section style={{ textAlign: 'center', padding: '60px 20px' }}>
      <h1>Welcome to Our Website</h1>
      <p>We’re here to help you grow.</p>
      <Link to="/contact">
        <button style={{ padding: '10px 20px', marginTop: '20px' }}>Contact Us</button>
      </Link>
    </section>
  );
};

export default Hero;
