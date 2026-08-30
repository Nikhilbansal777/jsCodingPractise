let nums = [3, 2, 1, 4]

let farthest = 0;

function Jump(){
    for(let i=0;i<nums.length;i++){
        if(i>farthest){
            return false
        }

        let reach = i+nums[i];
        if(reach>farthest){
            farthest = reach
        }
    }

    return true
}
console.log(Jump())