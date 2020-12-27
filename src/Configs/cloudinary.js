const { config, uploader } = require('cloudinary').v2;

const configCloud = (req, res, next) => {
  config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_KEY,
    api_secret: process.env.CLOUD_SECRET,
  });

  next();
};

module.exports = { configCloud, uploader };
