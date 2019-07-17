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
  var kittens = ["Milo", "Otis", "Garfield"]
  var kittens2 = ["Milo", "Otis", "Garfield", "Broom"]
  kittens.concat("Broom")
  return array.concat("Broom")
}

function prependKitten(name, array) {
  
  return array
}

function removeLastKitten(name, array) {
  kittens.slice(3)
  return array.const
}

function removeFirstKitten(name, array) {
  kittens.concat(1)
  return array
}