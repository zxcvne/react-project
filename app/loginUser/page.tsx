import LoginHeader from "@/app/components/layout/LoginHeader";
import Ranking from "@/app/components/layout/Ranking";
import Link from "next/link";

export default function loginUser() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <LoginHeader />
      <h1 className="font-bold text-3xl m-10">Next.js 활용 프로젝트</h1>
      <p className="mx-10 text-lg ">
        단어 공부, 데이터 CRUD, 로그인 기능을 구현한 템플릿 입니다.
      </p>
      <div>
        <h2 className="font-bold text-3xl m-10">단어 암기 하기</h2>
        <Link href="/voca">
          <button className="mx-10 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700">
            바로가기 ▶
          </button>
        </Link>
      </div>
      <div className="flex">
        <div>
          <h2 className="font-bold text-3xl m-10">단어장 만들기</h2>
          <Link href="/createVoca">
            <button className="mx-10 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700">
              바로가기 ▶
            </button>
          </Link>
        </div>
        <div>
          <h2 className="font-bold text-3xl m-10">게임 하기</h2>
          <Link href="/game">
            <button className="mx-10 px-4 py-2 bg-yellow-400 text-white rounded hover:bg-yellow-700">
              바로가기 ▶
            </button>
          </Link>
        </div>
      </div>
      <Ranking />
    </div>
  );
}
