const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const UPLOAD_DIR = path.join(__dirname, 'uploads');

function ensureDir() {
  if (!fs.existsSync(UPLOAD_DIR)) {
    fs.mkdirSync(UPLOAD_DIR, { recursive: true });
  }
}

function saveBase64Video(data, extension = 'mp4') {
  ensureDir();
  const id = crypto.randomUUID();
  const filename = `${id}.${extension}`;
  const filePath = path.join(UPLOAD_DIR, filename);
  const buffer = Buffer.from(data, 'base64');
  fs.writeFileSync(filePath, buffer);
  return { id, filename };
}

function listUploads() {
  ensureDir();
  return fs
    .readdirSync(UPLOAD_DIR)
    .filter((f) => !f.startsWith('.'))
    .map((f) => ({ id: path.parse(f).name, filename: f }));
}

module.exports = {
  saveBase64Video,
  listUploads,
  UPLOAD_DIR,
};
