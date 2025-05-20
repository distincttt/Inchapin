export function video() {
   document.querySelector(".video-preview").addEventListener("click", async () => {
      // 1) создаём <video> элемент
      const video = document.createElement("video");
      video.src = "https://api.5-ve.ru/upload/video/Mantera_promo_768.mp4";
      video.controls = true;
      video.autoplay = true;
      video.style.cssText = `
      position: fixed;
      top: 0; left: 0;
      width: 100%; height: 100%;
      object-fit: contain;
      background: black;
      z-index: 2;
    `;

      // 2) по клику на видео – закрываем его
      video.addEventListener("click", () => {
         if (document.fullscreenElement) {
            document.exitFullscreen();
         }
         video.remove();
      });

      // 3) добавляем в DOM и входим в fullscreen
      document.body.appendChild(video);
      try {
         await video.requestFullscreen();
      } catch (err) {
         console.warn("Не удалось переключиться в полноэкранный режим:", err);
      }
   });
}
