window.onload = async () => {const btn = document.getElementById('phoneBook');
const output = document.getElementById('output');

async function getAllNumbers() {    
    await fetch(
        '/phoneBook'
    );
}

btn.addEventListener('click', () => {
    output.innerHTML = getAllNumbers();
});}