const IMAGES = [
    "Bom Keo - Bậc thầy Sinh Tồn.png",
    "Bom Keo - Bậc thầy Tử Chiến.png",
    "Bom Keo - Chú Thuật Hồi Chiến.png",
    "Bom Keo - Phong Cách Tanjiro.png",
    "Bom Keo - Shipper Đầu Hộp.png",
    "Bom Keo - Đấu Trường Rực Lửa.png",
    "Bom Keo - Độc Quyền Xếp Hạng Nhân Mã.png",
    "Bom Keo - Độc Quyền Xếp Hạng Ú Òa.png",
    "Bom Keo Lễ Hội.png",
    "Bom Keo Như Ý.png",
    "Bom Keo Thiên Vũ.png",
    "Bom keo - Booyah Hoàn Hảo.png",
    "Bom keo - Băng Long.png",
    "Bom keo - Bạch Thiên Hồ.png",
    "Bom keo - Fan Truyện Tranh (Thưởng XH Sinh Tồn).png",
    "Bom keo - Hà Mã Moo Deng .png",
    "Bom keo - Leo Cột.png",
    "Bom keo - Lửa địa ngục.png",
    "Bom keo - Mắt Sharingan.png",
    "Bom keo - Mặt cười.png",
    "Bom keo - Nailoong Nhảy Múa.png",
    "Bom keo - Nhà Côn Trùng Học (Thưởng XH Tử Chiến).png",
    "Bom keo - Sinh Nhật 8 Tuổi.png",
    "Bom keo - Sắc Xuân.png",
    "Bom keo - Vương Quốc Cát.png",
    "Bom keo - Ánh Dương.png",
    "Bom keo Bơ Gơ.png",
    "Bom keo Lãnh Chúa.png",
    "Bom keo Mèo mèo.png",
    "Bom keo Ngọn lửa Sinh tồn.png",
    "Bom keo Nhiệt Huyết.png",
    "Bom keo Nhà Thơ.png",
    "Bom keo Phong vũ.png",
    "Bom keo Samurai.png",
    "Bom keo Sắc màu.png",
    "Bom keo Thiên thần sa ngã.png",
    "Bom keo Triệu đô.png",
    "Bom keo Tử Thần Tuyết.png",
    "Bom keo Tử thần.png",
    "Bom keo Vinh quang.png",
    "Bom keo tiệc tùng.png",
    "Bom keo xe tải hề hước.png",
    "Bom keo Đế Vương.png",
    "Hộp Bom Keo Dạ Xoa.png"
];

const IMAGES_PER_PAGE = 12;
let currentPage = 1;

const gallery = document.getElementById('gallery');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const pageInfo = document.getElementById('pageInfo');

function renderGallery() {
    // Clear existing content
    gallery.innerHTML = '';
    
    const startIndex = (currentPage - 1) * IMAGES_PER_PAGE;
    const endIndex = Math.min(startIndex + IMAGES_PER_PAGE, IMAGES.length);
    const totalPages = Math.ceil(IMAGES.length / IMAGES_PER_PAGE);

    // Get images for current page
    const pageImages = IMAGES.slice(startIndex, endIndex);

    pageImages.forEach((imgName, index) => {
        const card = document.createElement('div');
        card.className = 'image-card';
        card.style.animationDelay = `${index * 0.05}s`;

        // Clean name (remove extension for display)
        const displayName = imgName.split('.').slice(0, -1).join('.');

        card.innerHTML = `
            <div class="image-container">
                <img src="images/${imgName}" alt="${displayName}" loading="lazy">
            </div>
            <div class="image-info">
                <h3 class="image-name" title="${displayName}">${displayName}</h3>
            </div>
        `;
        gallery.appendChild(card);
    });

    // Update pagination controls
    pageInfo.innerText = `Trang ${currentPage} / ${totalPages}`;
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        renderGallery();
    }
});

nextBtn.addEventListener('click', () => {
    const totalPages = Math.ceil(IMAGES.length / IMAGES_PER_PAGE);
    if (currentPage < totalPages) {
        currentPage++;
        renderGallery();
    }
});

// Initial render
document.addEventListener('DOMContentLoaded', renderGallery);
