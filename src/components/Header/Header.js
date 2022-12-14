import './Header.scss';
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className='header'>
      <nav>
        <Link to="/Home" className='header__logo'>lee</Link>
      </nav>
    </div>
  );
}

export default App;