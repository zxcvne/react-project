import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-cyan-500 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <Link href="/">
          <div className="font-bold">Vocabulary</div>
        </Link>
        <div className="space-x-4">
          {/* app>board>page.tsx */}
          <Link href="/login">login</Link>
        </div>
      </nav>
    </div>
  );
}
