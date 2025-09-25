document.addEventListener("DOMContentLoaded", () => {
  const addStudentButton = document.getElementById("addStudentButton");
  const studentTable = document.getElementById("table-content");

  if (addStudentButton && studentTable) {
    addStudentButton.addEventListener("click", () => {
      const idNumber   = document.getElementById("idNumber").value.trim();
      const firstName  = document.getElementById("firstName").value.trim();
      const middleName = document.getElementById("middleName").value.trim();
      const lastName   = document.getElementById("lastName").value.trim();

      if (!idNumber || !firstName || !lastName) {
        alert("ID Number, Firstname and Lastname are required.");
        return;
      }

      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${idNumber}</td>
        <td>${firstName}</td>
        <td>${middleName}</td>
        <td>${lastName}</td>
      `;
      studentTable.appendChild(row);

      document.getElementById("studentForm").reset();

    });
  }
});