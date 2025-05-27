import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <p style={styles.message}>Oops! The page you are looking for does not exist.</p>
      <Link to="/" style={styles.link}>← Back to Home</Link>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '72px',
    color: '#e74c3c',
    marginBottom: '20px',
  },
  message: {
    fontSize: '24px',
    marginBottom: '30px',
  },
  link: {
    fontSize: '18px',
    textDecoration: 'none',
    color: '#3498db',
  }
};

export default NotFound;
