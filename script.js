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

function showReport() {
  var items = document.querySelectorAll("#attendanceList li");
  var present = 0;
  var absent = 0;

  items.forEach(function (item) {
    if (item.textContent.includes("Present")) {
      present++;
    } else {
      absent++;
    }
  });

  document.getElementById("report").textContent =
    "Total: " + items.length + " | Present: " + present + " | Absent: " + absent;
}