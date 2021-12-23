import { useEffect, useState } from "react";
import { BehaviorSubject } from "rxjs";

const API_SERVER = "http://localhost:8888";

export const jwt = new BehaviorSubject(null);

export const login = (username, password) => {
  jwt.next(`${username}:${password}`);
  return `${username}:${password}`;
  /* fetch(`${API_SERVER}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      jwt.next(data.access_token);
      return data.access_token;
    }); */
}

export const logout = () => {
  jwt.next(null);
};

export const useLoggedIn = () => {
  const [loggedIn, setLoggedIn] = useState(!!jwt.value);

  useEffect(() => {
    setLoggedIn(!!jwt.value);
    return jwt.subscribe(() => setLoggedIn(!!jwt.value));
  }, []);

  return loggedIn;
};
