# contextApi

- this project solves the problem of the prop drilling in the React

1. we create the `UserContext` file for create a context and store into variable `useContext` for the whole application.
2. create the another JSX file name as `UserContextProvider`, pass a `{children}` as the prop (as any component can use the value provided in the this file anywhere).

- we create the `user` variable can be set by the `setUser` method by using the `useState` hook in the application.
- wrap the prop `children` in the `userContext.Provider` by passing the mention value like `user` and `setUser`.

```Javascript
const UserContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};

export default UserContextProvider;
```

3. we create the two more JSX component. `Login.jsx` use to get the value from the user. and `Profile.jsx` use to provide the value back to the application

## `Login.jsx`

```Javascript
import { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
    // To set the user name
  const [userName, setUserName] = useState("");

    // To set the password
  const [password, setPassword] = useState("");

    // getting the setUser method from the UserContext to set up the userName for the application by using the useContext hook, and we are passing our own created custom UserContext to the application.
  const { setUser } = useContext(UserContext);

    // It for the onclick method to get the value from the input field. `e.preventDefault` make sure to don`t submit the empty form`
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ userName, password });
  };
  return (
    <div>
      <h2>Login Page</h2>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Username"
      />{" "}
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
```

## `Profile.jsx`

- value that comes from the `Login.jsx`, that we are using to display the username on the screen.

```Javascript
import { useContext } from "react";
import userContext from "../context/UserContext";

function Profile() {
    // getting the user variable from the UserContext to access the user value for the application by using the useContext hook, and we are passing our own created custom UserContext to the application.
  const { user } = useContext(userContext);

    // if the user is not available show the below line
  if (!user) return <div>Please login to see the magic</div>;

    // if user provide the value then show the username on the screen.
  return <div>Welcome {user.userName}</div>;
}

export default Profile;
```
