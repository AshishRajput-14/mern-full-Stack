document.getElementById("jobForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let salary = parseInt(document.getElementById("salary").value);
    let email = document.getElementById("email").value.toLowerCase();
    let desc = document.getElementById("desc").value.toLowerCase();
    let result = document.getElementById("result");

    let suspicious = 0;

    // Rule 1: Salary too high
    if (salary > 100000) suspicious++;

    // Rule 2: Free Gmail/Yahoo email
    if (email.includes("@gmail.com") || email.includes("@yahoo.com")) suspicious++;

    // Rule 3: Description keywords
    let fakeKeywords = ["urgent hiring", "registration fee", "pay first", "fees", "work from home", "no interview"];

    fakeKeywords.forEach(keyword => {
        if (desc.includes(keyword)) suspicious++;
    });

    // Final decision
    if (suspicious >= 2) {
        result.style.color = "red";
        result.innerHTML = "⚠ Fake Job Detected!";
    } else {
        result.style.color = "green";
        result.innerHTML = "✔ Job Looks Real";
    }
});
