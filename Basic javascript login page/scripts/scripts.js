let imgTag = document.querySelector('.pass-visibility');
 let passwordId = document.querySelector('#passWord');

 passwordId.addEventListener('keyup',()=>{
    let passLength = passwordId.value.length
    if(passLength > 0){
        imgTag.style.display = 'inline-block';
    }else{
        imgTag.style.display = 'none';
    }
})

imgTag.addEventListener('click',()=>{
    let passType = passwordId.getAttribute('type');
    if(passType == 'password'){
    imgTag.setAttribute("src","styles/images/invisible-eye.png");
    passwordId.setAttribute('type','text');
    }else{
        imgTag.setAttribute("src","styles/images/visible-eye.png");
    passwordId.setAttribute('type','password');
    }
})
 