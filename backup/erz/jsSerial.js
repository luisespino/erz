/* 
 * JavaScript array
 * serializer to php
 */

function serialize (mixed_value) {
    var _getType = function (inp) {
        var type = typeof inp, match;
        var key;
        if (type == 'object' && !inp) {            return 'null';
        }
        if (type == "object") {
            if (!inp.constructor) {
                return 'object';            }
            var cons = inp.constructor.toString();
            match = cons.match(/(\w+)\(/);
            if (match) {
                cons = match[1].toLowerCase();            }
            var types = ["boolean", "number", "string", "array"];
            for (key in types) {
                if (cons == types[key]) {
                    type = types[key];                    break;
                }
            }
        }
        return type;    };
    var type = _getType(mixed_value);
    var val, ktype = '';

    switch (type) {        case "function":
            val = "";
            break;
        case "boolean":
            val = "b:" + (mixed_value ? "1" : "0");            break;
        case "number":
            val = (Math.round(mixed_value) == mixed_value ? "i" : "d") + ":" + mixed_value;
            break;
        case "string":            mixed_value = this.utf8_encode(mixed_value);
            val = "s:" + encodeURIComponent(mixed_value).replace(/%../g, 'x').length + ":\"" + mixed_value + "\"";
            break;
        case "array":
        case "object":            val = "a";
            /*
            if (type == "object") {
                var objname = mixed_value.constructor.toString().match(/(\w+)\(\)/);
                if (objname == undefined) {                    return;
                }
                objname[1] = this.serialize(objname[1]);
                val = "O" + objname[1].substring(1, objname[1].length - 1);
            }            */
            var count = 0;
            var vals = "";
            var okey;
            var key;            for (key in mixed_value) {
                ktype = _getType(mixed_value[key]);
                if (ktype == "function") {
                    continue;
                }
                okey = (key.match(/^[0-9]+$/) ? parseInt(key, 10) : key);
                vals += this.serialize(okey) +
                        this.serialize(mixed_value[key]);
                count++;            }
            val += ":" + count + ":{" + vals + "}";
            break;
        case "undefined": // Fall-through
        default: // if the JS object has a property which contains a null value, the string cannot be unserialized by PHP            val = "N";
            break;
    }
    if (type != "object" && type != "array") {
        val += ";";    }
    return val;
}



