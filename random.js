var namespace = "http://www.w3.org/2000/svg"


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createFirstScene() {
  makeRect(0,0,200,300,"white",1)
  makeRect(0,0,200,300,"cyan", .35)
  makeRect(0,80,200,50,"green",1)
  makeCircle(190,3,10,"yellow",1)
  makeRect(150,55,120,30,"green",1)
  makeRect(70,30,15,15,"yellow",1)
  makeRect(55,30,15,15,"brown",1)
  makeRect(85,30,15,15,"brown",1)
  makeRect(0,90,200,50,"yellow",1)
  makeRect(160,65,120,30,"yellow",1)
  makeCircle(20,10,5,"white",1)
  makeCircle(24,10,6,"white",1)
  makeCircle(28,10,5,"white",1)
   makeCircle(120,30,5,"white",1)
  makeCircle(124,30,6,"white",1)
  makeCircle(128,30,5,"white",1)
   makeCircle(140,10,5,"white",1)
  makeCircle(144,10,6,"white",1)
  makeCircle(148,10,5,"white",1)
  makeImage("http://www.mariomayhem.com/bowsers_blog/wp-content/uploads/2014/06/Retro-Mushroom-Super-3-icon.png",67,18,20,12,10)
  makeImage("https://i1.wp.com/jay.mobile9.com/download/media/41/supermario_knocmls3.gif", 30,45,35,35,1)
  makeImage("http://rs134.pbsrc.com/albums/q110/anghellicsuicde/goomba.gif~c200",95,65,20,15,10)
  makeImage("http://www.effecthub.com/uploads/extract/6523E279-3FA7-E7FF-633A-51750CD84035/UV%20Pipe%20Big.png",160,20,40,45,60)
}



// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createSecondScene() {
makeRect(0,0,200,300,"white",1)
makeRect(0,0,200,300,"brown",1)
makeRect(0,80,60,30,"black",.75)
makeRect(150,80,60,30,"black",.75)
makeRect(60,95,90,10,"orange",1)
makeCircle(70,40,9,"orange")
makeCircle(110,60,9,"orange")
makeCircle(65,37,2,"black")
makeCircle(75,37,2,"black")
makeCircle(105,57,2,"black")
makeCircle(115,57,2,"black")
makeImage("https://i1.wp.com/jay.mobile9.com/download/media/41/supermario_knocmls3.gif",20,45,35,35,60)
makeImage("http://www.effecthub.com/uploads/extract/6523E279-3FA7-E7FF-633A-51750CD84035/UV%20Pipe%20Big.png",160,45,40,45,60)
}


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createThirdScene() {
makeRect(0,0,200,300,"white",1)
makeRect(0,0,200,300,"orange", .5)
 makeRect(0,80,200,50,"green",1)
 makeRect(110,65,20,15,"brown",1)
 makeLine(120, 65, 120, 20, "gray", 4, 1)
 makeCircle(120,16,5,"yellow")
 makeCircle(20,10,5,"orange",1)
  makeCircle(24,10,6,"orange",1)
  makeCircle(28,10,5,"orange",1)
   makeCircle(90,30,5,"orange",1)
  makeCircle(94,30,6,"orange",1)
  makeCircle(98,30,5,"orange",1)
   makeCircle(140,10,5,"orange",1)
  makeCircle(144,10,6,"orange",1)
  makeCircle(148,10,5,"orange",1)
  makeCircle(70,50,10,"yellow",1)
 makeImage("https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Mario_emblem.svg/2000px-Mario_emblem.svg.png",122,21,20,20)
 makeImage("http://pixelartmaker.com/art/0034263c98e8408.png",160,51,30,30,32)
 makeImage("http://orig03.deviantart.net/bf89/f/2015/349/0/e/sleeping_luigi__zzz__by_pootisvanpencer-d9k8nst.gif",180,48,30,35,32)
}





// FILL IN THIS FUNCTION!
// This function is called whenever you press the "Go!" button.
function createRandomScene() {
 var random= Math.random()
 if(random<0.33){
     createRandomScene();
     }
       
    // Generate a random number between 0 and 1, and store it in a variable.
    
    // If the number is less than 0.33, call the function to create your first scene.
      if(random<0.33){
          createFirstScene()
      }
    
    
    // Else, if the number is less than 0.67, call the function to create your second scene.
    else if(random<0.67){
        createSecondScene()
    }
    
    // Else, call the function to create your third scene.
    
    else{ 
        createThirdScene()
        }
    
}


// DO NOT EDIT ANYTHING BELOW THIS LINE!
// These are the functions you should call to
// easily create shapes in JavaScript. Feel free
// to check them out if you're curious how they
// work, but don't change them!
// <3 Ms. Squires
function makeCircle(cx, cy, r, fill, opacity) {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", cx)
  circle.setAttribute("cy", cy)
  circle.setAttribute("r", r)
  circle.setAttribute("fill", fill)
  circle.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(circle)
  return circle
}

function makeRect(x, y, width, height, fill, opacity) {
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", x)
  rect.setAttribute("y", y)
  rect.setAttribute("width", width)
  rect.setAttribute("height", height)
  rect.setAttribute("fill", fill)
  rect.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(rect)
  return rect
}

function makeEllipse(cx, cy, rx, ry, fill, opacity) {
  var ellipse = document.createElementNS(namespace, "ellipse")
  ellipse.setAttribute("cx", cx)
  ellipse.setAttribute("cy", cy)
  ellipse.setAttribute("rx", rx)
  ellipse.setAttribute("ry", ry)
  ellipse.setAttribute("fill", fill)
  ellipse.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(ellipse)
  return ellipse
}

function makeLine(x1, y1, x2, y2, stroke, strokeWidth, opacity) {
  var line = document.createElementNS(namespace, "line")
  line.setAttribute("x1", x1)
  line.setAttribute("y1", y1)
  line.setAttribute("x2", x2)
  line.setAttribute("y2", y2)
  line.setAttribute("stroke", stroke)
  line.setAttribute("stroke-width", strokeWidth)
  line.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(line)
  return line
}

function makePolyline(points, stroke, strokeWidth, opacity) {
  var polyline = document.createElementNS(namespace, "polyline")
  polyline.setAttribute("points", points)
  polyline.setAttribute("stroke", stroke)
  polyline.setAttribute("stroke-width", strokeWidth)
  polyline.setAttribute("opacity", opacity)
  polyline.setAttribute("fill", "none")
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polyline)
  return polyline
}

function makePolygon(points, fill, opacity) {
  var polygon = document.createElementNS(namespace, "polygon")
  polygon.setAttribute("points", points)
  polygon.setAttribute("opacity", opacity)
  polygon.setAttribute("fill", fill)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polygon)
  return polygon
}

function makeText(message, x, y, fontSize, fontFamily, fill, opacity) {
  var text = document.createElementNS(namespace, "text")
  text.innerHTML = message
  text.setAttribute("x", x)
  text.setAttribute("y", y)
  text.setAttribute("font-size", fontSize)
  text.setAttribute("font-family", fontFamily)
  text.setAttribute("fill", fill)
  text.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(text)
  return text
}

function makeImage(url, x, y, width, height, opacity) {
  var image = document.createElementNS(namespace, "image")
  image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url)
  image.setAttribute("x", x)
  image.setAttribute("y", y)
  image.setAttribute("width", width)
  image.setAttribute("height", height)
  image.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(image)
  return image
}