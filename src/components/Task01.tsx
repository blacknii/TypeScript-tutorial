const addTwo = (num: number) => {
  return num + 2;
};

const getUpper = (val: string) => {
  return val.toUpperCase();
};

const Task01 = () => {
  return (
    <div>
      <p>{addTwo(2)}</p>
      <p>{getUpper("hello")}</p>
    </div>
  );
};

export default Task01;
