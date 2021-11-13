import Solver from 'javascript-lp-solver/src/solver'

var counterRestricao = 1;

function novaRestricao() {
    counterRestricao += 1;
    return "restricao" + counterRestricao;
}

var solver = Solver,
    results, model = {
        "optimize": "rendimentoAno",
        "opType": "max",
        "constraints": {
            "restricao1": { "max": 100000 },
            "restricao2": { "max": 70000 },
            "restricao3": { "max": 30000 },
            "restricao4": { "max": 60000 },
            "restricao5": { "max": 40000 },
            "restricao6": { "max": 20000 },
            "restricao7": { "max": 15000 },
        },
        "variables": {
            "InvestimentoA": {
                "rendimentoAno": 0.03,
                "restricao1": 1,
                "restricao2": 1,
                "restricao3": 0,
                "restricao4": 1,
                "restricao5": 0,
                "restricao6": 0,
                "restricao7": 0,
            },
            "InvestimentoB": {
                "rendimentoAno": 0.05,
                "restricao1": 1,
                "restricao2": 1,
                "restricao3": 0,
                "restricao4": 0,
                "restricao5": 1,
                "restricao6": 1,
                "restricao7": 0,
            },
            "InvestimentoC": {
                "rendimentoAno": 0.20,
                "restricao1": 1,
                "restricao2": 0,
                "restricao3": 1,
                "restricao4": 1,
                "restricao5": 0,
                "restricao6": 0,
                "restricao7": 1,
            },
            "InvestimentoD": {
                "rendimentoAno": 0.18,
                "restricao1": 1,
                "restricao2": 0,
                "restricao3": 1,
                "restricao4": 0,
                "restricao5": 1,
                "restricao6": 0,
                "restricao7": 0,
            },
        },
    };

results = solver.Solve(model);
console.log(results);