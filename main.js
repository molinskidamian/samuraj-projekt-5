const body = document.querySelector('body');
const btn = document.querySelector('button');
const ol = document.querySelector('ol');

let counter = 0;
let size = 16;

function addElement() {
  const df = document.createDocumentFragment();
  for (let i = 0; i < 4; i++) {
    const text = document.createTextNode(`Element ${counter}`);
    const li = document.createElement('li');
    li.appendChild(text);
    li.style.fontSize = `${size}px`;
    df.appendChild(li);
    counter++;
    size++;
  }

  ol.appendChild(df);
}

btn.addEventListener('click', addElement);
