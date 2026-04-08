import { useState, useEffect } from "react";

const hexChars = "01";

function MatrixColumn({ left }) {
  const [chars, setChars] = useState([]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setChars(prev => {
        const newChars = [...prev];
        const randomIndex = Math.floor(Math.random() * newChars.length);
        newChars[randomIndex] = hexChars[Math.floor(Math.random() * hexChars.length)];
        return newChars;
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setChars(Array(20).fill(hexChars[Math.floor(Math.random() * hexChars.length)]));
  }, []);

  return (
    <div 
      className="absolute top-0 flex flex-col font-mono text-xs leading-none transition-all duration-100"
      style={{ 
        left: `${left}%`,
        textShadow: "0 0 8px #d4a853, 0 0 15px #d4a853",
        animation: "matrix-fall 2s linear infinite"
      }}
    >
      {chars.map((char, i) => (
        <span 
          key={i} 
          className="text-accent/60"
          style={{ opacity: 0.3 + (i / chars.length) * 0.7 }}
        >
          {char}
        </span>
      ))}
    </div>
  );
}

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0);
  const [glitchText, setGlitchText] = useState("SOCHAUX");
  const [dataStream, setDataStream] = useState([]);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      const glitchChars = "!@#$%^&*()_+-=[]{}|;:',.<>?/\\`~";
      setGlitchText(prev => 
        prev.split('').map((char) => 
          Math.random() > 0.9 ? glitchChars[Math.floor(Math.random() * glitchChars.length)] : char
        ).join('')
      );
    }, 100);
    return () => clearInterval(glitchInterval);
  }, []);

  useEffect(() => {
    const newData = Array(8).fill(0).map(() => 
      Array(16).fill(0).map(() => Math.floor(Math.random() * 2))
    );
    setDataStream(newData);
    
    const dataInterval = setInterval(() => {
      setDataStream(prev => prev.map(row => {
        const newRow = [...row];
        const randomIndex = Math.floor(Math.random() * newRow.length);
        newRow[randomIndex] = Math.floor(Math.random() * 2);
        return newRow;
      }));
    }, 50);
    return () => clearInterval(dataInterval);
  }, []);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => setPhase(1), 200);
          setTimeout(() => setPhase(2), 400);
          setTimeout(() => setPhase(3), 600);
          setTimeout(onComplete, 1200);
          return 100;
        }
        return prev + Math.random() * 4 + 2;
      });
    }, 30);

    return () => clearInterval(progressInterval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] bg-bg-dark flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-dark via-bg-card/20 to-bg-dark" />
      
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[1px] bg-gradient-to-b from-accent/50 via-accent/20 to-transparent"
            style={{
              left: `${i * 3.5}%`,
              top: 0,
              height: `${30 + Math.random() * 70}%`,
              animation: `scan-vertical ${3 + Math.random() * 4}s linear infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
        
        <div 
          className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent via-50% to-transparent"
          style={{
            top: `${(progress / 100) * 100}%`,
            boxShadow: "0 0 20px #d4a853, 0 0 40px #d4a853, 0 0 60px #d4a853",
            opacity: phase >= 1 ? 1 : 0,
            transition: "opacity 0.3s",
          }}
        />
      </div>

      <div className="absolute left-8 top-1/4 font-mono text-[10px] text-accent/40">
        <div>[SYS] BOOT_SEQUENCE</div>
        <div>[MEM] ALLOCATING</div>
        <div>[NET] CONNECTING</div>
        <div>[SEC] VERIFYING</div>
      </div>

      <div className="absolute right-8 bottom-1/4 font-mono text-[10px] text-accent/40">
        <div className="flex items-center gap-2">
          <span>DATA_STREAM:</span>
          <div className="flex gap-[2px]">
            {dataStream[0]?.map((bit, i) => (
              <span key={i} className={bit ? "text-accent" : "text-text-secondary"}>{bit}</span>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span>PACKET_ID:</span>
          <span>{Math.floor(Math.random() * 9999).toString(16).toUpperCase().padStart(4, "0")}</span>
        </div>
        <div className="flex items-center gap-2">
          <span>TIMESTAMP:</span>
          <span>{Date.now().toString(16).slice(-8)}</span>
        </div>
      </div>

      <div className="relative z-10 text-center">
        <div 
          className="relative mb-8"
          style={{
            animation: phase < 1 ? "glitch 0.3s infinite" : "none",
          }}
        >
          <h1 
            className="font-heading text-7xl md:text-8xl font-bold tracking-[0.3em] relative"
            style={{
              textShadow: `
                0 0 10px #d4a853,
                0 0 20px #d4a853,
                0 0 40px #d4a853,
                0 0 80px #d4a853
              `,
            }}
          >
            <span className="text-accent relative z-10">{glitchText}</span>
            <span 
              className="absolute top-0 left-0 text-red-500/50 blur-[2px]"
              style={{ transform: `translate(${-2 + Math.random() * 4}px, ${-2 + Math.random() * 4}px)` }}
            >
              {glitchText}
            </span>
            <span 
              className="absolute top-0 left-0 text-cyan-500/50 blur-[2px]"
              style={{ transform: `translate(${2 - Math.random() * 4}px, ${2 - Math.random() * 4}px)` }}
            >
              {glitchText}
            </span>
          </h1>
          
          <div className="absolute -inset-8 border border-accent/20 rounded-lg">
            <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-accent" />
            <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-accent" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-accent" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-accent" />
          </div>
        </div>

        <div className="space-y-6">
          <div className="relative w-80 mx-auto">
            <div className="absolute -top-3 left-0 text-[10px] text-accent/60 font-mono">
              SYSTEM LOAD ████████████████░░░░ {Math.min(Math.round(progress), 100)}%
            </div>
            <div className="h-2 bg-bg-card border border-accent/30 rounded-sm overflow-hidden">
              <div 
                className="h-full transition-all duration-100 relative"
                style={{ 
                  width: `${progress}%`,
                  background: "linear-gradient(90deg, #d4a853, #f5d89a, #d4a853)",
                  boxShadow: "0 0 15px #d4a853, inset 0 0 10px rgba(255,255,255,0.3)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
              </div>
            </div>
          </div>

          <div className="font-mono text-[10px] text-accent/40 space-y-1">
            <div className="flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span>LOADING MODULES</span>
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse delay-100" />
            </div>
            <div>v2.0.26 | BUILD 2026.04 | NODE: PRIMARY</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
        <div className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-16 h-[2px] bg-accent/20 rounded-full overflow-hidden"
            >
              <div 
                className="h-full bg-accent"
                style={{ 
                  width: `${Math.min(progress * 2, 100)}%`,
                  marginLeft: progress > 50 ? "0" : `${(progress * 2) - 50}%`,
                  opacity: phase >= i + 1 ? 1 : 0.3,
                  transition: "opacity 0.3s",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes glitch {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(2px, -2px); }
          60% { transform: translate(-2px, -2px); }
          80% { transform: translate(2px, 2px); }
        }
        @keyframes scan-vertical {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 1s infinite;
        }
        .delay-100 {
          animation-delay: 0.1s;
        }
      `}</style>
    </div>
  );
}
