let props: ManType;


type ManType= {
    name:string
    age:number
    lessons:Array<LessonType>
    address:{
        street:{
            title:string
        }
    }
}

type LessonType={
    title: string
}

beforeEach(()=>{
     props = {
        name: 'Dimych',
        age: 32,
        lessons: [{title: '1'}, {title: '2'}],
        address:{
            street:{
                title:"yyyyyyy"
            }
        }
    }
})







test('', () => {


    // const age = props.age
    // const lessons = props.lessons
    const {age, lessons} = props
    const {title} =props.address.street


    expect(age).toBe(32)
    expect(lessons.length).toBe(2)
    expect(title).toBe('yyyyyyy')


})