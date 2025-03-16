type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(values: Partial<User>): User {
  const initialValues: User = {
    name: "",
    surname: "",
    email: "",
    password: "",
  };
  // Оновлення користувача
  return { ...initialValues, ...values };
}

const newUser = createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});

console.log(newUser);
