function validateForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const formMessage = document.getElementById('formMessage');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name) {
        formMessage.textContent = 'Name is required.';
        return false;
    }

    if (!email) {
        formMessage.textContent = 'Email is required.';
        return false;
    }

    if (!emailRegex.test(email)) {
        formMessage.textContent = 'Please enter a valid email address.';
        return false;
    }

    if (!message) {
        formMessage.textContent = 'Message is required.';
        return false;
    }

    formMessage.style.color = '#2ecc71';
    formMessage.textContent = 'Form submitted successfully!';
    document.getElementById('contactForm').reset();
    return true;
}

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => li.remove();

    li.appendChild(deleteButton);
    taskList.appendChild(li);
    taskInput.value = '';
}