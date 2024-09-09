function appendToResult(value) {
    let resultElement = document.getElementById("result");
    let currentValue = resultElement.innerText
    if(currentValue == '' && (value === "+" || value === "/" || value === "*")){
        console.warn("cannot start with operator")
        return;
    }
    if(resultElement.innerText.length < 12){
    resultElement.innerText += value;
    }
}
function deleteLast(){
    let resultElement = document.getElementById("result");
    if(resultElement){
        let currentValue = resultElement.innerText;
        resultElement.innerText = currentValue.slice(0,-1);
    }
    else{
        console.error("No data to delete");
    }

}
function resetValue(){
    let resultElement = document.getElementById("result");
    resultElement.innerText = "";
    

}
function calculateResult(){
    let resultElement = document.getElementById("result");
    if(resultElement){
        try{
            let expression = resultElement.innerText;
            let result = eval(expression);
            if (!Number.isInteger(result)) {
                result = result.toFixed(3);  
              }
            resultElement.innerText = result;
        }
        catch(error){
            resultElement.innerText = "Error"
        }
    }
    else{
        console.error("Result div not found")
    }
}
document.getElementById("1").addEventListener("click",()=> appendToResult("1"));
document.getElementById("2").addEventListener("click",()=> appendToResult("2"));
document.getElementById("3").addEventListener("click",()=> appendToResult("3"));
document.getElementById("4").addEventListener("click",()=> appendToResult("4"));
document.getElementById("5").addEventListener("click",()=> appendToResult("5"));
document.getElementById("6").addEventListener("click",()=> appendToResult("6"));
document.getElementById("7").addEventListener("click",()=> appendToResult("7"));
document.getElementById("8").addEventListener("click",()=> appendToResult("8"));
document.getElementById("9").addEventListener("click",()=> appendToResult("9"));
document.getElementById("0").addEventListener("click",()=> appendToResult("0"));
document.getElementById("+").addEventListener("click",()=> appendToResult("+"));
document.getElementById("-").addEventListener("click",()=> appendToResult("-"));
document.getElementById("/").addEventListener("click",()=> appendToResult("/"));
document.getElementById("x").addEventListener("click",()=> appendToResult("*"));
document.getElementById("dot").addEventListener("click",()=> appendToResult("."));
document.getElementById("del").addEventListener("click",()=> deleteLast());
document.getElementById("reset").addEventListener("click",()=> resetValue());
document.getElementById("equals").addEventListener("click",()=> calculateResult());

