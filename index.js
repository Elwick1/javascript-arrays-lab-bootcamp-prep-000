var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name, array) {
  kittens.push("Ralph")
  return array
}

function desstructivelyPrependKitten(name, array) {
  kittens.unshift()
  return array
}