export const makeUrl: (
  page: URL,
  href: string,
  params?: { [key: string]: string }) => string = (page, href, params) => {
  const url = new URL(href, page);
  for (const [k, v] of Object.entries(params ?? {}))
    url.searchParams.append(k, v);
  if (page.searchParams.has("units"))
    url.searchParams.set('units', page.searchParams.get('units'));
  return url.toString();
}
