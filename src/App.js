import logo from './logo.svg';
import './App.css';

import Comments from './components/Comments';
function App() {
  var author = {name:"Ajay Sood", profileImg : "/images/splash.jpg"}
  return (
    <div className="App">
      
      <Comments comment="this is some comment" date="12/12/2022" author={author}/>
       
    </div>
  );
}

export default App;
