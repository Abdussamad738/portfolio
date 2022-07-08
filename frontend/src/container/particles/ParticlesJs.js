// import React from 'react';
// import particlesConfig from './particlesConfig';
// import Particles from "react-tsparticles" ;
// import '../particles/particles.scss';

// export default function ParticlesJs ()  {
//   return (
//     <Particles params={particlesConfig}>
      

//     </Particles>
//   )
// }
/*
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // loads tsparticles-slim
//import { loadFull } from "tsparticles"; // loads tsparticles
import { useCallback, useMemo } from "react";

// tsParticles Repository: https://github.com/matteobruni/tsparticles
// tsParticles Website: https://particles.js.org/
const ParticlesComponent = (props) => {
  // using useMemo is not mandatory, but it's recommended since this value can be memoized if static
  const options = useMemo(() => {
    // using an empty options object will load the default options, which are static particles with no background and 3px radius, opacity 100%, white color
    // all options can be found here: https://particles.js.org/docs/interfaces/Options_Interfaces_IOptions.IOptions.html
    return {
      background: {
        color: "#000", // this sets a background color for the canvas
      },
      fullScreen: {
        enable: true, // enabling this will make the canvas fill the entire screen, it's enabled by default
        zIndex: -1, // this is the z-index value used when the fullScreen is enabled, it's 0 by default
      },
      interactivity: {
        events: {
          onClick: {
            enable: true, // enables the click event
            mode: "push", // adds the particles on click
          },
          onHover: {
            enable: true, // enables the hover event
            mode: "repulse", // make the particles run away from the cursor
          },
        },
        modes: {
          push: {
            quantity: 10, // number of particles to add on click
          },
          repulse: {
            distance: 100, // distance of the particles from the cursor
          },
        },
      },
      particles: {
        links: {
          enable: true, // enabling this will make particles linked together
          distance: 150, // maximum distance for linking the particles
        },
        move: {
          enable: true, // enabling this will make particles move in the canvas
          speed: { min: 1, max: 3 }, // using a range in speed value will make particles move in a random speed between min/max values, each particles have its own value, it won't change in time by default
        },
        opacity: {
          value: { min: 0.3, max: 0.7 }, // using a different opacity, to have some semitransparent effects
        },
        size: {
          value: { min: 1, max: 3 }, // let's randomize the particles size a bit
        },
      },
    };
  }, []);

  // useCallback is not mandatory, but it's recommended since this callback can be memoized if static
  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
    // loadFull(engine); // for this sample the slim version is enough, choose whatever you prefer, slim is smaller in size but doesn't have all the plugins and the mouse trail feature
  }, []);

  // setting an id can be useful for identifying the right particles component, this is useful for multiple instances or reusable components
  return <Particles id={props.id} init={particlesInit} options={options} />;
};

export default ParticlesComponent;*/


tsParticles
  .load("tsparticles", {
    fpsLimit: 60,
    interactivity: {
      detectsOn: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "bubble",
          parallax: { enable: false, force: 60, smooth: 10 }
        },
        resize: true
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 0.8,
          size: 40,
          speed: 3
        },
        grab: { distance: 400, links: { opacity: 1 } },
        push: { quantity: 4 },
        remove: { quantity: 2 },
        repulse: { distance: 200, duration: 0.4 }
      }
    },
    particles: {
      move: {
        distance: 100,
        direction: "none",
        enable: true,
        outMode: "none",
        random: false,
        speed: 6,
        straight: false
      },
      number: { density: { enable: true, area: 800 }, value: 0 },
      opacity: {
        animation: { enable: true, minimumValue: 0.5, speed: 1, sync: false },
        random: false,
        value: 1
      },
      shape: {
        type: "char"
      },
      size: {
        animation: { enable: true, minimumValue: 10, speed: 5, sync: false },
        random: false,
        value: 16
      }
    },
    stroke: { color: "#ffffff", width: 1 },
    retina_detect: true
  })
  .then((container) => {
    let configs = {
      "Font Awesome 5 Free": {
        weight: "900",
        chars: [
          {
            value: "\uf06a",
            color: "#f00"
          },
          {
            value: "\uf7ba",
            color: "#ff0"
          },
          {
            value: "\uf3ed",
            color: "#0ff"
          },
          {
            value: "\uf55f",
            color: "#0f0"
          },
          {
            value: "\uf013",
            color: "#00f"
          }
        ]
      },
      "Font Awesome 5 Brands": {
        weight: "400",
        chars: [
          {
            value: "\uf179",
            color: "#fff"
          },
          {
            value: "\uf38b",
            color: "#f00"
          },
          {
            value: "\uf3b9",
            color: "#ff0"
          },
          {
            value: "\uf13b",
            color: "#0f0"
          },
          {
            value: "\uf13b",
            color: "#00f"
          }
        ]
      }
    };

    for (let family in configs) {
      const obj = configs[family];

      let weight = obj.weight;
      let chars = obj.chars;

      for (let item of chars) {
        let value = item.value;
        let color = item.color;
        let particleOptions = {
          color: {
            value: color
          },
          shape: {
            options: {
              char: {
                fill: true,
                font: family,
                style: "",
                value: value,
                weight: weight
              }
            },
            type: "char"
          }
        };

        let particle = container.particles.addParticle(
          undefined,
          particleOptions
        );

        console.log(particle);
      }
    }
  });
