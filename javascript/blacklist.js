// function filter(mailAdressList, blacklist) {
//     let mailAdressValid = [];
//     for (let mailItem of mailAdressList) {
//         if (!blacklist.includes(mailItem)) {
//             mailAdressValid.push(mailItem);
//         } 
//     }
//     return (mailAdressValid);
// }
  
//   export default filter;


export default (mailAdressList, blacklist) => {mailAdressList.filter((mailItem) => !blacklist.includes(mailItem))};



