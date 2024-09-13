import _2020_IEEJ_A from "./highlight04.jpg";
import _2020_IEEJ_B from "./highlight03.jpg";
import _2022_BrainRes from "./highlight02.jpg";
import _2022_FrontNeurosci from "./highlight01.jpg";
import _2024_JNSM from "./JNSM_HighlightWebSite.jpg";
import _2024_eNeuro from "./Cover art.jpg";
import _2024_FiNS from "./FiNS_2024.svg";
import { HighlightContent } from "./types";

export const highlightContents: HighlightContent[] = [
  {
    id: "2024_FiNS",
    src: _2024_FiNS,
    title:
      "Analyzing the transient response dynamics of long-term depression in the mouse auditory cortex in vitro through multielectrode-array-based spatiotemporal recordings",
    citation: "Furukawa et al., Frontiers in Neuroscience, 2024",
    externalLink: "https://doi.org/10.3389/fnins.2024.1448365",
  },
  {
    id: "2024_eNeuro",
    src: _2024_eNeuro,
    title:
      "Modulatory Effects on Laminar Neural Activity Induced by Near-Infrared Light    Stimulation with a Continuous Waveform to the Mouse Inferior Colliculus In Vivo",
    citation: "Sato et al., eNeuro, 2024",
    externalLink: "https://doi.org/10.1523/ENEURO.0521-23.2024",
  },
  {
    id: "2024_JNSM",
    src: _2024_JNSM,
    title:
      "Micro ultrasound transducer combined with recording electrodes for acute brain preparations in vitro",
    citation: "Furukawa et al., Journal of Neuroscience Methods, 2024.",
    externalLink: "https://doi.org/10.1016/j.jneumeth.2023.110048",
  },
  {
    id: "2022_FrontNeurosci",
    src: _2022_FrontNeurosci,
    title: "Simulated distribution patterns of ultrasound stimulation.",
    citation: "Furukawa et al., Frontiers in Neuroscience, 2022.",
    externalLink: "https://doi.org/10.3389/fnins.2022.824142",
  },
  {
    id: "2022_BrainRes",
    src: _2022_BrainRes,
    title: "Finite element modeling of the millimeter-sized coils.",
    citation: "Yoshikawa et al., Brain Research, 2022.",
    externalLink:
      "https://www.sciencedirect.com/science/article/pii/S000689932200316X#f0010",
  },
  {
    id: "2020_IEEJ_B",
    src: _2020_IEEJ_B,
    title: "Acoustic sensor design.",
    citation:
      "Kuwano et al., IEEJ Transactions on Electrical and Electronic Engineering, 2020.",
    externalLink: "https://onlinelibrary.wiley.com/doi/10.1002/tee.23260",
  },
  {
    id: "2020_IEEJ_A",
    src: _2020_IEEJ_A,
    title: "Microcoil device design.",
    citation:
      "Sugai et al., IEEJ Transactions on Electrical and Electronic Engineering, 2020.",
    externalLink: "https://onlinelibrary.wiley.com/doi/10.1002/tee.23237",
  },
];
