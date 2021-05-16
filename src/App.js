import './App.css';
import Loading from './Component/Loading';
import Results from './Component/Results';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
          <Results />
          <Loading />
          <ToastContainer />
    </div>
  );
}

export default App;
