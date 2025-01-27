import { useState } from 'react';
import './App.css';
import logo from './assets/react-logo-xs.png';

const content = [
  [
    'React is extremely popular',
    'It makes building complex, interactive UIs a breeze',
    "It's powerful & flexible",
    'It has a very active and versatile ecosystem',
  ],
  [
    'Components, JSX & Props',
    'State',
    'Hooks (e.g., useEffect())',
    'Dynamic rendering',
  ],
  [
    'Official web page (react.dev)',
    'Next.js (Fullstack framework)',
    'React Native (build native mobile apps with React)',
  ],
];

 const App = () => {
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  return (
    <div>
      <header>
        <img src={logo} alt="React Logo" />
        <div>
          <h1>React.js</h1>
          <p>i.e., using the React library for rendering the UI</p>
        </div>
      </header>

      <div id="tabs">
        <menu>
          <button
            className={activeContentIndex === 0 ? 'active' : ''}
            onClick={() => setActiveContentIndex(0)}
          >
            Why React?
          </button>
          <button
            className={activeContentIndex === 1 ? 'active' : ''}
            onClick={() => setActiveContentIndex(1)}
          >
            Core features
          </button>
          <button
            className={activeContentIndex === 2 ? 'active' : ''}
            onClick={() => setActiveContentIndex(2)}
          >
            Related Resources
          </button>
        </menu>
        <div id="tab-content">
          <ul>
            {content[activeContentIndex].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;