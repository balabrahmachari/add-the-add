let a11=document.getElementsByClassName("a11")[0]

let a=()=>{
    if (a11.style.display === "none" || a11.style.display === "") {
        a11.style.display = "block"
    } else {
        a11.style.display = "none"
    }
}

     let mp=document.getElementById("mp")
    mp.addEventListener("click", function() {
    var url = "https://www.google.com/maps/place/Sarvayapalem,+Andhra+Pradesh+524203/@14.9349668,80.0237449,15.72z/data=!4m6!3m5!1s0x3a4b79696b71f34d:0x8857cada6af045bd!8m2!3d14.9341825!4d80.0248477!16s%2Fg%2F1v_z7b08?entry=ttu"
    window.open(url, "_blank");
});