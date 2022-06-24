import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Animation from './Components/innovation';
import Selectimg from './Components/select_img';
import Slider from './Components/bootstrap_slider';
import Clkimg from './Components/clickpart';
import Navbar from './Components/navbar';
import Form from './Components/Form';
import Footer from './Components/footer';




function App() {
  return (
    <div className="App">
      <Navbar/>
      <Animation/>
      <Clkimg/>
      <Form />
      <Selectimg/>
      <Slider/>
      <Footer />
     </div>
  );
}

export default App;

