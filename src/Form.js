import Constraint from './Constraint'
import React, {useState} from 'react'

function Form(props) {
    const [model, setModel] = useState({
        "optimize": "rendimentoAno",
        "opType": "max",
        "constraints": {
        },
        "variables": {
            "InvestimentoA": {
                "rendimentoAno": 0.03,
            },
            "InvestimentoB": {
                "rendimentoAno": 0.05,
            },
            "InvestimentoC": {
                "rendimentoAno": 0.20,
            },
            "InvestimentoD": {
                "rendimentoAno": 0.18,
            },
        }
    });

    const [constrCounter, setCounter] = useState(1);

    const newConstraint = (e) => {
        e.preventDefault();
        setCounter(constrCounter + 1);
        console.log(model);
    }

    return (
        <form>
            <div className="mb-3">
                <label htmlFor="inputMontante" className="form-label">Montante</label>
                <input type="number" className="form-control" id="inputMontante" defaultValue="100000"></input>
            </div>
            <div className="row my-3">
                <div className="col">
                    <div className="mb-3">
                        <label htmlFor="inputRA" className="form-label">Rendimento/ano do Investimento A</label>
                        <input type="number" className="form-control" id="inputRA" defaultValue="0.03"></input>
                    </div>
                </div>
                <div className="col">
                    <div className="mb-3">
                        <label htmlFor="inputRB" className="form-label">Rendimento/ano do Investimento B</label>
                        <input type="number" className="form-control" id="inputRB" defaultValue="0.05"></input>
                    </div>
                </div>
                <div className="col">
                    <div className="mb-3">
                        <label htmlFor="inputRC" className="form-label">Rendimento/ano do Investimento C</label>
                        <input type="number" className="form-control" id="inputRC" defaultValue="0.20"></input>
                    </div>
                </div>
                <div className="col">
                    <div className="mb-3">
                        <label htmlFor="inputRD" className="form-label">Rendimento/ano do Investimento D</label>
                        <input type="number" className="form-control" id="inputRD" defaultValue="0.18"></input>
                    </div>
                </div>
            </div>

            <h2>Restrições</h2>

            <div className="container justify-content-center" id="constrDiv">
                {[...Array(constrCounter)].map((_, i) => <Constraint key={i} id={"restricao" + constrCounter} tag={"restricao" + constrCounter} model={model} updateGlobalModel={setModel}/>)}
            </div>

            <button className="btn btn-primary" onClick={newConstraint}>Nova Restrição</button>
        </form>
    );
}

export default Form;