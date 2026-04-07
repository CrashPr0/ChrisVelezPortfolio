const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const revealElements = () => {
  const items = document.querySelectorAll(".reveal");
  if (prefersReducedMotion) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  items.forEach((item) => observer.observe(item));
};

const setupCopyEmail = () => {
  const copyButton = document.querySelector("[data-copy-email]");
  const status = document.querySelector("[data-copy-status]");
  if (!copyButton || !status) return;

  copyButton.addEventListener("click", async () => {
    const email = copyButton.getAttribute("data-email");
    if (!email) return;

    try {
      await navigator.clipboard.writeText(email);
      status.textContent = "Email copied to clipboard";
    } catch {
      status.textContent = "Unable to copy email";
    }
  });
};

revealElements();
setupCopyEmail();
