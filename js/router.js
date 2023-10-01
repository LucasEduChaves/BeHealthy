 export class Router {
//   routes = {}

//   add(routeName, page) {
//     this.routes[routeName] = page
//   }
  
//   route(event) {
//     event = event || window.event;
//     event.preventDefault()
  
//     window.history.pushState({}, "", event.target.href)
  
//     this.handle()
//   }

//   handle() {
//     const { pathname } = window.location
//     const route = this.routes[pathname] || this.routes[404]
  
//     fetch(route)
//     .then(data => data.text())
//     .then(html => {
//       document.querySelector('#app').innerHTML = html
//     })  
//   }
// }

route(event) {
  event = event || window.event;
  event.preventDefault();

  const url = event.currentTarget.href; // Usando event.currentTarget.href para obter o URL
  window.history.pushState({}, "", url);

  this.handle(url); // Passando o URL para handle
}

handle(url) {
  const route = this.routes[url] || this.routes['404']; // Corrigindo a obtenção da rota

  // Verificando se a rota é válida antes de chamar fetch
  if (route) {
    fetch(route)
      .then(data => data.text())
      .then(html => {
        document.querySelector('#app').innerHTML = html;
      });
  } else {
    console.error('Rota não encontrada:', url);
  }
}
}