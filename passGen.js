function passwordGenerator() {
  let password = "";
  let nulll = "";
  let c1 = 0; // condition 1 for symbols at least 2
  let c2 = 0; // condition 2 for Upper case alpha symbols at least 2
  let c3 = 0; // condition 3 for lowercase Alpha at least 2
  let c4 = 0; // condition 4 for numbers at least 2

  while (c1 + c2 + c3 + c4 != 8) {
    a = Math.floor(35 + Math.random() * 100);
    if (a >= 35 && a <= 41 && c1 != 2) {
      tempro = String.fromCharCode(a); // it’s added make the concatenation easy
      password = password.concat(tempro);
      c1 += 1;
    } else if (a >= 65 && a <= 90 && c2 != 2) {
      tempro = String.fromCharCode(a); // it’s added make the concatenation easy
      password = password.concat(tempro);
      c2 += 1;
    } else if (a >= 97 && a <= 122 && c3 != 2) {
      tempro = String.fromCharCode(a); // it’s added make the concatenation easy
      password = password.concat(tempro);
      c3 += 1;
    } else if (a >= 48 && a <= 57 && c4 != 2) {
      tempro = String.fromCharCode(a); // it’s added make the concatenation easy
      password = password.concat(tempro);
      c4 += 1;
    }
  }

  document.getElementById("pass-txtb").value = password;
}
