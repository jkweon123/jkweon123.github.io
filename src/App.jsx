import React from "react";
import { Mail, Download, ArrowDownRight, ExternalLink } from "lucide-react";

const PROFILE = {
  name: "Joshua Kweon",
  role: "Recent Master's Graduate in Computer Science",
  intro:
    "Computer scientist with a focus on cybersecurity, software development, and building practical technical solutions.",
  email: "kweonjosh@gmail.com",
  location: "Boston, MA",
  photo: "picture.jpg",
  aboutPhoto: "about-photo.jpg",
  resumeUrl: "Josh_Kweon_Resume.pdf",
  github: "https://github.com/jkweon123",
  linkedin: "https://linkedin.com/in/joshua-kweon",
};

const EDUCATION = [
  {
    period: "2025 — 2026",
    degree: "M.S. in Computer Science",
    org: "The George Washington University",
    detail: "Focus in Information Security",
  },
  {
    period: "2020 — 2024",
    degree: "B.S. in Computer Science",
    org: "The George Washington University",
  },
];

const EXPERIENCE = [
  {
    period: "Feb. 2025 — Jul. 2026",
    role: "Mathematics Instructor",
    org: "Mathnasium",
    description: [
      "Delivered individualized math instruction to 20–25 K-12 students daily, adapting teaching methods to different skill levels and learning styles.",
      "Diagnosed individual skill gaps using Mathnasium’s curriculum and tailored lesson plans to improve student comprehension and test confidence.",
    ],
  },
  {
    period: "Sep. 2023 — Dec. 2024",
    role: "Learning Assistant",
    org: "The George Washington University",
    description: [
      "Mentored a class of 70+ students by reinforcing concepts and resolving questions regarding introductory data structures, discrete mathematics, and number theory while leading in-class activities and weekly office hours to ensure progress with student's understanding.",
      "Structured and updated the course website weekly, adding the most recent course lecture notes, slides, code examples, and homework to ensure student access.",
    ],
  },
  {
    period: "May. 2024 — Aug. 2024",
    role: "Robotics Instructor",
    org: "RobotFun Academy",
    description: [
      "Taught Lego and Vex Robotics to 10 1st to 8th grade students, including both the process of physical construction and coding to create three projects daily.",
      "Instructed new-time coders with two programming languages (Scratch, Python) and created coding exercises to demonstrate the link between coding and creating a functional robot.",
    ],
  },
  {
    period: "May. 2023 — Aug. 2023",
    role: "Research Assistant",
    org: "The George Washington University",
    description: [
      "Built an asynchronous HCI course website consisting of 14 interactive learning modules each with JavaScript/HTML tutorials, voice-recorded guides, and programming exercises tailored to front-end development.",
      "Led weekly stakeholder meetings to ensure that the website met the course standards and requirements ahead of each module release.",
      "Converted Java course assignments into Python and enhanced the functionality of a graph plotting software called Plottool used specifically for undergraduate data visualization projects.",
    ],
  },
  {
    period: "Jul. 2023 — Aug. 2023",
    role: "AI/ML Intern",
    org: "DAIM Research",
    description: [
      "Engineered a path-finding algorithm for autonomous manufacturing robotics used in industrial smart factories.",
      "Translated the company's website from Korean to English and compiled a research database of AI companies to support business development efforts.",
    ],
  },
];

const PROJECTS = [
  {
    year: "2025",
    title: "Raytheon Drone Competition",
    description:
      "",
    tags: ["MAVLink", "Gazebo", "OpenCV"],
  },
  {
    year: "2023",
    title: "University Course Registration System",
    description:
      "",
    tags: ["Flask", "AWS", "SQL"],
  },
  {
    year: "2022",
    title: "GWack Slack Simulator",
    description:
      "",
    tags: ["Design system", "Next.js"],
  },
];

/*
 * PAPER IMAGES
 *
 */
const PAPERS = [
  {
    number: "01",
    category: "Cybersecurity & Data Privacy",
    title: "Sources Close to the Matter: Assessing Cybersecurity Practices Among Working Journalists",
    description:
      "",
    image: "cybersecurity-paper.png",
    link: "usable-security-paper.pdf",
  },
  {
    number: "02",
    category: "Machine Learning",
    title: "Contextual Blind Spots: A Systematic Review of Situational Context in Emotion Recognition Datasets",
    description:
      "",
    image: "machine-learning-paper.png",
    link: "machine-learning-paper.pdf",
  },
  {
    number: "03",
    category: "Computer Architecture",
    title: "How Chiplet Architecture is Taking Over the Monolithic SoC",
    description: 
      "",
    image: "computer-architecture.png",
    link: "chiplet_Paper.pdf",
  },
];

const SKILLS = [
  "Java",
  "Python",
  "React & JavaScript",
  "SQL",
  "Linux",
  "Flask",
  "Git",
  "AWS",
];

function initials(name) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

// GitHub icon
function GithubIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.85 10.91.57.1.78-.25.78-.55v-2.13c-3.19.69-3.86-1.35-3.86-1.35-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.67.41.36.78 1.08.78 2.18v3.23c0 .3.2.66.79.55A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

// LinkedIn icon
function LinkedinIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774.792 0 1.771 0z" />
    </svg>
  );
}

export default function Portfolio() {
  return (
    <div style={styles.page}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap');

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        html,
        body {
          margin: 0;
          padding: 0;
        }

        body {
          background: #15181A;
        }

        .experienceBullets li {
          margin-bottom: 8px;
        }

        .experienceBullets li:last-child {
          margin-bottom: 0;
        }

        .link {
          color: inherit;
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: border-color 0.15s ease;
        }

        .link:hover,
        .link:focus-visible {
          border-color: currentColor;
        }

        .link:focus-visible {
          outline: 2px solid #8FC1FF;
          outline-offset: 3px;
        }

        .iconLink {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border-radius: 999px;
          border: 1px solid #2B2F2B;
          color: #EDEEE9;
          transition:
            border-color 0.15s ease,
            color 0.15s ease,
            background-color 0.15s ease,
            transform 0.15s ease;
        }

        .iconLink:hover,
        .iconLink:focus-visible {
          border-color: #8FC1FF;
          color: #8FC1FF;
          background-color: rgba(143, 193, 255, 0.08);
          transform: translateY(-2px);
        }

        .iconLink:focus-visible {
          outline: 2px solid #8FC1FF;
          outline-offset: 3px;
        }

        .cvButton {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 11px 20px;
          border-radius: 999px;
          border: 1px solid #8FC1FF;
          color: #8FC1FF;
          text-decoration: none;
          font-size: 15px;
          font-weight: 500;
          transition:
            background-color 0.15s ease,
            color 0.15s ease,
            transform 0.15s ease;
        }

        .cvButton:hover,
        .cvButton:focus-visible {
          background-color: #8FC1FF;
          color: #15181A;
          transform: translateY(-2px);
        }

        .cvButton:focus-visible {
          outline: 2px solid #8FC1FF;
          outline-offset: 3px;
        }

        .rowLink {
          transition: background-color 0.15s ease;
        }

        .rowLink:focus-within,
        .rowLink:hover {
          background-color: rgba(143, 193, 255, 0.08);
        }

        .heroScroll {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 42px;
          color: #8B9289;
          font-size: 13px;
          text-decoration: none;
          transition: color 0.15s ease;
        }

        .heroScroll:hover {
          color: #8FC1FF;
        }

        .heroPhoto {
          transition:
            transform 0.35s ease,
            border-color 0.35s ease;
        }

        .heroPhoto:hover {
          transform: translateY(-4px);
          border-color: #8FC1FF !important;
        }

        .aboutPhoto {
          position: relative;
          width: 100%;
          aspect-ratio: 3 / 4;
          border-radius: 4px;
          border: 1px solid #2B2F2B;
          background: rgba(143, 193, 255, 0.04);
          overflow: hidden;
        }

        .aboutPhoto img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .aboutPhotoPlaceholder {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          letter-spacing: 0.06em;
          color: #8B9289;
          text-align: center;
          padding: 16px;
        }

        .educationList {
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .educationItem {
          padding: 16px 0;
          border-top: 1px solid #2B2F2B;
        }

        .educationItem:first-child {
          border-top: none;
          padding-top: 0;
        }

        /* Paper cards */

        .papersGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
        }

        .paperCard {
          display: flex;
          flex-direction: column;
          min-width: 0;
          border: 1px solid #2B2F2B;
          background: rgba(255, 255, 255, 0.015);
          transition:
            border-color 0.2s ease,
            transform 0.2s ease,
            background-color 0.2s ease;
        }

        .paperCard:hover {
          border-color: #8FC1FF;
          transform: translateY(-5px);
          background-color: rgba(143, 193, 255, 0.04);
        }

        .paperPreview {
          position: relative;
          width: 100%;
          aspect-ratio: 8.5 / 11;
          overflow: hidden;
          background: #202426;
          border-bottom: 1px solid #2B2F2B;
        }

        .paperPreview img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          display: block;
          transition: transform 0.35s ease;
        }

        .paperCard:hover .paperPreview img {
          transform: scale(1.025);
        }

        .paperOverlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
          padding: 16px;
          background: linear-gradient(
            to top,
            rgba(21, 24, 26, 0.55),
            transparent 35%
          );
          pointer-events: none;
        }

        .paperNumber {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          letter-spacing: 0.12em;
          color: #EDEEE9;
          background: rgba(21, 24, 26, 0.8);
          padding: 7px 9px;
        }

        .paperContent {
          display: flex;
          flex-direction: column;
          flex: 1;
          padding: 24px;
        }

        .paperCategory {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #8FC1FF;
          margin-bottom: 12px;
        }

        .paperTitle {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 22px;
          line-height: 1.2;
          font-weight: 500;
          margin: 0 0 12px;
        }

        .paperDescription {
          color: #8B9289;
          font-size: 14px;
          line-height: 1.65;
          margin: 0 0 24px;
          flex: 1;
        }

        .paperLink {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          width: fit-content;
          color: #EDEEE9;
          font-size: 13px;
          text-decoration: none;
          border-bottom: 1px solid #2B2F2B;
          padding-bottom: 4px;
          transition:
            color 0.15s ease,
            border-color 0.15s ease;
        }

        .paperLink:hover {
          color: #8FC1FF;
          border-color: #8FC1FF;
        }

        @media (max-width: 900px) {
          .heroGrid {
            grid-template-columns: 1fr !important;
            gap: 56px !important;
          }

          .heroLeft {
            max-width: 720px !important;
          }

          .heroStatement {
            max-width: 650px !important;
          }

          .papersGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .aboutGrid {
            grid-template-columns: 280px 1fr !important;
          }

          .aboutEducation {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 720px) {
          .header {
            padding-top: 22px !important;
            padding-bottom: 22px !important;
          }

          .headerNav {
            gap: 12px !important;
          }

          .headerLink {
            font-size: 13px !important;
          }

          .hero {
            padding-top: 48px !important;
            padding-bottom: 72px !important;
          }

          .heroLeft {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 28px !important;
          }

          .heroPhoto {
            width: 150px !important;
            height: 150px !important;
          }

          .heroName {
            font-size: clamp(48px, 15vw, 70px) !important;
          }

          .heroStatement {
            padding-left: 0 !important;
            border-left: none !important;
            border-top: 1px solid #2B2F2B;
            padding-top: 28px !important;
          }

          .heroActions {
            align-items: flex-start !important;
          }

          .rowMeta {
            grid-template-columns: 1fr !important;
            gap: 10px !important;
          }

          .rowTags {
            display: none !important;
          }

          .aboutGrid {
            grid-template-columns: 1fr !important;
          }

          .aboutPhoto {
            max-width: 260px;
          }

          .skillsList {
            grid-template-columns: 1fr !important;
          }

          .papersGrid {
            grid-template-columns: 1fr;
          }

          .papersHeader {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
          }

          .papersIntro {
            margin-bottom: 28px !important;
          }

          .footerEmail {
            font-size: 28px !important;
            word-break: break-word;
          }
        }

        @media (max-width: 500px) {
          .header {
            align-items: flex-start !important;
            gap: 18px;
            flex-direction: column !important;
          }

          .headerNav {
            width: 100%;
            justify-content: space-between;
          }

          .heroName {
            max-width: 100% !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }

          * {
            transition: none !important;
          }
        }
      `}</style>

      {/* Header */}
      <header style={styles.header} className="header">
        <span style={styles.headerName}>{PROFILE.name}</span>

        <nav className="headerNav" style={styles.headerNav}>
          <a
            className="link headerLink"
            href="#about"
            style={styles.headerLink}
          >
            About
          </a>

          <a
            className="link headerLink"
            href="#experience"
            style={styles.headerLink}
          >
            Experience
          </a>

          <a
            className="link headerLink"
            href="#projects"
            style={styles.headerLink}
          >
            Projects
          </a>

          <a
            className="link headerLink"
            href="#papers"
            style={styles.headerLink}
          >
            Papers
          </a>

          <a
            className="link headerLink"
            href="#contact"
            style={styles.headerLink}
          >
            Contact
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section style={styles.hero} className="hero heroGrid">
        <div style={styles.heroLeft} className="heroLeft">
          <div
            style={styles.avatar}
            className="heroPhoto"
            aria-label={`${PROFILE.name} profile photo`}
          >
            {PROFILE.photo ? (
              <img
                src={PROFILE.photo}
                alt={PROFILE.name}
                style={styles.avatarImg}
              />
            ) : (
              <span style={styles.avatarInitials}>
                {initials(PROFILE.name)}
              </span>
            )}
          </div>

          <div style={styles.heroIdentity}>
            <div style={styles.heroEyebrow}>COMPUTER SCIENCE</div>

            <h1 style={styles.heroName}>
              Joshua
              <br />
              Kweon
            </h1>
          </div>
        </div>

        <div className="heroStatement" style={styles.heroStatement}>
          <div style={styles.heroNumber}>01</div>

          <p style={styles.heroRole}>{PROFILE.role}</p>

          <p style={styles.heroIntro}>{PROFILE.intro}</p>

          <div style={styles.heroActions}>
            <a
              className="cvButton"
              href={PROFILE.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <Download size={16} />
              Download CV
            </a>

            <div style={styles.iconRow}>
              <a
                className="iconLink"
                href={`mailto:${PROFILE.email}`}
                aria-label="Email"
              >
                <Mail size={18} />
              </a>

              <a
                className="iconLink"
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </a>

              <a
                className="iconLink"
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
            </div>
          </div>

          <a className="heroScroll" href="#about">
            Explore my work
            <ArrowDownRight size={15} />
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" style={styles.aboutSection}>
        <h2 style={styles.sectionTitle}>About</h2>

        <div className="aboutGrid" style={styles.aboutGrid}>
          <div className="aboutPhoto">
            {PROFILE.aboutPhoto ? (
              <img src={PROFILE.aboutPhoto} alt={PROFILE.name} />
            ) : (
              <div className="aboutPhotoPlaceholder">
                Add a vertical photo
                <br />
                (3:4 ratio recommended)
              </div>
            )}
          </div>

          <div style={styles.aboutBody}>
            <p style={styles.aboutText}>
              Hello! I am a recent graduate from George Washington University with both a B.S and M.S in Computer Science. Currently, I am interested in the intersection between AI and Network Security and how the automation of threat detection can become more seamless and efficient. 
            </p>

            <p style={styles.aboutText}>
              Outside of technical work, I have spent my past three years in a teaching and mentoring setting (Mathematics Instructor, Robotics Instructor, and Learning Assistant) which has taught me how to explain a wide range of concepts in a manner that is easy to understand and has also improved my public speaking. 
            </p>

            <p style={styles.aboutText}>
              In my spare time, I enjoy exploring new lakes and ponds to fish, playing basketball with my friends, and producing music on my laptop. I am always eager to build something new and hopefully collaborate with new people in the process. 
            </p>
          </div>

          <div className="aboutEducation" style={styles.aboutEducation}>
            <div style={styles.aboutColumnLabel}>Education</div>

            <ul className="educationList">
              {EDUCATION.map((item) => (
                <li
                  key={item.degree + item.period}
                  className="educationItem"
                >
                  <div style={styles.educationPeriod}>{item.period}</div>
                  <h3 style={styles.educationDegree}>{item.degree}</h3>
                  <p style={styles.educationOrg}>{item.org}</p>
                  <p style={styles.educationDetail}>{item.detail}</p>
                </li>
              ))}
            </ul>

            <div style={{ ...styles.aboutColumnLabel, marginTop: 32 }}>Skills</div>

            <ul className="skillsList" style={styles.skillsList}>
              {SKILLS.map((skill) => (
                <li key={skill} style={styles.skillItem}>
                  {skill}
                </li>
              ))}
            </ul>

          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" style={styles.section}>
        <h2 style={styles.sectionTitle}>Experience</h2>

        <div style={styles.rowList}>
          {EXPERIENCE.map((item) => (
            <div
              key={item.role + item.period}
              className="rowLink"
              style={styles.row}
            >
              <div className="rowMeta" style={styles.experienceMeta}>
                <span style={styles.rowYear}>{item.period}</span>

                <div>
                  <h3 style={styles.rowTitle}>{item.role}</h3>

                  <p style={styles.rowSubtitle}>{item.org}</p>

                  <ul style={styles.experienceBullets}>
                    {item.description.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" style={styles.section}>
        <h2 style={styles.sectionTitle}>Projects</h2>

        <div style={styles.rowList}>
          {PROJECTS.map((item) => (
            <a
              key={item.title}
              href="#"
              className="rowLink"
              style={styles.row}
            >
              <div className="rowMeta" style={styles.projectsMeta}>
                <span style={styles.rowYear}>{item.year}</span>

                <div>
                  <h3 style={styles.rowTitle}>{item.title}</h3>

                  <p style={styles.rowDescription}>
                    {item.description}
                  </p>
                </div>

                <div className="rowTags" style={styles.rowTags}>
                  {item.tags.map((t) => (
                    <span key={t} style={styles.rowTag}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Papers */}
      <section id="papers" style={styles.section}>
        <div style={styles.papersHeader}>
          <div>
            <div style={styles.sectionEyebrow}>RESEARCH & WRITING</div>
            <h2 style={styles.sectionTitle}>Papers</h2>
          </div>
        </div>

        <div className="papersGrid">
          {PAPERS.map((paper) => (
            <article key={paper.number} className="paperCard">
              <div className="paperPreview">
                <img
                  src={paper.image}
                  alt={`Preview of ${paper.title}`}
                />

                <div className="paperOverlay">
                  <span className="paperNumber">{paper.number}</span>
                </div>
              </div>

              <div className="paperContent">
                <div className="paperCategory">
                  {paper.category}
                </div>

                <h3 className="paperTitle">{paper.title}</h3>

                <p className="paperDescription">
                  {paper.description}
                </p>

                <a
                  href={paper.link}
                  className="paperLink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read paper
                  <ExternalLink size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Contact / Footer */}
      <footer id="contact" style={styles.footer}>
        <div style={styles.footerGrid}>
          <p style={styles.footerPrompt}>
            Have a project in mind?
          </p>

          <a
            className="link"
            href={`mailto:${PROFILE.email}`}
            style={styles.footerEmail}
          >
            {PROFILE.email}
          </a>
        </div>

        <div style={styles.footerBottom}>
          <span>{PROFILE.location}</span>

          <span>
            © {new Date().getFullYear()} {PROFILE.name}
          </span>
        </div>
      </footer>
    </div>
  );
}

const COLORS = {
  bg: "#15181A",
  ink: "#EDEEE9",
  muted: "#8B9289",
  accent: "#8FC1FF",
  line: "#2B2F2B",
};

const display =
  "'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif";

const sans =
  "'Manrope', -apple-system, BlinkMacSystemFont, sans-serif";

const styles = {
  page: {
    backgroundColor: COLORS.bg,
    color: COLORS.ink,
    fontFamily: sans,
    minHeight: "100vh",
    lineHeight: 1.5,
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "28px clamp(24px, 5vw, 64px)",
    maxWidth: "100%",
    position: "sticky",
    top: 0,
    zIndex: 100,
    backgroundColor: COLORS.bg,
    backdropFilter: "blur(8px)",
  },

  headerName: {
    fontFamily: display,
    fontSize: 18,
    fontWeight: 600,
  },

  headerNav: {
    display: "flex",
    gap: 28,
  },

  headerLink: {
    fontSize: 15,
    color: COLORS.muted,
  },

  hero: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 64,
    alignItems: "center",
    maxWidth: "100%",
    padding: "72px clamp(24px, 5vw, 64px) 88px",
    borderBottom: `1px solid ${COLORS.line}`,
  },

  heroLeft: {
    display: "flex",
    alignItems: "center",
    gap: 36,
    maxWidth: 760,
  },

  avatar: {
    width: 300,
    height: 300,
    flexShrink: 0,
    borderRadius: 28,
    border: `1px solid ${COLORS.line}`,
    backgroundColor: "rgba(143, 193, 255, 0.08)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    boxShadow: "0 24px 60px rgba(0, 0, 0, 0.3)",
  },

  avatarImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  avatarInitials: {
    fontFamily: display,
    fontSize: 48,
    fontWeight: 600,
    color: COLORS.accent,
  },

  heroIdentity: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  heroEyebrow: {
    fontFamily: display,
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: "0.14em",
    color: COLORS.muted,
    marginBottom: 16,
  },

  heroName: {
    fontFamily: display,
    fontWeight: 600,
    fontSize: "clamp(58px, 6vw, 88px)",
    lineHeight: 0.9,
    margin: 0,
    letterSpacing: "-0.045em",
  },

  heroStatement: {
    position: "relative",
    paddingLeft: 32,
    borderLeft: `1px solid ${COLORS.line}`,
    maxWidth: 500,
  },

  heroNumber: {
    fontFamily: display,
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: "0.12em",
    color: COLORS.muted,
    marginBottom: 26,
  },

  heroRole: {
    fontFamily: display,
    fontSize: 20,
    lineHeight: 1.35,
    fontWeight: 500,
    margin: "0 0 16px",
    color: COLORS.accent,
  },

  heroIntro: {
    fontSize: 16,
    lineHeight: 1.7,
    color: COLORS.muted,
    maxWidth: 420,
    margin: "0 0 28px",
  },

  heroActions: {
    display: "flex",
    alignItems: "center",
    gap: 18,
    flexWrap: "wrap",
  },

  iconRow: {
    display: "flex",
    gap: 9,
  },

  section: {
    maxWidth: "100%",
    padding: "72px clamp(24px, 5vw, 64px)",
    borderBottom: `1px solid ${COLORS.line}`,
  },

  sectionTitle: {
    fontFamily: display,
    fontSize: 28,
    fontWeight: 600,
    margin: "0 0 36px",
  },

  sectionEyebrow: {
    fontFamily: display,
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: "0.14em",
    color: COLORS.muted,
    marginBottom: 12,
  },

  rowList: {
    display: "flex",
    flexDirection: "column",
  },

  row: {
    display: "block",
    textDecoration: "none",
    color: "inherit",
    padding: "26px 24px",
    marginLeft: -24,
    marginRight: -24,
    borderTop: `1px solid ${COLORS.line}`,
  },

  experienceMeta: {
    display: "grid",
    gridTemplateColumns: "180px minmax(0, 650px)",
    gap: 48,
    alignItems: "start",
  },

  projectsMeta: {
    display: "grid",
    gridTemplateColumns: "64px 1fr 200px",
    gap: 20,
    alignItems: "start",
  },

  rowYear: {
    fontFamily: display,
    fontSize: 15,
    color: COLORS.muted,
    paddingTop: 4,
  },

  rowTitle: {
    fontFamily: display,
    fontSize: 22,
    fontWeight: 500,
    margin: "0 0 4px",
  },

  rowSubtitle: {
    fontSize: 14,
    color: COLORS.accent,
    margin: "0 0 8px",
  },

  rowDescription: {
    fontSize: 15,
    lineHeight: 1.6,
    color: COLORS.muted,
    margin: 0,
    maxWidth: 520,
  },

  experienceBullets: {
    margin: "10px 0 0",
    paddingLeft: 20,
    color: COLORS.muted,
    fontSize: 15,
    lineHeight: 1.6,
  },

  rowTags: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
    paddingTop: 4,
    alignItems: "flex-end",
    textAlign: "right",
  },

  rowTag: {
    fontSize: 13,
    color: COLORS.accent,
  },

  papersHeader: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 64,
    alignItems: "end",
    marginBottom: 36,
  },

  papersIntro: {
    color: COLORS.muted,
    fontSize: 15,
    lineHeight: 1.7,
    maxWidth: 500,
    margin: "0 0 36px",
  },

  aboutSection: {
    maxWidth: "100%",
    padding: "72px clamp(24px, 5vw, 64px)",
    borderBottom: `1px solid ${COLORS.line}`,
  },

  aboutGrid: {
    display: "grid",
    gridTemplateColumns: "340px 1fr 1fr",
    gap: 48,
  },

  aboutBody: {
    maxWidth: 560,
    paddingLeft: 24,
  },

  aboutText: {
    fontSize: 16,
    lineHeight: 1.7,
    color: COLORS.muted,
    margin: "0 0 18px",
  },

  skillsList: {
    listStyle: "none",
    padding: 0,
    margin: "28px 0 0",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "10px 24px",
  },

  skillsListVertical: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },

  skillItem: {
    fontSize: 15,
    paddingLeft: 16,
    position: "relative",
    borderLeft: `2px solid ${COLORS.accent}`,
  },

  aboutEducation: {
    maxWidth: 400,
  },

  aboutColumnLabel: {
    fontFamily: display,
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: "0.12em",
    color: COLORS.muted,
    marginBottom: 18,
  },

  educationPeriod: {
    fontFamily: display,
    fontSize: 14,
    color: COLORS.muted,
    marginBottom: 6,
  },

  educationDegree: {
    fontFamily: display,
    fontSize: 17,
    fontWeight: 500,
    margin: "0 0 4px",
  },

  educationOrg: {
    fontSize: 14,
    color: COLORS.accent,
    margin: "0 0 6px",
  },

  educationDetail: {
    fontSize: 14,
    lineHeight: 1.6,
    color: COLORS.muted,
    margin: 0,
  },

  footer: {
    maxWidth: "100%",
    padding: "72px clamp(24px, 5vw, 64px) 48px",
  },

  footerGrid: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
    marginBottom: 48,
  },

  footerPrompt: {
    fontSize: 16,
    color: COLORS.muted,
    margin: 0,
  },

  footerEmail: {
    fontFamily: display,
    fontSize: 40,
    fontWeight: 600,
  },

  footerBottom: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: 13,
    color: COLORS.muted,
    borderTop: `1px solid ${COLORS.line}`,
    paddingTop: 20,
  },
};