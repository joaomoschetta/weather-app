import React from "react";

import '../styles/footer.scss';

export function Footer() {
  return (
    <footer>
      <p data-testid="text">
        Developed by&nbsp;
        <a
          data-testid="anchor"
          target="_blank"
          href="https://github.com/joaomoschetta"
          rel="noreferrer nofollow noopener external"
        >
          João Moschetta
        </a>
      </p>
    </footer>
  );
};