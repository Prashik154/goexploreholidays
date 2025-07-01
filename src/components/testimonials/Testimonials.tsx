// import { testimonials } from '@/app/utils/data';
// import { Star } from 'lucide-react';

// export function Testimonials() {
//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="container mx-auto px-4 max-w-6xl">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-gray-900">Traveler Experiences</h2>
//           <p className="text-gray-600 mt-2">What our guests say about their wild adventures</p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-8">
//           {testimonials.map((testimonial) => (
//             <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
//               <div className="flex mb-3">
//                 {[...Array(5)].map((_, i) => (
//                   <Star 
//                     key={i} 
//                     className={`w-5 h-5 ${i < testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`} 
//                   />
//                 ))}
//               </div>
//               <blockquote className="text-gray-700 italic mb-4 text-lg">
//                 "{testimonial.quote}"
//               </blockquote>
//               <div className="flex justify-between items-center">
//                 <div>
//                   <p className="font-medium text-gray-900">{testimonial.author}</p>
//                   <p className="text-sm text-gray-500">{testimonial.tour}</p>
//                 </div>
//                 <span className="text-sm text-gray-400">{testimonial.date}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";
import React, { useEffect, useRef, useState, useMemo, useCallback } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  src: string;
  width: number;
  height: number;
}

interface Colors {
  name?: string;
  designation?: string;
  testimony?: string;
  arrowBackground?: string;
  arrowForeground?: string;
  arrowHoverBackground?: string;
}

interface FontSizes {
  name?: string;
  designation?: string;
  quote?: string;
}

interface CircularTestimonialsProps {
  testimonials: Testimonial[];
  autoplay?: boolean;
  colors?: Colors;
  fontSizes?: FontSizes;
  className?: string;
}

function calculateGap(width: number) {
  const minWidth = 1024;
  const maxWidth = 1456;
  const minGap = 60;
  const maxGap = 86;
  if (width <= minWidth) return minGap;
  if (width >= maxWidth)
    return Math.max(minGap, maxGap + 0.06018 * (width - maxWidth));
  return minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth));
}

export const CircularTestimonials = ({
  testimonials,
  autoplay = true,
  colors = {},
  fontSizes = {},
  className,
}: CircularTestimonialsProps) => {
  const colorName = colors.name ?? "hsl(var(--foreground))";
  const colorDesignation = colors.designation ?? "hsl(var(--muted-foreground))";
  const colorTestimony = colors.testimony ?? "hsl(var(--foreground))";
  const colorArrowBg = colors.arrowBackground ?? "hsl(var(--primary))";
  const colorArrowFg = colors.arrowForeground ?? "hsl(var(--primary-foreground))";
  const colorArrowHoverBg = colors.arrowHoverBackground ?? "hsl(var(--primary)/0.8)";

  const fontSizeName = fontSizes.name ?? "1.5rem";
  const fontSizeDesignation = fontSizes.designation ?? "0.925rem";
  const fontSizeQuote = fontSizes.quote ?? "1.125rem";

  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverPrev, setHoverPrev] = useState(false);
  const [hoverNext, setHoverNext] = useState(false);
  const [containerWidth, setContainerWidth] = useState(1200);

  const imageContainerRef = useRef<HTMLDivElement>(null);
  const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const testimonialsLength = useMemo(() => testimonials.length, [testimonials]);
  const activeTestimonial = useMemo(
    () => testimonials[activeIndex],
    [activeIndex, testimonials]
  );

  useEffect(() => {
    function handleResize() {
      if (imageContainerRef.current) {
        setContainerWidth(imageContainerRef.current.offsetWidth);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (autoplay) {
      autoplayIntervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonialsLength);
      }, 5000);
    }
    return () => {
      if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
    };
  }, [autoplay, testimonialsLength]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonialsLength);
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
  }, [testimonialsLength]);
  
  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + testimonialsLength) % testimonialsLength);
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
  }, [testimonialsLength]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handlePrev, handleNext]);

  function getImageStyle(index: number): { className: string; opacity: number; zIndex: number } {
    const isActive = index === activeIndex;
    const isLeft = (activeIndex - 1 + testimonialsLength) % testimonialsLength === index;
    const isRight = (activeIndex + 1) % testimonialsLength === index;

    if (isActive) {
      return {
        className: "translate-x-0 translate-y-0 scale-100 rotate-y-0",
        opacity: 1,
        zIndex: 3
      };
    }
    if (isLeft) {
      return {
        className: `-translate-x-[${calculateGap(containerWidth)}px] -translate-y-[${calculateGap(containerWidth) * 0.8}px] scale-90 rotate-y-15`,
        opacity: 1,
        zIndex: 2
      };
    }
    if (isRight) {
      return {
        className: `translate-x-[${calculateGap(containerWidth)}px] -translate-y-[${calculateGap(containerWidth) * 0.8}px] scale-90 -rotate-y-15`,
        opacity: 1,
        zIndex: 2
      };
    }
    return {
      className: "",
      opacity: 0,
      zIndex: 1
    };
  }

  const quoteVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className={cn("w-full max-w-4xl mx-auto p-8", className)}>
      <div className="grid gap-12 md:grid-cols-2">
        <div 
          ref={imageContainerRef}
          className="relative h-96 w-full perspective-1000"
        >
          {testimonials.map((testimonial, index) => {
            const style = getImageStyle(index);
            return (
              <div
                key={testimonial.src}
                className={`absolute w-full h-full transition-all duration-800 ease-[cubic-bezier(.4,2,.3,1)] ${style.className}`}
                style={{
                  opacity: style.opacity,
                  zIndex: style.zIndex,
                  pointerEvents: style.zIndex > 1 ? "auto" : "none"
                }}
              >
                <Image
                  src={testimonial.src}
                  alt={testimonial.name}
                  width={testimonial.width}
                  height={testimonial.height}
                  className="w-full h-full object-cover rounded-xl shadow-lg"
                  priority={index === activeIndex}
                />
              </div>
            );
          })}
        </div>

        <div className="flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              variants={quoteVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <h3
                className="font-bold mb-1"
                style={{ color: colorName, fontSize: fontSizeName }}
              >
                {activeTestimonial.name}
              </h3>
              <p
                className="text-muted-foreground mb-6"
                style={{ color: colorDesignation, fontSize: fontSizeDesignation }}
              >
                {activeTestimonial.designation}
              </p>
              <motion.p
                className="leading-relaxed"
                style={{ color: colorTestimony, fontSize: fontSizeQuote }}
              >
                {activeTestimonial.quote.split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                    animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.22,
                      ease: "easeInOut",
                      delay: 0.025 * i,
                    }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.p>
            </motion.div>
          </AnimatePresence>

          <div className="flex gap-4 pt-8 md:pt-0">
            <button
              className="rounded-full p-3 transition-colors"
              onClick={handlePrev}
              style={{
                backgroundColor: hoverPrev ? colorArrowHoverBg : colorArrowBg,
                color: colorArrowFg,
              }}
              onMouseEnter={() => setHoverPrev(true)}
              onMouseLeave={() => setHoverPrev(false)}
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="h-6 w-6" />
            </button>
            <button
              className="rounded-full p-3 transition-colors"
              onClick={handleNext}
              style={{
                backgroundColor: hoverNext ? colorArrowHoverBg : colorArrowBg,
                color: colorArrowFg,
              }}
              onMouseEnter={() => setHoverNext(true)}
              onMouseLeave={() => setHoverNext(false)}
              aria-label="Next testimonial"
            >
              <ArrowRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};