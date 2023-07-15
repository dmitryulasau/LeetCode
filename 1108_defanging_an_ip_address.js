// https://leetcode.com/problems/defanging-an-ip-address/

function defIp(ip) {
  let newIp = "";
  for (let i = 0; i < ip.length; i++) {
    if (ip[i] === ".") {
      newIp += "[.]";
    } else {
      newIp += ip[i];
    }
  }

  return newIp;
}

console.log(defIp("1.1.1.1"));
