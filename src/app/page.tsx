"use client"
import { CustomButton } from "@/components/CustomButton";


const Page = () =>  {
  const handleButton1 = () =>   alert('clicou no botão 1')
  const handleButton2 = () =>   alert('clicou no botão 2')
  const handleButton3 = () =>   alert('clicou no botão 3')
  return (
    <div className="w-screen h-screen flex justify-center items-center mr-4">
      <CustomButton onClick={handleButton1} label="Clique Aqui"/>
      <CustomButton onClick={handleButton2} label="Clique Aqui 1"/>
      <CustomButton onClick={handleButton3} label="Clique Aqui 2"/>
    </div>
  );
}


export default Page;
