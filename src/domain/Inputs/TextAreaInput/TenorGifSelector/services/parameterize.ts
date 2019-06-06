interface IParameters {
  [key: string]: string | number
}

function parameterize (url: string, urlParameters: IParameters): string {
  return Object.entries(urlParameters).reduce<string>((accumulator, entry, index, parameters) => {
    const [key, value] = entry
    const param = `${key}=${value}${index === parameters.length - 1 ? '' : '&'}`
    return accumulator + param
  }, `${url}?`)
}

export {
  IParameters,
  parameterize
}
