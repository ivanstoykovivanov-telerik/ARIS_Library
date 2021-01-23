
/**
* takes an array of UMC user objects and returns an array of Strings composed of Last name, First name, (user-ID)
*/
function getUserTitles(a_userList){
    
    return a_userList.map(
        function(oUser)
        {
            var sLastName = getAttributeValue(oUser, Constants.AT_LAST_NAME);
            var sFirstName = getAttributeValue(oUser, Constants.AT_FIRST_NAME);
 
            var sUserName = "";

            if ((sLastName != null) && (sFirstName != null))
            {
                sUserName = sLastName + ", " + sFirstName + " (" + oUser.Name(g_nLoc) + ")";
            }
            else
            {
                sUserName = oUser.Name(g_nLoc);
            }
 
            return sUserName;
        }
    );
}

/**
* takes an array of UMC user objects and returns an array of user IDs
*/
function getUserLogins(a_userList){
    
    return a_userList.map(
        function(oUser)
        {
            return String(getAttributeValue(oUser, Constants.AT_NAME));
        }
    );
}