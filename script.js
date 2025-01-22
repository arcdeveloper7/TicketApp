// Fungsi untuk menyimpan data tiket ke localStorage
function addData() {
    let ticketNumber = document.getElementById("ticketNumber").value;
    let phoneNumber = document.getElementById("phoneNumber").value;

    if (ticketNumber && phoneNumber) {
        localStorage.setItem(ticketNumber, phoneNumber);
        document.getElementById("message").innerText = "Data berhasil disimpan!";
    } else {
        document.getElementById("message").innerText = "Harap isi semua input!";
    }
}

// Fungsi untuk verifikasi tiket dan menampilkan nomor telepon
function verifyTicket() {
    let ticketNumber = document.getElementById("verifyTicket").value;
    let phoneNumber = localStorage.getItem(ticketNumber);

    if (phoneNumber) {
        document.getElementById("registeredPhone").innerText = phoneNumber;
    } else {
        document.getElementById("registeredPhone").innerText = "-";
    }
}