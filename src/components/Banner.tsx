import banner from '../assets/banner-main.png';

const Banner = () => {
  return (
    <section className="px-4 py-8 sm:px-6 lg:px-8">
      <div
        className="
          relative mx-auto
          flex max-w-[1320px]
          flex-col items-center justify-center
          overflow-hidden rounded-2xl
          bg-[#101010]
          px-6 py-12
          text-center
          sm:px-10
          md:min-h-[545px]
          lg:px-16
        "
      >
        {/* Bottom-left blue glow */}
        <div
          className="
            pointer-events-none absolute
            -bottom-32 -left-32
            h-80 w-80
            rounded-full
            bg-blue-400/60
            blur-[100px]
          "
        />

        {/* Top-right orange glow */}
        <div
          className="
            pointer-events-none absolute
            -right-24 -top-24
            h-72 w-72
            rounded-full
            bg-orange-300/50
            blur-[100px]
          "
        />

        {/* Subtle center glow */}
        <div
          className="
            pointer-events-none absolute
            left-1/2 top-1/2
            h-72 w-72
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-white/[0.02]
            blur-3xl
          "
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center">

          {/* Cricket graphic */}
          <img
            src={banner}
            alt="Cricket"
            className="
              mb-4
              w-28
              object-contain
              sm:w-32
              md:w-36
            "
          />

          {/* Heading */}
          <h1
            className="
              max-w-3xl
              text-2xl font-bold
              leading-tight
              text-white
              sm:text-3xl
              md:text-4xl
              lg:text-[40px]
            "
          >
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>

          {/* Subtitle */}
          <p
            className="
              mt-3
              text-sm
              text-gray-300
              sm:text-base
            "
          >
            Beyond Boundaries Beyond Limits
          </p>

          {/* CTA */}
          <button
            type="button"
            className="
              mt-5
              rounded-lg
              border-2 border-lime-400
              bg-lime-300
              px-4 py-2
              text-xs font-bold
              text-black
              shadow-[0_0_0_3px_rgba(0,0,0,0.8)]
              transition
              duration-200
              hover:scale-105
              hover:bg-lime-200
              active:scale-95
            "
          >
            Claim Free Credit
          </button>

        </div>
      </div>
    </section>
  );
};

export default Banner;