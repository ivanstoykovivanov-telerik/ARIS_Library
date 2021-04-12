function isValidEmailFormat(strEmail) {
    var rgEmailFormat = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if (strEmail != "" && strEmail != null) {
        return rgEmailFormat.test(strEmail);        
    }
    return true;
}
