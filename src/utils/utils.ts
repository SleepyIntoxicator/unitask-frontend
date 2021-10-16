export function isObject(x: 'object' | RegExp | Error | Date): boolean {
  return typeof x === 'object'
    && x !== null
    && !(x instanceof RegExp)
    && !(x instanceof Error)
    && !(x instanceof Date);
  // TODO: Think about the kind of date check. Whether an accurate check is needed.
  // && !(Object.prototype.toString.call(x) === '[object Date]');
}

export function camelize(val: string): string {
  return val.replace(/_(.)/g, (_, s) => `${s.toUpperCase()}`);
}

export function underscorize(val: string): string {
  return val.replace(/[A-Z]/g, (s) => `_${s.toLowerCase()}`);
}

export function camelizeKeys(val: unknown): unknown {
  if (isObject(val)) {
    if (Array.isArray(val)) {
      return val.map(camelizeKeys);
    }
    const newVal = {};
    Object.keys(val)
      .map((key) => {
        newVal[camelize(key)] = camelizeKeys(val[key]);
        return val[key];
      });
    return newVal;
  }
  return val;
}

export function underscorizeKeys(val: unknown): unknown {
  if (isObject(val)) {
    if (Array.isArray(val)) {
      return val.map(underscorizeKeys);
    }
    const newVal = {};
    Object.keys(val)
      .map((key) => {
        newVal[underscorize(key)] = underscorizeKeys(val[key]);
        return val[key];
      });
    return newVal;
  }
  return val;
}

export function ChangeObjectKeysStyle(replacer: (string) => string): unknown {
  return function ChangeKeys(val: unknown): unknown {
    if (isObject(val)) {
      if (Array.isArray(val)) {
        return val.map(ChangeKeys);
      }
      const newVal = {};
      Object.keys(val)
        .map((key) => {
          newVal[replacer(key)] = ChangeKeys(val[key]);
          return val[key];
        });
      return newVal;
    }
    return val;
  };
}
