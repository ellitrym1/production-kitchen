import "./App.css";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Shift } from "./components/Shift";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Shift />
            <Footer />
        </div>
    );
}

export default App;
