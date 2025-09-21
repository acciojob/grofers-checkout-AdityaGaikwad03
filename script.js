const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
    const priceCells = document.querySelectorAll(".price");
      let total = 0;

      priceCells.forEach(cell => {
        total += parseInt(cell.textContent);
      });

      // create new row
      const table = document.querySelector("table");
      const newRow = document.createElement("tr");
      const newCell = document.createElement("td");
      newCell.colSpan = 2; // span both columns
      newCell.style.fontWeight = "bold";
      newCell.textContent = `Total Price: Rs. ${total}`;
      newRow.appendChild(newCell);

      // remove old total row if it exists (avoid duplicates)
      const oldTotal = document.querySelector("tr.total-row");
      if (oldTotal) {
        oldTotal.remove();
      }
      newRow.classList.add("total-row");
      table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);

