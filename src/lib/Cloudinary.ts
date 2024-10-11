import { Cloudinary } from "@cloudinary/url-gen";

export const cloudinary = new Cloudinary({
  cloud: {
    cloudName: "lullabary",
  },
  url: {
    secure: true,
  },
});

export const getCloudinaryImage = (publicId: string) => {
  return cloudinary.image(`lullabary-assets/${publicId}`).toURL();
};

export const getCloudinaryVideo = (publicId: string) => {
  return cloudinary.video(`lullabary-assets/${publicId}`).toURL();
};
