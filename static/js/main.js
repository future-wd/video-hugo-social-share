// create a dynamic year and insert into the js-year span

const year = document.getElementById('js-year')
if (year) {
  year.innerHTML = new Date().getFullYear();
}
