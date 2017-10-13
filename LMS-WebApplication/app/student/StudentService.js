var App;
(function (App) {
    var StudentService = (function () {
        function StudentService() {
            this.students = [];
            console.info("inititing student service", this.students);
        }
        return StudentService;
    }());
    App.StudentService = StudentService;
    angular.module('app').service("StudentService", StudentService);
})(App || (App = {}));
//# sourceMappingURL=StudentService.js.map