function calculateHighDose() {
    const fractions = parseFloat(document.getElementById('fractions').value);
    const alphaBeta = parseFloat(document.getElementById('alphaBeta').value);
    const highDose = parseFloat(document.getElementById('highDose').value);

    if (isNaN(fractions) || isNaN(alphaBeta) || isNaN(highDose)) {
        document.getElementById('highDoseResult').textContent = "Invalid input";
        return;
    }

    const sqrtFractions = Math.sqrt(fractions);
    const eqd2 = 0.5 * (
        sqrtFractions * Math.sqrt((alphaBeta ** 2 * fractions) + (4 * alphaBeta * highDose) + (8 * highDose))
        - (fractions * alphaBeta)
    );

    document.getElementById('highDoseResult').textContent = eqd2.toFixed(2);
}

function calculateIntermediateDose() {
    const fractions = parseFloat(document.getElementById('fractions').value);
    const alphaBeta = parseFloat(document.getElementById('alphaBeta').value);
    const intermediateDose = parseFloat(document.getElementById('intermediateDose').value);

    if (isNaN(fractions) || isNaN(alphaBeta) || isNaN(intermediateDose)) {
        document.getElementById('intermediateDoseResult').textContent = "Invalid input";
        return;
    }

    const sqrtFractions = Math.sqrt(fractions);
    const eqd2 = 0.5 * (
        sqrtFractions * Math.sqrt((alphaBeta ** 2 * fractions) + (4 * alphaBeta * intermediateDose) + (8 * intermediateDose))
        - (fractions * alphaBeta)
    );

    document.getElementById('intermediateDoseResult').textContent = eqd2.toFixed(2);
}

function calculateLowDose() {
    const fractions = parseFloat(document.getElementById('fractions').value);
    const alphaBeta = parseFloat(document.getElementById('alphaBeta').value);
    const lowDose = parseFloat(document.getElementById('lowDose').value);

    if (isNaN(fractions) || isNaN(alphaBeta) || isNaN(lowDose)) {
        document.getElementById('lowDoseResult').textContent = "Invalid input";
        return;
    }

    const sqrtFractions = Math.sqrt(fractions);
    const eqd2 = 0.5 * (
        sqrtFractions * Math.sqrt((alphaBeta ** 2 * fractions) + (4 * alphaBeta * lowDose) + (8 * lowDose))
        - (fractions * alphaBeta)
    );

    document.getElementById('lowDoseResult').textContent = eqd2.toFixed(2);
}

function calculateAllResults() {
    calculateHighDose();
    calculateIntermediateDose();
    calculateLowDose();
}

// Initialize the calculation with the default values
window.onload = calculateAllResults;

// Register service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
            console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch(error => {
            console.log('Service Worker registration failed:', error);
        });
}
