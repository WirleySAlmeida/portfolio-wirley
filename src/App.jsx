import { About } from './components/About';
import { Button } from './components/Button';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Skills />
      <Button />
      <Footer />
    </div>
  );
}

export default App;