export const capitalize = str =>
  str
    .toLowerCase()
    .split(' ')
    .map(s => `${s.charAt(0).toUpperCase()}${s.substring(1)}`)
    .join(' ');

export const camelize = str =>
  str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
      index === 0 ? word.toLowerCase() : word.toUpperCase()
    )
    .replace(/\s+/g, '');

export const flatten = (arr, initialValue = {}, depth = 1) =>
  arr.reduce((current, value) => {
    if (Array.isArray(value)) {
      return flatten(value, current, depth + 1);
    }

    return {
      ...current,
      [camelize(value.name)]: {
        name: value.name,
        type: value.type,
        value: '',
        valid: true,
        depth
      }
    };
  }, initialValue);

export const extract = values =>
  Object.entries(values).reduce((current, [key, value]) => {
    return {
      ...current,
      [key]: value.value
    };
  }, {});
