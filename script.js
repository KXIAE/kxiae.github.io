    const insta = document.getElementById("igBtn").innerHTML = "igBtn";

let instaBtn = insta && true;


function popUpLink() {
    target = "igBtn"
    onClick = "window.open('https://instagram.com/runthatvoodoo','popup','width=600,height=600'); return false;"
    console.log('dk js')
}

insta.addEventListener('click', () => {
    popUpLink(instaBtn);
    console.log('pls work')
})

igBtn.onClick  = window.open("https://instagram.com/runthatvoodoo", target = "_blank");

//this doesnt work by the way, just wanted to keep this here