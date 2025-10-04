// Learn KaTeX syntax from: https://katex.org/docs/supported.html
// From Katex auto render: https://katex.org/docs/autorender

// KaTeX Auto-render JavaScript setup 
document$.subscribe(({ body }) => { 
  renderMathInElement(body, {
    delimiters: [
      { left: "$$",  right: "$$",  display: true },
      { left: "$",   right: "$",   display: false },
      { left: "\\(", right: "\\)", display: false },
      { left: "\\[", right: "\\]", display: true }
    ],
  })
})
