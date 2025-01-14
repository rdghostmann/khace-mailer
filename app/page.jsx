import Link from "next/link";
import { FaRegEdit } from "react-icons/fa";
import { LuCornerDownRight } from "react-icons/lu";



export default function Home() {

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 className="text-sm">Welcome to noreply-Deskcheck GC </h1>
      <Link href="/testpage" className="flex space-x-2 items-center justify-center rounded-md bg-slate-700 text-white p-3"><FaRegEdit  />
      <span>Go to KhaceMailer</span></Link>
    
    <div>
    <Link target="_blank" href="https://khacemailer.vercel.app/canadacongratstemplate.html"> HTML Canada Congrats Template:<LuCornerDownRight /></Link>
    </div>

  
    </main>
  );
}
