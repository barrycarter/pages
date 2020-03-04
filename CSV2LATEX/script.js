document.getElementById('button').onclick = render;

document.getElementById('opButton').onclick = render;


function render(e) {

  // this just renders LaTeX from existing text window
  if (e.target.id === 'opButton') {
    document.getElementById('rendered').textContent =
      document.getElementById('op').value;

      // TODO: can we get "unbolded" LaTeX
    MathJax.typeset();
    return;
  }

  // if not requesting rendering, just convert to LaTeX
  // the data in the textbox
  let data = document.getElementById('ta').value;

  // TODO: number of c's = number of columns (or wtf?)

  let s = '$$\n\\begin{array}{|c|c|c|}\n\\hline\n';
  //let s = '$$\n\\begin{array}\n\\hline\n';

  s += Array.map(data.split('\n'), x => Array.map(x.split(','), x => '\\text{' + x + '}').join(' & ') + ' \\\\\n\\hline').join('\n') + '\n\\end{array}\n$$\n';

  document.getElementById('op').value = s;

}
