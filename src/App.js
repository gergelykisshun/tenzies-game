import React , { useState } from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';

const App = () => {
  const [isDark, setIsDark] = useState(false)

  const toggleThemeHandler = () => {
    setIsDark(prev => !prev);
  };

  return (
      <div className="container">
          <Navbar darkMode={isDark} toggleDarkMode={toggleThemeHandler}/>
          <Main darkMode={isDark} toggleDarkMode={toggleThemeHandler}/>
      </div>
  )
}
export default App;
