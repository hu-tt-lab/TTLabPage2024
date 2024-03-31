import { GalleryImage } from "../types";

import _3DPrinter from "./3dprinter.jpg";
import nissl_stain from "./nissl_stain.jpg";
import brain_slices from "./brain_slices.png";
import calcium_imaging_system from "./calcium_imaging_system.jpg";
import calcium_imaging_result from "./calcium_imaging_result.png";
import electrode from "./electrode.jpg";
import fai_result from "./fai_result.jpg";
import fai_system from "./fai_system.jpg";
import incubator from "./incubator.jpg";
import kyoushouten from "./kyoushouten.jpg";
import laser_doppler from "./laser-doppler.jpg";
import lazor_machines from "./lazor_machines.jpg";
import mea from "./mea.png";
import neuron from "./neuron.png";
import operation from "./operation.jpg";
import pc_desk from "./pc_desk.jpg";
import safety_cabinet from "./safety-cabinet.jpg";
import slicer from "./slicer.jpg";
import soundproof from "./soundproof.jpg";
import surgery_desk from "./surgery_desk.jpg";

export const equipmentImages: GalleryImage[] = [
  {
    src: _3DPrinter,
    caption: {
      en: "3D Printer",
      ja: "3Dプリンター",
    },
  },
  {
    src: brain_slices,
    caption: {
      en: "Brain Slices",
      ja: "脳スライス",
    },
  },
  {
    src: calcium_imaging_system,
    caption: {
      en: "Calcium Imaging System",
      ja: "カルシウムイメージングシステム",
    },
  },
  {
    src: calcium_imaging_result,
    caption: {
      en: "Calcium Imaging",
      ja: "カルシウムイメージング",
    },
  },
  {
    src: electrode,
    caption: {
      en: "Electrode for recording neural activity",
      ja: "神経活動の記録用電極",
    },
  },
  {
    src: fai_system,
    caption: {
      en: "FAI system",
      ja: "FAI システム",
    },
  },
  {
    src: fai_result,
    caption: {
      en: "FAI result",
      ja: "FAI 計測結果",
    },
  },
  {
    src: incubator,
    caption: {
      en: "Incubator",
      ja: "インキュベーター",
    },
  },
  {
    src: kyoushouten,
    caption: {
      en: "Confocal laser microscope",
      ja: "共振点レーザー顕微鏡",
    },
  },
  {
    src: laser_doppler,
    caption: {
      en: "Laser Doppler",
      ja: "レーザードップラー",
    },
  },
  {
    src: lazor_machines,
    caption: {
      en: "Infrared neural stimulation system",
      ja: "赤外光温熱刺激用装置",
    },
  },
  {
    src: mea,
    caption: {
      en: "Multi electrode array",
      ja: "マルチ電極アレイ",
    },
  },
  {
    src: neuron,
    caption: {
      en: "Neuron",
      ja: "ニューロン",
    },
  },
  {
    src: operation,
    caption: {
      en: "Surgical instruments",
      ja: "手術器具",
    },
  },
  {
    src: pc_desk,
    caption: {
      en: "Electrophysiology recording system",
      ja: "電気生理学記録システム",
    },
  },
  {
    src: safety_cabinet,
    caption: {
      en: "Safety Cabinet",
      ja: "安全キャビネット",
    },
  },
  {
    src: nissl_stain,
    caption: {
      en: "Nissl Staining",
      ja: "ニッスル染色",
    },
  },
  {
    src: slicer,
    caption: {
      en: "Vibratome",
      ja: "ビブラトーム",
    },
  },
  {
    src: soundproof,
    caption: {
      en: "Soundproof room",
      ja: "防音室",
    },
  },
  {
    src: surgery_desk,
    caption: {
      en: "Surgery Desk",
      ja: "手術台",
    },
  },
];
