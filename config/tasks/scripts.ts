import { ITask } from "../types";
import { src, dest } from 'gulp';
import { ErrorHandler } from "../utils";

var ts = require("gulp-typescript");
var tsProject = ts.createProject("./tsconfig.json");

export const Scripts: ITask = {
    name: 'Scripts',
    src: ['scripts'],
    dest: ['scripts'],
    extention: ['*.ts'],
    callBack(cb: any) {
        src(this.src)
            .pipe(tsProject().on('error', ErrorHandler))
            .pipe(dest(this.dest))
        cb();
    }
}
