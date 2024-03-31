import { GalleryImage } from "../types";

import audiosensor from "./audiosensor.jpg";
import developed_probe from "./developed_probe.jpg";
import film_electrode from "./film_electrode.jpg";
import flexible from "./flexible.jpg";
import microcoil from "./microcoil.png";
import pmut from "./pmut.jpg";
import sensor_above from "./sensor_above.jpg";
import submilicoil from "./submilicoil.jpg";

export const deviceImages: GalleryImage[] = [
  {
    src: pmut,
    caption: {
      en: "Micro device for ultrasound neuromodulation in vitro",
      ja: "In vitro超音波神経変調用マイクロデバイス",
    },
    externalLink: "https://doi.org/10.1016/j.jneumeth.2023.110048",
  },
  {
    src: audiosensor,
    caption: {
      en: "Acoustic sensor that mimics the inner ear basement membrane (left) and Small signal amplifier (right)",
      ja: "内耳基底膜を模した音響センサ（左）と微小信号増幅器（右）",
    },
    externalLink: "https://doi.org/10.3389/fneng.2013.00012",
  },
  {
    src: sensor_above,
    caption: {
      en: "Acoustic sensor",
      ja: "音響センサ",
    },
    externalLink: "https://doi.org/10.1002/tee.23260",
  },
  {
    src: developed_probe,
    caption: {
      en: "Probe for stimulation and recording",
      ja: "刺激記録両用プローブ",
    },
  },
  {
    src: film_electrode,
    caption: {
      en: "Film electrode for recording voltage of brain surface",
      ja: "脳表電位計測フィルム電極",
    },
  },
  {
    src: flexible,
    caption: {
      en: "Flexible printed circuits for recording elektrenkephalogramm (EEG)",
      ja: "脳波計測用フレキシブル基板",
    },
    externalLink:
      "https://www.jove.com/t/65302/low-cost-electroencephalographic-recording-system-combined-with",
  },
  {
    src: microcoil,
    caption: {
      en: "Micro probe for magnetic stimulation",
      ja: "マイクロ磁気刺激プローブ",
    },
  },
  {
    src: submilicoil,
    caption: {
      en: "Sub-millimeter sized coil",
      ja: "サブミリコイル",
    },
  },
];
