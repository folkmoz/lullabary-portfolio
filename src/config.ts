const devPreview = true;

const mode = import.meta.env.MODE;

export const config = {
  isPreview: mode === "development" ? devPreview : false,
};
