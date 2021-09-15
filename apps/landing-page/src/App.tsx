import './App.css';
import button from '@libs/theme/button.module.css';
import buttonGroup from '@libs/theme/buttonGroup.module.css';

function App() {
  return (
    <div className={buttonGroup.buttonGroup}>
      <button className={button.primary}>Click me</button>
      <button className={button.primary}>Click me</button>
      <button className={button.primary}>Click me</button>
    </div>
  );
}

export default App;
