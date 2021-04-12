
/*
@param GUID of user defined attribute 
@returns Attribute's Type Number
*/
function getAttrID4GUID(strGUID){
    var oActFilter = ArisData.ActiveFilter();
    return oActFilter.UserDefinedAttributeTypeNum(strGUID);
}



