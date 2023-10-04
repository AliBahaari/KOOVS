import "./Content.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { CSSRulePlugin } from "gsap/all";

function Content() {
  const girlImage = useRef<HTMLImageElement | null>(null);
  const girlImageTitle = useRef<HTMLDivElement | null>(null);
  const girlImageCaption = useRef<HTMLSpanElement | null>(null);
  const firstTitle = useRef<HTMLParagraphElement | null>(null);
  const secondTitle = useRef<HTMLParagraphElement | null>(null);
  const firstTextParagraph = useRef<HTMLParagraphElement | null>(null);
  const secondTextParagraph = useRef<HTMLParagraphElement | null>(null);
  const thirdTextParagraph = useRef<HTMLParagraphElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const girlImageAfter = CSSRulePlugin.getRule(".girlImage::after");
  const imageSectionTimeline = gsap.timeline({ delay: 3 });
  const textSectionTimeline = gsap.timeline({ delay: 4 });

  useEffect(() => {
    imageSectionTimeline
      .to(girlImageAfter, {
        duration: 1,
        width: "0%",
        ease: "power3.inOut",
      })
      .from(
        girlImage.current,
        {
          duration: 0.8,
          scale: 1.2,
          ease: "power3.inOut",
        },
        "Text"
      )
      .from(
        [girlImageTitle.current, girlImageCaption.current],
        {
          duration: 0.8,
          opacity: 0,
          ease: "power3.inOut",
        },
        "Text"
      );

    textSectionTimeline
      .from(firstTitle.current, {
        y: "100%",
        duration: 1.2,
        ease: "power3.inOut",
      })
      .from(
        secondTitle.current,
        {
          y: "100%",
          duration: 1.2,
          ease: "power3.inOut",
        },
        0.4
      )
      .from(
        [
          firstTextParagraph.current,
          secondTextParagraph.current,
          thirdTextParagraph.current,
        ],
        {
          opacity: 0,
          duration: 0.6,
          ease: "power3.inOut",
        }
      )
      .from(buttonRef.current, {
        opacity: 0,
        x: -10,
        duration: 0.6,
        ease: "power3.inOut",
      });
  }, [imageSectionTimeline, textSectionTimeline, girlImageAfter]);

  return (
    <div className="flex-1 mt-6 relative">
      <div className="absolute w-5/6 h-5/6 right-24 -z-10 bg-gray-100"></div>

      <div className="h-full flex flex-row gap-10">
        <div className="h-full flex-1 flex flex-col justify-center">
          <div className="relative overflow-hidden">
            <p ref={firstTitle} className="text-7xl font-black">
              Summer
            </p>
          </div>
          <div className="relative overflow-hidden">
            <p ref={secondTitle} className="text-7xl font-black mt-4">
              Collection.
            </p>
          </div>
          <p ref={firstTextParagraph} className="mt-10 font-black">
            Sometimes the simplest things are the most profound.
          </p>
          <p ref={secondTextParagraph} className="mt-1 font-black">
            I try as much as possible to give you a great basic product and what
            comes out, I feel, is really amazing.
          </p>
          <p ref={thirdTextParagraph} className="mt-1 font-black">
            Sometimes the simplest things are the most profound. I love a black
            wedding dress.
          </p>

          <button
            ref={buttonRef}
            className="mt-10 bg-black text-white font-black rounded-full px-10 py-2 text-sm self-start hover:bg-gray-500 transition-colors ease-in-out duration-200"
          >
            View Collection
          </button>
        </div>

        <div className="h-full flex-1 flex flex-col items-center justify-center">
          <div className="relative w-1/2">
            <div className="girlImage relative overflow-hidden">
              <img ref={girlImage} src="/Girl.jpg" className="object-cover" />
            </div>

            <div
              ref={girlImageTitle}
              className="font-black absolute top-4 -right-8 text-center z-10"
            >
              <p className="text-3xl">2016</p>
              <p>Gucci coat +</p>
              <p>Cobait drape</p>
            </div>
            <span
              ref={girlImageCaption}
              className="text-7xl font-black absolute bottom-4 -left-10 z-10"
            >
              01
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
