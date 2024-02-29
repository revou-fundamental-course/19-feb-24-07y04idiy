document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Mengambil nilai dari inputan
    const nama = document.getElementById("nama").value;
    const tanggalLahir = document.getElementById("tanggal-lahir").value;
    const jenisKelamin = document.getElementById("jenis-kelamin").value;
    const pesan = document.getElementById("pesan").value;

    // Menampilkan hasil di dalam area hasil
    const hasilContainer = document.getElementById("hasil-pesan");
    hasilContainer.innerHTML = `
          <strong>Nama:</strong> ${nama}<br>
          <strong>Tanggal Lahir:</strong> ${tanggalLahir}<br>
          <strong>Jenis Kelamin:</strong> ${jenisKelamin}<br>
          <strong>Pesan:</strong> ${pesan}
      `;

    // Mengosongkan formulir setelah pengiriman
    form.reset();
  });
});
