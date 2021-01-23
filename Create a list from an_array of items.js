// Not in library yet: 


/**
* showList(a_oItems, g_nLoc) shows a list of the items contained in the arry 
*/
function showList(a_oItems, g_nLoc){
    
    var s_List = "";     
    for (var i=0; i< a_oItems.length; i++){
        s_List = s_List + "\n" + a_oItems[i].Name(g_nLoc); 
    }    
    return  s_List; 
}

// use with to be added to the main funciton
Dialogs.MsgBox(showList(a_oItems, g_nLoc)); 