import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './comps/Home'
import Music from './comps/Music';
import Street from './comps/Street'
import Points from './comps/Points'

function App() {

  return (
    <BrowserRouter>
      <div style={{ marginBottom: "1em" }} className="App">
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/music" element={<Music />} />
            <Route path="/street" element={<Street />} />
            <Route path="/score" element={<Points />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
