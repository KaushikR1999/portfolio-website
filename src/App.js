import './App.css';
import About from './components/About';
import Header from './components/Header';
import InternshipSection from './components/Experience/Internships';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-nunito-sans bg-blue-100 text-blue-800">
      <Header />
      <main>
        <About />
        <Skills />
        <InternshipSection />
        <Education />
        <Footer />
      </main>
    </div>
  );
}

export default App;