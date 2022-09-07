function nSidedShape(n) {
    var shapes = ["circle","semi-circle","triangle","square","pentagon","hexagon","heptagon","octagon","nonagon","decagon"]
    return shapes[n-1]
}

console.log(nSidedShape(1), "circle")
console.log(nSidedShape(2), "semi-circle")
console.log(nSidedShape(3), "triangle")
console.log(nSidedShape(4), "square")
console.log(nSidedShape(5), "pentagon")
console.log(nSidedShape(6), "hexagon")
console.log(nSidedShape(7), "heptagon")
console.log(nSidedShape(8), "octagon")
console.log(nSidedShape(9), "nonagon")
console.log(nSidedShape(10), "decagon")