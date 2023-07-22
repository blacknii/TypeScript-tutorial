const addTwo = (num: number) => {
  return num + 2;
};

const getUpper = (val: string) => {
  return val.toUpperCase();
};

const singUpUser = (
  name: string,
  email: string,
  isPaid: boolean = false
): string => {
  return `name: ${name} - email: ${email} -  ${isPaid ? "paid" : "not paid"}`;
};

const Task01 = () => {
  return (
    <div>
      <p>{addTwo(2)}</p>
      <p>{getUpper("hello")}</p>
      <p>{singUpUser("John", "john@gmail.com", true)}</p>
    </div>
  );
};

export default Task01;
