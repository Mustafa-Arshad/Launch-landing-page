
var arry = [
    {
        rollNum: 'sm002',
        name: "Muhammad rafay",
        course: "Web and mobile app",
        age: "18"




    },
    {
        rollNum: 'sm001',
        name: "Muhammad Mustafa",
        course: "Web and mobile app",
        age: "18"




    },
    {
        rollNum: 'sm003',
        name: "Muhammad ahmed",
        course: "Web and mobile app",
        age: "18"




    },
    {
        rollNum: 'sm004',
        name: "Muhammad basit",
        course: "Web and mobile app",
        age: "18"




    },
    {
        rollNum: 'sm005',
        name: "Muhammad saud",
        course: "Web and mobile app",
        age: "18"




    },
    {
        rollNum: 'sm006',
        name: "Muhammad bilal",
        course: "Web and mobile app",
        age: "18"




    },
    {
        rollNum: 'sm008',
        name: "Muhammad Ali",
        course: "Web and mobile app",
        age: "18"





    },
    {
        rollNum: 'sm010',
        name: "Muhammad hassan",
        course: "Web and mobile app",
        age: "18"
    }

];
// console.log(arry)
// console.log(student1)

// var student2 = {
//     rollNum: 'sm002',
//     name: "Muhammad rafay",
//     course: "Web and mobile app",
//     age: "18"




// };
// console.log(student2)

// var student3 = {
//     rollNum: 'sm003',
//     name: "Muhammad ahmed",
//     course: "Web and mobile app",
//     age: "18"




// };
// console.log(student3)


// console.log(student4)

// var student5 = ;
// console.log(student5)

// var student6 = ;
// console.log(student6)
// var student7 = {
//     rollNum: 'sm007',
//     name: "Muhammad rasheed",
//     course: "Web and mobile app",
//     age: "18"




// };

// console.log(student7);
// var student8 = ;

// console.log(student8);
// var student9 = ;

// console.log(student9);
// var student10 = ;

// console.log(student10);

var a = document.getElementById("inp")
function search() {
    // console.log(a)
    for (var i = 0; i < arry.length; i++) {
        if (a.value == arry[i].rollNum) {
            // console.log("Found");
            console.log(arry[i]);
        }
    }
}