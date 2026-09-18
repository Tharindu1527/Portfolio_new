import { useEffect, useState } from "react";

export function useTypewriter(words, { typeSpeed = 55, deleteSpeed = 30, pause = 1600 } = {}) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    let timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => i + 1);
    } else {
      timeout = setTimeout(() => {
        const next = deleting
          ? current.slice(0, text.length - 1)
          : current.slice(0, text.length + 1);
        setText(next);
      }, deleting ? deleteSpeed : typeSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause]);

  return text;
}
