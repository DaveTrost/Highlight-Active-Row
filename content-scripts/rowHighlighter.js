const defaultStyle = '';
const highlightStyle = 'font-weight: bold; background-color: yellow; outline: thin solid';

// Attach focusin/focusout listeners to the document;
document.addEventListener('focusin', onFocusIn, true);
document.addEventListener('focusout', () => onFocusChange(event, defaultStyle), true);

const onFocusIn = ({ target }) => findRowAndSetStyle(target, highlightStyle);
const onFocusOut = ({ target }) => findRowAndSetStyle(target, defaultStyle);

function findRowAndSetStyle(target, styleString) {
  setStyle(getRowNode(target), styleString);
}

function getRowNode(el) {
  const MAX_DEPTH = 5;
  let curEl = el;
  for (let i = 0; i < MAX_DEPTH; i++) {
    if (!curEl) return null;
    if (curEl.tagName === 'TR') return curEl;

    curEl = curEl.parentNode;

    if (i + 1 >= MAX_DEPTH) {
      console.log('highlight-active-row: Unable to find Row Element. Increase MAX_DEPTH');
    }
  }
  return null;
}

function setStyle(el, style) {
  if (el) {
    el.style.cssText = style;
  }
}
