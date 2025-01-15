import nodemailer from 'nodemailer';
import Handlebars from 'handlebars';
import { congratulationsTemplate } from './template/congratulation';


export async function sendMail({
  to,
  name,
  subject,
  body,       // HTML body content of the email
  // attachments // Optional attachments (array of objects with filename and path properties)
  
}) {
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

  const transport = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });

  // Verify the SMTP connection configuration
  try {
    await transport.verify();
  } catch (error) {
    console.log(error)
    return;
  }

  // Attempt to send the email
  try {
    const sendMessage =  transport.sendMail({
      from: `"${name}" <${process.env.SMTP_EMAIL}>`, // Sender's name and email
      to,
      name,
      subject,
      html: body,
      // attachments,       // Attachments (if any)
    }); 
    console.log(sendMessage)
  } catch (error) {
    console.log(error)

  }

}


export function compileCongratulationsTemplate(name) {
  try {
    const template = Handlebars.compile(congratulationsTemplate);
    const htmlBody = template({ client: name });
    return htmlBody;

  } catch (error) {
    console.error('Error compiling template:', error);
    throw new Error('Template compilation failed');
  }
}
