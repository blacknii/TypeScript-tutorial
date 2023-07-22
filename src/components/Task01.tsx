let greedings: string = "Hello John";
const myNum = 6;

greedings = greedings.toLocaleLowerCase();

const Task01 = () => {
  return (
    <div>
      <p>{greedings}</p>
      <p>{myNum}</p>
    </div>
  );
};

export default Task01;
