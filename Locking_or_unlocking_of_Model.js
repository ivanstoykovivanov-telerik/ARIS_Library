/*
* locks or unlocks all models in scope of the main model for the user "arisservice". Returns true, if this was successful in all cases, false otherwise
* in case of error it brings up an error dialogue showing all messages of where it failed.
*/
function lockOrUnlockModels(o_mainModel, b_locking){
    
    //GET MODELS IN SCOPE OF MAIN MODEL
    var a_oModelsInScope = getModelsInScope(o_mainModel);
    var a_oModelsToLock; 
    if(a_oModelsInScope){                    
        a_oModelsToLock = a_oModelsInScope.concat(o_mainModel); 
    }else{
        a_oModelsToLock = o_mainModel; 
    }
    
    var a_ErrorMsg =[]; 
    
    for (var i=0; i< a_oModelsToLock.length; i++){
        var status; 
        if(b_locking){
            status = LOCK_COMPONENT.lock( a_oModelsToLock[i], false, "arisservice");  
        }else{
            status = LOCK_COMPONENT.unlock( a_oModelsToLock[i], true );  
        }                        
        if(!status.Success()){
            a_ErrorMsg.push(status.getErrorMessage());                       
        }                        
    }                
    
    //show list of models with error in locking 
    if(a_ErrorMsg.length > 0){
        Dialogs.MsgBox(showList(a_ErrorMsg, b_locking));          
        return false; 
    }         
    return true; 
    
}


/**
* showList(a_sErrorMsg, b_locking) composes an error message comprising all locking error messages passed in the array of error messages
*/
function showList(a_sErrorMsg, b_locking){
    var s_operation = "locking";
    if(!b_locking){
        s_opearation = "unlocking"; 
    }
    
    var s_List = "";     
    for (var i=0; i< a_sErrorMsg.length; i++){
        s_List = s_List + "\n" + a_sErrorMsg[i]; 
    }    
    return "The following errors occured when " + s_operation + " the models: " + s_List; 
}


