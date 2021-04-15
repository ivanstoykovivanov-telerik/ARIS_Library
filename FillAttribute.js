function fillAttribute(o_model, n_attribute, attrValue, s_errorMsg){
    var b_setCorrectly = o_model.Attribute(n_attribute, g_nLoc).setValue(attrValue);             
    if(!b_setCorrectly){
        Dialogs.MsgBox(s_errorMsg);
        return false;         
    }
    return true;
}