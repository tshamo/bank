async function fetchBalance() {
    try {
        const response = await fetch("http://localhost:5000/balance");
        const data = await response.json();
        document.getElementById("balance").textContent = data.balance;
    } catch (error) {
        console.error("Error fetching balance:", error);
    }
}

async function deposit() {
    const amount = document.getElementById("depositAmount").value;
    try {
        const response = await fetch("http://localhost:5000/deposit", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ amount: parseFloat(amount) })
        });
        const data = await response.json();
        alert(data.message);
        fetchBalance();
    } catch (error) {
        console.error("Error depositing amount:", error);
    }
}

async function withdraw() {
    const amount = document.getElementById("withdrawAmount").value;
    try {
        const response = await fetch("http://localhost:5000/withdraw", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ amount: parseFloat(amount) })
        });
        const data = await response.json();
        alert(data.message);
        fetchBalance();
    } catch (error) {
        console.error("Error withdrawing amount:", error);
    }
}

fetchBalance();

