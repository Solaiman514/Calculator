var resultField = $("#result")

function insertNumber(Number){
    
    var existingNumber = resultField.val();
    
    resultField.val(existingNumber + Number)
    
}

function clearResult(){
    resultField.val("")
}

function calculate(){
    var result = eval(resultField.val())
    resultField.val(result)
}

function deleteNumber (){
    var presentValue = resultField.val()
    if(presentValue != ""){
        resultField.val(presentValue.slice(0,-1))
    }
}
