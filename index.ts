function longestPalindrome(s: string): string {
  let longestPalindrome = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      let currentPalindrome = `${s[i]}${s[i + 1]}`;
      currentPalindrome = expandPalindrome(i, i + 1, currentPalindrome, s);
      if (currentPalindrome.length > longestPalindrome.length) {
        longestPalindrome = currentPalindrome;
      }
    }
    if (s[i] === s[i + 2]) {
      let currentPalindrome = `${s[i]}${s[i + 1]}${s[i + 2]}`;
      currentPalindrome = expandPalindrome(i, i + 2, currentPalindrome, s);
      if (currentPalindrome.length > longestPalindrome.length) {
        longestPalindrome = currentPalindrome;
      }
    }
  }

  if (!longestPalindrome && s.length > 0) {
    longestPalindrome = s[0];
  }

  return longestPalindrome;
}

function expandPalindrome(left: number, right: number, palindromeRoot: string, s: string) {
  let isValidPalindrome = true;
  let currentPalindrome = palindromeRoot;
  if (left === 0 || right === s.length - 1) return currentPalindrome;

  while (isValidPalindrome && left >= 0 && right <= s.length - 1) {
    let leftChar = s[left - 1];
    let rightChar = s[right + 1];

    if (leftChar && rightChar && leftChar === rightChar) {
      currentPalindrome = `${leftChar}${currentPalindrome}${rightChar}`;
      left--;
      right++;
    } else {
      isValidPalindrome = false;
    }
  }

  return currentPalindrome;
}

console.log(longestPalindrome("aaaa"));
// console.log(longestPalindrome("bb"));
// console.log(longestPalindrome("cbbd"));
// console.log(longestPalindrome("babad"));
