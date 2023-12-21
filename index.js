const nodemailer = require('nodemailer');
const cron = require('node-cron');

console.log('server is running...')

// Buat transporter dengan menggunakan SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'wanwanmlbb93@gmail.com', // Ganti dengan alamat email pengirim
        pass: 'ssun wfxi tkpf jpgz' // Ganti dengan kata sandi email pengirim
    }
});

// Konfigurasi email yang akan dikirim
let mailOptions = { 
    from: 'wanwanmlbb93@gmail.com', // Alamat email pengirim
    to: 'hardiantisangaji1204@gmail.com', // Alamat email penerima
    subject: 'Happy Birthday Anthyy !',
    text: 'buka ducoment dibawah ini yaa cantik !',
    attachments: [
        {
            filename: 'ucapan.txt', // Ganti dengan nama file dokumen Anda
            path: 'ucapan.txt' // Ganti dengan path lokasi dokumen Anda
        }
        // Anda dapat menambahkan lampiran tambahan jika diperlukan
    ]
};

// Jadwalkan pengiriman email besok pada jam 00.00
cron.schedule('0 0 22 12 *', () => {
    // Kirim email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.error('Gagal mengirim email:', error);
        }

        console.log('Email terkirim:', info.response);
    });
}, {
    timezone: 'Asia/Jakarta' // Sesuaikan dengan zona waktu Anda
});