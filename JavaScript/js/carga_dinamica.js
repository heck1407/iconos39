//alert('funciona')

const header = document.getElementById('header');
const footer = document.getElementById('footer');

// Fetch es una estructura de programación que se llama promesa
fetch('assets/header.html')
  .then(function (res) {
    console.log(`Carga correcta: ${res}`);
    return res.text()
  })
  .then(function (res) {
    console.log(res);
    header.innerHTML = res;
  })
  .catch(function (err) {
    console.log(`Carga incorrecta: ${err}`);
  });

/* fetch('assets/footer.html')
  .then(function (res) {
    return res.text()
  })
  .then(function (res) {
    footer.innerHTML = res;
  })
  .catch(function (err) {
    console.log(`Carga incorrecta: ${err}`);
  }); */

/* Artículo sobre las funciones flecha https://ed.team/blog/arrow-functions-en-javascript */

fetch('assets/footer.html')
  .then((res) => res.text())
  .then((res) => footer.innerHTML = res)
  .catch((err) => console.log(err));


