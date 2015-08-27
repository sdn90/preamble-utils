export default function imageUrl(url, size) {
  let re = /\/products\/(.*)\.(.*)/;
  return url.replace(re, (match, p1, p2) => {
    return `/products/${p1}_${size}.${p2}`;
  });
}
