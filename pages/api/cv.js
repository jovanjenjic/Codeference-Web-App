import { google } from "googleapis";
import { Readable } from "stream";
import nc from "next-connect";
import multer from "multer";

const googleClientEmail = process.env.GOOGLE_DRIVE_EMAIL_CLIENT;
const googleClientPK = process.env.GOOGLE_DRIVE_EMAIL_CLIENT_PRIVATE_KEY;

/** `jwt` client used for the authentication */
const jwtClient = new google.auth.JWT(
  googleClientEmail,
  undefined,
  googleClientPK,
  ["https://www.googleapis.com/auth/drive"]
);

/**
 * Helper method to convert buffer to readable stream.
 * @param buffer - buffer to be converted.
 * @returns readable stream.
 */
const bufferToStream = (buffer) => {
  const stream = new Readable();
  stream.push(buffer);
  stream.push(null);
  return stream;
};

/**
 * Helper method for uploading file to google drive.
 * @param file file to be uploaded.
 * @returns id of the uploaded file in case when file is not uploaded returns `falsy` value.
 */
const uploadFile = async (file) => {
  await jwtClient.authorize();
  const drive = google.drive({ version: "v3", auth: jwtClient });

  const media = {
    mimeType: file.mimetype,
    body: bufferToStream(file.buffer),
  };

  const response = await drive.files.create({
    media,
    fields: "id",
    requestBody: {
      name: file.originalname,
    },
  });

  /** `id` of the created file */
  const fileId = response?.data?.id;
  return fileId;
};

/**
 * Helper method to generate public url.
 * @param fileId - id of file to be public
 * @returns data with webviewlink or download link
 */
export const generatePublicUrlForFile = async (fileId) => {
  await jwtClient.authorize();

  // change file permisions to public.
  await google.drive("v3").permissions.create({
    auth: jwtClient,
    fileId,
    requestBody: {
      role: "reader",
      type: "anyone",
    },
  });

  const result = await google.drive("v3").files.get({
    auth: jwtClient,
    fileId,
    fields: "webViewLink, webContentLink",
  });

  return result.data;
};

const handler = nc({
  onError: (res) => {
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
})
  .use(multer().single("file"))
  .post(async (req, res) => {
    try {
      const fileId = await uploadFile(req.file);

      const result = await generatePublicUrlForFile(fileId);

      return res.status(200).send(result);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
// disable body parser
export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
