
let names: string;
names = "rafiq";

let numAndString: string | number;

numAndString = 50;
console.log(numAndString);

let numTuple: string[];

numTuple = ["rafiq", "shafiq", "tutul"];

let numStringArray: (string | number | boolean)[];

numStringArray = ["rafiq", 5, true, "rafiq", false];

type userObj = {
  userName?: String;
  id: number;
  isAdmin: boolean;
};

// userObj={
//     userName:'rafiq',
//     id: 522,
//     isAdmin:true,
// };

const data: userObj = {
  userName: "",
  id: 522,
  isAdmin: true,
};

//functions

function SayHi(): string {
  console.log("rafiq");
  return "5";
}
console.log(SayHi());

type userType2 = {
  userName: string;
  id: number;
};

const user: userType2 = {
  userName: "rafiq",
  id: 5,
};
console.log(user);

interface Iusr {
  userName: string;
  email: string;
  age: number;
}

const user2: Iusr ={
    userName: 'string',
    email: '',
    age:44
}

interface NewType_1 extends Iusr{
    epId:number
}


const emp: NewType_1 = {
  userName: "rafqi",
  email: "dfd",
  age: 4,
  epId: 0,
};




/**
 * An interface representing a post object with an ID, title, description, and extra information
 * that can be either an array of authors or an array of categories.
 */



interface IAuthor {
    id: number,
    userName:string
}
    

interface Catgory {
    id: number,
    title: string
}


interface Ipost {
    id: number;
    title: string;
    desc: string;
    extra: IAuthor[] | Catgory[]
}



interface IpostBetter<T> {
  id: number;
  title: string;
    desc: string;
    extra: T[]
}



const testMe: IpostBetter<String> = {
    id: 1,
    title: 'strifn',
    desc: 'st',
    extra: ['string','sring']
}


interface IpostEvenBetter<T extends object>  {
  id: number;
  title: string;
    desc: string;
    extra: T[]
};

const testMe3: IpostEvenBetter<IAuthor> = {
  id: 1,
  title: "strifn",
  desc: "st",
  extra: [{id:5, userName:"sring"}],
};


const testMe4: IpostEvenBetter<Catgory> = {
  id: 1,
  title: "strifn",
  desc: "st",
  extra: [{ id: 5, title: "sring" }],
};

