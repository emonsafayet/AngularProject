module App {

    class Student {
        name: string;
        phone: string;
        getinfo(): string {
            return this.name + "-" + this.phone;
        }
    }

    class StudentController {
        student: Student;
        information: string;

        constructor() {
            this.student = new Student;
            console.log("I am in Student Controller");
        }
        display(): void {
            this.information = this.student.getinfo();
        }
    }
    angular.module('app').controller('StudentController', StudentController);

    class StudentsController {
        students: Student[];
        constructor() {
            this.students = [];
            console.log("I am in Students Controller");
        }
    }
        angular.module('app').controller('StudentsController', StudentsController);
   
}
    