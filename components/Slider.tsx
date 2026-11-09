import { useState } from "react";
import { VolumeLoudIcon } from "@solar-icons/react/bold-duotone/volume-loud";
import { MicrophoneIcon } from "@solar-icons/react/bold-duotone/microphone";
import { LightbulbBoltIcon } from "@solar-icons/react/bold-duotone/lightbulb-bolt";

export interface SliderProps {
  slot1: string;
  slot2: string;
}

export default function Slider({ slot1, slot2 }: SliderProps) {
  const [volume, setVolume] = useState<number>(40);
  const [microphone, setMicrophone] = useState<number>(40);
  const [brightness, setBrightness] = useState<number>(40);

  return (
    <div className="card card-lg w-96 bg-base-100 shadow-sm p-8 gap-4 rounded-3xl">
      <div className="flex flex-col">
        <h3 className="card-title">{slot1}</h3>
        <div className="flex items-center gap-1">
          <VolumeLoudIcon
            size={36}
            color="#c36f19"
            secondaryColor="#6086fa"
            secondaryOpacity={0.6}
          />{" "}
          {/*Icon Sound*/}
          <input
            type="range"
            min={0}
            max="100"
            value={volume}
            className="range range-primary"
            onChange={(e) => setVolume(Number(e.target.value))}
          />
        </div>
        <div className="flex items-center gap-2 mt-4">
          <MicrophoneIcon
            size={36}
            color="#c36f19"
            secondaryColor="#6086fa"
            secondaryOpacity={0.6}
          />{" "}
          {/*Icon Mic*/}
          <input
            type="range"
            min={0}
            max="100"
            value={microphone}
            className="range range-primary"
            onChange={(e) => setMicrophone(Number(e.target.value))}
          />
        </div>
      </div>

      <h3 className="card-title">{slot2}</h3>
      <div className="flex gap-2">
        <LightbulbBoltIcon
          size={36}
          color="#c36f19"
          secondaryColor="#6086fa"
          secondaryOpacity={0.6}
        />{" "}
        {/*Icon lampu*/}
        <input
          type="range"
          min={0}
          max="100"
          value={brightness}
          className="range range-primary"
          onChange={(e) => setBrightness(Number(e.target.value))}
        />
      </div>
    </div>
  );
}
