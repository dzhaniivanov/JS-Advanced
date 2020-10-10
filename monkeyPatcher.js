monkeyPatcher = (()=>{
    let commands={
        upvote:(post)=>post.upvotes++,
        downvote:(post)=>post.downvotes++,
        score:(post)=>{
            let {upvotes,downvotes}=post;
            let totalVotes=upvotes+downvotes;
            let balance=upvotes-downvotes;
            let obfuscated=0;
            if(totalVotes>50){
                obfuscated=Math.ceil(0.25*Math.max(upvotes,downvotes));
                upvotes+=obfuscated;
                downvotes+=obfuscated;
            }
            let rating="new";
            if(totalVotes<10){
                rating="new";

            }else if(upvotes/totalVotes>66){
                rating="hot";
            }else if(balance>=0 && (upvotes>100 || downvotes>100)){
                rating="controversial"
            }else if(balance<0){
                rating="unpopular";
            }
            return [upvotes,downvotes,balance,rating];
        }

    };
    return {call:(post,command)=>commands[command](post)}


})();