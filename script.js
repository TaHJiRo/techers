let btn = document.querySelector("#btn");
let nameInput = document.querySelector("#fullName");
let groupInput = document.querySelector("#groupName");

btn.addEventListener("click", function () {
  let studentName = nameInput.value;
  let studentGroup = groupInput.value;

  let student = {
    fullName: studentName,
    group: studentGroup,
  };

  let studentArray = JSON.parse(localStorage.getItem("students"));
  if (studentArray === null) {
    studentArray = [];
  }
  studentArray.push(student);

  localStorage.setItem("students", JSON.stringify(studentArray));
});