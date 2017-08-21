console.log(1)
console.log(3)
import hello from './style.css'
import printMe from './print'
import test from './test.png'

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button')
    btn.setAttribute("class",'hello')
    btn.innerHTML = 'test1'
    btn.onclick = printMe
    var myIcon = new Image()
    myIcon.src = test
    element.appendChild(btn)
    return element
}
console.log(3)
document.body.appendChild(component())
var element = component()
document.body.appendChild(element)

 if (module.hot) {
   module.hot.accept('./print.js', function() {
     console.log('123Accepting the update12d printMe module!');
      document.body.removeChild(element);
      // element = component(); // Re-render the "component" to update the click handler
      // document.body.appendChild(element);
   })
 }