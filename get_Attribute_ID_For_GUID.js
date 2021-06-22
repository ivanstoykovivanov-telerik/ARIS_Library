
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


/** function att()
*  Transfer the specified attribute type GUID to a current attribute type number. 
 *  returns: attribute type number
*  Supported formats:
*  - "f2e211c0-4cf2-11ea-1524-005056849f3d"
*   - Constant.AT_FUNC
*  - 8
*  - "AT_DESC"
*  - "AT_CUSTOM_DESC" (taken from CustomConstants)
*/    
function att(typeNumOrGUID) {
    var returnTypeNum = null;
    try {
        returnTypeNum = ArisData.getActiveDatabase().ActiveFilter().UserDefinedAttributeTypeNum(typeNumOrGUID);  
        if (returnTypeNum==-1) returnTypeNum = null;         
    } catch (e) {};

    if ((returnTypeNum == null) && !isNaN(typeNumOrGUID)) {
        try {
            returnTypeNum = parseInt(typeNumOrGUID);
        } catch (e) {}
    }
    if (returnTypeNum == null && Constants[typeNumOrGUID]!=null) {
        returnTypeNum = Constants[typeNumOrGUID];    
    }   
    if (returnTypeNum == null && typeof CustomConstants !== 'undefined' && CustomConstants[typeNumOrGUID]!=null ) {
        returnTypeNum = CustomConstants[typeNumOrGUID];    
    }      
    if (null == returnTypeNum) throw typeNumOrGUID + "\nis not valid!";
    return returnTypeNum;
}
