var App;
(function (App) {
    var Student = (function () {
        function Student() {
        }
        Student.prototype.getinfo = function () {
            return this.name + "-" + this.phone;
        };
        return Student;
    }());
    var StudentController = (function () {
        function StudentController() {
            this.student = new Student;
            console.log("I am in Student Controller");
        }
        StudentController.prototype.display = function () {
            this.information = this.student.getinfo();
        };
        return StudentController;
    }());
    angular.module('app').controller('StudentController', StudentController);
    var StudentsController = (function () {
        function StudentsController() {
            this.students = [];
            console.log("I am in Students Controller");
        }
        return StudentsController;
    }());
    angular.module('app').controller('StudentsController', StudentsController);
})(App || (App = {}));
//# sourceMappingURL=StudentControllers.js.map