angular.module('markdownEditor')
    .controller('markedownController', ['$scope', function($scope) {

    $scope.codemirrorLoaded = function(_editor) {
        
        var _doc = _editor.getDoc();
        _editor.focus();

        _editor.setOption('firstLineNumber', 1);
        _doc.markClean()

        _editor.on("beforeChange", function() {

        });
        _editor.on("change", function() {
          console.log(marked(_doc.getValue()));
          $scope.outputText = marked(_doc.getValue());
        });
    };


  }]);