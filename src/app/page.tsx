import { EmojiRating } from "@/components/EmojiRating2";
import { StudentsTable } from "@/components/StudentTable";
import { students } from "@/data/students";
"use client"
export default function Page() {
  const avisar = (msg: string) => {
      alert(msg);
  }
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <button onClick={ () => avisar("mensagem 1")} className="p-3 bg-blue-700 text-white rounded-md mr-3">Clique Aqui 1</button>
      <button onClick={ () => avisar("mensagem 2")} className="p-3 bg-blue-700 text-white rounded-md">Clique Aqui 2</button>
    </div>
  );
}
