// b1
// function reverseString(a) {
//     var newString = "";

//     for (var i = a.length - 1; i >= 0; i--) { 
//         newString += a[i]; 
//     }
//     return newString; 
// }
 
// reverseString(`hello`);

//b2
// let n = prompt(`nhapchuoi`);
// n.toLowerCase();
// let b = n.split(` `);
// let result =``;
// for(let i=0 ; i<=b.length-1;i++)
// {
//     let c = b[i];
//     let d = c.split(``);
//     d[0]=d[0].toUpperCase();
//     let e = d.join(``);
//     result = result + e + ` `;
// }
// console.log(result);

//b3
// function a(arr) {
//     var newArr = []
//     for (var i = 0; i < arr.length; i++) {
//       if (newArr.indexOf(arr[i]) === -1) {
//         newArr.push(arr[i])
//       }
//     }
//     return newArr
//   }
//   console.log(a([1, 1, 2, 3, 5, 3, 1, 5, 6, 7, 4]))
  
//b4
// const member = [
//     {
//         name: 'hoang',
//         age: 22,
//         salary: 2000,
//         position: 'nv'
//     },
//     {
//         name: 'chung',
//         age: 23,
//         salary: 1000,
//         position: 'nv'
//     },
//     {
//         name: 'cac',
//         age: 66,
//         salary: 4000,
//         position: 'test'
//     }
// ]

// while (true) {
//     const commant = prompt('plia (C/R/U/D) :')
//     if (commant.toLowerCase() === 'r') {
//         read(member);
//     } else if (commant.toLowerCase() === 'c') {
//         const newName = prompt('ten :')
//         const newAge = prompt('tuoi :')
//         const newSalary = prompt('luong :')
//         const newPosition = prompt('vi tri :')
//         member.push({
//             name: newName,
//             age: newAge,
//             salary: newSalary,
//             position: newPosition,
//         })
//         read(member);
//     } else if (commant.toLowerCase() === 'u') {
//         const indexUpdate = prompt('vitri update')
//         if (indexUpdate < member.length) {
//             const newName = prompt('ten :')
//             const newAge = prompt('tuoi:')
//             const newSalary = prompt('luong :')
//             const newPosition = prompt('vi tri :')
//             member.splice(indexUpdate - 1, 1, {
//                 name: newName,
//                 age: newAge,
//                 salary: newSalary,
//                 position: newPosition,
//             })
//             read(member);
//         }
//     } else if (commant.toLowerCase() === 'd') {
//         const indexUpdate = prompt('vi tri delete')
//         if (indexUpdate<member.length) {
//             member.splice(indexUpdate,1)
//             read(member);
//         }
//     } else {
//         alert('nhap lai')
//     }
// }