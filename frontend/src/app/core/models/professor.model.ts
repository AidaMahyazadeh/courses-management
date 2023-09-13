import ICourse from "./course.model";

export interface IProfessor{
    id :number;
    name: string;
    courses: ICourse[]
}