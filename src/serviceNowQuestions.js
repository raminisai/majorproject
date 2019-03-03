var requestBody = "";
export var data;
var client = new XMLHttpRequest();
client.open(
  "get",
  "https://cors-anywhere.herokuapp.com/https://dev61094.service-now.com/api/now/table/x_259033_mock_test_questions",
  false
);

client.setRequestHeader("Accept", "application/json");
client.setRequestHeader("Content-Type", "application/json");

//Eg. UserName="admin", Password="admin" for this code sample.
client.setRequestHeader(
  "Authorization",
  "Basic " + btoa("admin" + ":" + "Amulya@12")
);

// client.onreadystatechange = function() {
//   if (this.readyState == this.DONE) {
//     console.log(this.response);
//     data = this.response;
//     console.log(data);
//     document.getElementById("response").innerHTML = this.response;
//     return this.response;
//   }
// };
// console.log(data, "ammu");
client.send(requestBody);
data = client.responseText;
// console.log(client.responseText);
// console.log(data, "ammu");
