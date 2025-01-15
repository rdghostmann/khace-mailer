import multer from "multer";
import nextConnect from "next-connect";
import path from "path";
import fs from "fs/promises";
import { sendMail } from "@/lib/mail"; // Adjust the path as needed

// Configure multer
const upload = multer({
  storage: multer.diskStorage({
    destination: path.join(process.cwd(), "uploads"),
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

const apiRoute = nextConnect();

apiRoute.use(upload.single("file"));

apiRoute.post(async (req, res) => {
  try {
    const { to, subject, clientName } = req.body;

    if (!to || !subject || !clientName) {
      throw new Error("All fields are required.");
    }

    const filePath = req.file.path; // Path to the uploaded file

    // Send email
    await sendMail({
      to,
      name: "notice@gc-deskcheck.com",
      subject,
      body,
      attachments: [
        {
          filename: req.file.originalname,
          path: filePath,
        },
      ],
    });

    // Clean up the uploaded file
    await fs.unlink(filePath);

    res.status(200).json({ message: "Email sent successfully." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false, // Disable built-in body parser to use multer
  },
};
