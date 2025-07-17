// components/GlobalStyle.tsx
'use client';

export default function GlobalStyle() {
  return (
    <style jsx global>{`
      :root {
        --bg-color: #0d1117;
        --text-color: #f0f6fc;
        --secondary-text: #8b949e;
        --accent-color: #58a6ff;
      }
      html, body {
        margin: 0;
        padding: 0;
        background-color: var(--bg-color);
        color: var(--text-color);
        font-family: var(--font-inter), sans-serif;
        line-height: 1.6;
        font-size: 16px;
      }
      h1, h2, h3, h4, h5 {
        font-family: var(--font-poppins), sans-serif;
        color: var(--accent-color);
      }
    `}</style>
  );
}
