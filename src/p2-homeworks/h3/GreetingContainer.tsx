import React, {ChangeEvent, useState} from "react";
import Greeting from "./Greeting";
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
   users: Array<UserType> // need to fix any
   addUserCallback: (name: string) => void // need to fix any
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
   const [name, setName] = useState<string>(""); // need to fix any
   const [error, setError] = useState<string>(""); // need to fix any

   const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
      setName(e.currentTarget.value); // need to fix
   };

   const addUser = () => {
      const trimmedName = name.trim()
      if (name) {
         alert(`Hello  ${name}!`)
         addUserCallback(trimmedName)
      } else {
         setError('Name is required!')
      }
   };

   let totalUsers = users.length; // need to fix

   return (
      <Greeting
         name={name}
         setNameCallback={setNameCallback}
         addUser={addUser}
         error={error}
         totalUsers={totalUsers}
      />
   );
}

export default GreetingContainer;
