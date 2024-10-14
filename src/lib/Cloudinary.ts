import { Cloudinary } from "@cloudinary/url-gen";
import { scale, thumbnail } from "@cloudinary/url-gen/actions/resize";

export const cloudinary = new Cloudinary({
  cloud: {
    cloudName: "lullabary",
  },
  url: {
    secure: true,
  },
});

export const getCloudinaryImage = (
  publicId: string,
  {
    width,
    height,
  }: {
    width?: number;
    height?: number;
  } = {},
) => {
  if (width && height) {
    return cloudinary
      .image(`lullabary-assets/${publicId}`)
      .resize(thumbnail().width(width).height(+height))
      .toURL();
  } else if (width) {
    return cloudinary
      .image(`lullabary-assets/${publicId}`)
      .resize(scale().width(width))
      .toURL();
  } else if (height) {
    return cloudinary
      .image(`lullabary-assets/${publicId}`)
      .resize(scale().height(+height))
      .toURL();
  }

  return cloudinary.image(`lullabary-assets/${publicId}`).toURL();
};

export const getCloudinaryVideo = (publicId: string) => {
  return cloudinary.video(`lullabary-assets/${publicId}`).toURL();
};
