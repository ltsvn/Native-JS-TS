import {StudentType} from "../02-Object/02";
import {addSkill, makeStudentActive, doesStudentLiveIn} from "./03";

let student: StudentType;
beforeEach(() => {
    student = {
        id: 1,
        name: 'Nastya',
        age: 20,
        isActive: false,
        address: {
            streetTitle: 'Surganowa 2',
            city: {
                title: 'minsk',
                countryTitle: 'Belarus'
            }
        },
        technologies: [
            {
                id: 1,
                title: 'HTML'
            },
            {
                id: 2,
                title: 'CSS'
            },
            {
                id: 2,
                title: 'React'
            }
        ]
    }
})

test('new tech skill should be added to student', () =>{
    expect(student.technologies.length).toBe(3);

    addSkill(student, 'JS');

    expect(student.technologies.length).toBe(4);
    expect(student.technologies[3].title).toBe('JS');
    expect(student.technologies[3].id).toBeDefined();

})

test('student should be active', () =>{
    expect(student.isActive).toBe(false);

    makeStudentActive(student);

    expect(student.isActive).toBe(true);

})
test(' does student live in city?', () =>{


    let result1 = doesStudentLiveIn(student, 'Moscow');
    let result2 = doesStudentLiveIn(student, 'Minsk');

    expect(result1).toBe(false);
    expect(result2).toBe(true);

})