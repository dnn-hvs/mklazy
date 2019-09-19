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

