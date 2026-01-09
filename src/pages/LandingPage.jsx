import React from 'react';
import WaveBackground from '../components/WaveBackground';
import Lanyard from '../components/Lanyard';

const LandingPage = () => {
  return (
    <WaveBackground>
      {/* 
        The Lanyard component contains the 3D Canvas which sits on top of everything.
        The WaveBackground provides the visual backdrop.
      */}
      <Lanyard />

      {/* Optional: Add a simple footer or absolute positioned text if needed, 
          but the Lanyard covers the screen interaction-wise. 
      */}
      <div className="absolute bottom-4 right-4 text-white/20 text-xs z-0 pointer-events-none">
        Original Concept by Vercel | Recreated with React Three Fiber
      </div>
    </WaveBackground>
  );
};

export default LandingPage;
