interface ParsedQueryString {
  [key: string]: string | string[];
}

export const qs = {
  parse(queryString: string): ParsedQueryString {
    const params: ParsedQueryString = {};
    const keyValuePairs = queryString.split("&");

    for (const pair of keyValuePairs) {
      const [key, value] = pair.split("=");
      const decodedKey = decodeURIComponent(key);
      const decodedValue = decodeURIComponent(value || "");

      if (params[decodedKey]) {
        if (Array.isArray(params[decodedKey])) {
          (params[decodedKey] as string[]).push(decodedValue);
        } else {
          params[decodedKey] = [params[decodedKey] as string, decodedValue];
        }
      } else {
        params[decodedKey] = decodedValue;
      }
    }

    return params;
  },

  stringify(obj: Record<string, any>): string {
    const keyValuePairs: string[] = [];

    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const value = obj[key];
        if (Array.isArray(value)) {
          for (const val of value) {
            keyValuePairs.push(
              `${encodeURIComponent(key)}=${encodeURIComponent(val)}`
            );
          }
        } else {
          keyValuePairs.push(
            `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
          );
        }
      }
    }

    return keyValuePairs.join("&");
  },
};
