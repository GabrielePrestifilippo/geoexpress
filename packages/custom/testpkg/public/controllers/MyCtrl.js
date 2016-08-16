/*
 * This is an Angular.js controller to handle the actions on the user interface
 * */

(function () {
  'use strict';

//Code Copied from an online JSBIN, should allow a file Upload using angular


  function MyCtrl(scope) {

    scope.setFiles = function (element) {
      scope.$apply(function (scope) {
        console.log('files:', element.files);


        scope.file = element.files[0];
        scope.progressVisible = false
      });
    };

    scope.uploadFile = function () {

      var fd = new FormData()
      fd.append("files", scope.file)

      var xhr = new XMLHttpRequest()
      xhr.upload.addEventListener("progress", uploadProgress, false)
      xhr.addEventListener("load", uploadComplete, false)
      xhr.addEventListener("error", uploadFailed, false)
      xhr.addEventListener("abort", uploadCanceled, false)
      xhr.open("POST", "/api/testpkg/filewmsupload")
      scope.progressVisible = true
      xhr.send(fd)
      console.log(fd)
    }

    function uploadProgress(evt) {
      scope.$apply(function () {
        if (evt.lengthComputable) {
          scope.progress = Math.round(evt.loaded * 100 / evt.total)
        } else {
          scope.progress = 'unable to compute'
        }
      })
    }

    function uploadComplete(evt) {
      /* This event is raised when the server send back a response */
      console.log(evt.target.responseText)
    }

    function uploadFailed(evt) {
      alert("There was an error attempting to upload the file.")
    }

    function uploadCanceled(evt) {
      scope.$apply(function () {
        scope.progressVisible = false
      })
      alert("The upload has been canceled by the user or the browser dropped the connection.")
    }
  }


  //Defining the new angular controller
  angular
    .module('mean.testpkg')
    .controller('MyCtrl', MyCtrl);

  MyCtrl.$inject = ['$scope', 'Global', 'Testpkg', '$stateParams'];

})();



