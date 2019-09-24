/* eslint-disable require-jsdoc */
'use strict';

function validate() {
  if (document.getElementById('roll').value !== '' && document.getElementById('set').value !== '' && document.getElementById('uploadFile').value !== '') {
    console.log(document.getElementById('roll').value, document.getElementById('set').value, document.getElementById('uploadFile').value);
    document.getElementById('uploadDetails').disabled = false;
    return;
  }
  document.getElementById('uploadDetails').disabled = true;
}
function validateFile() {
  const filename = document.getElementById('uploadBtn').files[0].name;
  const extension = filename.split('.').pop();
  if (extension === 'zip') { document.getElementById('uploadFile').value = filename; }
  validate();
};
console.log("loaded");

function submitFile() {
  var submit_form = document.getElementById("uploadForm");
  submit_form.action = "http://localhost:8080/submit";

  // loadJSON(function (response) {
  //   // Parse JSON string into object
  //   var actual_JSON = JSON.parse(response);
  //   console.log(actual_JSON)
  //   submit_form.action = "http://localhost:8080/submit";

  // });
}

function loadJSON(callback) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', '../config.json', true); // Replace 'my_data' with the path to your file
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
      callback(xobj.responseText);
    }
  };
  xobj.send(null);
}