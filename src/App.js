import './index.css';
import Header from './components/Header/Header';
import SignupCard from './components/SignupCard/SignupCard';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <div className="wrapper">
        <Header/>
        <SignupCard/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
