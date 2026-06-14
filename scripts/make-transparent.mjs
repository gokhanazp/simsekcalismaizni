import { Jimp } from "jimp";

const src = "public/images/logo.png";
const out = "public/images/logo-mark.png";

const img = await Jimp.read(src);
const { width: W, height: H, data } = img.bitmap;
const idx = (x, y) => (y * W + x) * 4;

// Beyaz kabul eşiği
const isWhite = (i) => data[i] > 233 && data[i + 1] > 233 && data[i + 2] > 233;

// Kenarlardan flood-fill ile dış beyaz zemini şeffaflaştır
const stack = [];
const seen = new Uint8Array(W * H);
const push = (x, y) => {
  if (x < 0 || y < 0 || x >= W || y >= H) return;
  const p = y * W + x;
  if (seen[p]) return;
  seen[p] = 1;
  if (isWhite(idx(x, y))) stack.push(x, y);
};
for (let x = 0; x < W; x++) { push(x, 0); push(x, H - 1); }
for (let y = 0; y < H; y++) { push(0, y); push(W - 1, y); }

while (stack.length) {
  const y = stack.pop();
  const x = stack.pop();
  data[idx(x, y) + 3] = 0; // alpha = 0
  push(x + 1, y); push(x - 1, y); push(x, y + 1); push(x, y - 1);
}

// Yarı şeffaf kenar yumuşatma: beyaza yakın ama kesilmemiş kenar pikselleri hafif yumuşat
await img.write(out);
console.log(`Bitti → ${out} (${W}x${H})`);
