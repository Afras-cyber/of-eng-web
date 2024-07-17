import { NextRequest, NextResponse } from 'next/server';
import multer from 'multer';
import path from 'path';
import { promisify } from 'util';
import { pipeline } from 'stream';
import { createWriteStream } from 'fs';
import { IncomingForm } from 'formidable';
import fs from 'fs/promises';
const pipelineAsync = promisify(pipeline);

// Multer configuration
const upload = multer({ storage: multer.memoryStorage() });

export const config = {
  api: {
    bodyParser: false,
  },
};

export const POST = async (req: Request) => {
  const form = new IncomingForm();

  return new Promise((resolve, reject) => {
    form.parse(req as any, async (err, fields, files) => {
      if (err) {
        reject(new NextResponse(JSON.stringify({ error: 'Error parsing form data' }), { status: 500 }));
        return;
      }

      const file = files.file as any;
      const oldPath = file.filepath;
      const newPath = `./public/uploads/${file.originalFilename}`;

      try {
        await fs.rename(oldPath, newPath);
        resolve(new NextResponse(JSON.stringify({ message: 'File uploaded successfully' }), { status: 200 }));
      } catch (err) {
        reject(new NextResponse(JSON.stringify({ error: 'Error saving file' }), { status: 500 }));
      }
    });
  });

  // const body = await req.json();
  // const form = new Promise((resolve, reject) => {
  //   const middleware = upload.single('document');
  //   middleware(req as any, {} as any, (err: any) => {
  //     if (err) return reject(err);
  //     resolve(req);
  //   });
  // });

  // console.log(JSON.stringify(body,null,2))


  // if (!file) {
  //   return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
  // }

  // const filePath = path.join(process.cwd(), 'uploads', file.originalname);

  // await pipelineAsync(file.stream, createWriteStream(filePath));

  // const fileUrl = `${req.nextUrl.origin}/uploads/${file.originalname}`;

  return NextResponse.json({"data":"SSS"}, { status: 200 });
};

export default POST;
