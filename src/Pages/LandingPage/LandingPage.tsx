import CanvasScene from '../../CanvasComponents/CanvasScene';
import SearchBar from '../../Components/SearchBar/SearchBar';
import './LandingPage.css';

const LandingPage = () => {

  return(
    <div className='landing-page-container'>
      <CanvasScene />
      <div className="searchBar-container">
        <SearchBar />
      </div>
    </div>
  )
}


export default LandingPage;