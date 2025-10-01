export const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2 z-[-1]"
      >
        <source src="https://quynhonsearesort.educhua.com/wp-content/uploads/2025/09/DJI_0261-1.mp4" type="video/mp4" />
        Trình duyệt của bạn không hỗ trợ thẻ video.
      </video>
      
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#85BFD1] to-transparent" />

      <div className="relative z-10 text-center px-4">
        <img 
          src="https://quynhonsearesort.educhua.com/wp-content/uploads/2025/09/Title.png" 
          alt="Where Nature Meets Tranquility" 
          className="max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto mx-auto" 
          style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.6)' }} // Giữ hiệu ứng đổ bóng nếu hình ảnh có nền trong suốt
        />
      </div>
    </section>
  );
};