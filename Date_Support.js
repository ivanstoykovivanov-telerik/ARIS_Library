function getDateToString(p_oDate, p_sFormat) {
    var sRetValue = "";
    
    var sSDF = java.text.SimpleDateFormat(p_sFormat);
    try {sRetValue = sSDF.format(p_oDate);}catch(e){}
    
    return sRetValue;
}

function getStringToDate(p_sDate, p_sFormat) {
    var oRetDate = null;
    
    var sSDF = java.text.SimpleDateFormat(p_sFormat);
    try {oRetDate = sSDF.parse(p_sDate);}catch(e){}
    
    return oRetDate;
}
