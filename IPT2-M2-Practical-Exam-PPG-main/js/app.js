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


  const addSubjectButton = document.getElementById("addSubject");
  const subjectTable = document.getElementById("table-content");

  if (addSubjectButton && subjectTable) {
    addSubjectButton.addEventListener("click", () => {
      const subjectCode = document.getElementById("subjectCode").value.trim();
      const subjectName = document.getElementById("subjectName").value.trim();
      const units       = document.getElementById("units").value.trim();

      if (!subjectCode || !subjectName || !units) {
        alert("Subject Code, Name, and Units are required.");
        return;
      }

      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${subjectCode}</td>
        <td>${subjectName}</td>
        <td>${units}</td>
      `;
      subjectTable.appendChild(row);

      document.getElementById("subjectForm").reset();
    });
  }
  });