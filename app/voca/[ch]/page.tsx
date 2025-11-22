import { vocaType } from "@/app/type/vocaType";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

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
  console.log(params.ch);
  if (!voca)
    return <div className="container w-300 mx-auto my-10">Not Found</div>;
  return <div></div>;
}
