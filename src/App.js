import './App.css';
import CustomNavbar from './templates/navbar'
import AboveFold from './templates/aboveFold'
import Timeline from './templates/timeline'
import WorkExperience from './templates/work'
import Footer from './templates/footer'

function App() {
  return (
    <div className="App website">
      < CustomNavbar />

      < AboveFold />

      < WorkExperience />

      < Timeline />

      < Footer />
    </div>
  );
}

export default App;
