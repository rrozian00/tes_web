let data = [];

document.getElementById("simpanBtn").addEventListener("click", function () {
  const namaInput = document.getElementById("namaInput");
  const nama = namaInput.value.trim();

  if (nama === "") {
    alert("Nama tidak boleh kosong!");
    return;
  }

  data.push(nama);
  namaInput.value = "";
  tampilkanData();
});

function tampilkanData() {
  const tbody = document.getElementById("tabelBody");
  tbody.innerHTML = "";

  data.forEach((nama, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${index + 1}</td>
      <td>${nama}</td>
    `;
    tbody.appendChild(tr);
  });
}
