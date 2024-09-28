import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Scrollbar from 'smooth-scrollbar';

gsap.registerPlugin(ScrollTrigger);

const ScrollingSections = () => {
  useEffect(() => {
    const bodyScrollBar = Scrollbar.init(document.body, {
      damping: 0.1,
      delegateTo: document,
    });

    ScrollTrigger.scrollerProxy(".scroller", {
      scrollTop(value) {
        if (arguments.length) {
          bodyScrollBar.scrollTop = value;
        }
        return bodyScrollBar.scrollTop;
      },
    });

    bodyScrollBar.addListener(ScrollTrigger.update);

    const panels = gsap.utils.toArray('.panel:not(.purple)');
    panels.forEach((panel, i) => {
      gsap.timeline({
        scrollTrigger: {
          trigger: ".black",
          scroller: ".scroller",
          start: () => "top -" + (window.innerHeight * (i + 0.5)),
          end: () => "+=" + window.innerHeight,
          scrub: true,
          invalidateOnRefresh: true,
        },
      })
      .to(panel, { height: 0 });
    });

    const texts = gsap.utils.toArray('.panel-text');
    texts.forEach((text, i) => {
      gsap.timeline({
        scrollTrigger: {
          trigger: ".black",
          scroller: ".scroller",
          start: () => "top -" + (window.innerHeight * i),
          end: () => "+=" + window.innerHeight,
          scrub: true,
          invalidateOnRefresh: true,
        },
      })
      .to(text, { duration: 0.33, opacity: 1, y: "50%" })
      .to(text, { duration: 0.33, opacity: 0, y: "0%" }, 0.66);
    });

    ScrollTrigger.create({
      trigger: ".black",
      scroller: ".scroller",
      scrub: true,
      pin: true,
      start: () => "top top",
      end: () => "+=" + ((panels.length + 1) * window.innerHeight),
      invalidateOnRefresh: true,
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      bodyScrollBar.destroy();
    };
  }, []);

  return (
    <div className="scroller">
      <section className="orange">
        <div className="text">This is some text inside of a div block.</div>
      </section>
      <section className="black">
        <div className="text-wrap">
          <div className="panel-text blue-text">Blue</div>
          <div className="panel-text red-text">Red</div>
          <div className="panel-text orange-text">Orange</div>
          <div className="panel-text purple-text">Purple</div>
        </div>
        <div className="p-wrap">
          <div className="panel blue"></div>
          <div className="panel red"></div>
          <div className="panel orange"></div>
          <div className="panel purple"></div>
        </div>
      </section>
      <section className="blue"></section>
    </div>
  );
};

export default ScrollingSections;
