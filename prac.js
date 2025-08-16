function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    });
  };
}

const apiCall = debounce((values) => {
  console.log("Api Call on", values);
}, 500);

// apiCall("sa");
// apiCall("sam");
// apiCall("sami");
// apiCall("samir");

// !! how to find a particular value from an array

const allStudents = ["Aamir", "Salman", "Samir", "Shahrukh", "Aslam"];


// const searchForStudent = (student) => {
//   for (let i = 0; i < allStudents.length; i++) {
//     // console.log(allStudents[i]);

//     if (allStudents[i] === student) {
//       console.log(`Student name is ${student}`);
//     }
//   }
// };

// searchForStudent("Samir");

// const found = allStudents.find((student) => student == "Samir");
// const found = allStudents.filter((student) => student == "Samir");

// console.log(found);
