type StringOrNumber = string | number;
type UserObj = {
  name: string,
  age: number,
  id: StringOrNumber
};

const logUser = (user: UserObj): void => console.log(user);

logUser({
  name: 'André',
  age: 19,
  id: 'b6a32f22-3274-4d3e-b8c0-8619b04eef33'
});
