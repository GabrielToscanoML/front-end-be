import Header from "@/components/header";
import SearchField from "@/components/searchField";

export default function Home() {
  return (
    <div className="flex flex-col bg-gray-100 h-screen">
      <Header />
      <main className="w-[335px] lg:w-[1024px] lg:mx-auto">
        <SearchField />
        <h1>Tabela</h1>
      </main>
    </div>
  );
}