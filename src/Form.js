import Constraint from './Constraint'
import React, { useState } from 'react'
import Solver from 'javascript-lp-solver/src/solver'

function Form(props) {
    const [inputMontante, setMontante] = useState(100000);
    const [inputRA, setRA] = useState(0.03);
    const [inputRB, setRB] = useState(0.05);
    const [inputRC, setRC] = useState(0.20);
    const [inputRD, setRD] = useState(0.18);

    const [model, setModel] = useState({
        "optimize": "rendimentoAno",
        "opType": "max",
        "constraints": {
        },
        "variables": {
            "InvestimentoA": {
                "rendimentoAno": parseFloat(inputRA),
            },
            "InvestimentoB": {
                "rendimentoAno": parseFloat(inputRB),
            },
            "InvestimentoC": {
                "rendimentoAno": parseFloat(inputRC),
            },
            "InvestimentoD": {
                "rendimentoAno": parseFloat(inputRD),
            },
        }
    });

    const [constrCounter, setCounter] = useState(1);

    const newConstraint = (e) => {
        e.preventDefault();
        setCounter(constrCounter + 1);
        console.log(model);
    }

    const calcInvestments = (e) => {
        e.preventDefault();
        console.log(model);
        var solver = Solver, results;
        results = solver.Solve(model);
        props.updateResults(results);
        props.updateHasResults(true);
    }

    const updateModel = (e) => {
        e.preventDefault();
        var newModel = model;
        newModel["variables"]["InvestimentoA"]["rendimentoAno"] = parseFloat(inputRA);
        newModel["variables"]["InvestimentoB"]["rendimentoAno"] = parseFloat(inputRB);
        newModel["variables"]["InvestimentoC"]["rendimentoAno"] = parseFloat(inputRC);
        newModel["variables"]["InvestimentoD"]["rendimentoAno"] = parseFloat(inputRD);
        setModel(newModel);
    }

    return (
        <form onSubmit={calcInvestments}>
            <div className="p-2">
                <label htmlFor="inputMontante" className="form-label">💰 Montante Disponível</label>
                <input type="number" className="form-control" id="inputMontante" value={inputMontante} onChange={e => setMontante(e.target.value)} min={0.0} step={0.01} required></input>
            </div>

            <div className="row py-2">
                <div className="col">
                    <div className="p-2">
                        <label htmlFor="inputRA" className="form-label">💹 Rendimento/ano do Investimento A</label>
                        <input type="number" className="form-control" id="inputRA" value={inputRA} onChange={e => setRA(e.target.value)} min={0.0} max={1.0} step={0.001} required></input>
                    </div>
                </div>
                <div className="col">
                    <div className="p-2">
                        <label htmlFor="inputRB" className="form-label">💹 Rendimento/ano do Investimento B</label>
                        <input type="number" className="form-control" id="inputRB" value={inputRB} onChange={e => setRB(e.target.value)} min={0.0} max={1.0} step={0.001} required></input>
                    </div>
                </div>
                <div className="col">
                    <div className="p-2">
                        <label htmlFor="inputRC" className="form-label">💹 Rendimento/ano do Investimento C</label>
                        <input type="number" className="form-control" id="inputRC" value={inputRC} onChange={e => setRC(e.target.value)} min={0.0} max={1.0} step={0.001} required></input>
                    </div>
                </div>
                <div className="col">
                    <div className="p-2">
                        <label htmlFor="inputRD" className="form-label">💹 Rendimento/ano do Investimento D</label>
                        <input type="number" className="form-control" id="inputRD" value={inputRD} onChange={e => setRD(e.target.value)} min={0.0} max={1.0} step={0.001} required></input>
                    </div>
                </div>
            </div>

            <div className="d-flex flex-row justify-content-center mb-3">
                <div className="p-2">
                    <button className="btn btn-success" onClick={updateModel}>Salvar</button>
                </div>
            </div>

            <h2>Restrições</h2>

            <div className="container justify-content-center py-2" id="constrDiv">
                {[...Array(constrCounter)].map((_, i) => <Constraint key={i} id={"restricao" + constrCounter} tag={"restricao" + constrCounter} model={model} updateGlobalModel={setModel} />)}
            </div>

            <div className="text-center p-2">
                <p className="fst-italic">A, B, C, D {'>'}= 0 (Quantia para cada Investimento)</p>
            </div>

            <div className="d-flex flex-row justify-content-center">
                <div className="px-2">
                    {/* <button className="btn btn-success" onClick={calcInvestments}>💱 Calcular</button> */}
                    <input type="submit" className="btn btn-success" value="💱 Calcular"></input>
                </div>
                <div className="px-2">
                    <button className="btn btn-primary" onClick={newConstraint}>❕ Nova Restrição</button>
                </div>
            </div>


        </form>
    );
}

export default Form;