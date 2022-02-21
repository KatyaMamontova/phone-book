window.onload = async () => {
    const nameInput = document.getElementById('nameInput');
    const numberInput = document.getElementById('numberInput');
    const updateBtn = document.getElementById('updateBtn');
    const addContactBtn = document.getElementById('addContactBtn');
    const output = document.getElementById('output');

    async function getAllNumbers() {
        const answer = await fetch(
            '/phoneBook'
        );
        return answer.json();
    }

    async function addNumber(name, number) {
        const answer = await fetch(
            `/phoneBook/addNumber/${name}/${number}`
        );
        return answer.json();
    }

    async function deleteNumber(prop) {
        const answer = await fetch(
            `/phoneBook/deleteNumber/${prop}`
        );
        return answer.json();
    }

    async function deleteContact(elem) {
        const data = await deleteNumber(elem.dataset.name);
        const answer = data.answer;
        answer ? update() : output.innerHTML = data.error;
    }


    async function update() {

        output.innerHTML = '';

        const data = await getAllNumbers();
        const contacts = data.contacts;

        contacts.forEach(async (contact) => {
            let div = document.createElement('div');
            let deleteContactBtn = document.createElement('button');
            deleteContactBtn.dataset.name = contact.name;
            deleteContactBtn.addEventListener('click', () => deleteContact(deleteContactBtn));
            deleteContactBtn.setAttribute('class', 'deleteBtns');
            div.setAttribute('class', 'contacts');
            div.innerHTML += `${contact.name}: ${contact.number}`;
            div.appendChild(deleteContactBtn);
            output.appendChild(div);
        });

    }

    addContactBtn.addEventListener('click', async () => {
        const name = nameInput.value;
        const number = numberInput.value;
        const data = await addNumber(name, number);
        const answer = data.answer;
        answer ? update() : output.innerHTML = data.error;
    });

    updateBtn.addEventListener('click', update);

    update();
}