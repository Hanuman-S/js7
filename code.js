let btn1 = document.querySelector('.btn1');
let btnclick=1;
btn1.onclick = (e) =>{
    console.log(`Button was clicked ${btnclick} times`);
    btnclick++;
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX,e.clientY);
};

btn1.addEventListener('click',(e)=>{
    console.log('2 way which is better to add event');
})
btn1.addEventListener('click',(e)=>{
    console.log('3 way which is better to add event');
})

let handler_4 = () =>{
    console.log('4 way which is better to add event');
}
btn1.addEventListener('click',handler_4);
btn1.addEventListener('click',(e)=>{
    console.log('5 way which is better to add event');
})

btn1.removeEventListener('click',handler_4);

let btn2=document.querySelector('.btn2');
btn2.ondblclick = (e) =>{
    console.log(`Button was double clicked`);
};

let box = document.querySelector('.box');
box.onpointerenter = (e) =>{
    console.log('Hey! Get outta Here')
}
box.onpointerleave = (e) =>{
    console.log('Thanks');
}

//DarkMode/LightMode button
let btnmode=document.querySelector('.darkmode');
let theme='dark';
let mode =() =>{
    if(theme==='light'){
        document.body.style.backgroundColor='black';
        document.body.style.color='white';
        theme='dark';
    } else if(theme==='dark'){
        document.body.style.backgroundColor='white';
        document.body.style.color='black';
        theme='light';
    }
};
btnmode.addEventListener('click',mode);

let p=document.createElement('p');
p.textContent='This is a paragraph';
btnmode.after(p);

