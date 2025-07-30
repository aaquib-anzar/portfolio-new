import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer"

export async function POST(req:NextRequest){
    const{email, subject} = await req.json()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if(!email || !subject) return NextResponse.json({message:"Missing required fields"},{status: 400})

    const isValidEmail = emailRegex.test(email)
    if(!isValidEmail){
        return NextResponse.json({message:"Incorrect Email"})
    }

    try {
        const transporter = nodemailer.createTransport({
            service:"gmail",
            auth:{
                user:process.env.EMAIL_USER,
                pass:process.env.EMAIL_PASSWORD
            }
        })
        await transporter.sendMail({
            from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER, // send to yourself
            subject: `New message from ${email}`,
            text: subject
        })
        return NextResponse.json({ message: 'Email sent successfully!' },{status:200})
    } catch (error) {
        console.error('Nodemailer error:', error);
        return NextResponse.json({ message: 'Something went wrong.' },{status:500});
    }
}