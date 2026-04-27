const factBtn = document.getElementById('factBtn');
const factDisplay = document.getElementById('fact');

factBtn.addEventListener('click', getCatFact);

async function getCatFact() {
    factDisplay.style.opacity = 0;
    try {
        const response = await fetch('https://catfact.ninja/fact');
        if (!response.ok) throw new Error('Failed to fetch cat fact');
        const data = await response.json();
        // Slight delay to make fade-in smoother
        setTimeout(() => {
            factDisplay.textContent = data.fact;
            factDisplay.style.opacity = 1;
        }, 200);
    } catch (error) {
        factDisplay.textContent = "Oops! Couldn't fetch a cat fact. 🐱";
        factDisplay.style.opacity = 1;
        console.error(error);
    }
}
