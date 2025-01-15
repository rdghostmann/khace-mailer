import React from 'react';
import Image from 'next/image';
import HeaderImg from '../../public/government-of-canada.png'
import FooterImg from '../../public/canada.png'

import SendBtn from '@/components/SendBtn';
import { compileCongratulationsTemplate, sendMail } from '@/lib/mail';


  // const send = async () => {
  //   "use server";
  //   await sendMail({
  //     to: "randalchukzwilson@gmail.com",
  //     name: "notice@gc-deskcheck.com",
  //     subject: "notice@gc-deskcheck.com",
  //     body: compileCongratulationsTemplate("Ade"),
  //   })
  // };

const send = async (formData) => {
  "use server";
  const to = formData.get("to");
  const subject = formData.get("subject");
  const clientName = formData.get("client-name");

  if (!to || !subject || !clientName) {
    throw new Error("All fields are required.");
  }

  const body = compileCongratulationsTemplate(clientName);

  await sendMail({
    to,
    name: "notice@gc-deskcheck.com",
    subject,
    body,
  });
};

const Page = () => {

  return (
    <main className="flex flex-col items-center justify-center p-6">
      <h1 className="text-2xl font-bold mb-4">Send Email</h1>

      <form action={send} method="post" className="w-full max-w-md">
        <div className="flex mb-4 space-x-2">
          <div className="w-4/5">
            <label
              className="block text-gray-700 mb-2 text-sm font-medium"
              htmlFor="from"
            >
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
          <label
            className="block text-gray-700 mb-2 text-sm font-medium"
            htmlFor="to"
          >
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
          <label
            className="block text-gray-700 mb-2 text-sm font-medium"
            htmlFor="subject"
          >
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
          <label
            className="block text-gray-700 mb-2 text-sm font-medium"
            htmlFor="to"
          >
            Client Name:
          </label>
          <input
            type="text"
            id="client-name"
            name="client-name"
            placeholder="John Smith"
            className="w-full p-2 border-b-2 border-slate-200"
            required
          />
        </div>
      </form>
      <div className="max-w-md mx-auto mt-4">
        <label
          className="block text-gray-700 mb-2 text-sm font-medium"
          htmlFor="body"
        >
          Message:
        </label>
        <div className="h-80 overflow-y-scroll">
          <header>
            <Image
              src={HeaderImg}
              width={300}
              alt=""
              height="auto"
              priority
            />
          </header>
          <div className="max-w-md mx-auto my-3 text-wrap space-y-3 text-justify text-sm">
            <p className="text-">
              Dear <span className="font-semibold underline italic">Client Name,</span>{" "}
            </p>
            <p className="text-">
              We are pleased to inform you that your Canada Visa Application has been submitted
              successfully. This email serves as a confirmation of the receipt of your application
              and outlines the next steps for your processing.
            </p>
            <p className="text-">
              Please note that the processing time for Canada Visa Application can vary based on
              several factors such as the type of visa you have applied for, the volume of
              application received, and the completeness of your application.
            </p>
            <p className="text-">
              However, we will strive to process your application as quickly and efficiently as
              possible.
            </p>
            <p className="text-">
              We will also keep you updated on the progress of your application through email
              notifications
            </p>
            <p className="text-">
              Please ensure that you check your email regularly and keep us informed of any changes
              to your contact information.
            </p>
            <p className="text-">
              Once again, congratulations on your successful visa application. We look forward to
              assisting you in your journey to Canada.
            </p>
            <p className="text-">Canada Immigration Deskcheck</p>{" "}
          </div>
          <footer>
            <Image src={FooterImg} width={100} alt="" height="auto" priority />
          </footer>
        </div>
      </div>
    </main>
  );
};

export default Page;
