import './App.css';
import { Tags } from './components/Tags/Tags';
import { Images } from './components/Images/Images';
import { LoginCheck } from './components/Login/LoginCheck';
import { useState } from 'react';

const defaultTags = [
  {
    id: 1,
    name: 'Tag 1',
    color: '#f1efe9'
  },
  {
    id: 2,
    name: 'Tag 2',
    color: '#beceb0'
  },
  {
    id: 3,
    name: 'Tag 3',
    color: '#34857f'
  }
];

function App() {
  const [tags, setTags] = useState(defaultTags);

  return (
    <div className="App">
      <Tags tags={tags} setTags={setTags}/>
      <Images tags={tags}/>
      <LoginCheck/>
    </div>
  );
}

export default App;
