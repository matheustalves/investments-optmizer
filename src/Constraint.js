import 'bootstrap/dist/css/bootstrap.css'
import React, { useState } from 'react';
import './Constraint.css';

function Constraint(props) {
    var updatedModel = props.model;
    const [inputA, setInputA] = useState(1);
    const [inputB, setInputB] = useState(1);
    const [inputC, setInputC] = useState(1);
    const [inputD, setInputD] = useState(1);
    const [inputType, setinputType] = useState("max");
    const [inputFinal, setInputFinal] = useState(1);

    const updateModel = (e) => {
        e.preventDefault();
        updatedModel["variables"]["InvestimentoA"][props.tag] = parseFloat(inputA);
        updatedModel["variables"]["InvestimentoB"][props.tag] = parseFloat(inputB);
        updatedModel["variables"]["InvestimentoC"][props.tag] = parseFloat(inputC);
        updatedModel["variables"]["InvestimentoD"][props.tag] = parseFloat(inputD);
        var obj = {};
        obj[inputType] = parseFloat(inputFinal);
        updatedModel["constraints"][props.tag] = obj;
        props.updateGlobalModel(updatedModel);
    }

    return (
        <div className="d-flex flex-row my-3 align-items-center justify-content-center">
            <div className="p-2">
                <input type="number" className="form-control constrInput" id={"input-" + props.tag + "-a"} value={inputA} onChange={e => setInputA(e.target.value)} required></input>
            </div>
            <div className="p-2">
                <span className="fw-bold">A +</span>
            </div>
            <div className="p-2">
                <input type="number" className="form-control constrInput" id={"input-" + props.tag + "-b"} value={inputB} onChange={e => setInputB(e.target.value)} required></input>
            </div>
            <div className="p-2">
                <span className="fw-bold">B +</span>
            </div>
            <div className="p-2">
                <input type="number" className="form-control constrInput" id={"input-" + props.tag + "-c"} value={inputC} onChange={e => setInputC(e.target.value)} required></input>
            </div>
            <div className="p-2">
                <span className="fw-bold">C +</span>
            </div>
            <div className="p-2">
                <input type="number" className="form-control constrInput" id={"input-" + props.tag + "-d"} value={inputD} onChange={e => setInputD(e.target.value)} required></input>
            </div>
            <div className="p-2">
                <span className="fw-bold">D</span>
            </div>
            <div className="p-2">
                <select className="form-select" value={inputType} onChange={e => setinputType(e.target.value)}>
                    <option value="max">{"<="}</option>
                    <option value="min">{">="}</option>
                    <option value="equal">{"="}</option>
                </select>
            </div>
            <div className="p-2">
                <input type="number" className="form-control constrInput" id={"input-" + props.tag + "-final"} value={inputFinal} onChange={e => setInputFinal(e.target.value)} required></input>
            </div>
            <div className="p-2">
                <button className="btn btn-success" onClick={updateModel}>Salvar</button>
            </div>
        </div>
    )
}

export default Constraint;