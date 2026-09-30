function showSection(sectionId) {

    let sections = document.querySelectorAll(".section");

    sections.forEach(function(section) {
        section.classList.remove("active");
    });

    document.getElementById(sectionId)
        .classList.add("active");
}


function askTutor() {

    let question = document.getElementById("question").value.trim();
    let answer = document.getElementById("answer");

    if (question === "") {
        answer.innerHTML = "Please enter your question.";
        return;
    }

    let q = question.toLowerCase();
    let response = "";

    if (q.includes("what is python")) {

        response = `
            <b>Python:</b><br><br>
            Python is a high-level, interpreted and general-purpose
            programming language. It has simple and easy-to-read syntax.
            <br><br>
            <b>Uses:</b>
            <ul>
                <li>Web development</li>
                <li>Artificial Intelligence</li>
                <li>Machine Learning</li>
                <li>Data Science</li>
                <li>Automation</li>
            </ul>
        `;

    } else if (q.includes("what is oop") ||
               q.includes("object oriented programming")) {

        response = `
            <b>Object-Oriented Programming (OOP):</b><br><br>
            OOP is a programming approach based on objects and classes.
            It helps organize programs and makes code reusable.
            <br><br>
            <b>Main concepts:</b>
            <ul>
                <li>Class</li>
                <li>Object</li>
                <li>Encapsulation</li>
                <li>Inheritance</li>
                <li>Polymorphism</li>
                <li>Abstraction</li>
            </ul>
        `;

    } else if (q.includes("what is variable")) {

        response = `
            <b>Variable:</b><br><br>
            A variable is a named memory location used to store a value.
            In Python, a variable is created when a value is assigned to it.
            <br><br>
            Example:
            <pre>x = 10</pre>
        `;

    } else if (q.includes("what is loop")) {

        response = `
            <b>Loop:</b><br><br>
            A loop is used to execute a block of statements repeatedly
            until a specified condition is satisfied.
            <br><br>
            <b>Types of loops in Python:</b>
            <ul>
                <li>for loop</li>
                <li>while loop</li>
            </ul>
        `;

    } else if (q.includes("what is function")) {

        response = `
            <b>Function:</b><br><br>
            A function is a reusable block of code that performs a
            particular task.
            <br><br>
            Example:
            <pre>def add(a, b):
    return a + b</pre>
        `;

    } else {

        response = `
            <b>EduGenie:</b><br><br>
            You asked: <b>${question}</b>
            <br><br>
            I don't have a prepared explanation for this question yet.
            Try asking about <b>Python, OOP, variables, loops, or functions.</b>
        `;
    }

    answer.innerHTML = response;
}


function generateQuiz() {

    let topic = document.getElementById("topic").value;
    let result = document.getElementById("quizResult");

    if (topic === "") {
        result.innerHTML = "Please enter a topic.";
        return;
    }

    result.innerHTML = `
        <h3>Quiz: Programming</h3>
        <p>1. Which high level language?</p>
        <p>A) Python </p>
        <p>B) Assembly Language</p>
        <p>C) Machine Language</p>
        <p>D) C++</p>
        <br>
        <p>2. Which of the following is a feature of Object-Oriented Programming (OOP)?</p>
        <p>A) Encapsulation</p>
        <p>B) Compilation</p>
        <p>C) Debugging</p>
        <p>D)Formatting</p>
    `;
}


function generateNotes() {

    let topic = document.getElementById("notesTopic").value;
    let result = document.getElementById("notesResult");

    if (topic === "") {
        result.innerHTML = "Please enter a topic.";
        return;
    }

     if (topic.toLowerCase() === "python") {
        result.innerHTML = `
            <h3>📚 Notes: Python</h3>

            <h4>1. Introduction to Python</h4>
            <p>
                Python is a high-level, interpreted and general-purpose
                programming language. It is easy to learn and has a simple
                syntax.
            </p>

            <h4>2. Important Concepts</h4>
            <ul>
                <li>Variables and Data Types</li>
                <li>Operators</li>
                <li>Conditional Statements</li>
                <li>Loops</li>
                <li>Functions</li>
                <li>Lists, Tuples, Sets and Dictionaries</li>
                <li>Object-Oriented Programming</li>
            </ul>

            <h4>3. Key Points</h4>
            <ul>
                <li>Python is easy to read and write.</li>
                <li>It supports object-oriented programming.</li>
                <li>Python uses indentation to define blocks of code.</li>
                <li>It has a large collection of libraries.</li>
            </ul>

            <h4>4. Advantages</h4>
            <ul>
                <li>Simple and beginner-friendly</li>
                <li>Free and open source</li>
                <li>Portable</li>
                <li>Large community support</li>
                <li>Supports many applications</li>
            </ul>

            <h4>5. Applications</h4>
            <ul>
                <li>Web Development</li>
                <li>Artificial Intelligence</li>
                <li>Machine Learning</li>
                <li>Data Science</li>
                <li>Automation</li>
                <li>Game Development</li>
            </ul>

            <h4>6. Important Exam Points</h4>
            <ul>
                <li>Python was created by Guido van Rossum.</li>
                <li>Python is an interpreted language.</li>
                <li>Python files generally use the .py extension.</li>
                <li>Indentation is important in Python.</li>
            </ul>
        `;
    } else {
        result.innerHTML = `
            <h3>📚 Notes: ${topic}</h3>
            <ul>
                <li>Introduction to ${topic}</li>
                <li>Important concepts</li>
                <li>Key points</li>
                <li>Advantages</li>
                <li>Applications</li>
                <li>Important exam points</li>
            </ul>
        `;
    }
}