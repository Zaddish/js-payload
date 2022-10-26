const Http = new XMLHttpRequest();
const url='http://pingb.in/p/249d4015bcbb7f5a65edb36aa79a';
Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
  console.log(Http.responseText)
}
