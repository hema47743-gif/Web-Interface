import './App.css';


import HobbyCard from './HobbyCard.jsx';
import Reading from './assets/reading image.jpeg';
import Painting from './assets/painting image.jpeg';
import Photography from './assets/Photography image.jpeg';
import Music from './assets/music image.jpeg';
import Gardening from './assets/gardening image.jpeg';
import Gaming from './assets/gaming image.jpeg';

function App() {
 
  
  return (
    

    <div className="container">
      
      <HobbyCard
        hobbyName="Reading"
        description="Reading books improves knowledge, vocabulary, and imagination."
        image={Reading}
      />

      <HobbyCard
        hobbyName="Painting"
        description="Painting allows students to express creativity through colors."
        image={Painting}
      />

      <HobbyCard
        hobbyName="Photography"
        description="Photography captures memorable moments and beautiful scenes."
        image={Photography}
      />

      <HobbyCard
        hobbyName="Music"
        description="Listening to and playing music helps reduce stress."
        image={Music}
      />

      <HobbyCard
        hobbyName="Gardening"
        description="Gardening develops patience and a love for nature."
        image={Gardening}
      />

      <HobbyCard
        hobbyName="Gaming"
        description="Gaming improves strategic thinking and problem-solving skills."
        image={Gaming}
      />

    </div>

    
    
  );
}

export default App;

