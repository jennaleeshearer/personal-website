import './App.css';
import CustomNavbar from './templates/navbar'
import AboveFold from './templates/aboveFold'
import Timeline from './templates/timeline'
import WorkExperience from './templates/work'
import Footer from './templates/footer'
import ContactMe from './templates/contact'

function App() {
  return (
    <div className="App website">
      < AboveFold />
      < WorkExperience />
      < Timeline />
      < ContactMe />
      < Footer />
    </div>
  );
}

export default App;
