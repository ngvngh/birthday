// Lấy các phần tử từ trang
const homeDiv = document.getElementById('home');
const page1Div = document.getElementById('page1');
const page2Div = document.getElementById('page2');
const page3Div = document.getElementById('page3');
const messageDiv = document.getElementById('message');

const goToPage1Btn = document.getElementById('goToPage1');
const goToPage2Btn = document.getElementById('goToPage2');
const goToPage3Btn = document.getElementById('goToPage3');
const showMessageBtn = document.getElementById('showMessageBtn');
const backBtn = document.getElementById('backBtn');

// Ẩn tất cả các trang trừ trang home
page1Div.style.display = 'none';
page2Div.style.display = 'none';
page3Div.style.display = 'none';
messageDiv.style.display = 'none';

// Xử lý nút "Bấm đây nè" (trang home)
goToPage1Btn.addEventListener('click', () => {
    homeDiv.style.display = 'none';
    page1Div.style.display = 'block';
});

// Xử lý nút "Tiếp theo" (trang 1)
goToPage2Btn.addEventListener('click', () => {
    page1Div.style.display = 'none';
    page2Div.style.display = 'block';
});

// Xử lý nút "Tiếp theo" (trang 2)
goToPage3Btn.addEventListener('click', () => {
    page2Div.style.display = 'none';
    page3Div.style.display = 'block';
});

// Xử lý nút "Xem lời chúc" (trang 3)
showMessageBtn.addEventListener('click', () => {
    page3Div.style.display = 'none';
    messageDiv.style.display = 'block';
});

// Xử lý nút "Quay lại nè" (trang message)
backBtn.addEventListener('click', () => {
    messageDiv.style.display = 'none';
    homeDiv.style.display = 'block'; // Quay về trang home
});
