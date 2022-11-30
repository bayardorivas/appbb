import { useState, useEffect, createContext } from "react";
import { auth } from "./firebase/base";
import { onAuthStateChanged } from "firebase/auth";
import { async } from "@firebase/util";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (loggedUser) => setCurrentUser(loggedUser));
    console.log(currentUser);
  }, []);

  const addTransaction = async (transaction) => {
    try {
      const mongoUser = await getUserFromDb(currentUser.uid);
      transaction["user"] = mongoUser._id;

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/v1/transactions`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
          body: JSON.stringify(transaction),
        }
      );
      if (response.status !== 200) return null;
      
      const data = await response.json();
      console.log("data:",data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const getUserFromDb = async (firebaseId) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/v1/users/${firebaseId}`
      );
      const data = await response.json();
      if (response.status !== 200) return null;
      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const insertUserIntoDb = async (firebaseId, name, email) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({
          firebaseId,
          name,
          email,
        }),
      });
      const data = await response.json();
      if (response.status !== 200) return null;
      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  return (
    <UserContext.Provider
      value={{ currentUser, addTransaction, getUserFromDb, insertUserIntoDb }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
