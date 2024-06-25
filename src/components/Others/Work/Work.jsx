/* eslint-disable react/no-unknown-property */
const Work = () => {
  return (
    <div className="my-14 container mx-auto max-w-[1200px]">
      <h2 className="text-4xl text-center text-[#0A5C5B] font-semibold mb-10">
        Our Work
      </h2>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="card card-compact w-full min-h-[200px] bg-[#F1F1F1]  rounded-xl">
          <iframe
            className="rounded-t-xl min-h-[200px]"
            src="https://www.youtube.com/embed/s5hEEFpzHN0?si=D_bnlNtU_HGdg45V"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <div className="card-body">
            <p>
              Brother Printers : From Drafts to Dreams Empowering Young Creators
              with
            </p>
          </div>
        </div>
        <div className="card card-compact w-full min-h-[200px] bg-[#F1F1F1]  rounded-xl">
          <iframe
            className="rounded-t-xl min-h-[200px]"
            src="https://www.youtube.com/embed/wR7wehW-kLo?si=8IZyO2i5HTcmA1v6"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <div className="card-body">
            <p>
              Brother Printers : From Drafts to Dreams Empowering Young Creators
              with
            </p>
          </div>
        </div>
        <div className="card card-compact w-full min-h-[200px] bg-[#F1F1F1]  rounded-xl">
          <iframe
            className="rounded-t-xl min-h-[200px]"
            src="https://www.youtube.com/embed/2JSDeDEnTaw?si=nNi_niX_utPPbZbF"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <div className="card-body">
            <p>
              Brother Printers : From Drafts to Dreams Empowering Young Creators
              with
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
