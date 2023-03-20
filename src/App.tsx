import { Route, Routes } from 'react-router-dom';
import ApiExample from './features/demo';
import UserFeature from './features/Users';
import WeatherFeature from './features/Weather';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={UserFeature} />
        <Route path="/weather" Component={WeatherFeature}/>
      </Routes>
    </div>
  );
}

export default App;
