
/*
@param GUID of user defined attribute 
@returns Attribute's Type Number
*/
function getUserDefinedAttrID4GUID(strGUID){
    var oActFilter = ArisData.ActiveFilter();
    return oActFilter.UserDefinedAttributeTypeNum(strGUID);
}

function getAttrID4GUID(s_GUID){
    var n_returnTypeNum;
    
    try {
        n_returnTypeNum = ArisData.getActiveDatabase().ActiveFilter().UserDefinedAttributeTypeNum(s_GUID);  
        if (n_returnTypeNum==-1){ n_returnTypeNum = null; }
    } catch (e) {};
    return n_returnTypeNum
}

