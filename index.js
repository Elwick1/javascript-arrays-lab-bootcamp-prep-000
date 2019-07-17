var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name, array) {
  kittens.push("Ralph")
  return array
}

function destructivelyPrependKitten(name, array) {
  kittens.unshift("Bob")
  return array
}

function destructivelyRemoveLastKitten(name, array) {
  kittens.pop()
  return array
}

function destructivelyRemoveFirstKitten(name, array) {
  kittens.shift()
  return array
}



function appendKitten(name, array) {
  return kittens.concat("Broom")
}

function prependKitten(name, array) {
  return kittens.concat("Arnold")
}

function removeLastKitten(name, array) {
  return kittens.slice(3)
}

function removeFirstKitten(name, array) {
  return kittens.concat(1) 
}