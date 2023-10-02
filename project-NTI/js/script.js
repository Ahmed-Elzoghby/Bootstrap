let inp = document.getElementsByClassName('pass')[0];
let i = document.getElementsByClassName('fa-solid fa-eye')[0];

function changepass(){
    if(inp.type === 'password'){
        inp.type = 'text';
        i.className = 'fa-solid fa-eye-slash'

    }else{
        inp.type = 'password';
        i.className = 'fa-solid fa-eye'
    }
}
i.onclick = changepass


