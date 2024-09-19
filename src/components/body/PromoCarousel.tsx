import React from "react";

interface ICarousel {
  logo: string;
  title: string;
  desc: string;
}

const carouselItem: ICarousel[] = [
  {
    logo: "/delivery-truck 1.svg",
    title: "Free Shipping",
    desc: "Free shipping on all your order",
  },
  {
    logo: "/headphones 1.svg",
    title: "Customer Support 24/7",
    desc: "Instant access to Support",
  },
  {
    logo: "/shopping-bag.svg",
    title: "100% Secure Payment",
    desc: "We ensure your money is save",
  },
  {
    logo: "/package.svg",
    title: "Money-Back Guarantee",
    desc: "30 Days Money-Back Guarantee",
  },
];

export const PromoCarousel = () => {
  return (
    <section className="container relative mt-6">
      <div className="grid h-[230px] grid-cols-2 place-items-center rounded-lg bg-[#EDF2EE] p-2 md:h-[804px]">
        <div className="md:space-y-4">
          <h5 className="text-[10px] leading-3 tracking-[0.28px] text-[#00B207] md:text-sm md:leading-5">
            Welcome to shopery
          </h5>
          <h1 className="w-40 text-lg font-semibold leading-8 md:w-[596px] md:text-7xl">
            Fresh & Healthy Organic Food
          </h1>
          <p className="text-xs font-normal leading-7 md:text-3xl md:leading-9">
            Sale up to <span className="text-orange-500">30% OFF</span>
          </p>
          <p className="text-[8px] font-normal leading-4 text-gray-500 md:text-sm md:leading-5">
            Free shipping on all your order. we deliver, you enjoy
          </p>
          <button className="rounded-3xl bg-[#00B207] px-2 py-1 text-center text-[10px] text-white md:px-10 md:py-4 md:text-base md:leading-5">
            Shop now
          </button>
        </div>
        <div>
          <img src="/Image.png" alt="" />
        </div>
        <div className="mx-auto hidden w-11/12 rounded-lg bg-white p-10 shadow-xl md:absolute md:bottom-[-7%] md:block">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {carouselItem.map((item, idx) => {
              return (
                <div className="flex items-center gap-4" key={idx}>
                  <img src={item.logo} alt="" />
                  <div>
                    <p className="text-base font-semibold leading-5">
                      {item.title}
                    </p>
                    <p className="text-base font-normal leading-5 text-gray-400">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
