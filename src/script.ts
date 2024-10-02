window.addEventListener("load", function() {
  const n = window.prompt("Enter a number")
  alert(isEven(Number(n)) ? `${n} is even`: `${n} is odd`)
})


export const isEven = (n: number): boolean => {
  return n % 2 === 0;
};
