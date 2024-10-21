// Function to load the navbar from mainnavbar.html using async/await
async function loadNavbar() {
    try {
        const response = await fetch('/src/views/mainnavbar.html'); // Đường dẫn tuyệt đối
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        const navbarHTML = await response.text();
        // Chèn nội dung navbar vào đầu body
        document.body.insertAdjacentHTML('afterbegin', navbarHTML);
    } catch (error) {
        console.error('Lỗi khi tải navbar:', error);
    }
}


// Gọi hàm loadNavbar khi DOM đã sẵn sàng
document.addEventListener('DOMContentLoaded', loadNavbar);

