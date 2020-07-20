import { locale } from '../locales';

const validate = (values) => {
  const errors = {};

  if (!values.code) {
    errors.code = locale.errors.required;
  } else if (values.code.length < 5) {
    errors.code = locale.errors.minLettersCode;
  } else if (values.code.length > 10) {
    errors.code = locale.errors.maxLettersCode;
  }

  if (!values.name) {
    errors.name = locale.errors.required;
  } else if (values.name.length < 5) {
    errors.name = locale.errors.minLettersName;
  } else if (values.name.length > 100) {
    errors.name = locale.errors.maxLettersName;
  }

  if (!values.price) {
    errors.price = locale.errors.required;
  } else if (isNaN(Number(values.price))) {
    errors.price = locale.errors.number;
  } else if (Number(values.price) < 0.01) {
    errors.price = locale.errors.minNumberPrice;
  } else if (Number(values.price) > 1000000) {
    errors.price = locale.errors.maxNumberPrice;
  }

  if (!values.shelfLife) {
    errors.shelfLife = locale.errors.required;
  } else if (isNaN(Number(values.shelfLife))) {
    errors.shelfLife = locale.errors.number;
  } else if (Number(values.shelfLife) < 1) {
    errors.shelfLife = locale.errors.minNumberShelfLife;
  } else if (Number(values.shelfLife) > 1000) {
    errors.shelfLife = locale.errors.maxNumberShelfLife;
  }

  if (!values.compositionAndFormOfRelease) {
    errors.compositionAndFormOfRelease = locale.errors.required;
  } else if (values.compositionAndFormOfRelease.length > 2000) {
    errors.compositionAndFormOfRelease = locale.maxLetters;
  }

  if (!values.indication) {
    errors.indication = locale.errors.required;
  } else if (values.indication.length > 2000) {
    errors.indication = locale.maxLetters;
  }

  if (!values.contraindications) {
    errors.contraindications = locale.errors.required;
  } else if (values.contraindications.length > 2000) {
    errors.contraindications = locale.maxLetters;
  }

  return errors;
};

export { validate };
