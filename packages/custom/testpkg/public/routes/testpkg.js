(function () {
  'use strict';

  function Testpkg($stateProvider) {
    $stateProvider.state('testpkg example page', {
      url: '/testpkg/example',
      templateUrl: 'testpkg/views/index.html'
    }).state('testpkg circles example', {
      url: '/testpkg/example/:circle',
      templateUrl: 'testpkg/views/example.html'
    }).state('WMS Example', {
      url: '/testpkg/wms',
      templateUrl: 'testpkg/views/wms.html'
    }).state('mapnik', {
      url: '/testpkg/:bbox',
      templateUrl: '/testpkg/views/view.html'
    }).state('upload wms map', {
      url: '/testpkg/views/upload.html',
      templateUrl: '/testpkg/views/upload.html',
      controller: 'MyCtrl' //specify which controller to use
    });
  }

  angular
    .module('mean.testpkg')
    .config(Testpkg);

  Testpkg.$inject = ['$stateProvider'];

})();
