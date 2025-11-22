export default function Ranking() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h2 className="font-bold text-2xl my-5">실시간 랭킹</h2>
      <div className="grid grid-cols-2">
        <div className="border border-gray-500 w-100 m-5 text-center rounded">
          1
        </div>
        <div className="border border-gray-500 w-100 m-5 text-center rounded">
          2
        </div>
        <div className="border border-gray-500 w-100 m-5 text-center rounded">
          3
        </div>
        <div className="border border-gray-500 w-100 m-5 text-center rounded">
          4
        </div>
        <div className="border border-gray-500 w-100 m-5 text-center rounded">
          5
        </div>
        <div className="border border-gray-500 w-100 m-5 text-center rounded">
          6
        </div>
        <div className="border border-gray-500 w-100 m-5 text-center rounded">
          7
        </div>
        <div className="border border-gray-500 w-100 m-5 text-center rounded">
          8
        </div>
      </div>
    </div>
  );
}
