/**
 * clone from https://github.com/matchai/waka-box
 */
export default function generateBarChart(percent: number, size: number) {
  const syms = '░▏▎▍▌▋▊▉█';

  const frac = Math.floor((size * 7 * percent) / 100);
  const barsFull = Math.floor(frac / 7);
  if (barsFull >= size) {
    return syms.substring(8, 9).repeat(size);
  }
  const semi = frac % 7;

  return [syms.substring(8, 9).repeat(barsFull), syms.substring(semi, semi + 1)]
    .join('')
    .padEnd(size, syms.substring(0, 1));
}
