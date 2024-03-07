function makeQRCode(){
    let qrText=document.querySelector("input").value;
    if(!qrText==""){
        document.querySelector(".qrBox").classList.add("showImg")
    document.querySelector("#qrImg").src=`https://api.qrserver.com/v1/create-qr-code/?size=130x130&data=${qrText}`;
    }
}