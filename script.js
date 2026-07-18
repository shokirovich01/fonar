const light = document.getElementById("light");
const popup = document.getElementById("popup");

const onBtn = document.getElementById("onBtn");
const offBtn = document.getElementById("offBtn");
const payBtn = document.getElementById("payBtn");

let isOn = false;

// 🔦 Turn ON
onBtn.addEventListener("click", () => {

    if(isOn) return;

    isOn = true;

    light.style.opacity = "1";

    document.body.style.background = "#efefef";

    navigator.vibrate?.(100);

});

// ❌ Turn OFF
offBtn.addEventListener("click", () => {

    if(!isOn) return;

    popup.style.display = "flex";

});

// 💳 Pay Now
payBtn.addEventListener("click", () => {

    payBtn.disabled = true;

    payBtn.innerHTML = "⏳ Karta yuqorida chiqadi...";

    setTimeout(() => {

        alert(" KARTA 7777 0111 9948 1345 ");

        popup.style.display = "none";

        light.style.opacity = "0";

        document.body.style.background = "#060606";

        isOn = false;

        payBtn.innerHTML = "💳 CARTAGA TO'LOV";

        payBtn.disabled = false;

        navigator.vibrate?.([120,80,120]);

    },2000);

});
