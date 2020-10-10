function solve(){
    let counts={};
   [...arguments].forEach(elem=>{
       console.log(`${typeof elem}: ${elem}`);
       if(!counts[typeof(elem)]){
           counts[typeof(elem)]=1;
       }else {
           counts[typeof(elem)]++;
       }
   });
   Object.keys(counts).sort((a,b)=>counts[b]-counts[a]).forEach(c=>console.log(`${c} = ${counts[c]}`));

}
solve('cat','' ,42, function () { console.log('Hello world!'); })
