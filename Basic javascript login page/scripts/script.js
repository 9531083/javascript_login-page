//take image
let eyeImg = document.querySelector('.pass-visibility');

let passInput = document.querySelector('.password');


passInput.addEventListener('keyup', function(){
    let passLength = passInput.value.length;
    if (passLength == 0){
        eyeImg.style.display = 'none';
    }else{
        eyeImg.style.display = 'inline-block';
    }
})
eyeImg.addEventListener('click', function(){
    // alert('hi')
    let passInputType = passInput.getAttribute('type');
    // console.log(passInputType)
    if (passInputType == 'password'){
        // alert("this is a password")
        passInput.setAttribute('type','text')
        eyeImg.setAttribute('src','styles/images/invisible-eye.png')
        
    }else{
        passInput.setAttribute('type','password')
        eyeImg.setAttribute('src','styles/images/visible-eye.png')
    }
})