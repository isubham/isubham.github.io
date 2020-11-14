(function() {

angular
.module('app.services')
.service('fileService', function () {

    /*
        @author : subham kumar 
        @date : 30 nov 2020
        @description : for managing files on javascript
        @verbs
        - download 
        - csvDownload

    */

    function jsonArrayToCSV(jsonArray, headers, jsonToLine) 
    {

        var objArray = JSON.stringify(jsonArray);

        var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;

        var str = '';
        str += headers.join(",") + '\r\n';
        for (var i in array) 
        {
            var line = jsonToLine({i:array[i]});
            str += line + '\r\n';
        }
        return str;
    
    }

    function keyBasedJsontoCSV(keyBasedValue, headers)
    {
        data = [];
        for(key in keyBasedValue)
        {
            keyBasedValue[key][headers[0]] = key;
            data.push(keyBasedValue[key])
        }
        return Papa.unparse(data);
    }

    function jsonToCSV(json, headers)
    {
        var data = [];
        var firstHeader = headers[0];
        var secondHeader = headers[1];
        for(key in json)
        {
            var dataKey = {};
            dataKey[firstHeader] =  key;
            dataKey[secondHeader] = json[key];
            data.push(dataKey);
        }
        return Papa.unparse(data);
    }



    this.download = function(filename, text)
    {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);
    
        element.style.display = 'none';
        document.body.appendChild(element);
    
        element.click();
    
        document.body.removeChild(element);
    }

    /*
    @date : 30 oct 2020
    @author : subham kumar <subhamkumarchandrawansi@gmail.com>

    downloads csv from json

    @param {String} filename: downloaded filename
    @param {Array[Object]} jsonArray : data to download [{name:'subham', age : 24}, {name:'raveesh', age : 24}]
    @param {Array[String]} headers : array of strings representing headers of csv ['name', 'age']
    @param {function} jsonToLine : function which converts a single json element into csv line

    */
    this.jsonArrayToCSVDownload = function (filename, jsonArray, headers, jsonToLine)
    {
        this.download(filename, jsonArrayToCSV(jsonArray, headers, jsonToLine));
    }       
    
    this.keyBasedJsonToCSVDownload = function (filename, keyBasedJson, headers)
    {
        this.download(filename, keyBasedJsontoCSV(keyBasedJson, headers));
    }

    this.jsonToCSV = function (filename, json, headers)
    {
        this.download(filename, jsonToCSV(json, headers));
    }

 

});

})();