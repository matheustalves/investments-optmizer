import 'bootstrap/dist/css/bootstrap.css'
import React from 'react';
import './Constraint.css';

function Constraint(props) {
    console.log(props.tag);
    // console.log(props.model);

    const updateModel = () => {
        props.model["variables"]["InvestimentoA"][props.tag] = document.getElementById("input-" + props.tag + "-a").value;
        console.log(props.model)
    }

    updateModel();

    return (
        <div className="d-flex flex-row my-3 align-items-center justify-content-center">
            <div className="p-2">
                <input type="number" className="form-control constrInput" id={"input-" + props.tag + "-a"} defaultValue="1"></input>
            </div>
            <div className="p-2">
                <span className="fw-bold">A +</span>
            </div>
            <div className="p-2">
                <input type="number" className="form-control constrInput" id={"input-" + props.tag + "-b"} defaultValue="0.03"></input>
            </div>
            <div className="p-2">
                <span className="fw-bold">B +</span>
            </div>
            <div className="p-2">
                <input type="number" className="form-control constrInput" id={"input-" + props.tag + "-c"} defaultValue="0.03"></input>
            </div>
            <div className="p-2">
                <span className="fw-bold">C +</span>
            </div>
            <div className="p-2">
                <input type="number" className="form-control constrInput" id={"input-" + props.tag + "-d"} defaultValue="0.03"></input>
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
                <input type="number" className="form-control constrInput" id={"input-" + props.tag + "-final"} defaultValue="0.03"></input>
            </div>
        </div>
    )
}

export default Constraint;