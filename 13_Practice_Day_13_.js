// visulation the array
//Think of an array like a row of boxes, where each box stores a value.

let arr = [10, 20, 30, 40];
//1- Now visualize it like this:

// Index:   0    1    2    3
// Value:  10   20   30   40

// Very important:
// Index always starts from 0
// Each value has a fixed position (index)

//Now if you access something:
console.log(arr[2]); // 30  Because index 2 holds value 30.


//2- Now let’s modify the array:
arr[1] = 99;

// Now visualize again:
// Index:   0    1    2    3
// Value:  10   99   30   40

//👉 So arrays are mutable (you can change values).

//3- Now let’s understand how arrays work with loops:

    let arr = [5, 10, 15];
    for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    }

    //Step-by-step visualization:

        // i = 0 → arr[0] → 5
        // i = 1 → arr[1] → 10
        // i = 2 → arr[2] → 15

// 👉 arr.length = 3
// So loop runs from 0 to 2.

//4- Now a slightly tricky one (important 🔥):
    let arr = [1, 2, 3, 4];
    arr[2] = arr[2] + 10;
    console.log(arr);


    // Visualization:
    //     arr[2] = 3
    //     3 + 10 = 13

// Final array:
// [1, 2, 13, 4]



//💡5- Golden way to think about arrays:

// [ box0 ] [ box1 ] [ box2 ] [ box3 ]
//    1        2        3        4

// You don’t search values — you go directly using index.