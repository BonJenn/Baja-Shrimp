import { put } from '@vercel/blob';
import fs from 'fs/promises';
import path from 'path';

async function uploadVideo() {
  try {
    const videoPath = path.join(process.cwd(), 'public', 'images', 'catering', 'Baja_Catering_Video.mp4');
    const videoBuffer = await fs.readFile(videoPath);
    
    const blob = await put('Baja_Catering_Video.mp4', videoBuffer, {
      access: 'public',
    });

    console.log('Video uploaded successfully. URL:', blob.url);
    
    // You might want to save this URL to a file or environment variable
    await fs.writeFile('.env.local', `NEXT_PUBLIC_CATERING_VIDEO_URL=${blob.url}\n`, { flag: 'a' });
  } catch (error) {
    console.error('Error uploading video:', error);
  }
}

uploadVideo();