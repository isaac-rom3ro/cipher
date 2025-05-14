document.addEventListener("DOMContentLoaded", function(){
    const container = document.getElementById("qrcode")

        

        new QRCode(container, {
            text: "Hello World!", 
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        })
})
