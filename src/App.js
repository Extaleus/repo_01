import './App.css';
import Header from './components/Header';
import {Content} from './components/content/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%'}}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;