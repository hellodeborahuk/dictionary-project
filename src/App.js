import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="app-header">dic·tion·ar·y</header>
       <main>
         <Dictionary />
       </main>
       <footer className="app-footer">Coded by Debbie Dann</footer>
     </div>
    </div>
  );
}

export default App;
