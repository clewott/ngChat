'use strict';

angular.module('chatApp')
  .controller('chatCtrl', function ($scope, $location, $rootScope, $routeParams, $timeout, $cookies, $cookieStore, chatSvc, userSvc) {


    $scope.user = chatSvc.userName;
    console.log($scope.user);

    chatSvc.getChats().success(function(chats){
      $scope.chats = chats;
    });


    $scope.addUser = function(userName){
      chatSvc.addUser(userName);
      $location.path("/chat");
    };

    $scope.addChat = function(chat) {
      var chat =
      {
        name: $scope.user,
        content: chat.content,
        date: new Date()
      };
      chatSvc.addChat(chat);
      $scope.submitChat ={};
    };

                    // I keep track of how many times the user has clicked
                // the link.
                $scope.clickCount = 0;

                // I determine if the "encouraging" feedback is shown.
                $scope.isShowingFeedback = false;


                // ---
                // WATCHERS.
                // ---


                // When you call the $watch() method, AngularJS
                // returns an unbind function that will kill the
                // $watch() listener when its called.
                var unbindWatcher = $scope.$watch(
                    "clickCount",
                    function( newClickCount ) {

                        console.log( "Watching click count." );

                        if ( newClickCount >= 5 ) {

                            $scope.isShowingFeedback = true;

                            // Once the feedback has been displayed,
                            // there's no more need to watch the change
                            // in the model value.
                            unbindWatcher();

                        }

                    }
                );


                // ---
                // PUBLIC METHODS.
                // ---


                // I increment the click count.
                $scope.incrementCount = function() {

                    $scope.clickCount++;

                    // NOTE: You could just as easily have called a
                    // counter-related method right here to test when
                    // to show feedback. I am just demonstrating an
                    // alternate approach.

                };

            




    // $rootScope.$on("chat:added", function(){
    //   chatSvc.getChat().success(function(chat){
    //     $scope.singleChat = chat;
    //   });
    // });
});
