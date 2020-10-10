vectorMath={
    add:([x1,y1],[x2,y2])=>[x1+x2,y1+y2],
    multiply:(x,scalar)=>x.map((e)=>e*scalar),
    length:([x1,y1])=>Math.sqrt(x1**2+y1**2),
    dot:([x1,y1],[x2,y2])=>x1*x2+y1*y2,
    cross:([x1,y1],[x2,y2])=>x1*y2-y1*x2,

}
console.log(vectorMath.add([1, 1], [1, 0]));
console.log(vectorMath.length([3, -4]));
console.log(vectorMath.dot([1, 0], [0, -1]));
console.log(vectorMath.cross([3,7],[1,0]))