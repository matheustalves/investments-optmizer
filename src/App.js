import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import Form from './Form'
import React, { useState } from 'react'

function App() {
  const [results, setResults] = useState({});
  const [hasResults, setHasResults] = useState(false);

  const btnUpdateHasResults = (e) => {
    e.preventDefault();
    setHasResults(false);
  }

  function renderForm() {
    if (!hasResults) {
      return (
        <Form updateResults={setResults} updateHasResults={setHasResults} />
      )
    }
  }

  function renderResults() {
    if (hasResults) {
      console.log(results);
      return (
        <div className="m-2 text-center">
          <div className="p-2 alert alert-success">
            <p className="fw-bold">Você deve investir... 💹</p>
            <p><span className="badge bg-primary text-wrap">R$ {results["InvestimentoA"]}</span> no Investimento A</p>
            <p><span className="badge bg-primary text-wrap">R$ {results["InvestimentoB"]}</span> no Investimento B</p>
            <p><span className="badge bg-primary text-wrap">R$ {results["InvestimentoC"]}</span> no Investimento C</p>
            <p><span className="badge bg-primary text-wrap">R$ {results["InvestimentoD"]}</span> no Investimento D</p>
            <p>O rendimento ótimo ao ano será de <span className="badge bg-primary text-wrap">R$ {results["result"]}</span> 😎</p>
          </div>
          <button className="btn btn-dark" onClick={btnUpdateHasResults}>Voltar</button>
        </div>
      )
    }
  }

  return (
    <div className="container p-5">
      <header className="text-center">
        <h1 className="">Otimizador de Investimentos</h1>
      </header>

      <div className="container p-5">
        {renderForm()}
        {renderResults()}
      </div>

    </div>
  );
}

export default App;
