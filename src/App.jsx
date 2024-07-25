import Upload from './components/upload';
import HeroSection from './components/Hero';
import  Navbar  from './components/Navbar';

const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
        <Upload />
    </div>
  );
};

export default App;
