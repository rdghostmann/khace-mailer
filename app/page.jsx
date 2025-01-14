import Link from "next/link";
import { FaRegEdit } from "react-icons/fa";


export default function Home() {

  const send = async () => {
    'use server';
    await sendMail({
      to: "randalchukzwilson@gmail.com",
      name: "Deskcheck GC",
      subject: "noreply-Deskcheck GC",
      body: `
      <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title></title>
  <style>
    .container {
      width: 100%;
    }

    .mx-auto {
      margin-left: auto;
      margin-right: auto;
    }

    .px-4 {
      padding-left: 1rem
        /* 16px */
      ;
      padding-right: 1rem
        /* 16px */
      ;
    }

    .my-2 {
      margin-top: 0.5rem
        /* 8px */
      ;
      margin-bottom: 0.5rem
        /* 8px */
      ;
    }

    .text-justify {
      text-align: justify;
    }

    .mt-2 {
      margin-top: 0.5rem
        /* 8px */
      ;
    }

    @media (min-width: 640px) {
      .container {
        max-width: 640px;
      }
    }

    @media (min-width: 768px) {
      .container {
        max-width: 768px;
      }
    }

    @media (min-width: 1024px) {
      .container {
        max-width: 1024px;
      }
    }

    @media (min-width: 1280px) {
      .container {
        max-width: 1280px;
      }
    }

    @media (min-width: 1536px) {
      .container {
        max-width: 1536px;
      }
    }
  </style>
</head>

<body>
  <div className="container mx-auto px-4 ">
    <Image className='' src={HeaderImg} width={350} height='auto' priority />
    <div className="my-2 space-y-4 text-justify">
      <p> Dear Client,</p>
      <p>We are pleased to inform you that your Canada Visa Application has been submitted successfully.
        This email serves as a confirmation of the receipt of your application and outlines the next steps for your
        processing.
      </p>
      <p>Please note that the processing time for Canada Visa Application can vary based on several factors
        such as rhe type of visa you have aplied for, the volume of application reacevied, and the completness of your
        application.
      </p>
      <p>However, we will strive to process your application as quickly and efficently as possible.
        We will also keep you updated on the progress of your application throught email notifications.
      </p>
      <p>Please ensure that you check your email regulary and keep us informed of any changes to your contact
        information.</p>
      <p>Once again, congratualtions on your successful visa application. We look forward to assiting you in your
        journey to Canada.</p>
      <p className='mt-2'>Canada Immigration Deskcheck</p>
    </div>
    <Image src={FooterImg} width={200} height='auto' priority />

  </div>

</body>

</html>
      `
    })
  }
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1>Welcome to noreply-Deskcheck GC </h1>
      <Link href="/sendmail" className="flex space-x-2 items-center justify-center rounded-md bg-slate-700 text-white p-3"><FaRegEdit  />
      <span>Go to KhaceMailer</span></Link>

      {/* <form action={send}>
        <button className="bg-green-600 p-2 rounded-sm mt-4 text-white" type="submit">Send email</button>
      </form> */}
    </main>
  );
}
