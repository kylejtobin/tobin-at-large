# Consulting illustrations

Pencil scenes for the consulting cycle, generated with OpenAI
`gpt-image-2.5-sunburst` at `quality=high` through `/v1/images/edits`, using the
founder portrait as the style reference so every image shares its hand and
paper.

```
./gen.sh NAME SIZE PROMPT.txt [extra reference images]
```

Each prompt is `style.txt` (the shared medium and rules) plus its scene. The
Declare session thumbnails pass `declare-main.png` as a second reference so the
room and map stay the same. Every scene prompt describes its people explicitly
and says none resembles the man in the reference, so the founder's likeness
never carries over: he appears only in his portrait.

Finished images live in `src/assets/consulting/` as JPEG masters; Astro serves
them as AVIF/WebP. The key is read from the repo's `.env` (`OPENAI_API_KEY`),
which is git-ignored.
