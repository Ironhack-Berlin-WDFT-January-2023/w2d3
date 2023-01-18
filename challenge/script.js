const fruitList = ["apple", "banana", "tomato"]

// (1) Add all fruits as list items to the unordered list

let ulElement = document.querySelector(".fruits")

fruitList.forEach((fruit) => {
  const itemElement = document.createElement("li")
  itemElement.innerText = fruit
  ulElement.appendChild(itemElement)
})

// We could also create the list items as innerHTML:
ulElement = document.querySelector(".fruits")

let listItems = ""

fruitList.forEach((fruit) => {
  listItems += `<li>${fruit}</li>`
})

ulElement.innerHTML = listItems


// (2) Add the image as an image element to the div

const imageSrc = "https://images.unsplash.com/photo-1517849845537-4d257902454a"

const divElement = document.querySelector("div")

const imgElement = document.createElement("img")
imgElement.setAttribute("src", imageSrc)

divElement.appendChild(imgElement)


// (3) Change the first and the last list item element in every list to "first" and "last"

const firstLiElements = document.querySelectorAll(".first-last li:nth-child(1)")
const lastLiElements = document.querySelectorAll(".first-last li:nth-child(3)")

firstLiElements.forEach(firstLiElement => {
  firstLiElement.innerText = "first"
})

lastLiElements.forEach(lastLiElement => {
  lastLiElement.innerText = "last"
})






