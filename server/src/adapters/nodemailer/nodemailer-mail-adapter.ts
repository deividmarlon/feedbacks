import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "cf41da541be351",
    pass: "4caf8731a62bd3"
  }
});

export class NodemailerMailAdapter implements MailAdapter{
  async sendMail({subject,body}:SendMailData){  
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Deivid Márlon <deividmarlon@gmail.com>',
      subject,
      html: body
    })    
  }
}
