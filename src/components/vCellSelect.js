function mounted(el, bindings) {
  bindEvent(el);
  el.allRows = getAllRows(el);
  el.targetNodes = new Set();
}

function bindEvent(el) {
  el.addEventListener('mousedown', handleMouseDown, false);
}
function handleMouseDown(e) {
  const tar = e.target;
  const tagName = tar.tagName.toLowerCase();
  const el = this;

  if (tagName === 'td') {
    el.start = tar;
    //行与列
    const rowIndex = el.start.parentNode.dataset.weekday;
    const clumnIndex = el.start.dataset.time;
    el.addEventListener('mousemove', handleMouseMove, false);
    el.addEventListener('mouseup', handleMouseUp, false);
  }
}

function handleMouseMove(e) {
  const tar = e.target;
  const tagName = tar.tagName.toLowerCase();
  const el = this;
  if (tagName === 'td') {
    const starTarget = el.start;
    const endTarget = tar;

    //起始行
    const startRow = parseInt(starTarget.parentNode.dataset.weekday);
    // 起始列
    const startCloum = Number(starTarget.dataset.time);
    // 结束行
    const endRow = Number(endTarget.parentNode.dataset.weekday);
    // 结束列
    const endColumn = Number(endTarget.dataset.time);

    //获取点击信息
    const currentTargetNodes = getTargetNodes(
      el,
      startRow,
      startCloum,
      endRow,
      endColumn
    );

    console.log(currentTargetNodes);
  }
}

function handleMouseUp() {
  const el = this;
  el.removeEventListener('mousemove', handleMouseMove, false);
  el.removeEventListener('mouseup', handleMouseUp, false);
}

function getTargetNodes(el, startRow, startCloum, endRow, endColumn) {
  const { allRows } = el;
  const starR = startRow > endRow ? endRow : startRow;
  const starC = startCloum > endColumn ? endColumn : startCloum;
  const endR = endRow > endRow ? startRow : endRow;
  const endC = endColumn ? startCloum : endColumn;
  const targetNodes = new Set();

  allRows.forEach((tr, rowIndex) => {
    if (rowIndex >= starR && rowIndex <= endR) {
      [...tr.querySelectorAll('td')].forEach((td, columnIndex) => {
        if (columnIndex >= starC && columnIndex <= endC) {
          targetNodes.add(td);
        }
      });
    }
  });
  return targetNodes;
}

function getAllRows(el) {
  const AllRows = el.querySelectorAll('tr');

  return [...AllRows].reduce((prev, tr) => {
    if (tr.dataset.weekday) {
      prev.push(tr);
    }
    return prev;
  }, []);
}
export default {
  mounted,
};
