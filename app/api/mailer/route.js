import { NextResponse } from 'next/server';
import multer from 'multer';
import path from 'path';
import fs from 'fs/promises';

// Configure multer for file uploads
const upload = multer({
  storage: multer.memoryStorage(), // Use memory storage for better control
  limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 5MB
  fileFilter: (req, file, cb) => {
    const allowedMimeTypes = ['image/jpeg', 'image/png', 'application/pdf'];
    if (allowedMimeTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only JPEG, PNG, and PDF files are allowed.'));
    }
  },
});

export const POST = async (req) => {
  try {
    // Parse form data using multer
    const form = new Promise((resolve, reject) => {
      const multerUpload = upload.single('file'); // Handle single file upload
      multerUpload(req, {}, (err) => {
        if (err) return reject(err);
        resolve(req.file); // Extract file info
      });
    });

    const file = await form;

    // Validate required fields in the request body
    const { to, subject, clientName } = Object.fromEntries(await req.formData());
    if (!to || !subject || !clientName) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    // Save file to the uploads directory
    const uploadPath = path.join(process.cwd(), 'uploads', file.originalname);
    await fs.writeFile(uploadPath, file.buffer);

    // Process email sending (stubbed)
    console.log(`Email would be sent to ${to} with subject "${subject}" and attachment "${file.originalname}"`);

    // Return success response
    return NextResponse.json({ message: 'File uploaded and email sent successfully.' });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
