import styles from './App.module.css';
import NavBar from './components/NavBar';
import Container from 'react-bootstrap/Container';
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route path="*" render={() => <h1>404 Not Found</h1>} />
        </Routes>
      </Container>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}

function SignIn() {
  return (
    <div>
      <h1>Sign In</h1>
    </div>
  );
}

function SignUp() {
  return (
    <div>
      <h1>Sign Up</h1>
    </div>
  );
}

export default App;
