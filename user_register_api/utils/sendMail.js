const { config } = require("dotenv");
const nodemailer = require("nodemailer");
require("dotenv").config();

const sendMail = async (user, subject, token) => {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.USER,
                pass: process.env.PASS,
            },
        });

        await transporter.sendMail({
            from: process.env.USER,
            to: user.email,
            subject: subject,
            html: `<p>Hii your Reset Password <a href='${process.env.HOST}api/reset-password/${user._id}/${token}' >link is here</a></p>`,
        });

        console.log("email sent sucessfully");
    } catch (error) {
        console.log("sendMail : ", error);
    }
};

module.exports = sendMail;