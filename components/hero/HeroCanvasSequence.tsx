"use client";
import { useEffect, useRef } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { HERO_MODES } from "@/lib/heroModes";

export default function HeroCanvasSequence({ modeIndex }: { modeIndex: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const { scrollYProgress } = useScroll(); // 0 ~ 1 사이의 스크롤 값
  
  const mode = HERO_MODES[modeIndex];
  // 스크롤 0~1 범위를 프레임 번호 0~119로 매핑
  const frameIndex = useTransform(scrollYProgress, [0, 0.5], [0, mode.sequence.frameCount - 1]);

  // 이미지 프리로드 로직
  useEffect(() => {
    imagesRef.current = [];
    for (let i = 0; i < mode.sequence.frameCount; i++) {
      const img = new Image();
      img.src = `${mode.sequence.baseUrl}${i.toString().padStart(3, '0')}.webp`;
      imagesRef.current.push(img);
    }
  }, [modeIndex]);

  // 프레임 업데이트 시 캔버스에 그리기
  useMotionValueEvent(frameIndex, "change", (latest) => {
    const ctx = canvasRef.current?.getContext("2d");
    const img = imagesRef.current[Math.round(latest)];
    if (ctx && img && img.complete) {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.drawImage(img, 0, 0, ctx.canvas.width, ctx.canvas.height);
    }
  });

  return (
    <canvas
      ref={canvasRef}
      width={1920}
      height={1080}
      className="fixed inset-0 w-full h-full object-cover -z-10 opacity-50"
    />
  );
}
