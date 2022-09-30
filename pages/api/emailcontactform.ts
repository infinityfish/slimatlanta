// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type Data = {
  details: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(req.body);
  const { name, email, phone, message } = req.body;

  const transport = nodemailer.createTransport({
    //// eslint-disable-next-line @typescript-eslint/ban-ts-comment: to ignore the error at the next line
    // @ts-ignore
    host: process.env.EMAIL_SERVER_HOST,
    //// eslint-disable-next-line @typescript-eslint/ban-ts-comment: to ignore the error at the next line
    // @ts-ignore
    port: String(process.env.EMAIL_SERVER_PORT),
    auth: {
      user: process.env.EMAIL_SERVER_USER,
      pass: process.env.EMAIL_SERVER_PASSWORD,
    },
  });

  transport.sendMail({
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_CONTACT_INFO_RECEIVER,
    subject: 'Contact from SlimAtlanta',
    html: `<h2>Hello from SlimAtlanta</h2>
    Name: ${name} <br />
    Email: ${email} <br />
    Phone: ${phone} <br />
    Message: ${message} <br />`,
  });

  res.status(200).json({ details: `Email sent by ${name}: ${email}` });
}