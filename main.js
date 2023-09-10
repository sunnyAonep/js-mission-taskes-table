var age;
var userName;
var userList = {
missionName : [],
discribe:[],
deadline : [],
checkbox : [],
}
var index = 0;
mainDiv.innerHTML += 
`<input type="date" name="" id="inputAge" />
<input type="text" id="inputName" onchange = " welcomeUser()" />
`
function welcomeUser(){
    userName = document.getElementById("inputName").value;
    age = document.getElementById("inputAge").value;
    var ageYear = age.substr(0,4)
    var nowDays = new Date()
    userAge = 2023 - ageYear;
    if(userAge > 18){
        document.body.style.transition = "background-color 2s ease";
        document.body.style.background = "red"; 
    }
    if(nowDays.getHours > 12){
        document.body.style.transition = "color 2s ease";
        document.body.style.color = "blue"; 
    }
    else{
        document.body.style.transition = "color 2s ease";
        document.body.style.color = "green"; 
    }
}
document.getElementById("inputName").addEventListener("change",toDoList)
function toDoList(){
    mainDiv.innerHTML = 
    `<h1 id=welcomeText> welcome ${userName}</h1>
    <input type="text" name="" id="missionName" placeholder = "what is the mission">
    <input type="text" name="" id="discribeMission" placeholder = "discribe">
    <input type="date" name="" id="deadlineMission" placeholder="deadline">
    <input type="checkbox" name="" id="theCheck">
    <button id="sendToDo" onclick = "getValue()">send to list</button>
    `
}
function getValue(){
  userList.missionName[index] = document.getElementById("missionName").value;
  userList.discribe[index] = document.getElementById("discribeMission").value;
  userList.deadline[index] = document.getElementById("deadlineMission").value;
  userList.checkbox[index] = document.getElementById("theCheck").value;
  
  if(index == 0){ 
  mainDiv.innerHTML += 
  `
  <table>
  <thead>
  <th>missionName</th>
  <th>discribeMission</th>
  <th>deadlineMission</th>
  <th>checkbox</th>
  </thead>
  <tbody id ="line">
  </tbody>
  </table>
  `
  document.getElementById("line").innerHTML +=
  `<tr class = "linemission">
  <td>${userList.missionName[index]}</td>
  <td>${userList.discribe[index]}</td>
  <td>${userList.deadline[index]}</td>
  <td>${userList.checkbox[index]}</td>
  </tr>
  `
}else{ 
    document.getElementById("line").innerHTML +=
    `<tr class="linemission">
        <td>${userList.missionName[index]}</td>
        <td>${userList.discribe[index]}</td>
        <td>${userList.deadline[index]}</td>
        <td>${userList.checkbox[index] ? "Yes" : "No"}</td>
    </tr>`;
}
index++;
clickOnline();
}
function clickOnline() {
    var lineclicker = document.getElementsByClassName("linemission");
    for (var i = 0; i < lineclicker.length; i++) {
        lineclicker[i].addEventListener("click", function () {
            this.style.display = "none";
        });
    }
}

