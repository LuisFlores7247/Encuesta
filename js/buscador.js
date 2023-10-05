function filterTable() {
  const searchInput = document.getElementById("search-input");
  const table = document.getElementById("table");
  const rows = table.getElementsByTagName("tr");
  const searchTerm = searchInput.value.toLowerCase();

  for (let i = 1; i < rows.length; i++) {
    const cells = rows[i].getElementsByTagName("td");
    let foundMatch = false;

    for (let j = 0; j < cells.length; j++) {
      const cellText = cells[j].innerText.toLowerCase();

      if (cellText.includes(searchTerm)) {
        foundMatch = true;
        break;
      }
    }

    if (foundMatch) {
      rows[i].style.display = "";
    } else {
      rows[i].style.display = "none";
    }
  }
}
