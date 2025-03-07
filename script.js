const wheel = document.querySelector('.wheel');
const sections = ['10k', 'Chúc bạn may mắn lần sau', '50k', 'Chúc bạn may mắn lần sau', '20k', 'Nước'];

function createWheelSections() {
    let angle = 0;
    sections.forEach((section, index) => {
        let sectionDiv = document.createElement('div');
        sectionDiv.classList.add('section');
        sectionDiv.style.transform = `rotate(${angle}deg)`;
        sectionDiv.style.background = index % 2 === 0 ? 'lightgreen' : 'lightblue'; // Tùy chỉnh màu sắc
        sectionDiv.innerHTML = `<span style="transform: rotate(-${angle}deg); position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">${section}</span>`;
        wheel.appendChild(sectionDiv);
        angle += 60;  // Mỗi phần chia đều 60 độ
    });
}

function rotateWheel() {
    const randomDegree = Math.floor(Math.random() * 360) + 720; // Tạo số ngẫu nhiên lớn để quay vài vòng
    wheel.style.transition = 'transform 4s ease-out';
    wheel.style.transform = `rotate(${randomDegree}deg)`;
}

createWheelSections();
