var no = 153;
var result
var temp = no;

while (temp = !0) {
    rem = temp % 10;
    result = result + rem * rem * rem;
    temp = temp / 10;
}

console.log(result);

if (result == no) {
    console.log(result, "is an armstrong no");
}