﻿module App {
    export class StudentService {
        students: Student[];

        constructor() {
            this.students = [];
            console.info("inititing student service", this.students);
        }
    }
    angular.module('app').service("StudentService", StudentService)
}