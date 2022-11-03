function isPalindrome(s: string): boolean {
  for (let i = 0; i < s.length; i++) {}

  let formattedString = s.toLowerCase().replace(/[\W+|_]/g, "");
  let start = 0;
  let end = formattedString.length - 1;

  console.log(formattedString);

  while (start <= end) {
    if (formattedString[start] !== formattedString[end]) {
      return false;
    }
    start++;
    end--;
  }

  return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
