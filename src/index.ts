//Basic Types
// let id:number = 5;
let company: string = 'Traversy Media'
let isPublished:boolean = true
let x: any = 'hello'
let age:number = 30


let ids:number [] = [1,2,3,4,5]
// console.log('Id',id)

//Tuple
let person:[number, string, boolean] = [1, 'Anish', true]

//Tuple Array
let employee: [number, string][]

employee =[
    [1, 'anix'],
    [2, 'nabin'],
    [3, 'dklnsn']
]



//unions

let  id: string | number = 2


//Enum
enum Direction1 {
    Up,
    Down,
    Left,
    Right
}

// console.log(Direction1.Up) //0

//objects
type UserType = {
    id:number,
    name: string
} 
const user: UserType= {
    id: 1,
    name: 'anish'
}

//Type Assertion

let cid:any = 1
// let customerId = <number>cid
let customerId  =  cid as number


//functions
function addNum(x:number, y:number):number {
    return x + y
}


//void type func
function log(message: string | number):void {
    console.log(message)
}


//interfaces
interface IUserProps{
    readonly id:number, //to make readonly
    name:string,
    age? : number//optional
}

const user1: IUserProps= {
    id: 1,
    name: 'anish'
}


//you cannot use interface with primitive or with unions
// interface type = string | union  => gives error but type can work with primitives or with unions

type point = string | number
let p :point  = 1

//interfaces with func

interface IMathFunc {
    (x: number, y:number):number
}

const add: IMathFunc  = (x:number,  y:number):number => x+y

//classes

interface IPersonProps{
    id:number, 
    name:string,
    register(): string
}


class Person implements IPersonProps {
    id:number
    name:string

    constructor(id:number, name:string){
       this.id = id
       this.name = name
    }

    register () {
        return `${this.name} is now register.`
    }
}

const personObj = new Person(1, 'anix')

// console.log(personObj)
// console.log(personObj.register())

class Employee extends Person{
    position: string
    
    constructor (id:number, name: string, position: string) {
       super(id, name)
       this.position = position
    }
}

const employeeObj = new Employee(3, 'anix001', 'Frontend Developer')

// console.log(employeeObj.name)
// console.log(employeeObj.register())

//Generics

function getArray<T>(items:T[]):T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['ani', 'anix', 'anix001'])

numArray.push(11)
strArray.shift('sajan')