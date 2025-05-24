import multer from "multer";

// Detect environment
const isRender = process.env.RENDER === "true"; // You can set this env var in Render dashboard

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (isRender) {
      cb(null, "/tmp"); // ✅ for Render
    } else {
      cb(null, "./public/tmp"); // ✅ for local
    }
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Optional: Add timestamp to avoid conflicts
  }
});

export const upload = multer({ storage });
