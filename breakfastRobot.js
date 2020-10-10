function breakfastRobot(){
    let meals={
        apple :{
            carbohydrate:1,
            flavour:2,
        },
        lemonade:{
            carbohydrate:10,
            flavour:20,

        },
        burger:{
            carbohydrate:5,
            fat:7,
            flavour:3,
        },
        eggs:{
            protein:5,
            fat:1,
            flavour:1,
        },
        turkey:{
            protein:10,
            carbohydrate:10,
            fat:10,
            flavour:10,
        }
    }


    let inStock={
        protein:0,
        carbohydrate:0,
        fat:0,
        flavour:0,
    }

    let commands={
        restock:(element,quantity)=>{
            inStock[element]+=quantity;
            return "Success";

        },
        prepare:(product,quantity)=>{
            let recipe=Object.entries(meals[product]);

            for(let [item,neededElements] of recipe){
                if(inStock[item]<neededElements*quantity){
                    return `Error: not enough ${item} in stock`;
                }
            }
            recipe.forEach(([item,neededElements])=>{
                inStock[item]-=neededElements*quantity;
            });
            return "Success";
        },
        report:()=> Object.entries(inStock)
            .map(([element,neededElements])=>`${element}=${neededElements}`)
            .join(" ")
    };
    return(input)=>{
        let [command,item,count]=input.split(" ");
        return commands[command](item,Number(count));
    }
}
breakfastRobot()
let manager=breakfastRobot();
manager('restock flavour 50');
manager('prepare lemonade 4');
manager('restock carbohydrate 10');
manager('report');
