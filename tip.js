let btn = document.getElementById('btn');

btn.addEventListener('click',function() {
    let Bill = document.getElementById("Bill").value;
    let Percentage = document.getElementById("Percentage").value;
    let Amount = document.getElementById("Amount").value = Bill / Percentage;
    document.getElementById("Total").value =parseFloat(Bill) + parseFloat(Amount);
})