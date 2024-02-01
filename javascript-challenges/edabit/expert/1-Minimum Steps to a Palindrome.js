function minPalindromeSteps(str) {
  const strSize = str.length;
  const strRev = str.split("").reverse().join("");
  //console.log(str, " <---> ", strRev);
  let cnt = 1;
  let ind = 0;
  let flag = false;
  for (let i = 0; i < strSize; i++) {
    if (str[i] === strRev[ind]) {
      //     console.log(
      //     "matched--> ",
      //     str[i],
      //     " ",
      //     i,
      //     "<---> ",
      //     strRev[ind],
      //     " ",
      //     ind
      //   );
      flag = true;
      ind++;
      cnt = Math.max(ind, cnt);
    } else {
      //console.log(str[i], " ", i, "<---> ", strRev[ind], " ", ind);
      ind = 0;

      if (flag & (i !== strSize - 1)) {
        i--;
        flag = false;
      }
    }
  }
  return strSize - cnt;
}

console.log(minPalindromeSteps("mirror"));
