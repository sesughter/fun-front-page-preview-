let Hamburger = document.getElementById("hamburger")
console.log(Hamburger)
let toggle = document.querySelector("section nav ul")
let select = document.getElementById("scroll")
let box = document.querySelector("section div.picture-display")
let observer = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            box.classList.add('box-scroll')
           
        }
    })
})
observer.observe( document.querySelector("section div.picture-display"))


Hamburger.addEventListener("click", function(){
    toggle.classList.toggle("toggle")
})

// select.addEventListener("click", function(){
//     box.classList.toggle("box-scroll")
// })

// let text = document.querySelector('#slide-text')

// text.style.color = 'red'



    let li = document.createElement('li')
    toggle.append(li)
    let link = document.createElement('a')
    li.append(link)
    link.setAttribute('href', '#')
    link.innerText = "hello"
    link.style.textTransform = 'uppercase'
    link.removeAttribute('href')
