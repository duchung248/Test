const wheel = document.querySelector('.wheel');
const sections = ['1', '2', '3', '4', '5', '6'];  // Các lựa chọn
const sectionWeights = [10, 15, 25, 20, 10, 20]; // Tỉ lệ của từng phần (số càng lớn, phần sẽ càng rộng)

function createWheelSections() {
    let angle = 0;
    let totalWeight = sectionWeights.reduce((a, b) => a + b, 0); // Tổng tỉ lệ của các phần

    sections.forEach((section, index) => {
        let sectionDiv = document.createElement('div');
        sectionDiv.classList.add('section');
        let sectionAngle = (sectionWeights[index] / totalWeight) * 360;  // Tính góc của phần dựa trên tỉ lệ
        sectionDiv.style.transform = `rotate(${angle}deg)`;
        sectionDiv.style.background = getColor(index);
        sectionDiv.innerHTML = `<span style="transform: rotate(-${angle}deg); position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">${section}</span>`;
        wheel.appendChild(sectionDiv);
        angle += sectionAngle;  // Cộng góc phần đã tính vào tổng góc
    });
}

// Hàm để chọn màu sắc cho các phần
function getColor(index) {
    const colors = ['#FF6666', '#FFCC66', '#66FF66', '#66CCCC', '#99CCFF', '#FF99FF'];
    return colors[index];
}

// Hàm quay bánh xe
function rotateWheel() {
    const randomDegree = Math.floor(Math.random() * 360) + 720; // Tạo số ngẫu nhiên lớn để quay vài vòng
    wheel.style.transition = 'transform 4s ease-out';
    wheel.style.transform = `rotate(${randomDegree}deg)`;

    // Sau khi quay xong, xác định phần trúng
    setTimeout(() => {
        const degree = randomDegree % 360;
        const section = getSection(degree);
        showCongratulation(section);
    }, 4000);
}

// Hàm xác định phần trúng dựa trên góc quay
function getSection(degree) {
    let totalAngle = 0;
    let selectedSection = '';
    let totalWeight = sectionWeights.reduce((a, b) => a + b, 0);
    
    sections.forEach((section, index) => {
        totalAngle += (sectionWeights[index] / totalWeight) * 360;
        if (degree < totalAngle) {
            selectedSection = section;
            return;
        }
    });
    return selectedSection;
}

// Hàm hiển thị cửa sổ thông báo chúc mừng
function showCongratulation(section) {
    const resultText = document.getElementById('result-text');
    resultText.textContent = section;
    document.getElementById('congratulations').style.display = 'block';
}

// Hàm đóng cửa sổ thông báo
function closeCongratulation() {
    document.getElementById('congratulations').style.display = 'none';
}

createWheelSections();
