import Navbar from "./components/Navbar.jsx";
import Hero from "./components/hero.jsx";
import HeadlineCards from "./components/HeadlineCards.jsx";
import Food from "./components/Food.jsx";
function App() {
  return (
    <div className="App">
        <Navbar/>
        <Hero />
        <HeadlineCards />
        <Food />
    </div>
  );
}

export default App;
