import gsap from "gsap";
import { useEffect, useRef } from "react";
import { BiShoppingBag, BiSearch } from "react-icons/bi";

function Header() {
  const headerMenuLine1 = useRef<HTMLDivElement | null>(null);
  const headerMenuLine2 = useRef<HTMLDivElement | null>(null);
  const headerMenuLine3 = useRef<HTMLDivElement | null>(null);
  const headerTitle = useRef<HTMLHeadingElement | null>(null);
  const headerSearchIcon = useRef<HTMLDivElement | null>(null);
  const headerShoppingBagIcon = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.from(
      [
        headerMenuLine1.current,
        headerMenuLine2.current,
        headerMenuLine3.current,
      ],
      {
        delay: 2,
        stagger: 0.4,
        css: {
          width: "0px",
        },
        ease: "power3.inOut",
      }
    );

    gsap.from(
      [
        headerTitle.current,
        headerSearchIcon.current,
        headerShoppingBagIcon.current,
      ],
      {
        delay: 2,
        duration: 0.6,
        opacity: 0,
        ease: "power3.inOut",
      }
    );
  }, []);

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col gap-1 w-5">
        <div
          ref={headerMenuLine1}
          className="w-5 bg-black"
          style={{ height: "3px" }}
        ></div>
        <div
          ref={headerMenuLine2}
          className="w-5 bg-black"
          style={{ height: "3px" }}
        ></div>
        <div
          ref={headerMenuLine3}
          className="w-3 bg-black"
          style={{ height: "3px" }}
        ></div>
      </div>

      <h1 ref={headerTitle} className="font-black text-lg">
        KOOVS
      </h1>

      <div className="text-2xl flex gap-4">
        <div ref={headerSearchIcon}>
          <BiSearch />
        </div>
        <div ref={headerShoppingBagIcon}>
          <BiShoppingBag />
        </div>
      </div>
    </div>
  );
}

export default Header;
