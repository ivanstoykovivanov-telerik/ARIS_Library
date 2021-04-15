/** determines if an element is contained in the array.
 * @memberOf Array
 * @param {Object} element the object to test
 * @type {boolean}
 * @returns true=element is contained in this.
 */
 Array.prototype.contains = function(element){
    if (null == element) return false;
    for (var j12=0; j12<this.length; j12++){
        if (null != this[j12]){
            // try{
                if (this[j12].toString().equals(element.toString())){
                    return true;
                }
            // }
            // catch(e){
                //  Dialogs.MsgBox(ex);   
            // }
        }
    }
    return false;    
};