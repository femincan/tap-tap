const extractAudioName = (pathname: string) => {
  const nameRegex = /(?!\/).+(?=\..+\.)/;

  const audioName = pathname.match(nameRegex)[0];

  return audioName;
};

export { extractAudioName };
