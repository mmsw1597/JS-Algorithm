class Node {
  constructor() {
    this.v = null;
    this.l = null;
    this.r = null;
  }
}

const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const n = +input.shift();
const tree = Array(n + 1)
  .fill()
  .map(() => new Node());

for (let str of input) {
  const [v, l, r] = str.split(" ");
  const index = v.charCodeAt() - "A".charCodeAt();
  tree[index].v = v;
  if (l !== ".") tree[index].l = tree[l.charCodeAt() - "A".charCodeAt()];
  if (r !== ".") tree[index].r = tree[r.charCodeAt() - "A".charCodeAt()];
}

let preOrder = "";
let inOrder = "";
let postOrder = "";

const pre = (x) => {
  preOrder += x.v;
  if (x.l) pre(x.l);
  if (x.r) pre(x.r);
};

const inorder = (x) => {
  if (x.l) inorder(x.l);
  inOrder += x.v;
  if (x.r) inorder(x.r);
};

const post = (x) => {
  if (x.l) post(x.l);
  if (x.r) post(x.r);
  postOrder += x.v;
};

pre(tree[0]);
inorder(tree[0]);
post(tree[0]);

console.log(preOrder);
console.log(inOrder);
console.log(postOrder);