import { Invite } from "./invite.model";
import crypto from "crypto";
import { transporter } from "../../lib/email";

export const createInvite = async (email: string, teamId: string) => {
  const token = crypto.randomBytes(20).toString("hex");

  // Create invite in DB
  const invite = await Invite.create({ email, teamId, token });

  // Send email AFTER saving
  await sendInviteEmail(email, token);

  return invite;
};

export const acceptInvite = async (token: string, userId: string) => {
  const invite = await Invite.findOne({ token });

  if (!invite) throw new Error("Invalid invite");

  invite.status = "accepted";
  await invite.save();

  return invite;
};

export const sendInviteEmail = async (email: string, token: string) => {
  const link = `http://localhost:5173/accept-invite/${token}`;

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: "You're invited to join a team",
    html: `<p>Click below to join:</p><a href="${link}">${link}</a>`,
  });
};