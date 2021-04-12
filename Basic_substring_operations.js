
/** returns a substring after occurence of sStr.
 * @memberOf String
 * @param sStr {String}
 * @returns {String}
 */
 String.prototype.substringAfter = function(sStr){
    var sRet = String();
    var nHelp = this.indexOf(String(sStr));
    var nLength = sStr.length;
    if (nHelp > -1)
        sRet = this.slice(nHelp + nLength);
    return sRet;
};


/** returns a substring before occurence of sStr.
 * @memberOf String
 * @param sStr {String}
 * @returns {String}
 */
String.prototype.substringBefore = function(sStr){
    var sRet = String();
    var nHelp = this.indexOf(String(sStr));
    if (nHelp > -1)
        sRet = this.slice(0, nHelp);
    return sRet;
};


/** returns a substring starting from the end of the last occurence of sOne up to the first occurence of sTwo.
 * @memberOf String
 * @param sOne {String}
 * @param sTwo {String}
 * @returns {String}
 */
 String.prototype.sliceLastStr1BeforeFirstStr2 = function(sOne, sTwo){
    var sRet = String();
    // last occ of One 
    var nLastOccOfOne = this.lastIndexOf(sOne);
    if (nLastOccOfOne > -1){
        var sFirst = this.slice(nLastOccOfOne + sOne.length);
        var nFirstOccOfTwo = sFirst.indexOf(sTwo);
        if (nFirstOccOfTwo > -1)
            sRet = sFirst.slice(0, nFirstOccOfTwo);
    }
    /* first occ of Two
    var nFirstOccOfTwo = this.indexOf(sTwo);
    // crit: found
    if (nFirstOccOfTwo > -1){
        // substr til first occ of Two
        var sSubstr1 = this.slice(0, nFirstOccOfTwo);
        // last occ of One within substr
        var nLastOccOfOne = sSubstr1.lastIndexOf(sOne);
        // crit: found
        if (nLastOccOfOne > -1){
            // substr of substr from last One til fist Two
            sRet = sSubstr1.slice(nLastOccOfOne + 1, this.length);
        }
    }*/
    return sRet;
};

/** returns a substring starting from the end of the last occurence of sOne up to the end.
 * @memberOf String
 * @param sOne {String}
 * @returns {String}
 */
String.prototype.sliceLastStr1 = function(sOne){
    var sRet = String();
    // crit: found
    // if (nFirstOccOfTwo > -1){
        // substr til first occ of Two
        // var sSubstr1 = this.slice(0, nFirstOccOfTwo);
        // last occ of One within substr
        var nLastOccOfOne = this.lastIndexOf(sOne);
        // crit: found
        if (nLastOccOfOne > -1){
            // substr of substr from last One til fist Two
            sRet = this.slice(nLastOccOfOne + 1, this.length);
        }
    // }
    return sRet;
};
