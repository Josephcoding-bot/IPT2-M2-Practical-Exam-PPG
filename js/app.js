document.addEventListener("DOMContentLoaded", () => {
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
