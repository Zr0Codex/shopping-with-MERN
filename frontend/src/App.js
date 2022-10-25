import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import { Container } from 'react-bootstrap';
import HomeScreen from './Screen/HomeScreen';
import ProductScreen from './Screen/ProductScreen';

import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/product/:id" component={ProductScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
