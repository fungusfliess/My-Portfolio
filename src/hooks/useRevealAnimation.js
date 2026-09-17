import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function useRevealAnimation(selector = ".reveal") {
    const scope = useRef(null);

    useLayoutEffect(function () {
        if (!scope.current) return;

        const context = gsap.context(function () {
            const elements = gsap.utils.toArray(selector);

            elements.forEach(function (element) {
                gsap.from(element, {
                    y: 45,
                    opacity: 0,
                    duration: 0.9,
                    ease: "power2.out",

                    scrollTrigger: {
                        trigger: element,
                        start: "top 88%",
                        once: true
                    }
                });
            });
        }, scope);

        const images = scope.current.querySelectorAll("img");

        function refreshScrollTrigger() {
            ScrollTrigger.refresh();
        }

        images.forEach(function (image) {
            if (!image.complete) {
                image.addEventListener("load", refreshScrollTrigger);
            }
        });

        ScrollTrigger.refresh();

        return function () {
            images.forEach(function (image) {
                image.removeEventListener("load", refreshScrollTrigger);
            });

            context.revert();
        };

    }, [selector]);

    return scope;
}

export default useRevealAnimation;