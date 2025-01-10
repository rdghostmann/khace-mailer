import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1>Welcome to noreply-Deskcheck GC </h1>
      
      <form action={send}>
        <button className="bg-blue-600 p-2 rounded-sm text-white" type="submit">Send email</button>
      </form>
    </main>
  );
}
