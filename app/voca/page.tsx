import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { vocaType } from "../type/vocaType";

export default function VocaList() {
  const params = useParams();
  const [voca, setVoca] = useState<vocaType[] | []>([]);
  console.log(voca);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/voca");
        const data = await res.json();
        setVoca(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);
  if (!voca)
    return <div className="container w-300 mx-auto my-10">Not Found</div>;
  return (
    <div>
      <h2 className="text-2xl font-semibold m-15">Voca List</h2>
    </div>
  );
}
