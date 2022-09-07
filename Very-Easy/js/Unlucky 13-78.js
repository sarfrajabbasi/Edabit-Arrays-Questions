function unlucky13(nums){
//    let arr =  nums.filter(num => num%13!==0)
let arr =  [];
for(let i=0;i<nums.length;i++){
  (nums[i]%13 !==0)? arr.push(nums[i]): [];
}
return arr;
}

console.log(unlucky13([91, 286, 416, 884, 1229]), [1229])
console.log(unlucky13([245, 518, 741, 824, 1092]), [245, 518, 824])
console.log(unlucky13([394, 447, 572, 832, 1105]), [394, 447])
console.log(unlucky13([289, 406, 650, 791, 1079]), [289, 406, 791])
console.log(unlucky13([390, 438, 1014, 1067, 1091]), [438, 1067, 1091])
console.log(unlucky13([494, 1041, 1158, 1188, 1298]), [1041, 1158, 1188, 1298])
console.log(unlucky13([43, 117, 169, 702, 1048]), [43, 1048])
console.log(unlucky13([195, 430, 845, 857, 874]), [430, 857, 874])
console.log(unlucky13([247, 510, 1144, 1164, 1206]), [510, 1164, 1206])
console.log(unlucky13([182, 520, 533, 923, 1196]), [])
console.log(unlucky13([52, 144, 148, 1105, 1114]), [144, 148, 1114])
console.log(unlucky13([130, 204, 364, 585, 679]), [204, 679])
console.log(unlucky13([23, 309, 949, 975, 1235]), [23, 309])
console.log(unlucky13([804, 910, 1069, 1190, 1249]), [804, 1069, 1190, 1249])
console.log(unlucky13([21, 78, 611, 652, 1036]), [21, 652, 1036])
console.log(unlucky13([32, 107, 481, 891, 1131]), [32, 107, 891])
console.log(unlucky13([260, 389, 420, 1035, 1086]), [389, 420, 1035, 1086])
console.log(unlucky13([251, 416, 508, 630, 1235]), [251, 508, 630])
console.log(unlucky13([213, 592, 1130, 1172, 1281]), [213, 592, 1130, 1172, 1281])
console.log(unlucky13([25, 136, 312, 632, 1193]), [25, 136, 632, 1193])