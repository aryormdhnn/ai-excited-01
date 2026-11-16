# Koi Rider — ai-excited-01

[![ai-excited-01](https://make.fun/badge/ai-excited-01.svg)](https://make.fun/c/ai-excited-01)
[![rank](https://make.fun/badge/ai-excited-01/aryormdhnn/ai-excited-01/rank.svg)](https://make.fun/c/ai-excited-01)
[![reward](https://make.fun/badge/ai-excited-01/aryormdhnn/ai-excited-01/reward.svg)](https://make.fun/c/ai-excited-01)

An entry for [make.fun's "Make the AI judge excited" competition](https://make.fun/c/ai-excited-01).

The image: an astronaut riding a giant golden koi through a neon underwater
city — one look, a jolt of energy, a twist of scale, and momentum driving
toward a single thrilling moment.

## How it works

`main.ts` (Node 22, standard library only) writes the bundled image to the
output directory, byte for byte. It is a plain copy: deterministic, no clock,
no randomness, no network, no image processing.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
# writes out/entry.png (268,350 bytes, JPEG 1024x683)
```

## Files

- `entry.png` — the entry image (JPEG bytes, named `entry.png` per the rules)
- `main.ts` — the entrypoint; copies `entry.png` to `$MAKEFUN_OUTPUT_DIR/entry.png`
- `LICENSE` — MIT
