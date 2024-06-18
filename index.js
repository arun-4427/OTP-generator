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
// all are es6 operator of js 

function generateOtp(length){
    let otp = '';
    for (let i = 0; i < length; i++) {
        const numeric = Math.floor(Math.random()*10);
        otp += numeric;
        
    }
    document.getElementById('otpDisplay').innerText = otp;
   
}
// console.log(generateOtp(4));