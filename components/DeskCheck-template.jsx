import Image from 'next/image'
import React from 'react'
import HeaderImg from '../public/government-of-canada.png'
import FooterImg from '../public/canada.png'

const DeskCheck = () => {
  return (
    <>
      <div className="container mx-auto px-4 ">
        <Image className='' src={HeaderImg} width={350} height='auto' priority />
        <div className="my-2 space-y-4 text-justify">
          <p> Dear Client,</p>
          <p>We are pleased to inform you that your Canada Visa Application has been submitted successfully.
            This email serves as a confirmation of the receipt of your application and outlines the next steps for your processing.
          </p>
          <p>Please note that the processing time for Canada Visa Application can vary based on several factors
            such as rhe type of visa you have aplied for, the volume of application reacevied, and the completness of your application.
          </p>
          <p>However, we will strive to process your application as quickly and efficently as possible.
            We will also keep you updated on the progress of your application throught email notifications.
          </p>
          <p>Please ensure that you check your email regulary and keep us informed of any changes to your contact information.</p>
          <p>Once again, congratualtions on your successful visa application. We look forward to assiting you in your journey to Canada.</p>
          <p className='mt-2'>Canada Immigration Deskcheck</p>
        </div>
        <Image src={FooterImg} width={200} height='auto' priority />
        
      </div>
    </>
  )
}

export default DeskCheck
