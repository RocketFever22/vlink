/*
This object will create a virtual link for async downloads.

Created by: RocketFever22
*/

var vLink = function(){

  var virtualLink = document.createElement('a');

  return {
    download: function(dataAttribute, fileName){
      virtualLink.setAttribute('href', dataAttribute);
      virtualLink.setAttribute('download', fileName);
      virtualLink.click(); 
    },
    setCustomAttribute: function(attributeName, attributeValue){
      virtualLink.setAttribute(attributeName, attributeValue);
      console.log(virtualLink);
    },
    clearAttribute: function(attributeName){
      if(virtualLink.hasAttribute(attributeName)){
        virtualLink.removeAttribute(attributeName);
      }
    }
  };

}();

/*

Usage:

First we define variables:
var data_attribute = 'data:attachment/csv;charset=utf-8,';
var name_of_file_to_download = 'jc_candidates.csv';

We can add custom attributes:
vLink.setCustomAttribute('new_attribute_key', 'new_attribute_value');

We can remove unwanted attributes:
vLink.clearAttribute('attribute_to_remove');

Then we only have to download
vLink.download(data_attribute, name_of_file_to_download);

*/
