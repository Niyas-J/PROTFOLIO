"use client";

import React, { useState, useEffect, useRef } from "react";
import { sound } from "@/lib/sound";
import { 
  Cpu, 
  Activity, 
  Power, 
  Droplet, 
  Thermometer, 
  Gauge, 
  Radio, 
  Terminal, 
  Zap,
  Award
} from "lucide-react";

export const HardwareSimulator: React.FC = () => {
  // Simulator State representing an IRIS AgriShield / AgriMithra ESP32 field node
  const [nodeActive, setNodeActive] = useState<boolean>(true);
  const [pumpRelay, setPumpRelay] = useState<boolean>(false);
  const [soilMoisture, setSoilMoisture] = useState<number>(34); // %
  const [temperature, setTemperature] = useState<number>(27.8); // °C
  const [humidity, setHumidity] = useState<number>(68); // %
  const [rssi, setRssi] = useState<number>(-78); // dBm
  const [packetCount, setPacketCount] = useState<number>(142);
  const [waveform, setWaveform] = useState<number[]>([32, 33, 34, 33, 35, 36, 34, 34, 35, 34]);
  const [lastTxTime, setLastTxTime] = useState<string>("Just now");
  const [autoIrrigation, setAutoIrrigation] = useState<boolean>(true);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Periodic Telemetry Loop
  useEffect(() => {
    if (!nodeActive) return;

    const interval = setInterval(() => {
      setSoilMoisture((prev) => {
        let next = prev;
        if (pumpRelay) {
          next = Math.min(85, prev + 1.8);
        } else {
          next = Math.max(20, prev - 0.2);
        }
        return parseFloat(next.toFixed(1));
      });

      setTemperature((prev) => {
        const delta = (Math.random() - 0.5) * 0.2;
        return parseFloat((prev + delta).toFixed(1));
      });

      setHumidity((prev) => {
        const delta = (Math.random() - 0.5) * 0.4;
        return Math.min(99, Math.max(30, Math.round(prev + delta)));
      });

      setPacketCount((p) => p + 1);
      setLastTxTime(new Date().toLocaleTimeString());

      setWaveform((prev) => {
        const nextVal = soilMoisture + (Math.random() - 0.5) * 4;
        return [...prev.slice(1), nextVal];
      });

      // Auto irrigation control logic
      if (autoIrrigation) {
        if (soilMoisture < 28 && !pumpRelay) {
          setPumpRelay(true);
          sound.playBeep(520, 0.1, "sine", 0.05);
        } else if (soilMoisture > 65 && pumpRelay) {
          setPumpRelay(false);
          sound.playBeep(440, 0.1, "sine", 0.04);
        }
      }

    }, 2000);

    return () => clearInterval(interval);
  }, [nodeActive, pumpRelay, soilMoisture, autoIrrigation]);

  // Waveform Canvas Rendering
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);

    ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
    ctx.lineWidth = 1;
    for (let x = 0; x < width; x += 30) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += 20) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    if (!nodeActive) {
      ctx.fillStyle = "rgba(239, 68, 68, 0.4)";
      ctx.font = "12px monospace";
      ctx.fillText("NODE OFFLINE - TELEMETRY STREAM PAUSED", 20, height / 2);
      return;
    }

    ctx.beginPath();
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = pumpRelay ? "#06b6d4" : "#6366f1";

    const step = width / (waveform.length - 1);
    waveform.forEach((val, i) => {
      const y = height - (val / 100) * (height - 20) - 10;
      const x = i * step;
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
    ctx.stroke();

    ctx.lineTo(width, height);
    ctx.lineTo(0, height);
    ctx.fillStyle = pumpRelay ? "rgba(6, 182, 212, 0.08)" : "rgba(99, 102, 241, 0.08)";
    ctx.fill();

  }, [waveform, nodeActive, pumpRelay]);

  const togglePump = () => {
    sound.playClick();
    setPumpRelay(!pumpRelay);
    if (!pumpRelay) {
      sound.playSuccess();
    }
  };

  const toggleNode = () => {
    sound.playClick();
    setNodeActive(!nodeActive);
  };

  return (
    <section id="hardware-lab" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>IRIS AgriShield & AgriMithra Telemetry</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Live Virtual ESP32 Hardware Lab
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2">
            Showcased at Krishimanthan National Hackathon & PCB Cupid 3.0. Simulates an ESP32 wireless field station reading capacitive soil moisture, ambient temperature, and driving solenoid irrigation relays.
          </p>
        </div>

        {/* Simulator Main Dashboard */}
        <div className="glass-panel rounded-2xl border border-white/[0.1] overflow-hidden shadow-2xl">
          
          {/* Header Banner */}
          <div className="flex flex-wrap items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#0c0e17] gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <span className={`w-3 h-3 rounded-full ${nodeActive ? "bg-emerald-500 signal-live" : "bg-red-500"}`} />
                <span className="font-mono text-xs font-bold text-white tracking-wider">
                  ESP32 / IRIS AGRISHIELD NODE #01
                </span>
              </div>
              <span className="hidden sm:inline-block text-[11px] font-mono text-zinc-400 bg-white/[0.04] px-2 py-0.5 rounded">
                IRIS Community · KVGCE
              </span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={togglePump}
                disabled={!nodeActive}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${
                  pumpRelay
                    ? "bg-cyan-500 text-black shadow-md shadow-cyan-500/30"
                    : "bg-white/[0.05] hover:bg-white/[0.1] text-zinc-300 border border-white/[0.08]"
                } ${!nodeActive ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                <Power className="w-3.5 h-3.5" />
                <span>RELAY (VALVE): {pumpRelay ? "OPEN" : "CLOSED"}</span>
              </button>

              <button
                onClick={toggleNode}
                className="p-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-zinc-300 border border-white/[0.08] transition-colors"
                title={nodeActive ? "Power Down Node" : "Reboot Node"}
              >
                <Zap className={`w-4 h-4 ${nodeActive ? "text-amber-400" : "text-zinc-600"}`} />
              </button>
            </div>
          </div>

          {/* Telemetry Sensor Gauges Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 border-b border-white/[0.06] bg-white/[0.01]">
            <div className="bg-white/[0.02] p-4 rounded-xl border border-white/[0.05] space-y-1">
              <div className="flex items-center justify-between text-zinc-400 text-xs">
                <span className="flex items-center gap-1.5">
                  <Droplet className="w-4 h-4 text-cyan-400" />
                  <span>Soil Moisture</span>
                </span>
                <span className="font-mono text-[11px]">{soilMoisture < 30 ? "DRY" : "OPTIMAL"}</span>
              </div>
              <div className="text-2xl font-mono font-bold text-white">
                {soilMoisture}%
              </div>
              <div className="w-full bg-white/[0.05] h-1.5 rounded-full overflow-hidden mt-2">
                <div 
                  className={`h-full transition-all duration-500 ${soilMoisture < 30 ? "bg-amber-500" : "bg-cyan-400"}`}
                  style={{ width: `${soilMoisture}%` }}
                />
              </div>
            </div>

            <div className="bg-white/[0.02] p-4 rounded-xl border border-white/[0.05] space-y-1">
              <div className="flex items-center justify-between text-zinc-400 text-xs">
                <span className="flex items-center gap-1.5">
                  <Thermometer className="w-4 h-4 text-rose-400" />
                  <span>Ambient Temp</span>
                </span>
                <span className="font-mono text-[11px]">SHT31</span>
              </div>
              <div className="text-2xl font-mono font-bold text-white">
                {temperature} <span className="text-base text-zinc-400">°C</span>
              </div>
              <div className="w-full bg-white/[0.05] h-1.5 rounded-full overflow-hidden mt-2">
                <div 
                  className="h-full bg-rose-400 transition-all duration-500"
                  style={{ width: `${Math.min(100, (temperature / 50) * 100)}%` }}
                />
              </div>
            </div>

            <div className="bg-white/[0.02] p-4 rounded-xl border border-white/[0.05] space-y-1">
              <div className="flex items-center justify-between text-zinc-400 text-xs">
                <span className="flex items-center gap-1.5">
                  <Gauge className="w-4 h-4 text-indigo-400" />
                  <span>Humidity</span>
                </span>
                <span className="font-mono text-[11px]">RH</span>
              </div>
              <div className="text-2xl font-mono font-bold text-white">
                {humidity}%
              </div>
              <div className="w-full bg-white/[0.05] h-1.5 rounded-full overflow-hidden mt-2">
                <div 
                  className="h-full bg-indigo-400 transition-all duration-500"
                  style={{ width: `${humidity}%` }}
                />
              </div>
            </div>

            <div className="bg-white/[0.02] p-4 rounded-xl border border-white/[0.05] space-y-1">
              <div className="flex items-center justify-between text-zinc-400 text-xs">
                <span className="flex items-center gap-1.5">
                  <Radio className="w-4 h-4 text-emerald-400" />
                  <span>Signal Strength</span>
                </span>
                <span className="font-mono text-[11px]">WiFi / LoRa</span>
              </div>
              <div className="text-2xl font-mono font-bold text-white">
                {rssi} <span className="text-base text-zinc-400">dBm</span>
              </div>
              <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 mt-1">
                <span>Packets: {packetCount}</span>
                <span>Tx: {lastTxTime}</span>
              </div>
            </div>
          </div>

          {/* Waveform Canvas */}
          <div className="p-6 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono font-bold text-zinc-200 uppercase tracking-wider">
                  ADC Sensor Telemetry Stream (Krishimanthan Firmware)
                </span>
              </div>
              <div className="flex items-center gap-3 text-[11px] font-mono text-zinc-400">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-indigo-500" /> VWC Voltage
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" /> Actuator Signal
                </span>
              </div>
            </div>

            <div className="w-full h-40 bg-black/40 rounded-xl overflow-hidden border border-white/[0.05] relative">
              <canvas
                ref={canvasRef}
                width={800}
                height={160}
                className="w-full h-full block"
              />
            </div>

            <div className="bg-[#090b10] p-3 rounded-xl border border-white/[0.05] font-mono text-[11px] text-zinc-400 flex items-center justify-between overflow-x-auto">
              <div className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span>[UART0 115200] SOIL={soilMoisture}% | RELAY={pumpRelay ? "1 (OPEN)" : "0 (CLOSED)"} | IRIS_AGRISHIELD_OK</span>
              </div>
              <span className="text-[10px] text-zinc-600 shrink-0 ml-4">ESP32-S3 READY</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
