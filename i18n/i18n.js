import en from './en.json';

function interpolate(message, interpolations) {
  return Object.keys(interpolations).reduce(
    (interpolated, key) =>
      interpolated.replace(
        new RegExp(`{\s*${key}\s*}`, "g"),
        interpolations[key],
      ),
    message,
  );
}

export default function useLocalize() {
  const langJson = en; //TODO: will be coming from API/State


  const localize = (text, options = {}) => {
    try {
      if (langJson[text]) {
        return interpolate(langJson[text], options);
      }
      return text;
    }
    catch (e) {
      console.error(e);
      return text;
    }
  }

  return { localize }
}
