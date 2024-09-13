import { useState, createContext } from "react";
import { fakeAuthProvider } from "../../services/auth";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const signin = (user, callback) => {
    return fakeAuthProvider.signin(() => {
      setUser(user);
      callback();
    });
  };

  const signout = (callback) => {
    return fakeAuthProvider.signout(() => {
      setUser(null);
      callback();
    });
  };

  const value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
