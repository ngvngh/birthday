// Lấy các phần tử từ trang
const showMessageBtn = document.getElementById('showMessageBtn');
const messageDiv = document.getElementById('message');
const homeDiv = document.getElementById('home');
const backBtn = document.getElementById('backBtn');

// Hiển thị lời chúc khi nhấn nút
showMessageBtn.addEventListener('click', () => {
    homeDiv.style.display = 'none';
    messageDiv.style.display = 'block';
});

// Quay lại trang đầu tiên khi nhấn nút "Quay lại"
backBtn.addEventListener('click', () => {
    messageDiv.style.display = 'none';
    homeDiv.style.display = 'block';
});
