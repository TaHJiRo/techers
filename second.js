let studentsArray = JSON.parse(localStorage.getItem("students"));
let studentsBlock = $("#list");
let clearBtn = document.querySelector("#clearBtn");


let removeStudent = (studentIndex) => {
    studentsArray.splice(studentIndex, 1);
    localStorage.setItem("students", JSON.stringify(studentsArray));
    location.reload();
    console.log(studentIndex);
    console.log(studentsArray);
}
for(let i = 0; i < studentsArray.length; i++){
    studentsBlock.append(
        `
    <div class="Student">
    <p>Full name: ${studentsArray[i].fullName}</p>
    <p>Group: ${studentsArray[i].group}</p>
    <button onclick=removeStudent(${i})>Delete</button>
    </div>
`)
    ;
}

var allblocs = document.getElementsByClassName("Student");
for(i = 0; i < allblocs.length; i ++){
   allblocs[i].onmouseover = function(){
      this.style.background = "pink";
   }

   allblocs[i].onmouseout = function(){
    this.style.background = "white";
 }
}

clearBtn.addEventListener('click',function(){
    localStorage.removeItem("students");
    studentsBlock.empty();
})