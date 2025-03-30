import React, { useState } from 'react';
/* HI EVERYONE!
This is the visualisation content that is shown on the homepage "What are milisecond pulsars?" area*/
const PulsarVisualizations = () => {
  // Section content - moved to the top before any references
  const sections = {
    lighthouse: {
      title: "Cosmic Lighthouses",
      description: "Pulsars are rapidly rotating neutron stars – the incredibly dense remnants of massive stars that have exploded as supernovae. They emit beams of radiation from their magnetic poles that sweep across space like lighthouse beams as they rotate."
    },
    millisecond: {
      title: "Millisecond Marvels",
      description: "Millisecond pulsars rotate incredibly fast – hundreds of times per second, with periods between 1-10 milliseconds. For comparison, that's faster than a kitchen blender! These are among the most stable rotators in the universe, making them exceptional cosmic clocks."
    },
    binary: {
      title: "Born from Binary Systems",
      description: "Unlike regular pulsars, millisecond pulsars are thought to have been \"recycled\" – spun up to high speeds by accreting matter from a companion star. This process transfers angular momentum to the neutron star, dramatically increasing its rotation rate."
    },
    importance: {
      title: "Why They Matter",
      description: "The MSPSRπ project measures precise distances to millisecond pulsars across our Galaxy. These measurements help us map the Galaxy's structure, test theories of gravity, improve our understanding of interstellar space, and detect gravitational waves."
    }
  };
  
  const [activeSection, setActiveSection] = useState('lighthouse');
  
  // Get the section keys for navigation
  const sectionKeys = Object.keys(sections);
  
  // Find current index
  const currentIndex = sectionKeys.indexOf(activeSection);
  
  // Navigate to previous section
  const goToPrevious = () => {
    if (currentIndex > 0) {
      setActiveSection(sectionKeys[currentIndex - 1]);
    }
  };
  
  // Navigate to next section
  const goToNext = () => {
    if (currentIndex < sectionKeys.length - 1) {
      setActiveSection(sectionKeys[currentIndex + 1]);
    }
  };

  return (
    <div className="flex flex-col w-full bg-slate-900 border border-indigo-500/30 rounded-lg overflow-hidden">
      {/* Header with title and description */}
      <div className="bg-gradient-to-r from-slate-900 to-indigo-950 p-4 border-b border-indigo-500/30">
        <h2 className="text-2xl font-bold text-indigo-100 mb-2">What Are Millisecond Pulsars?</h2>
        <p className="text-indigo-300">Cosmic Lighthouses Spinning Hundreds of Times Per Second</p>
      </div>
      
      {/* Navigation tabs */}
      <div className="flex bg-slate-900/80 border-b border-indigo-500/20 overflow-x-auto">
        {Object.entries(sections).map(([key, { title }]) => (
          <button
            key={key}
            className={`px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors ${
              activeSection === key 
                ? 'bg-indigo-900/50 text-indigo-100 border-b-2 border-indigo-500' 
                : 'text-indigo-300 hover:bg-indigo-900/30 hover:text-indigo-200'
            }`}
            onClick={() => setActiveSection(key)}
          >
            {title}
          </button>
        ))}
      </div>
      
      {/* Main content with visualization and description */}
      <div className="flex flex-col md:flex-row">
        {/* Visualization container */}
        <div className="w-full md:w-3/5 h-96 p-6 flex items-center justify-center bg-slate-950/60 relative overflow-hidden">
          {/* Stars background */}
          <div className="absolute inset-0 stars-small"></div>
          <div className="absolute inset-0 stars-medium"></div>
          
          {/* Lighthouse visualization */}
          {activeSection === 'lighthouse' && (
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Neutron star core */}
              <div className="pulsar-core">
                {/* Magnetic field lines */}
                <div className="magnetic-field-line rotate-0"></div>
                <div className="magnetic-field-line rotate-60"></div>
                <div className="magnetic-field-line rotate-120"></div>
                
                {/* Emission beams */}
                <div className="emission-beams">
                  <div className="beam beam-top"></div>
                  <div className="beam beam-bottom"></div>
                </div>
              </div>
              
              {/* Labels */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-slate-900/80 border border-indigo-500/30 px-3 py-1 rounded-lg text-center">
                <p className="text-indigo-200 text-sm">Rotating neutron star with radiation beams</p>
              </div>
              
              {/* Radio wave animation */}
              <div className="radio-waves"></div>
            </div>
          )}
          
          {/* Millisecond visualization */}
          {activeSection === 'millisecond' && (
            <div className="relative w-full h-full flex items-center justify-between px-12">
              {/* Millisecond pulsar */}
              <div className="pulsar-comparison mspsrpi w-32">
                <div className="pulsar-core-small millisecond-core">
                  <div className="emission-beams ms-beams">
                    <div className="beam beam-top"></div>
                    <div className="beam beam-bottom"></div>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-cyan-300 font-semibold">Millisecond Pulsar</p>
                  <p className="text-cyan-200 text-xs">~700 rotations per second</p>
                </div>
              </div>
              
              {/* Regular pulsar */}
              <div className="pulsar-comparison w-32">
                <div className="pulsar-core-small regular-core">
                  <div className="emission-beams reg-beams">
                    <div className="beam beam-top"></div>
                    <div className="beam beam-bottom"></div>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-amber-300 font-semibold">Regular Pulsar</p>
                  <p className="text-amber-200 text-xs">~1 rotation per second</p>
                </div>
              </div>
              
              {/* Speedometer visualization */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
                <div className="speedometer ms-speed">
                  <div className="speed-needle"></div>
                </div>
                <div className="speedometer reg-speed">
                  <div className="speed-needle"></div>
                </div>
              </div>
            </div>
          )}
          
          {/* Binary system visualization */}
          {activeSection === 'binary' && (
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Binary system with matter transfer */}
              <div className="binary-system">
                {/* Companion star */}
                <div className="companion-star">
                  <div className="label-small">Companion Star</div>
                </div>
                
                {/* Neutron star */}
                <div className="neutron-star">
                  <div className="accretion-disk"></div>
                  <div className="label-small">Neutron Star</div>
                </div>
                
                {/* Matter stream */}
                <div className="matter-stream">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="matter-particle" style={{ animationDelay: `${i * 0.2}s` }}></div>
                  ))}
                </div>
              </div>
              
              {/* Explanation */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-slate-900/80 border border-indigo-500/30 px-3 py-1 rounded-lg text-center max-w-xs">
                <p className="text-indigo-200 text-sm">Matter from the companion star transfers angular momentum, spinning up the neutron star</p>
              </div>
            </div>
          )}
          
          {/* Galaxy visualization */}
          {activeSection === 'importance' && (
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Galaxy with pulsars */}
              <div className="galaxy">
                <div className="galaxy-disk"></div>
                <div className="galaxy-core"></div>
                
                {/* Spiral arms */}
                <div className="spiral-arm arm1"></div>
                <div className="spiral-arm arm2"></div>
                
                {/* Sun position */}
                <div className="sun-position">
                  <div className="label-tiny">Sun</div>
                </div>
                
                {/* Pulsars */}
                {[...Array(12)].map((_, i) => {
                  const angle = (i / 12) * 2 * Math.PI;
                  const radius = 25 + Math.random() * 25;
                  const x = 50 + Math.cos(angle) * radius;
                  const y = 50 + Math.sin(angle) * radius;
                  
                  return (
                    <div 
                      key={i} 
                      className="pulsar-dot" 
                      style={{
                        left: `${x}%`,
                        top: `${y}%`,
                        animationDelay: `${i * 0.2}s`
                      }}
                    ></div>
                  );
                })}
                
                {/* Pulsar timing lines */}
                <svg className="timing-array" viewBox="0 0 100 100" preserveAspectRatio="none">
                  {[...Array(6)].map((_, i) => {
                    const angle1 = (i / 6) * 2 * Math.PI;
                    const angle2 = ((i + 1) / 6) * 2 * Math.PI;
                    const radius = 25 + Math.random() * 25;
                    
                    const x1 = 50 + Math.cos(angle1) * radius;
                    const y1 = 50 + Math.sin(angle1) * radius;
                    const x2 = 50 + Math.cos(angle2) * radius;
                    const y2 = 50 + Math.sin(angle2) * radius;
                    
                    return (
                      <line 
                        key={i}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        className="timing-line"
                      />
                    );
                  })}
                </svg>
              </div>
              
              {/* Explanation */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-slate-900/80 border border-indigo-500/30 px-3 py-1 rounded-lg text-center">
                <p className="text-indigo-200 text-sm">Network of precisely measured pulsars help map the galaxy and detect gravitational waves</p>
              </div>
            </div>
          )}
        </div>
        
        {/* Description panel */}
        <div className="w-full md:w-2/5 bg-slate-900/90 p-6 border-l border-indigo-500/20">
          <h3 className="text-xl font-semibold text-indigo-100 mb-3">
            {sections[activeSection].title}
          </h3>
          
          <p className="text-indigo-200 leading-relaxed">
            {sections[activeSection].description}
          </p>
          
          {/* Additional explanations based on active section */}
          {activeSection === 'lighthouse' && (
            <div className="mt-6 space-y-4">
              <div className="bg-slate-800/50 rounded-lg p-3">
                <h4 className="text-indigo-300 font-medium mb-1">Neutron Stars</h4>
                <p className="text-indigo-100 text-sm">Neutron stars are incredibly dense stellar remnants. A teaspoon of neutron star material would weigh about a billion tons on Earth!</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-3">
                <h4 className="text-indigo-300 font-medium mb-1">Radio Emissions</h4>
                <p className="text-indigo-100 text-sm">The beams of radiation are primarily radio waves. When these beams sweep across Earth, our radio telescopes detect periodic pulses of radio emission.</p>
              </div>
            </div>
          )}
          
          {activeSection === 'millisecond' && (
            <div className="mt-6 space-y-4">
              <div className="bg-slate-800/50 rounded-lg p-3">
                <h4 className="text-indigo-300 font-medium mb-1">Exceptional Timekeepers</h4>
                <p className="text-indigo-100 text-sm">Millisecond pulsars are incredibly precise cosmic clocks. Their rotation periods are predictable to within a few nanoseconds over years of observation.</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-3">
                <h4 className="text-indigo-300 font-medium mb-1">Speed Comparison</h4>
                <p className="text-indigo-100 text-sm">Regular pulsars typically rotate once every 0.1-10 seconds. In contrast, millisecond pulsars complete hundreds of rotations in a single second!</p>
              </div>
            </div>
          )}
          
          {activeSection === 'binary' && (
            <div className="mt-6 space-y-4">
              <div className="bg-slate-800/50 rounded-lg p-3">
                <h4 className="text-indigo-300 font-medium mb-1">Accretion Process</h4>
                <p className="text-indigo-100 text-sm">As matter falls onto the neutron star, it forms a rapidly rotating accretion disk. The infalling matter transfers its angular momentum to the neutron star, spinning it up.</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-3">
                <h4 className="text-indigo-300 font-medium mb-1">Companion Stars</h4>
                <p className="text-indigo-100 text-sm">The companion stars in these binary systems are often white dwarfs or low-mass main sequence stars that have evolved to the point where their outer layers expand and can be pulled toward the neutron star.</p>
              </div>
            </div>
          )}
          
          {activeSection === 'importance' && (
            <div className="mt-6 space-y-4">
              <div className="bg-slate-800/50 rounded-lg p-3">
                <h4 className="text-indigo-300 font-medium mb-1">Pulsar Timing Arrays</h4>
                <p className="text-indigo-100 text-sm">By precisely monitoring the arrival times of radio pulses from multiple millisecond pulsars, scientists can detect tiny ripples in spacetime caused by gravitational waves.</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-3">
                <h4 className="text-indigo-300 font-medium mb-1">MSPSRπ Project</h4>
                <p className="text-indigo-100 text-sm">The MSPSRπ project uses Very Long Baseline Interferometry (VLBI) to measure precise parallaxes and proper motions of millisecond pulsars, determining their exact distances and velocities.</p>
              </div>
            </div>
          )}
          
          {/* Navigation buttons */}
          <div className="mt-6 flex justify-between">
            <button 
              onClick={goToPrevious}
              disabled={currentIndex === 0}
              className={`px-3 py-1 rounded text-sm ${
                currentIndex === 0
                  ? 'bg-slate-800/50 text-slate-500 cursor-not-allowed'
                  : 'bg-indigo-900/50 text-indigo-300 hover:bg-indigo-800/60 hover:text-indigo-200'
              }`}
            >
              ← Previous
            </button>
            
            <button 
              onClick={goToNext}
              disabled={currentIndex === sectionKeys.length - 1}
              className={`px-3 py-1 rounded text-sm ${
                currentIndex === sectionKeys.length - 1
                  ? 'bg-slate-800/50 text-slate-500 cursor-not-allowed'
                  : 'bg-indigo-900/50 text-indigo-300 hover:bg-indigo-800/60 hover:text-indigo-200'
              }`}
            >
              Next →
            </button>
          </div>
        </div>
      </div>
      
      {/* CSS Animations */}
      <style jsx>{`
        /* Star backgrounds */
        .stars-small {
          background-image: radial-gradient(2px 2px at 20px 30px, #eef, rgba(0,0,0,0)),
                            radial-gradient(2px 2px at 40px 70px, #fff, rgba(0,0,0,0)),
                            radial-gradient(1px 1px at 90px 40px, #fff, rgba(0,0,0,0)),
                            radial-gradient(1px 1px at 160px 120px, #ddf, rgba(0,0,0,0));
          background-repeat: repeat;
          background-size: 200px 200px;
          opacity: 0.3;
          animation: twinkling 15s infinite linear;
        }
        
        .stars-medium {
          background-image: radial-gradient(3px 3px at 50px 160px, #fff, rgba(0,0,0,0)),
                            radial-gradient(2px 2px at 90px 40px, #fff, rgba(0,0,0,0)),
                            radial-gradient(2px 2px at 130px 80px, #fff, rgba(0,0,0,0));
          background-repeat: repeat;
          background-size: 300px 300px;
          opacity: 0.3;
          animation: twinkling 20s infinite linear;
          animation-delay: -5s;
        }
        
        @keyframes twinkling {
          from { background-position: 0 0; }
          to { background-position: 400px 400px; }
        }
        
        /* Pulsar core and beams */
        .pulsar-core {
          width: 60px;
          height: 60px;
          background: radial-gradient(circle, #8ab4ff 0%, #3e5cc9 70%, #1e3a8a 100%);
          border-radius: 50%;
          box-shadow: 0 0 15px #4663ac, 0 0 30px #2c4f9c;
          position: relative;
          animation: pulse 2s infinite ease-in-out;
        }
        
        .pulsar-core-small {
          width: 40px;
          height: 40px;
          background: radial-gradient(circle, #8ab4ff 0%, #3e5cc9 70%, #1e3a8a 100%);
          border-radius: 50%;
          box-shadow: 0 0 10px #4663ac, 0 0 20px #2c4f9c;
          position: relative;
          margin: 0 auto;
        }
        
        .millisecond-core {
          background: radial-gradient(circle, #22d3ee 0%, #0284c7 70%, #0c4a6e 100%);
          box-shadow: 0 0 15px #0ea5e9, 0 0 30px #0369a1;
          animation: pulse 1s infinite ease-in-out;
        }
        
        .regular-core {
          background: radial-gradient(circle, #fcd34d 0%, #d97706 70%, #92400e 100%);
          box-shadow: 0 0 15px #f59e0b, 0 0 30px #b45309;
          animation: pulse 3s infinite ease-in-out;
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(0.98); opacity: 0.8; }
        }
        
        .magnetic-field-line {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 120px;
          height: 120px;
          border: 2px solid rgba(99, 102, 241, 0.4);
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }
        
        .rotate-0 {
          transform: translate(-50%, -50%) rotate(0deg);
        }
        
        .rotate-60 {
          transform: translate(-50%, -50%) rotate(60deg);
        }
        
        .rotate-120 {
          transform: translate(-50%, -50%) rotate(120deg);
        }
        
        .emission-beams {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          animation: rotate 8s infinite linear;
        }
        
        .ms-beams {
          animation: rotate 0.5s infinite linear;
        }
        
        .reg-beams {
          animation: rotate 4s infinite linear;
        }
        
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .beam {
          position: absolute;
          left: 50%;
          width: 16px;
          height: 100px;
          background: linear-gradient(to top, rgba(99, 102, 241, 0) 0%, rgba(99, 102, 241, 0.7) 100%);
          transform: translateX(-50%);
          border-radius: 50% 50% 0 0;
        }
        
        .beam-top {
          top: -100px;
        }
        
        .beam-bottom {
          bottom: -100px;
          transform: translateX(-50%) rotate(180deg);
        }
        
        /* Radio waves animation */
        .radio-waves {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 150px;
          height: 150px;
          border-radius: 50%;
          border: 2px solid rgba(99, 102, 241, 0.3);
          opacity: 0;
          animation: expand-waves 4s infinite;
        }
        
        @keyframes expand-waves {
          0% { width: 60px; height: 60px; opacity: 0.8; }
          100% { width: 300px; height: 300px; opacity: 0; }
        }
        
        /* Speedometer */
        .speedometer {
          width: 60px;
          height: 30px;
          border-radius: 30px 30px 0 0;
          border: 2px solid #6366f1;
          border-bottom: none;
          position: relative;
        }
        
        .ms-speed {
          border-color: #22d3ee;
        }
        
        .reg-speed {
          border-color: #f59e0b;
        }
        
        .speed-needle {
          position: absolute;
          bottom: 0;
          left: 50%;
          height: 26px;
          width: 2px;
          background-color: #f43f5e;
          transform-origin: bottom center;
        }
        
        .ms-speed .speed-needle {
          animation: speed-needle-fast 0.5s infinite linear;
        }
        
        .reg-speed .speed-needle {
          animation: speed-needle-slow 4s infinite linear;
        }
        
        @keyframes speed-needle-fast {
          0% { transform: translateX(-50%) rotate(-30deg); }
          50% { transform: translateX(-50%) rotate(210deg); }
          100% { transform: translateX(-50%) rotate(-30deg); }
        }
        
        @keyframes speed-needle-slow {
          0% { transform: translateX(-50%) rotate(-10deg); }
          50% { transform: translateX(-50%) rotate(10deg); }
          100% { transform: translateX(-50%) rotate(-10deg); }
        }
        
        /* Binary system visualization */
        .binary-system {
          position: relative;
          width: 100%;
          height: 100%;
        }
        
        .companion-star {
          position: absolute;
          top: 50%;
          left: 30%;
          transform: translate(-50%, -50%);
          width: 60px;
          height: 60px;
          background: radial-gradient(circle, #fed7aa 0%, #f97316 60%, #c2410c 100%);
          border-radius: 50%;
          box-shadow: 0 0 20px rgba(249, 115, 22, 0.7);
        }
        
        .neutron-star {
          position: absolute;
          top: 50%;
          left: 70%;
          transform: translate(-50%, -50%);
          width: 30px;
          height: 30px;
          background: radial-gradient(circle, #8ab4ff 0%, #3e5cc9 70%, #1e3a8a 100%);
          border-radius: 50%;
          box-shadow: 0 0 15px rgba(99, 102, 241, 0.7);
          z-index: 10;
        }
        
        .accretion-disk {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(75deg);
          width: 90px;
          height: 90px;
          border-radius: 50%;
          border: 8px solid rgba(56, 189, 248, 0.3);
          z-index: 5;
          box-shadow: 0 0 10px rgba(56, 189, 248, 0.5) inset;
          animation: rotate 10s infinite linear;
        }
        
        .matter-stream {
          position: absolute;
          top: 50%;
          left: 40%;
          width: 30%;
          height: 40px;
          transform: translateY(-50%);
        }
        
        .matter-particle {
          position: absolute;
          width: 8px;
          height: 8px;
          background-color: #38bdf8;
          border-radius: 50%;
          box-shadow: 0 0 5px #38bdf8;
          animation: flow-particle 3s infinite linear;
        }
        
        @keyframes flow-particle {
          0% { left: 0; top: 20px; opacity: 1; }
          50% { top: 5px; }
          100% { left: 100%; top: 20px; opacity: 0.2; }
        }
        
        .label-small {
          position: absolute;
          bottom: -25px;
          left: 50%;
          transform: translateX(-50%);
          white-space: nowrap;
          background-color: rgba(30, 41, 59, 0.7);
          color: #e0f2fe;
          padding: 2px 6px;
          border-radius: 4px;
          font-size: 12px;
        }
        
        .label-tiny {
          position: absolute;
          bottom: -20px;
          left: 50%;
          transform: translateX(-50%);
          white-space: nowrap;
          background-color: rgba(30, 41, 59, 0.7);
          color: #fef9c3;
          padding: 1px 4px;
          border-radius: 3px;
          font-size: 10px;
        }
        
        /* Galaxy visualization */
        .galaxy {
          position: relative;
          width: 80%;
          height: 80%;
          animation: galaxy-rotate 60s infinite linear;
        }
        
        @keyframes galaxy-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .galaxy-disk {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: radial-gradient(ellipse at center, 
            rgba(203, 213, 225, 0.3) 0%, 
            rgba(148, 163, 184, 0.2) 30%, 
            rgba(71, 85, 105, 0.1) 60%, 
            rgba(15, 23, 42, 0) 100%);
        }
        
        .galaxy-core {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 20%;
          height: 20%;
          border-radius: 50%;
          background: radial-gradient(ellipse at center, 
            rgba(254, 249, 195, 0.6) 0%, 
            rgba(250, 204, 21, 0.4) 40%, 
            rgba(202, 138, 4, 0.2) 70%, 
            rgba(161, 98, 7, 0) 100%);
          box-shadow: 0 0 20px rgba(250, 204, 21, 0.3);
        }
        
        .spiral-arm {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 50%;
          height: 0;
          transform-origin: left center;
          z-index: 5;
        }
        
        .arm1 {
          transform: translateY(-50%) rotate(0deg);
        }
        
        .arm1::before {
          content: '';
          position: absolute;
          top: 0;
          left: 10%;
          width: 90%;
          height: 20px;
          background: linear-gradient(90deg, 
            rgba(99, 102, 241, 0.7) 0%, 
            rgba(99, 102, 241, 0.3) 30%, 
            rgba(99, 102, 241, 0) 100%);
          border-radius: 10px;
          transform: translateY(-50%) rotate(10deg);
          box-shadow: 0 0 15px rgba(99, 102, 241, 0.3);
        }
        
        .arm2 {
          transform: translateY(-50%) rotate(180deg);
        }
        
        .arm2::before {
          content: '';
          position: absolute;
          top: 0;
          left: 10%;
          width: 90%;
          height: 20px;
          background: linear-gradient(90deg, 
            rgba(99, 102, 241, 0.7) 0%, 
            rgba(99, 102, 241, 0.3) 30%, 
            rgba(99, 102, 241, 0) 100%);
          border-radius: 10px;
          transform: translateY(-50%) rotate(10deg);
          box-shadow: 0 0 15px rgba(99, 102, 241, 0.3);
        }
        
        .sun-position {
          position: absolute;
          top: 60%;
          left: 60%;
          width: 10px;
          height: 10px;
          background-color: #fcd34d;
          border-radius: 50%;
          box-shadow: 0 0 10px #f59e0b;
          z-index: 15;
        }
        
        .pulsar-dot {
          position: absolute;
          width: 6px;
          height: 6px;
          background-color: #22d3ee;
          border-radius: 50%;
          box-shadow: 0 0 8px #0891b2;
          z-index: 10;
          animation: pulsar-blink 2s infinite ease-in-out;
        }
        
        @keyframes pulsar-blink {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.7); }
        }
        
        .timing-array {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 5;
        }
        
        .timing-line {
          stroke: rgba(56, 189, 248, 0.3);
          stroke-width: 0.5;
          stroke-dasharray: 2;
          animation: dash-animation 20s linear infinite;
        }
        
        @keyframes dash-animation {
          to { stroke-dashoffset: 100; }
        }
        
        /* Media queries for responsive design */
        @media (max-width: 768px) {
          .pulsar-core {
            width: 40px;
            height: 40px;
          }
          
          .beam {
            width: 12px;
            height: 80px;
          }
          
          .magnetic-field-line {
            width: 80px;
            height: 80px;
          }
          
          .radio-waves {
            width: 100px;
            height: 100px;
          }
          
          @keyframes expand-waves {
            0% { width: 40px; height: 40px; opacity: 0.8; }
            100% { width: 200px; height: 200px; opacity: 0; }
          }
          
          .companion-star {
            width: 40px;
            height: 40px;
          }
          
          .neutron-star {
            width: 20px;
            height: 20px;
          }
          
          .accretion-disk {
            width: 60px;
            height: 60px;
          }
        }
      `}</style>
    </div>
  );
};

export default PulsarVisualizations;