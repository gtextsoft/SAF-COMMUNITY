"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BeamsBackgroundProps {
    className?: string;
    children?: React.ReactNode;
    intensity?: "subtle" | "medium" | "strong";
}

interface Beam {
    x: number;
    y: number;
    width: number;
    length: number;
    angle: number;
    speed: number;
    opacity: number;
    hue: number;
    pulse: number;
    pulseSpeed: number;
}

function createBeam(width: number, height: number): Beam {
    const angle = -35 + Math.random() * 10;
    return {
        x: Math.random() * width * 1.5 - width * 0.25,
        y: Math.random() * height * 1.5 - height * 0.25,
        width: 30 + Math.random() * 60,
        length: height * 2.5,
        angle: angle,
        speed: 0.6 + Math.random() * 1.2,
        opacity: 0.12 + Math.random() * 0.16,
        hue: 190 + Math.random() * 70,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.03,
    };
}

export function BeamsBackground({
    className,
    children,
    intensity = "strong",
}: BeamsBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const beamsRef = useRef<Beam[]>([]);
    const animationFrameRef = useRef<number>(0);
    const [isInView, setIsInView] = useState(false);
    const observerRef = useRef<IntersectionObserver | null>(null);
    const MINIMUM_BEAMS = intensity === "subtle" ? 8 : intensity === "medium" ? 12 : 15;

    const opacityMap = {
        subtle: 0.5,
        medium: 0.7,
        strong: 0.85,
    };

    // Optimization: Setup intersection observer to only animate when in viewport
    useEffect(() => {
        const targetElement = canvasRef.current;
        if (!targetElement) return;

        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsInView(entry.isIntersecting);
                });
            },
            { threshold: 0.1 }
        );

        observerRef.current.observe(targetElement);

        return () => {
            if (observerRef.current && targetElement) {
                observerRef.current.unobserve(targetElement);
            }
        };
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d", { alpha: true });
        if (!ctx) return;

        const updateCanvasSize = () => {
            const dpr = 1; // Force DPR to 1 for better performance
            const rect = canvas.getBoundingClientRect();
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            canvas.style.width = `${rect.width}px`;
            canvas.style.height = `${rect.height}px`;
            ctx.scale(dpr, dpr);

            // Reduce number of beams for better performance
            const totalBeams = MINIMUM_BEAMS;
            beamsRef.current = Array.from({ length: totalBeams }, () =>
                createBeam(canvas.width, canvas.height)
            );
        };

        const handleResize = () => {
            if (canvas.width !== canvas.getBoundingClientRect().width) {
                updateCanvasSize();
            }
        };

        updateCanvasSize();
        // Use a throttled resize event for better performance
        let resizeTimeout: number;
        window.addEventListener("resize", () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = window.setTimeout(handleResize, 100);
        });

        function resetBeam(beam: Beam, index: number, totalBeams: number) {
            if (!canvas) return beam;
            
            const column = index % 3;
            const spacing = canvas.width / 3;

            beam.y = canvas.height + 100;
            beam.x =
                column * spacing +
                spacing / 2 +
                (Math.random() - 0.5) * spacing * 0.5;
            beam.width = 50 + Math.random() * 50; // Smaller beams
            beam.speed = 0.3 + Math.random() * 0.3; // Slower movement
            beam.hue = 190 + (index * 70) / totalBeams;
            beam.opacity = 0.15 + Math.random() * 0.1;
            return beam;
        }

        function drawBeam(ctx: CanvasRenderingContext2D, beam: Beam) {
            ctx.save();
            ctx.translate(beam.x, beam.y);
            ctx.rotate((beam.angle * Math.PI) / 180);

            // Calculate pulsing opacity
            const pulsingOpacity =
                beam.opacity *
                (0.8 + Math.sin(beam.pulse) * 0.2) *
                opacityMap[intensity];

            const gradient = ctx.createLinearGradient(0, 0, 0, beam.length);

            // Simplified gradient with fewer color stops
            gradient.addColorStop(0, `hsla(${beam.hue}, 85%, 65%, 0)`);
            gradient.addColorStop(
                0.3,
                `hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity})`
            );
            gradient.addColorStop(
                0.7,
                `hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity})`
            );
            gradient.addColorStop(1, `hsla(${beam.hue}, 85%, 65%, 0)`);

            ctx.fillStyle = gradient;
            ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length);
            ctx.restore();
        }

        // Optimize animation with requestAnimationFrame throttling
        let lastTimestamp = 0;
        const FPS_THROTTLE = 30; // Limit to 30 FPS
        const TIME_BETWEEN_FRAMES = 1000 / FPS_THROTTLE;

        function animate(timestamp: number) {
            if (!isInView) {
                // Skip animation when not in view
                animationFrameRef.current = requestAnimationFrame(animate);
                return;
            }

            // Throttle the frame rate
            if (timestamp - lastTimestamp < TIME_BETWEEN_FRAMES) {
                animationFrameRef.current = requestAnimationFrame(animate);
                return;
            }
            
            lastTimestamp = timestamp;

            if (!canvas || !ctx) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.filter = "blur(30px)";

            const totalBeams = beamsRef.current.length;
            beamsRef.current.forEach((beam, index) => {
                beam.y -= beam.speed;
                beam.pulse += beam.pulseSpeed;

                // Reset beam when it goes off screen
                if (beam.y + beam.length < -100) {
                    resetBeam(beam, index, totalBeams);
                }

                drawBeam(ctx, beam);
            });

            animationFrameRef.current = requestAnimationFrame(animate);
        }

        animate(0);

        return () => {
            window.removeEventListener("resize", handleResize);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [intensity, isInView, MINIMUM_BEAMS]);

    return (
        <div
            className={cn(
                "relative h-full w-full overflow-hidden bg-neutral-950",
                className
            )}
        >
            <canvas
                ref={canvasRef}
                className="absolute inset-0"
                style={{ filter: "blur(10px)" }}
            />

            <motion.div
                className="absolute inset-0 bg-neutral-950/5"
                animate={{
                    opacity: isInView ? [0.05, 0.12, 0.05] : 0.05,
                }}
                transition={{
                    duration: 10,
                    ease: "easeInOut",
                    repeat: Number.POSITIVE_INFINITY,
                }}
                style={{
                    backdropFilter: "blur(35px)",
                }}
            />

            {children && (
                <div className="relative z-10 h-full w-full">
                    {children}
                </div>
            )}
        </div>
    );
} 