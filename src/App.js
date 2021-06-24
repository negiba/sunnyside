import './App.css';
import image1 from './assets/image-header.jpg';
import image2 from './assets/image-transform.jpg';
import {Header} from "./header/header";

function App() {
    return (
        <div className="App">
            <Header/>
            <main>
                <div className="w-full h-auto">
                    <img className="object-cover w-full h-screen" src={image1} alt=""/>
                </div>
                <div className="grid grid-cols-2">
                    <div>1</div>
                    <div><img className="object-cover w-full" src={image2} alt=""/></div>
                </div>
            </main>
        </div>
    );
}

export default App;
