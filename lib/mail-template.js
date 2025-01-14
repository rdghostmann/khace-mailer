import Handlebars from "handlebars";
import { congratulationsTemplate } from './template/congratulation';


export async function compileCongratulationsTemplate(name) {
  try {
    const template = Handlebars.compile(congratulationsTemplate);
    const htmlBody = template({ client: name });
    return htmlBody;
     
  } catch (error) { 
    console.error('Error compiling template:', error);
    throw new Error('Template compilation failed');
  }
}
