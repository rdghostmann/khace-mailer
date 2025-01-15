import React from 'react';
import Image from 'next/image';
import HeaderImg from '../../public/government-of-canada.png'
import FooterImg from '../../public/canada.png'

import { MdOutgoingMail } from "react-icons/md";
import { IoCaretBackOutline } from "react-icons/io5";


import SendBtn from '@/components/SendBtn';
import Link from 'next/link';
import { revalidatePath } from 'next/cache';



const send = async (formData) => {
  "use server";

  const to = formData.get("to");
  const subject = formData.get("subject");
  const clientName = formData.get("client-name");
  const body = formData.get('body');
  const file = formData.get("attachment");

  if (!to || !subject || !clientName) {
    throw new Error("All fields are required.");
  }

  if (!file || file.size === 0) {
    throw new Error("Attachment is required.");
  }

  // Read file stream
  const fileBuffer = Buffer.from(await file.arrayBuffer());
  const fileName = file.name;


  await sendMail({
    to,
    subject,
    body,
    attachments: [
      {
        filename: fileName,
        content: fileBuffer,
      },
    ],
  });

  revalidatePath("/sendmail");
};

const Page = () => {
  return (
    <main className="w-full max-w-md mx-auto flex flex-col items-center justify-center p-6 shadow-2xl">
      <Link href="/" className="self-start">
        <IoCaretBackOutline fontSize={30} className="text-gray-600" />
      </Link>
      <h1 className="text-2xl flex items-center font-bold mb-4">
        <MdOutgoingMail />
        <span>Test Send Message</span>
      </h1>

      <form action={send} method="post" encType="multipart/form-data" className="w-full max-w-md">
        <div className="flex mb-4 space-x-2">
          <div className="w-4/5">
            <label className="block text-gray-700 mb-2 text-sm font-medium" htmlFor="from">
              Sender Name:
            </label>
            <input
              id="from"
              type="text"
              className="w-full bg-stone-300 text-neutral-700 p-2 border-b-2 border-slate-200"
              value="notice@gc-deskcheck.com"
              disabled
            />
          </div>
          <SendBtn />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2 text-sm font-medium" htmlFor="to">
            To:
          </label>
          <input
            type="email"
            id="to"
            name="to"
            placeholder="recipient@example.com"
            className="w-full p-2 border-b-2 border-slate-200"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2 text-sm font-medium" htmlFor="subject">
            Subject:
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="Subject"
            className="w-full p-2 border-b-2 border-slate-200"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2 text-sm font-medium" htmlFor="body">
            Message:
          </label>
          <textarea
            className="w-full p-2 border-b-2 border-slate-200"
            placeholder="Write a message"
            name="body"
            id="body"
            rows="10"
            >
          </textarea>
        </div>
        {/* <div className="mb-4">
          <label className="block text-gray-700 mb-2 text-sm font-medium" htmlFor="attachment">
            Attachment:
          </label>
          <input
            type="file"
            id="attachment"
            name="attachment"
            className="w-full p-2 border-b-2 border-slate-200"
            required
          />
        </div> */}
      </form>
    
    </main>
  );
};

export default Page;