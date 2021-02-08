import React, {ChangeEvent} from "react";
import s from "./Greeting.module.css";
import {inspect} from "util";

type GreetingPropsType = {
   name: string // need to fix any
   setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
   addUser: () => void // need to fix any
   error: string  // need to fix any
   totalUsers: number // need to fix any
}
// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
   {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {


   const inputErrorClass = s.error; // need to fix with (?:)

   return (
      <div>
         <input className={error ? inputErrorClass : ""} value={name} onChange={setNameCallback}/>
         <button className={s.btn} onClick={addUser}>add</button>
         <span className={s.total}>Total users: <span className={s.totalNum}>{totalUsers}</span></span>
         <div className='error'>{error}</div>
      </div>
   );
}

export default Greeting;
