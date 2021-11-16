import 'bootstrap/dist/css/bootstrap.css'
import React, {useState} from 'react';
import './Constraint.css';

function Constraint(props) {
    var updatedModel = props.model;
    const [inputA, setInputA] = useState("");
    const [inputB, setInputB] = useState("");
    const [inputC, setInputC] = useState("");
    const [inputD, setInputD] = useState("");
    const [inputFinal, setInputFinal] = useState("");

    const updateModel = (e) => {
        e.preventDefault();
        updatedModel["variables"]["InvestimentoA"][props.tag] = parseFloat(inputA);
        updatedModel["variables"]["InvestimentoB"][props.tag] = parseFloat(inputB);
        updatedModel["variables"]["InvestimentoC"][props.tag] = parseFloat(inputC);
        updatedModel["variables"]["InvestimentoD"][props.tag] = parseFloat(inputD);
        updatedModel["constraints"][props.tag] = {"max": parseFloat(inputFinal)};
        props.updateGlobalModel(updatedModel);
    }

    return (
        <div className="d-flex flex-row my-3 align-items-center justify-content-center">
            <div className="p-2">
                <input type="number" className="form-control constrInput" id={"input-" + props.tag + "-a"} value={inputA} onChange={e => setInputA(e.target.value)}></input>
            </div>
            <div className="p-2">
                <span className="fw-bold">A +</span>
            </div>
            <div className="p-2">
                <input type="number" className="form-control constrInput" id={"input-" + props.tag + "-b"} value={inputB} onChange={e => setInputB(e.target.value)}></input>
            </div>
            <div className="p-2">
                <span className="fw-bold">B +</span>
            </div>
            <div className="p-2">
                <input type="number" className="form-control constrInput" id={"input-" + props.tag + "-c"} value={inputC} onChange={e => setInputC(e.target.value)}></input>
            </div>
            <div className="p-2">
                <span className="fw-bold">C +</span>
            </div>
            <div className="p-2">
                <input type="number" className="form-control constrInput" id={"input-" + props.tag + "-d"} value={inputD} onChange={e => setInputD(e.target.value)}></input>
            </div>
            <div className="p-2">
                <span className="fw-bold">D</span>
            </div>
            <div className="p-2">
                <select className="form-select">
                    <option defaultValue="max">{"<="}</option>
                    {/* <option defaultValue="min">{">="}</option> */}
                    {/* <option defaultValue="equal">{"="}</option> */}
                </select>
            </div>
            <div className="p-2">
                <input type="number" className="form-control constrInput" id={"input-" + props.tag + "-final"} value={inputFinal} onChange={e => setInputFinal(e.target.value)}></input>
            </div>
            <div className="p-2">
                <button className="btn btn-success" onClick={updateModel}>Salvar</button>
            </div>
        </div>
    )
}

export default Constraint;