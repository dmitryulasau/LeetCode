// function f(d) {
//   let p = 0;
//   let q = d[0];

//   while (p < d.length - 1) {
//     d[p] = d[p + 1];
//     p = p + 1;
//   }

//   if (p === d.length) {
//     let temp = d[0];
//     d[0] = d[d.length - 1];
//     d[d.length - 1] = temp;
//   }

//   d[d.length - 1] = q;

//   return d;
// }

// console.log(f([7, 1, 3, 14]));

// function w(n) {
//   if (n === 1) {
//     return 1;
//   }

//   return w(n / 2) + n;
// }

// console.log(w(4));

function fun(z) {
  if (z === 0) {
    return 0;
  }

  return bun(z - 1) + 1;
}

function bun(z) {
  return 2 * fun(z - 1);
}

console.log(bun(3));

function jam(a) {
  let z = a[0];
  let i = 0;
  while (i < a.length) {
    if (z < a[i]) {
      z = a[i];
    }
    i = i + 1;
  }

  return z;
}

console.log(jam([1, 2, 3]));
