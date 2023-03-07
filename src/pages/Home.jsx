import img from '../images/girl_with_notebook_outdoor.jpg'

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    // alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
    paddingTop: '85px',
    color: 'rgb(253, 236, 82)',
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Welcome to your Phonebook{' '}
        
      </h1>
    </div>
  );
}