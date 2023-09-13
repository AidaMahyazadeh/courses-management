import ICourse from "./course.model";

export interface ILoginForm {
    username :string;
    password :string;
    enroledCourse :ICourse[]
}