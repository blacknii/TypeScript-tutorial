let myName: string = " Dave ";
const meaningOfLife: number = 42;
const isLoading: boolean = true;
const album: any = 5150;

myName = "John";

const sum = (a: number, b: number) => {
  return a + b;
};

let postld: string | number;
let isActive: number | boolean;
let re: RegExp;

const Task02 = () => {
  return (
    <div>
      <p>{myName}</p>
      <p>{meaningOfLife}</p>
      <p>{isLoading}</p>
      <p>{album}</p>
      <p>{sum(2, 2)}</p>
      <p>{postld}</p>
      <p>{isActive}</p>
    </div>
  );
};

export default Task02;
