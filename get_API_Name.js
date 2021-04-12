
/** returns the API name for a given family of elements.
 * @param {integer} nVal integer value resulting from Constants.XYZ
 * @param {String} sKind the family of elements (ST, OT, MT, ItemKind etc.)
 * @returns {integer} colour
 */
 function getApiName(nVal, sKind){
    var sRet = ""; 
    switch(sKind){
        case "ItemKind": 
            switch(nVal){
                case Constants.CID_OBJDEF:
                    sRet = "CID_OBJDEF"; 
                    break;
                case Constants.CID_MODEL:
                    sRet = "CID_MODEL"; 
                    break;
                case Constants.CID_GROUP:
                    sRet = "CID_GROUP"; 
                    break;
                case Constants.CID_CXN_DEF:
                    sRet = "CID_CXN_DEF"; 
                    break;
                default:
            }
            break;
        case "ST": 
            sRet = g_oArisMetaModel.SymbolName(nVal);
            break;
    }
    return sRet;
}