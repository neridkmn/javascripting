function math (murat, neri, limon) { // declare
  return neri * limon + murat; // satir satir uygular - function body
}
console.log(math(53, 61, 67)); //call

function math (sayilar) {
  return sayilar.neri * sayilar.limon + sayilar.murat;
}
console.log(math({
    murat: 53,
    neri: 61,
    limon: 67,
}));
