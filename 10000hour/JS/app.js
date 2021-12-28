const btn = document.getElementById("myBtn");

btn.addEventListener ('click', function clac() {
    let Name = document.getElementById("name").value;
    let Time = document.getElementById("time").value;
    document.getElementById("expertName").innerText = Name;
    document.getElementById("spendTime").innerText = parseInt(10000/parseInt(Time)) + '일';
})
