function markAttendance() {
  var name = document.getElementById("studentName").value;
  var status = document.getElementById("status").value;

  if (name === "") {
    alert("Please enter student name");
    return;
  }

  var li = document.createElement("li");
  li.textContent = name + " - " + status;
  document.getElementById("attendanceList").appendChild(li);

  document.getElementById("studentName").value = "";
}