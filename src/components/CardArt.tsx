import { useEffect, useState } from "react";
import "./card-art.css";

/**
 * Animated art for the three value cards: coral dotted gradient + white line drawing.
 * Replays every 8s. Respects prefers-reduced-motion (shows the finished drawing, still).
 *
 * Usage: <CardArt variant="disciplines" /> | "denmark" | "wireframe"
 */
export type Variant = "disciplines" | "denmark" | "wireframe";

const LOOP_MS = 8000;

function useReplay() {
  const [cycle, setCycle] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setCycle((c) => c + 1), LOOP_MS);
    return () => window.clearInterval(id);
  }, []);
  return cycle;
}

function Disciplines() {
  return (
    <svg viewBox="0 0 400 300" aria-hidden="true">
      <g className="tw-ln">
        <circle className="draw" pathLength="1" cx="200" cy="70" r="26" style={{ animationDelay: "0s" }}/>
        <circle className="draw" pathLength="1" cx="100" cy="235" r="26" style={{ animationDelay: "0.25s" }}/>
        <circle className="draw" pathLength="1" cx="300" cy="235" r="26" style={{ animationDelay: "0.5s" }}/>
        <g className="pop" style={{ animationDelay: "0.9s" }}>
          <path d="M186 79 C190 60 210 60 214 79"/>
          <path d="M190 61 L210 61" strokeOpacity="0.6"/>
          <rect x="184" y="77" width="4" height="4" fill="#fff"/>
          <rect x="212" y="77" width="4" height="4" fill="#fff"/>
        </g>
        <g className="pop" style={{ animationDelay: "1.05s" }}>
          <path d="M90 227 L82 235 L90 243"/>
          <path d="M110 227 L118 235 L110 243"/>
          <path d="M104 225 L96 245"/>
        </g>
        <g className="pop" style={{ animationDelay: "1.2s" }}>
          <path d="M285 247 L315 247"/>
          <path d="M291 244 L291 237"/>
          <path d="M300 244 L300 226"/>
          <path d="M309 244 L309 232"/>
        </g>
        <path className="draw" pathLength="1" d="M183.4 97.4 L116.6 207.6" style={{ animationDelay: "1.4s", animationDuration: "0.7s" }}/>
        <path className="draw" pathLength="1" d="M132 235 L268 235" style={{ animationDelay: "1.8s", animationDuration: "0.7s" }}/>
        <path className="draw" pathLength="1" d="M283.4 207.6 L216.6 97.4" style={{ animationDelay: "2.2s", animationDuration: "0.7s" }}/>
      </g>
      <g className="fade moving" style={{ animationDelay: "3s" }}>
        <circle r="9" fill="#fff" fillOpacity="0.25">
          <animateMotion begin="3s" dur="3.6s" repeatCount="indefinite" path="M200 70 L100 235 L300 235 Z"/>
        </circle>
        <circle r="3.5" fill="#fff">
          <animateMotion begin="3s" dur="3.6s" repeatCount="indefinite" path="M200 70 L100 235 L300 235 Z"/>
        </circle>
      </g>
    </svg>
  );
}

function Denmark() {
  return (
    <svg viewBox="0 0 400 300" aria-hidden="true">
      <g className="tw-ln">
        <path className="draw" pathLength="1" style={{ animationDelay: "0s", animationDuration: "2.6s" }} d="M210.9 36.3 L208.5 57.9 L208.1 65.8 L199.6 89.6 L198.8 111.2 L224.2 131.4 L214.1 147.2 L195.6 150.8 L186.7 182.5 L176.6 193.3 L166.5 198.3 L166.5 215.6 L163.7 230.7 L182.7 240.8 L163.7 248 L132.7 240.1 L126.2 222.8 L122.2 199.8 L109.3 193.3 L111.3 161.6 L114.5 111.2 L130.3 81 L185.1 47.1 Z"/>
        <path className="draw" pathLength="1" style={{ animationDelay: "1.6s", animationDuration: "1.1s" }} d="M175.8 197.6 L189.9 192.6 L213.3 201.2 L219 211.3 L210.9 229.3 L196.4 226.4 L182.7 214.2 Z"/>
        <path className="draw" pathLength="1" style={{ animationDelay: "2s", animationDuration: "1.5s" }} d="M291.5 158.7 L291.5 184.6 L274.6 200.5 L285.5 212 L269.4 225 L263.3 233.6 L239.1 215.6 L232.7 209.8 L230.2 184.6 L239.1 163.8 L261.3 163.8 L279.4 153 Z"/>
        <path className="draw" pathLength="1" style={{ animationDelay: "2.8s", animationDuration: "0.9s" }} d="M232.3 245.8 L247.2 246.6 L262.1 250.2 L264.5 264.6 L242.7 258.8 L231 253 Z"/>
      </g>
      <g className="tw-ln" strokeOpacity="0.55" strokeWidth="1.25">
        <path className="draw" pathLength="1" d="M183 88 Q200 118 190 150" style={{ animationDelay: "3.7s", animationDuration: "0.6s" }}/>
        <path className="draw" pathLength="1" d="M190 150 Q215 178 202 204" style={{ animationDelay: "4s", animationDuration: "0.6s" }}/>
        <path className="draw" pathLength="1" d="M130 198 Q166 186 202 204" style={{ animationDelay: "4.2s", animationDuration: "0.6s" }}/>
        <path className="draw" pathLength="1" d="M202 204 Q245 168 286 182" style={{ animationDelay: "4.4s", animationDuration: "0.7s" }}/>
      </g>
      <g fill="#fff">
        <circle className="pop" cx="183" cy="88" r="4" style={{ animationDelay: "3.3s" }}/>
        <circle className="pop" cx="190" cy="150" r="4" style={{ animationDelay: "3.4s" }}/>
        <circle className="pop" cx="130" cy="198" r="4" style={{ animationDelay: "3.5s" }}/>
        <circle className="pop" cx="202" cy="204" r="4" style={{ animationDelay: "3.6s" }}/>
        <circle className="pop" cx="286" cy="182" r="5" style={{ animationDelay: "3.7s" }}/>
      </g>
      <g fill="none" stroke="#fff" strokeWidth="1">
        <circle className="pulse" cx="183" cy="88" r="4" style={{ animationDelay: "4.9s" }}/>
        <circle className="pulse" cx="190" cy="150" r="4" style={{ animationDelay: "5.3s" }}/>
        <circle className="pulse" cx="130" cy="198" r="4" style={{ animationDelay: "5.1s" }}/>
        <circle className="pulse" cx="202" cy="204" r="4" style={{ animationDelay: "5.5s" }}/>
        <circle className="pulse" cx="286" cy="182" r="5" style={{ animationDelay: "4.7s" }}/>
      </g>
    </svg>
  );
}

function Wireframe() {
  return (
    <svg viewBox="0 0 400 300" aria-hidden="true">
      <g className="tw-ln">
        <rect className="draw" pathLength="1" x="70" y="45" width="260" height="210" rx="8" style={{ animationDelay: "0s", animationDuration: "1.2s" }}/>
        <path className="draw" pathLength="1" d="M70 67 L330 67" style={{ animationDelay: "0.7s", animationDuration: "0.5s" }}/>
        <rect className="draw" pathLength="1" x="86" y="80" width="30" height="9" rx="2" style={{ animationDelay: "1.3s", animationDuration: "0.5s" }}/>
        <path className="draw" pathLength="1" d="M248 85 L266 85" style={{ animationDelay: "1.5s", animationDuration: "0.3s" }}/>
        <path className="draw" pathLength="1" d="M276 85 L294 85" style={{ animationDelay: "1.6s", animationDuration: "0.3s" }}/>
        <path className="draw" pathLength="1" d="M304 85 L314 85" style={{ animationDelay: "1.7s", animationDuration: "0.3s" }}/>
        <path className="draw" pathLength="1" d="M88 112 L206 112" strokeWidth="6" style={{ animationDelay: "1.9s", animationDuration: "0.5s" }}/>
        <path className="draw" pathLength="1" d="M88 126 L174 126" strokeWidth="6" style={{ animationDelay: "2.2s", animationDuration: "0.4s" }}/>
        <path className="draw" pathLength="1" d="M88 144 L202 144" strokeWidth="3" strokeOpacity="0.7" style={{ animationDelay: "2.5s", animationDuration: "0.4s" }}/>
        <path className="draw" pathLength="1" d="M88 154 L188 154" strokeWidth="3" strokeOpacity="0.7" style={{ animationDelay: "2.7s", animationDuration: "0.4s" }}/>
        <rect className="draw" pathLength="1" x="88" y="167" width="54" height="16" rx="8" style={{ animationDelay: "2.9s", animationDuration: "0.5s" }}/>
        <rect className="draw" pathLength="1" x="226" y="100" width="88" height="84" rx="4" style={{ animationDelay: "3s", animationDuration: "0.7s" }}/>
        <path className="draw" pathLength="1" d="M226 100 L314 184" strokeOpacity="0.5" style={{ animationDelay: "3.6s", animationDuration: "0.4s" }}/>
        <path className="draw" pathLength="1" d="M314 100 L226 184" strokeOpacity="0.5" style={{ animationDelay: "3.75s", animationDuration: "0.4s" }}/>
        <rect className="draw" pathLength="1" x="86" y="200" width="70" height="40" rx="4" style={{ animationDelay: "3.9s", animationDuration: "0.6s" }}/>
        <rect className="draw" pathLength="1" x="165" y="200" width="70" height="40" rx="4" style={{ animationDelay: "4.1s", animationDuration: "0.6s" }}/>
        <rect className="draw" pathLength="1" x="244" y="200" width="70" height="40" rx="4" style={{ animationDelay: "4.3s", animationDuration: "0.6s" }}/>
      </g>
      <g fill="#fff">
        <circle className="pop" cx="84" cy="56" r="2.5" style={{ animationDelay: "1s" }}/>
        <circle className="pop" cx="94" cy="56" r="2.5" style={{ animationDelay: "1.1s" }}/>
        <circle className="pop" cx="104" cy="56" r="2.5" style={{ animationDelay: "1.2s" }}/>
        <rect className="pop" x="88" y="167" width="54" height="16" rx="8" fillOpacity="0.9" style={{ animationDelay: "3.5s" }}/>
      </g>
      <g className="fade moving" style={{ animationDelay: "0.3s" }}>
        <path d="M0 0 L0 15 L4 11 L7 17 L9.5 16 L6.5 10 L12 10 Z" className="tw-cursor" fill="#fff" strokeOpacity="0.5" strokeWidth="1" strokeLinejoin="round">
          <animateMotion begin="0.3s" dur="4.8s" fill="freeze" path="M330 262 L100 86 L205 116 L195 152 L120 178 L300 176 L150 228 L300 228 L345 272"/>
        </path>
      </g>
    </svg>
  );
}

export function CardArt({ variant, className = "" }: { variant: Variant; className?: string }) {
  const cycle = useReplay();
  const Art = variant === "disciplines" ? Disciplines : variant === "denmark" ? Denmark : Wireframe;
  return (
    <div className={`tw-card-art ${className}`}>
      <Art key={cycle} />
    </div>
  );
}
