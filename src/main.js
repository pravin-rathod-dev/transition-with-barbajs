import './style.css'
import barba from '@barba/core';
import gsap from 'gsap';

barba.init({
  transitions: [
    {
      name: 'to-transition1',
      from: { namespace: ['home', 'transition2', 'transition3', 'transition1'] },
      to: { namespace: ['transition1'] },

      leave(data) {
        return gsap.to('.curtain .strips', {
          scaleY: 1,
          duration: 1.3,
          ease: 'expo.in',
          transformOrigin: 'bottom',
          stagger: 0
        });
      },
      after(data) {
        return gsap.to('.curtain .strips', {
          scaleY: 0,
          duration: 1,
          ease: 'expo.out',
          transformOrigin: 'top',
          stagger: 0
        });
      },
    },
    {
      name: 't1-to-home',
      from: { namespace: ['transition1'] },
      to: { namespace: ['home'] },

      leave(data) {
        return gsap.to('.curtain .strips', {
          scaleY: 1,
          duration: 1.3,
          ease: 'expo.in',
          transformOrigin: 'bottom',
          stagger: 0
        });
      },
      after(data) {
        return gsap.to('.curtain .strips', {
          scaleY: 0,
          duration: 1,
          ease: 'expo.out',
          transformOrigin: 'top',
          stagger: 0
        });
      },
    },
    {
      name: 'to-transition2',
      from: { namespace: ['home', 'transition1', 'transition3', 'transition2'] },
      to: { namespace: ['transition2'] },

      leave(data) {
        return gsap.to('.curtain .strips', {
          scaleY: 1,
          transformOrigin: 'bottom',
          stagger: 0.09,
          duration: 1.2,
          ease: 'expo.in'
        });
      },
      after(data) {
        return gsap.to('.curtain .strips', {
          scaleY: 0,
          transformOrigin: 'top',
          duration: 1.2,
          stagger: -0.09,
          ease: 'expo.out'
        });
      }
    },
    {
      name: 't2-to-home',
      from: { namespace: ['transition2'] },
      to: { namespace: ['home'] },

      leave(data) {
        return gsap.to('.curtain .strips', {
          scaleY: 1,
          transformOrigin: 'bottom',
          stagger: 0.09,
          duration: 1.2,
          ease: 'expo.in'
        });
      },
      after(data) {
        return gsap.to('.curtain .strips', {
          scaleY: 0,
          transformOrigin: 'top',
          duration: 1.2,
          stagger: -0.09,
          ease: 'expo.out'
        });
      }
    },
    {
      name: 'to-transition3',
      from: { namespace: ['home', 'transition1', 'transition2', 'transition3'] },
      to: { namespace: ['transition3'] },
      
      leave(data) {
        const container = document.querySelector('.pixel-container');
        container.innerHTML = '';
        
        const blockSize = window.innerWidth * 0.05;
        const columns = Math.ceil(window.innerWidth / blockSize);
        const rows = Math.ceil(window.innerHeight / blockSize);
        const totalBlocks = columns * rows;

        for (let i = 0; i < totalBlocks; i++) {
          const pixel = document.createElement('div');
          pixel.classList.add('pixel');
          pixel.style.width = `${blockSize}px`;
          pixel.style.height = `${blockSize}px`;
          pixel.style.opacity = '0'; 
          container.appendChild(pixel);
        }
        return gsap.to('.pixel', {
          opacity: 1,
          duration: 0.03,
          stagger: {
            amount: 0.4,
            grid: [rows, columns],
            from: "random"
          }
        });
      },
      after(data) {
        return gsap.to('.pixel', {
          opacity: 0,
          duration: 0.03,
          delay: 0.1,
          stagger: {
            amount: 0.4,
            grid: 'auto',
            from: "random"
          },
          onComplete: () => {
            const container = document.querySelector('.pixel-container');
            if (container) container.innerHTML = '';
          }
        });
      }
    },
    {
      name: 'transition3-to-home',
      from: { namespace: ['transition3'] },
      to: { namespace: ['home'] },
      
      leave(data) {
        const container = document.querySelector('.pixel-container');
        container.innerHTML = '';
        
        const blockSize = window.innerWidth * 0.05;
        const columns = Math.ceil(window.innerWidth / blockSize);
        const rows = Math.ceil(window.innerHeight / blockSize);
        const totalBlocks = columns * rows;

        for (let i = 0; i < totalBlocks; i++) {
          const pixel = document.createElement('div');
          pixel.classList.add('pixel');
          pixel.style.width = `${blockSize}px`;
          pixel.style.height = `${blockSize}px`;
          pixel.style.opacity = '0'; 
          container.appendChild(pixel);
        }
        return gsap.to('.pixel', {
          opacity: 1,
          duration: 0.03,
          stagger: {
            amount: 0.4,
            grid: [rows, columns],
            from: "random"
          }
        });
      },

      after(data) {
        return gsap.to('.pixel', {
          opacity: 0,
          duration: 0.03,
          delay: 0.1,
          stagger: {
            amount: 0.4,
            grid: 'auto',
            from: "random"
          },
          onComplete: () => {
            const container = document.querySelector('.pixel-container');
            if (container) container.innerHTML = '';
          }
        });
      }
    },
    {
      name: 'fallback-transition',
      leave(data) {
        return gsap.to('.curtain .strips', {
          scaleY: 1,
          duration: 1,
          ease: 'expo.in',
          transformOrigin: 'bottom',
          stagger: 0
        });
      },
      after(data) {
        return gsap.to('.curtain .strips', {
          scaleY: 0,
          duration: 1,
          ease: 'expo.out',
          transformOrigin: 'top',
          stagger: 0
        });
      }
    }
  ]
});


barba.hooks.before(() => {
  document.body.classList.add('no-clicks');
});


barba.hooks.after(() => {
  document.body.classList.remove('no-clicks');
});