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