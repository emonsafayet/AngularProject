var App;
(function (App) {
    var HomeController = (function () {
        function HomeController() {
            console.log("I am in Home Controller");
            this.now = new Date().toString();
        }
        return HomeController;
    }());
    //register
    angular.module('app').controller('HomeController', HomeController);
})(App || (App = {}));
//# sourceMappingURL=HomeControllers.js.map