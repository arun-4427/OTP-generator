// console.log('arun bikram rai');

// // document.write("<h1>arun<
// var arun = 'arim'
// console.log(arun);
// arun = 'bikram rai '
// console.log(arun);

// var x = 10
// console.log(x);
// {
//     var x = 20
// console.log(x);
// }
// console.log(x);
// console.log(typeof x);
// let a;
// console.log(typeof a) 
// x=10
// y='10'
// console.log(x <=  y);

// console.log((x > 10));
// spread operator and rest operator
// (...other ...user)  for example
// template literals ${}
// object destructure
// // all are es6 operator of js 

// function generateOtp(length){
//     let otp = '';
//     for (let i = 0; i < length; i++) {
//         const numeric = Math.floor(Math.random()*10);
//         otp += numeric;

//     }
//     document.getElementById('otpDisplay').innerText = otp;

// }
// console.log(generateOtp(4));
let user_1 = ['sandesh', 'arun', 'arunchamling@gmail.com']
console.log(user_1[2]);
let username_1 = {
    name: 'sandesh',
    email: 'arunchamlig',
    address: 'kathmandu'
}
console.log(username_1.email);

const student = [
    {
        name: "arbeen",
        email: "arunchalimg999@gmail.com",
        address: "kathmandu",
        phone: "96987098",
        collegename: "texas",
        mark: 400

    },
    {
        name: "arbe",
        email: "arunchalimg999@gmail.com",
        address: "kathmandu",
        phone: "96987098",
        collegename: "texas",
        mark: 500
    }, {
        name: "shyam",
        email: "arunchalimg999@gmail.com",
        address: "kathmandu",
        phone: "96987098",
        collegename: "texas",
        mark: 340
    }, {
        name: "stita",
        email: "arunchalimg999@gmail.com",
        address: "kathmandu",
        phone: "96987098",
        collegename: "texas",
        mark: 400
    }, {
        name: "pema",
        email: "arunchalimg999@gmail.com",
        address: "kathmandu",
        phone: "4427981",
        collegename: "texas",
        mark: 350
    }, {
        name: "butik",
        email: "arunchalimg999@gmail.com",
        address: "kathmandu",
        phone: "0823424",
        collegename: "texas",
        mark: 200
    }, {
        name: "lama",
        email: "arunchalimg999@gmail.com",
        address: "kathmandu",
        phone: "44562354",
        collegename: "texas",
        mark: 100
    }, {
        name: "bikash",
        email: "arunchalimg999@gmail.com",
        address: "kathmandu",
        phone: "96987098",
        collegename: "texas",
        mark: 150
    }, {
        name: "hari",
        email: "arunchalimg999@gmail.com",
        address: "kathmandu",
        phone: "96987098",
        collegename: "texas",
        mark: 130
    }, {
        name: "bikashh",
        email: "arunchalimg999@gmail.com",
        address: "kathmandu",
        phone: "96987098",
        collegename: "prolific",
        mark: 250

    },
]
const size = student.length
for (let i = 0; i < size; i++) {
    console.log('student name: ', student[i].name)
    console.log('student email: ', student[i].email)
    console.log('student addres: ', student[i].address)
    console.log('student phone: ', student[i].phone)
    console.log('student collegename: ', student[i].collegename)

    let percentage = student[i].mark/500* 100;
    if (percentage >= 80) {
        console.log('distinction');
    } else if (percentage >= 60 && percentage < 80) {
        console.log('first divison');
    } else if (percentage >= 40 && percentage < 60) {
        console.log('second divison');
    } else if (percentage >= 35 && percentage < 40) {
        console.log('third divison');
    } else {
        console.log('you are fail');
    }
}
// 