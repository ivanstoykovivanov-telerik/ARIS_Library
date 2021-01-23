
/*
*   These two functions could be used as a template whenever you need to perform a semantik check on a model 
*   and possible its context models with a predifened semantik check profile. 
* 
*
*   The function runSemCheckAccordingToModelType  assigns a different sem check profile based on the model type. 
*   
*   The function runSemCheck  executes the sem. check based on the result of the first function, outputs an Excel file with the result of the check 
*   and sets the values of two attributes of the model based on the result.    
*
*   Parts of the templates could be easily adapted or removed according to the requirements of your task:
*   Enjoy 
*   
*
*   Ivan Ivanov
*   19.12.2020 
*/



/**
* for the given main model the semantic check profile is chosen that is supposed to be executed on all models in scope
* the semCheck is called and it returns true, if any errors occurred, false if everything is okay.
*/
function runSemCheckAccordingToModelType(o_mainModel){
    var s_SemCheckProfilGUID = ""; 
    var a_oAllModelsInScope = new Array(o_mainModel);      
   
    switch (o_mainModel.TypeNum()){                
        
        case Constants.MT_STRCT_DGM:                // Process landscape             
            s_SemCheckProfilGUID = "d8288bd0-b0b0-11ea-0be2-00505684d876";     // SemCheck Profile:  Master check
            var a_oFurtherModelsInScope =  getModelsInScope(o_mainModel); 
            a_oAllModelsInScope = a_oAllModelsInScope.concat(a_oFurtherModelsInScope); 
            break;
            
        case Constants.MT_VAL_ADD_CHN_DGM:          //Process map    
            s_SemCheckProfilGUID = "d8288bd0-b0b0-11ea-0be2-00505684d876";    // SemCheck Profile:  Master check
            var a_oFurtherModelsInScope =  getModelsInScope(o_mainModel); 
            a_oAllModelsInScope = a_oAllModelsInScope.concat(a_oFurtherModelsInScope); 
            break;                     
            
        case Constants.MT_EEPC_TAB_HORIZONTAL:      //Process flow(EPC)  
            s_SemCheckProfilGUID = "e1925350-b0af-11ea-0be2-00505684d876";     // SemCheck Profile:  “Master check for process flow and work instruction”
            break;

    }      
    
    return runSemCheck(s_SemCheckProfilGUID, a_oAllModelsInScope);      
}


/*
***    Run Semantic Check 
*
*      g_sProfileGUID is the GUID of the Semantic check profile to be executed
*      a_oAllModelsInScope - an array of: main model + all the models in scope of the main model  
*/
function runSemCheck(g_sProfileGUID, a_oAllModelsInScope){    
    
    var compReport =  Context.getComponent("Report");    
    var semCheckData  = compReport.createSemCheckExecInfo(g_sProfileGUID, a_oAllModelsInScope, g_nLoc, Constants.OutputXLS, "SemCheck.xls", "");
                                                                                                                                             
            
    var semCheckResult = compReport.execute(semCheckData);
    Context.addOutputFile("SemCheck.xls", semCheckResult.getResultFileData()[0].getData()); 
       
    var b_hasError = false;     
    ArisData.getActiveDatabase().setAutoTouch(false);
    
    for each(var o_Model in a_oAllModelsInScope){       
        var check = semCheckResult.getProperty("semcheckError")       
        if(check != null && check.equals("true")){
            o_Model.Attribute(Constants.AT_SEMANTIC_CHECK_SUCCESSFUL, g_nLoc).setValue(false);
            o_Model.Attribute(Constants.AT_TIME_OF_LAST_SEMANTIC_CHECK, g_nLoc).setValue(new Date());
            b_hasError = true; 
        }else{
            o_Model.Attribute(Constants.AT_SEMANTIC_CHECK_SUCCESSFUL, g_nLoc).setValue(true);
            o_Model.Attribute(Constants.AT_TIME_OF_LAST_SEMANTIC_CHECK, g_nLoc).setValue(new Date());
        }
    }
    
    ArisData.getActiveDatabase().setAutoTouch(true);
    return b_hasError; 
}
