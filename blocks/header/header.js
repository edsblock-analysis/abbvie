export default async function decorate(block) {
  const resp = await fetch('/nav.html');
  if (resp.ok) {
    const html = await resp.text();
    block.innerHTML = html;
  }
}
