import Constraint from './Constraint'

function Form() {
    var constrCounter = 1;
    var model = {
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
    }

    // const updateConstrCounter(){

    // }

    const newConstraint = () => {
        let c = document.getElementById("constrDiv");
        console.log(c);
        // constrCounter += 1;
        // let n = document.createElement(<Constraint id={"restricao" + constrCounter} tag={"restricao" + constrCounter} />)
        // c.appendChild(React.createElement());
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

            <div className="containerjustify-content-center" id="constrDiv">
                <Constraint id={"restricao" + constrCounter} tag={"restricao" + constrCounter} model={model} />
            </div>

            <button className="btn btn-primary" onClick={newConstraint}>Nova Restrição</button>
        </form>
    );
}

export default Form;