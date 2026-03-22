async function checkInput(){
    const dataHash = "99cba7a9886cf67f280a328fd3f31d3f2674b0e1337456fa303cd2cd6ba52e59";

    let input = document.getElementById("input").value;
    let inputHashed =await hashInput(input);

    if(dataHash === inputHashed){
        console.log("Corretto")
    }else{
        console.log("Sbagliato")
    }
}

async function hashInput() {
    const input = document.querySelector("input[type='text']").value;

    const encoder = new TextEncoder();
    const data = encoder.encode(input);

    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));

    const hashHex = hashArray
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');

    console.log(hashHex);
    return hashHex;
}