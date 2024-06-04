import { Student } from "@/types/Student"

type Props = {
  students: Student[]
}


export const StudentsTable = ({students}: Props) => {
  
  return (
    
    <table className="w-full border border-gray-600 rounded-md overflow-hidden">
      <thead>
        <tr className="text-left border-b border-gray-600 bg-gray-800" >
          <th className="p-3">Foto</th>
          <th className="p-3">Name</th>
          <th className="p-3">Email</th>
          <th className="p-3">Status</th>
          <th className="p-3">Grade 1</th>
          <th className="p-3">Grade 2</th>
          <th className="p-3">Final Grade</th>
        </tr>
      </thead>
      <tbody className="text-left border-b border-white-600 bg-gray-500">
        {students.map(item => (
          <tr key={item.id}>
            <td>
              <img src={item.avatar} alt="" className="w-20 h-50 rounded-full"/>
            </td>
            <td>
              {item.name}
            </td>
            <td>
              {item.email}
            </td>
            <td>
              <div>
                {item.active && <div className="px-2 py-1 inline-block rounded-md border border-green-800 bg-green-600 text-xs"> Active</div>}
                {!item.active && <div className="px-2 py-1 inline-block rounded-md border border-red-800 bg-red-600 text-xs"> Inactive</div>}
              </div>
            </td>
            <td>
              {item.grade1}
            </td>
            <td>
              {item.grade2}
            </td>
            <td>
              { item.active ? ((item.grade1 + item.grade2) / 2).toFixed(1): '--'}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}