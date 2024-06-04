import { EmojiRating } from "@/components/EmojiRating2";
import { StudentsTable } from "@/components/StudentTable";
import { students } from "@/data/students";

export default function Home() {
  return (
    <div className="container mx-auto">
      <StudentsTable students={students}/>
    </div>
  );
}
