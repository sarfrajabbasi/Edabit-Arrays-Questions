function rangeOfNum(start, end) {
	const newArr = [];
    if(start === end ){
        return newArr
    }

    for(let i = start + 1; i < end ; i++){
        newArr.push(i)
    }
    return newArr;
}

// ****************************************
function rangeOfNum(start, end) {
    var arr = []
    for (let i = start+1; i < end; i++) { arr.push(i) }
    return arr
    }
console.log(rangeOfNum(2, 4), [3])
console.log(rangeOfNum(5, 9), [6, 7, 8])
console.log(rangeOfNum(2, 11), [3, 4, 5, 6, 7, 8, 9, 10])
console.log(rangeOfNum(0, 9), [1, 2, 3, 4,5, 6, 7, 8])
console.log(rangeOfNum(156, 196), [157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195])
console.log(rangeOfNum(271, 349), [272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348])
console.log(rangeOfNum(457, 508), [458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507])
console.log(rangeOfNum(10, 10), [])
console.log(rangeOfNum(545, 596), [546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595])
console.log(rangeOfNum(343, 347), [344, 345, 346])
console.log(rangeOfNum(27, 27), [])