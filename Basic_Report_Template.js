

/*
*   This template could be used as a basic template for eveyry report. 
*   Parts of the templates could be easily adapted or removed according to the requirements of your task:
*   Enjoy 
*   Ivan Ivanov
*   19.12.2020 
*/
     

const PROCESS_COMPONENT = Context.getComponent("process");
const WEBMETHODS_COMPONENT = Context.getComponent("webMethodsIntegration"); 
const UMC_COMPONENT = Context.getComponent("UMC") 
const LOCK_COMPONENT = Context.getComponent("Locking");

var g_DB = ArisData.getActiveDatabase();   
var g_nLoc = Context.getSelectedLanguage();
var a_oModels = ArisData.getSelectedModels(); 
var o_mainModel = ArisData.getSelectedModels()[0]; 

var g_sMessage = "";              
var g_thereAreMoreModelsInScope = false; 
var g_hasError = false;     


function main(){                                        
                                           
            
    // *** INITIAL CHECKS: *** 
    
    var initialCheckFails = true 
    if(initialCheckFails){
        Dialogs.MsgBox("Initial check XXXXX produced an error."); 
        g_hasError = true;  
    } 
              
                                                                                                                                                                      
    if(g_hasError){       
        Dialogs.MsgBox("Stopping execution of the report."); 
    }else{                                                   
            
        // INITIAL CHECKS ARE CORRECT     
        // Main part of the report can start here: 
            
            
    }         
}


//*

// function first_(){}

//*


main();

