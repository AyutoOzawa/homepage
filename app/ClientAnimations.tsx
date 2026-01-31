"use client"; // 👈 これが重要！ブラウザで動く合図

import { useEffect } from "react";

export default function ClientAnimations() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const targets = document.querySelectorAll(".js-fade-target, .js-bounce-target");
    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null; // 画面には何も表示せず、裏方で動く
}