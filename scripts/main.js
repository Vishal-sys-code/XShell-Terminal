const app = document.querySelector("#app");
const delay = ms => new Promise(res=>setTimeout(res, ms));



app.addEventListener("keypress", async function(event){
    if(event.key=== "Enter"){
        await delay(150);
        getInputValue();

        removeInput();
        await delay(150);
        new_line();
    }
})

app.addEventListener("click",function(event){
    const input = document.querySelector("input");
    input.focus();
})


async function open_terminal(){
    createText("Welcome to XShell");
    await delay(500);
    createText("Instructions");
    await delay(800);

    createCode ("help","For Help");
    createCode ("about","Details of XShell");
    createCode ("all","To see all the commands");
    createCode ("clear","To clear the terminal");

    await delay(500);
    new_line();
}


function new_line(){

    const p = document.createElement("p");
    const span1 = document.createElement("span");
    const span2 = document.createElement("span");
    p.setAttribute("class","path")
    p.textContent = "guest-web ";
    span1.textContent = "xshell";
    span2.textContent = ":~$";
    p.appendChild(span1);
    p.appendChild(span2);
    app.appendChild(p);
    const div = document.createElement("div");
    div.setAttribute("class","type")
    const i = document.createElement("i");
    i.setAttribute("class","fas fa-angle-right icone")
    const input = document.createElement("input");
    div.appendChild(i);
    div.appendChild(input);
    app.appendChild(div);
    input.focus();

}

function removeInput(){
    const div = document.querySelector(".type");
    app.removeChild(div);
}

async function getInputValue(){
    const value = document.querySelector("input").value;
    if(value === "all"){
        trueValue(value);
        createCode("help","For Help")
        createCode("about","Details of XShell")
        createCode("clear","To clear the terminal")
        createCode("git","To get the github repository of XShell")
        createCode("xshell","Welcome Note")
    }
    else if(value === "about"){
        trueValue(value);
        createText("xshell")
        createText("description: Web Based Bash")
        createText("version: 1.0")
        createText("width: x64 bits")
        createText("configuration: boot=normal chassis=laptop/PC family=103C_5336AN")
        createText("Package: 3.0")
        createText("Creator: Vishal Pandey")
        createText("Common License: GNU Gerneral Public License")
    }
    else if(value === "help"){
        trueValue(value);
        createText("GNU xdart 1.0, a non interative network retriever")
        createText("Usage: These Shell commands are defined internally.")
        createText("Type 'help-bash' to find the general commands for xshell")
        createText("Unfortunately this xshell is in repair.........We are sorry for that")
    }
    else if(value === "git"){
        trueValue(value);
        // createText("GitHub Repository: <a href="www.github.com" target='_blank'>XShell</a>")
        {
            window.location.href = "www.github.com";
        };
    }
    else if(value === "xshell"){
        trueValue(value);
        createText("Welcome to XShell !!!")
    }
    else if(value === "clear"){
        document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
        document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
    }
    else{
        falseValue(value);
        createText(`command not found: ${value}`)
    }
}

    
    function trueValue(value){
        const div = document.createElement("section");
        div.setAttribute("class","type2")
        const i = document.createElement("i");
        i.setAttribute("class","fas fa-angle-right icone")
        const mensagem = document.createElement("h2");
        mensagem.setAttribute("class","success")
        mensagem.textContent = `${value}`;
        div.appendChild(i);
        div.appendChild(mensagem);
        app.appendChild(div);
    }

    function falseValue(value){
        const div = document.createElement("section");
        div.setAttribute("class","type2")
        const i = document.createElement("i");
        i.setAttribute("class","fas fa-angle-righticone error")
        const mensagem = document.createElement("h2");
        mensagem.setAttribute("class","error")
        mensagem.textContent = `${value}`;
        div.appendChild(i);
        div.appendChild(mensagem);
        app.appendChild(div);
    }

    function createText(text, classroom){
        const p = document.createElement("p");
        p.innerHTML = text;
        app.appendChild(p);
    }

    function createCode(code,text){
        const p = document.createElement("p");
        p.setAttribute("class","code");
        p.innerHTML = `${code}<br/><span class="text">${text}</span>`;
        app.appendChild(p);
    }

open_terminal();