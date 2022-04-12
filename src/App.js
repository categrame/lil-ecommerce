import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/Main.css'
import Layout from './components/Layout'
import ProductCards from './components/homepage/ProductCards'
import ProductZone from './components/homepage/ProductZone'
import PromotionsHome from './components/homepage/PromotionsHome'
import TestimonialsHome from './components/homepage/TestimonialsHome'

function App() {
  return (
    <div className="App">
      <Layout>
        <ProductCards/>
        <ProductZone />
        <PromotionsHome />
        <TestimonialsHome />
      </Layout>
    </div>
  );
}

export default App;
