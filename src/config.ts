export const siteConfig = {
  name: "Axel Bendl",
  title: "Electrial Engineering Student",
  description: "Portfolio website of Axel Bendl",
  accentColor: "#ff6e00",
  social: {
    email: "axelbendl@gmail.com",
    linkedin: "https://linkedin.com/in/axelbendl",
    youtube: "https://www.youtube.com/@axelbendl",
    github: "https://github.com/axelbendl",
  },
  aboutMe:
    "Hey there! I'm currently in my second year of engineering still trying to find out what I want to do in the future--though I do think telecommunications and RF is super cool.",
  skills: ["Altium Designer", "System Verilog", "Solidworks", "Fusion360", "Quartus", "Questa", "Python", "RV32 Assembly", "C++", "C"],
  projects: [
        {
      name: "Tic-Tac-Two PCB Business Card | Dec'25",
      description:
        "...",
      link: "https://github.com/axelbendl/Tic-Tac-Two-PCB-Business-Card.git",
      skills: ["Hobbyist", "Altium Designer", "Soldering"],
    },
    {
      name: "RISC-V 32b Single Cycle CPU | Dec'25",
      description:
        "Programmed and compiled a simple 32 bit single cycle RISC-V CPU on a DE10-Lite FPGA.",
      link: "https://github.com/axelbendl/RISC-V-32b-Single-Cycle-CPU.git",
      skills: ["System Verilog", "Assembly", "FPGA", "RV32"],
    },
    {
      name: "Tron Light-Cycle Game | Nov'25",
      description:
        "Programmed the classic Tron game using FPGA VGA to display game state, using input interrupts to update states.",
      link: "https://github.com/axelbendl/Tron-Light-Cycle-Game.git",
      skills: ["C", "Assembly", "Interrupts", "FPGA"],
    },
    {
      name: "Face-Tracking Kitchen Sentry | Sep'25",
      description:
        "Created a face tracking sentry to shine lazers in roommates' eyes if they left the kitchen lights on.",
      link: "https://github.com/axelbendl/Face-Tracking-Kitchen-Sentry.git",
      skills: ["Hobbyist", "OpenCV", "Facial Detection", "ESP-NOW", "C++", "Python"],
    },
    {
      name: "Backyard Weather Station | Jul'25",
      description:
        "Constructed a IoT weather station to log weather metrics onto a simple ThingSpeak webserver.",
      link: "https://github.com/axelbendl/Backyard-Weather-Station.git",
      skills: ["Hobbyist", "IoT Data Collection", "ESP-32", "3D Printing", "C++", "Soldering"],
    },
    {
      name: "Solar Scooter | Apr'25",
      description:
        "Programmed and designed and FSM for remote control circuitry to a solarpower-based electric scooter.",
      link: "https://github.com/axelbendl/Solar-Scooter.git",
      skills: ["Group Prototyping", "Remote Control", "Arduino", "C++", "Soldering"],
    },
    {
      name: "Fawadinator 3000 | Mar'25",
      description:
        "Modelled a fictional armoured tank in Solidworks over a 24 hour time period.",
      link: "https://github.com/axelbendl/Fawadinator-3000.git",
      skills: ["Group Hackathon", "Solidworks", "Fictional CAD Modelling"],
    },
    {
      name: "Acid Mine Drainage Treatment | Dec'24",
      description:
        "Developed a treatment system to target heavy metals in abandoned mine effluent to protect aquatic ecosystems.",
      link: "https://github.com/axelbendl/Acid-Mine-Drainage-Treatment.git",
      skills: ["Group Report Writing", "Risk Analysis", "Lifecycle Analysis"],
    },
    {
      name: "V-Tail RC Glider Plane | Aug'24",
      description:
        "3D printed and assembled control systems/power delivery circuitry for a 1.37m remote control glider plane.",
      link: "https://github.com/axelbendl/V-Tail-RC-Glider-Plane.git",
      skills: ["Hobbyist", "Remote Control", "3D Printing"],
    },
  ],
  experience: [
    {
      company: "OK Motorsports | FSAE Design Team",
      title: "GLV Subteam Member",
      dateRange: "Sep 2024 - Apr 2025",
      bullets: [
        "Led development of microservices architecture serving 1M+ users",
        "Reduced API response times by 40% through optimization",
        "Mentored team of 5 junior developers",
      ],
    },
    {
      company: "Absolute Physics | Extracurricular",
      title: "Co-Founder and President",
      dateRange: "Aug 2022 - May 2024",
      bullets: [
        "Built and launched MVP product from scratch using React and Node.js",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Collaborated with product team to define technical requirements",
      ],
    },
    {
      company: "Bangkit Bersama | Extracurricular",
      title: "Co-Founder",
      dateRange: "Aug 2021 - May 2024",
      bullets: [
        "Led development of microservices architecture serving 1M+ users",
        "Reduced API response times by 40% through optimization",
        "Mentored team of 5 junior developers",
      ],
    },
  ],
  education: [
    {
      school: "University of British Columbia",
      degree: "Bachelor of Applied Science, Electrical Engineering",
      dateRange: "Expected May 2029",
      achievements: [
        "Dean's List",
      ],
    },
    {
      school: "British School Jakarta",
      degree: "International Baccalaureate, Diploma Programme",
      dateRange: "Aug 2022 - May 2024",
      achievements: [
        "HL: AA Maths, Physics, Indonesian",
        "SL: LL English, Chemistry, Economics",
      ],
    },
  ],
};
