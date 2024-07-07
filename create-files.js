const fs = require('fs');

const files = [
    {
        name: 'index.html',
        content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Telemedicine App with Aleo Integration</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#market-analysis">Market Analysis</a></li>
                <li><a href="#team">Team</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="billing.html">Billing</a></li>
                <li><a href="note-writing.html">Note Writing</a></li>
                <li><a href="appointments.html">Appointments</a></li>
            </ul>
        </nav>
    </header>
    <section id="home">
        <div class="hero">
            <h1>Telemedicine App with Aleo Integration</h1>
            <p>Revolutionizing Healthcare with Blockchain Technology</p>
            <a href="#about" class="cta">Learn More</a>
        </div>
    </section>
    <section id="about">
        <h2>About the Project</h2>
        <p>This project aims to develop a pioneering telemedicine application that leverages Aleo's blockchain technology to revolutionize healthcare delivery.</p>
    </section>
    <section id="features">
        <h2>Key Features</h2>
        <ul>
            <li>Enhanced Data Privacy and Security</li>
            <li>Streamlined Billing Processes</li>
            <li>Cryptocurrency Payments</li>
            <li>User-Friendly Design</li>
            <li>AI Integration</li>
            <li>Increased Accessibility</li>
        </ul>
    </section>
    <section id="market-analysis">
        <h2>Market Analysis</h2>
        <p>The telemedicine market is projected to reach USD 185.66 billion by 2026, driven by the increasing demand for remote healthcare services.</p>
    </section>
    <section id="team">
        <h2>Meet the Team</h2>
        <ul>
            <li>Project Manager</li>
            <li>Blockchain Developer</li>
            <li>Frontend Developer</li>
            <li>Backend Developer</li>
            <li>QA Engineer</li>
            <li>Legal Advisor</li>
            <li>Marketing Specialist</li>
        </ul>
    </section>
    <section id="contact">
        <h2>Contact Us</h2>
        <form>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email">
            <label for="message">Message:</label>
            <textarea id="message" name="message"></textarea>
            <button type="submit">Submit</button>
        </form>
    </section>
    <footer>
        <p>&copy; 2024 Telemedicine App. All rights reserved.</p>
    </footer>
</body>
</html>`
    },
    {
        name: 'billing.html',
        content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Billing - Telemedicine App</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="billing.html">Billing</a></li>
                <li><a href="note-writing.html">Note Writing</a></li>
                <li><a href="appointments.html">Appointments</a></li>
            </ul>
        </nav>
    </header>
    <section id="billing">
        <h2>Billing</h2>
        <form>
            <label for="payer">Payer:</label>
            <input type="text" id="payer" name="payer">
            <label for="payee">Payee:</label>
            <input type="text" id="payee" name="payee">
            <label for="amount">Amount:</label>
            <input type="number" id="amount" name="amount">
            <label for="currency">Currency:</label>
            <select id="currency" name="currency">
                <option value="USDC">USDC</option>
                <option value="ETH">ETH</option>
                <option value="BTC">BTC</option>
            </select>
            <button type="submit">Process Payment</button>
        </form>
    </section>
    <footer>
        <p>&copy; 2024 Telemedicine App. All rights reserved.</p>
    </footer>
</body>
</html>`
    },
    {
        name: 'note-writing.html',
        content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Note Writing - Telemedicine App</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="billing.html">Billing</a></li>
                <li><a href="note-writing.html">Note Writing</a></li>
                <li><a href="appointments.html">Appointments</a></li>
            </ul>
        </nav>
    </header>
    <section id="note-writing">
        <h2>Note Writing</h2>
        <form>
            <label for="patient-name">Patient Name:</label>
            <input type="text" id="patient-name" name="patient-name">
            <label for="notes">Notes:</label>
            <textarea id="notes" name="notes"></textarea>
            <button type="submit">Save Note</button>
        </form>
    </section>
    <footer>
        <p>&copy; 2024 Telemedicine App. All rights reserved.</p>
    </footer>
</body>
</html>`
    },
    {
        name: 'appointments.html',
        content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Appointments - Telemedicine App</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="billing.html">Billing</a></li>
                <li><a href="note-writing.html">Note Writing</a></li>
                <li><a href="appointments.html">Appointments</a></li>
            </ul>
        </nav>
    </header>
    <section id="appointments">
        <h2>Appointments</h2>
        <form>
            <label for="patient-name">Patient Name:</label>
            <input type="text" id="patient-name" name="patient-name">
            <label for="date">Date:</label>
            <input type="date" id="date" name="date">
            <label for="time">Time:</label>
            <input type="time" id="time" name="time">
            <label for="reason">Reason:</label>
            <textarea id="reason" name="reason"></textarea>
            <button type="submit">Schedule Appointment</button>
        </form>
        <h3>Upcoming Appointments</h3>
        <ul>
            <li>John Doe - 2024-07-05 - 10:00 AM - Follow-up</li>
            <li>Jane Smith - 2024-07-06 - 2:00 PM - Consultation</li>
        </ul>
    </section>
    <footer>
        <p>&copy; 2024 Telemedicine App. All rights reserved.</p>
    </footer>
</body>
</html>`
    },
    {
        name: 'styles.css',
        content: `body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    line-height: 1.6;
}
header {
    background: #333;
    color: #fff;
    padding: 1rem 0;
    text-align: center;
}
nav ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
}
nav ul li {
    margin: 0 1rem;
}
nav ul li a {
    color: #fff;
    text-decoration: none;
}
.hero {
    background: #007bff;
    color: #fff;
    padding: 2rem 0;
    text-align: center;
}
.hero h1 {
    margin: 0;
    font-size: 2.5rem;
}
.hero p {
    font-size: 1.2rem;
}
.hero .cta {
    background: #fff;
    color: #007bff;
    padding: 0.5rem 1rem;
    text-decoration: none;
    border-radius: 5px;
    margin-top: 1rem;
    display: inline-block;
}
section {
    padding: 2rem 0;
    text-align: center;
}
section h2 {
    margin-bottom: 1rem;
}
section p {
    max-width: 600px;
    margin: 0 auto;
}
section ul {
    list-style: none;
    padding: 0;
}
section ul li {
    margin: 0.5rem 0;
}
form {
    max-width: 600px;
    margin: 0 auto;
    text-align: left;
}
form label {
    display: block;
    margin: 0.5rem 0 0.25rem;
}
form input,
form textarea,
form select {
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
}
form button {
    display: block;
    width: 100%;
    padding: 0.5rem;
    background: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
footer {
    background: #333;
    color: #fff;
    text-align: center;
    padding: 1rem 0;
}`
    }
];

files.forEach(file => {
    fs.writeFileSync(file.name, file.content, 'utf8');
    console.log(`${file.name} has been created.`);
});

