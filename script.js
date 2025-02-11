
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


function hideAllPages() {
  homeDiv.style.display = 'none';
  page1Div.style.display = 'none';
  page2Div.style.display = 'none';
  page3Div.style.display = 'none';
  messageDiv.style.display = 'none';
}


hideAllPages();
homeDiv.style.display = 'block'; 


goToPage1Btn.addEventListener('click', () => {
  hideAllPages();
  page1Div.style.display = 'block';
});


goToPage2Btn.addEventListener('click', () => {
  hideAllPages();
  page2Div.style.display = 'block';
});


goToPage3Btn.addEventListener('click', () => {
  hideAllPages();
  page3Div.style.display = 'block';
});


showMessageBtn.addEventListener('click', () => {
  hideAllPages();
  messageDiv.style.display = 'block';
});


backBtn.addEventListener('click', () => {
  hideAllPages();
  homeDiv.style.display = 'block';
});
