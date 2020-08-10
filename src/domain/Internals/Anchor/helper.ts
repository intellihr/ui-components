function isExternalURL (href: string) {
  const a = document.createElement('a')
  a.href = href

  const absHref = a.href

  const result = !absHref.startsWith(window.location.origin)

  a.remove()

  return result
}

export {
  isExternalURL
}
