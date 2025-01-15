import Image from 'next/image'
import React from 'react'
import HeaderImg from '../public/government-of-canada.png'
import FooterImg from '../public/canada.png'

const DeskCheck = () => {
  return (
    <>
      <div className="">
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
    </>
  )
}

export default DeskCheck
