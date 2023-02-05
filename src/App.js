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


      <h1 style={{marginBottom: '30px'}}>Work Experience</h1>
      < WorkExperience />

      <h1 style={{marginBottom: '30px'}}>Education</h1>
      < Timeline />

      < Footer />
    </div>
  );
}

export default App;
