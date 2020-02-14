if('serviceWorker' in navigator){
	window.addEventListener('load', () => {
		navigator.serviceWorker.register('/sw_Worker_link.js')
			.then(reg => console.log('service worker registerd'))
			.catch(err => console.log(`service worker :err${err}`))
	})
}
let data = {
	name:"ashok",
	team:"it"
}

localStorage.items = JSON.stringify(data)
console.log(JSON.parse(localStorage.items))
/*const source = new EventSource('http://localhost:3000/update-stream');
 source.onopen = function(e) {
        console.log(e);
      }
      source.addEventListener('message', e =>{
      	console.log(e);
      })
        
     
      source.onerror = function(e) {
        console.log(e);
      }*/
     

