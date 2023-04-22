let next = document.getElementsByClassName("next")[0];
let lis = document.querySelectorAll("li");
let ol = document.getElementsByTagName("ol")[0];
let dont = document.getElementsByClassName("dont")[0];
let option = document.querySelectorAll(".opt");
let optA = option[0];
let score = document.getElementsByClassName("score")[0];
let check = document.getElementsByClassName("check")[0];
let btn = document.querySelectorAll(".btn");
let do_next = document.getElementsByClassName('do-next')[0];
let correct = document.getElementsByClassName("correct")[0];
let incorrect = document.getElementsByClassName("incorrect")[0];
let count = 1;
let cor_count = 0;

// ////////////////// Buttons /////////////////////////
next.addEventListener("click", () => {
    const li = document.createElement('li');
    ol.appendChild(li);
    count++;
    lis = document.querySelectorAll("li")
    score.innerHTML = count;
})
dont.addEventListener("click", () => {
    lis[count - 1].innerHTML = "Don't Know"
})


// ////////////////// Options /////////////////////////
option[0].addEventListener("click", () => {
    lis[count - 1].innerHTML = "A";
})
option[1].addEventListener("click", () => {
    lis[count - 1].innerHTML = "B";
})
option[2].addEventListener("click", () => {
    lis[count - 1].innerHTML = "C";
})
option[3].addEventListener("click", () => {
    lis[count - 1].innerHTML = "D";
})

// ////////////////// Check /////////////////////////
check.addEventListener("click",()=>{
    if(optA.style.visibility === 'hidden'){
        do_next.style.visibility = 'visible'
        option.forEach(element => {
            element.style.visibility = 'visible'
        });
        btn.forEach(element => {
            element.style.visibility = "hidden"; 
        });
        check.innerHTML = "Check"
    }
    else{
        do_next.style.visibility = 'hidden'
        option.forEach(element => {
            element.style.visibility = 'hidden'
        });
        btn.forEach(element => {
            element.style.visibility = "visible"
        });
        check.innerHTML = "Cancel"
        
    }
})

// ////////////////// Correct & Incorrect /////////////////////////

correct.addEventListener("click",()=>{
    lis[cor_count].innerHTML += "  <span class=\"correct\">&#10004;</span>"
    cor_count++
    score.innerHTML = cor_count+"/"+count;
})
incorrect.addEventListener("click",()=>{
    lis[cor_count].innerHTML += "  <span class=\"incorrect\">&#10006;</span>"
    cor_count++
    score.innerHTML = cor_count+"/"+count;
})