function start() {
    document.getElementById("mainBtn").addEventListener("click", btn_click)
}

function btn_click() {
    var st_input = document.getElementById("inp1").value
    var nd_input = document.getElementById("inp2").value
    var cond_symb = document.getElementById("cond_symb").value
    var p_result = document.getElementById("result")

    if (!(st_input === "" && nd_input === "")) {

        var cond
        switch (cond_symb) {
            case "=":
                cond = "=="
                break
            
            case "≠":
                cond = "!="
                break
            
            case ">":
                cond = ">"
                break
            
            case "<":
                cond = "<"
                break
            
            case "≥":
                cond = ">="
            
            case "≤":
                cond = "<="
        }

        var result = (new Function(`return "${st_input}"${cond}"${nd_input}"`)()) ? "True":"False"
        
        p_result.innerHTML = `${st_input} ${cond_symb} ${nd_input} ? ${"<br>"} ${result}.`
    }
    else {
        p_result.innerHTML = "Empty fields." + "<br>" + "True."
    }
}