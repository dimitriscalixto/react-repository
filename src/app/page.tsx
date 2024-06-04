"use client"
import { CustomButton } from "@/components/CustomButton";
import { FormEvent } from "react";


const Page = () =>  {
  const handleForSubmit=(event: FormEvent)=>{
    event.preventDefault();
    alert("Opa! mandandoo...")
  }
  return (
    <div className="w-screen h-screen flex  flex-col justify-center items-center mr-4">
      <h1 className="text-5xl mb-3">Form de login</h1>
      <form onSubmit={handleForSubmit}>
        <input type="text" name="" id="" />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}


export default Page;
