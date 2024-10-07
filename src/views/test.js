document.addEventListener('DOMContentLoaded', function () {
    // Gọi API để lấy danh sách sản phẩm
    fetch('http://localhost:3000/rider-team')
        .then(response => response.json())
        .then(data => {
            products = data; // Lưu dữ liệu vào biến
            isLoading = false;
            renderTable(); // Render bảng với dữ liệu ban đầu
            renderPagination(); // Tạo các nút phân trang
        })
        .catch(error => {
            console.error('Lỗi khi gọi API:', error);
        });


});