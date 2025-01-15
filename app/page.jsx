import DeskCheck from "@/components/DeskCheck-template";
import Link from "next/link";
import { FaRegEdit } from "react-icons/fa";


export default function Home() {

  return (
    <main className="min-h-screen flex flex-col items-center justify-between space-y-3 pt-10 px-20">
      <h1 className="text-xl font-semibold">Welcome to KhaceMailer</h1>
      <p className="text-sm w-3/4 mx-auto text-center">This noreply-Deskcheck GC mailer client. The template below will be sent to mail </p>
      <Link href="/mailer" className="flex space-x-2 items-center justify-center rounded-md bg-blue-700 text-white p-3">
        <FaRegEdit />
        <span>Send Mail</span>
      </Link>
      <Link href="/sendmail" className="flex space-x-2 items-center justify-center rounded-md bg-stone-700 text-white p-3">
        <FaRegEdit />
        <span>Send Message</span>
      </Link>

      <div className="w-fit mx-auto mt-7">
        <DeskCheck />
      </div>


    </main>
  );
}
