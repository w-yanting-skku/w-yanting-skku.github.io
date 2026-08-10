const papers = [
  {
    id: "robot-multi-party-awareness",
    category: "working",
    status: "Job Market Paper",
    year: "In revision",
    featured: true,
    thumbnail: "assets/papers/robot-multi-party-awareness.png",
    keywords: ["Multi-party HRI", "Service adaptability", "Revisit intention"],
    title: "Robot Multi-Party Awareness in Complex Frontline Service Environments: Effects on Service Adaptability and Customer Revisit Intentions",
    authors: "Yanting Wang, Sangseok You, and Soowon Kim",
    venue: "Target journal: Journal of Retailing and Consumer Services",
    summary: "Examines how multiple service robots can manage multiple customers simultaneously—and how multi-party awareness shapes service adaptability and customers’ intentions to return.",
    overview: "Frontline service is rarely one person interacting with one robot. This project studies multi-robot, multi-customer environments and asks how a robot’s awareness of the wider social scene can improve adaptive service and customer experience.",
    focus: "Multi-party awareness, service adaptability, multi-robot coordination, and customer revisit intentions.",
    method: "Lab experiment, focus group interviews, and online open-ended questions.",
    contribution: "Extends HRI beyond dyadic interaction by connecting robot awareness of multiple parties to service outcomes in complex frontline settings."
  },
  {
    id: "enhancing-robot-explainability",
    category: "published",
    status: "Published",
    year: "2023",
    thumbnail: "assets/papers/enhancing-robot-explainability.png",
    keywords: ["Robot explainability", "Social cues", "Collaboration"],
    title: "Enhancing Robot Explainability in Human–Robot Collaboration",
    authors: "Yanting Wang and Sangseok You",
    venue: "International Conference on Human-Computer Interaction · Springer Nature Switzerland · pp. 236–247",
    summary: "Connects explainable AI with embodied collaboration by examining how robot behavior and social cues can make robot actions easier for people to understand.",
    overview: "Explainability in HRI is not only a matter of presenting technical reasons. In embodied collaboration, the robot’s social behavior can shape whether its actions feel understandable, predictable, and appropriate to a human partner.",
    focus: "Robot explainability, social cues, and collaborative human–robot interaction.",
    method: "Conference research focused on explainability in embodied human–robot collaboration.",
    contribution: "Frames social cues as an important design resource for making a robot’s behavior more legible during collaboration."
  },
  {
    id: "embodied-robots-framework",
    category: "published",
    status: "Published",
    year: "2025",
    thumbnail: "assets/papers/embodied-robots-framework.png",
    keywords: ["Embodied robots", "Design science", "Real-world deployment"],
    title: "Designing Embodied Robots for Real-World Applications: A Contextual and Goal-Driven Framework Grounded in IS Design Science",
    authors: "Yanting Wang and Sangseok You",
    venue: "Korea Society of Management Information Systems Conference · pp. 400–405",
    summary: "Proposes a contextual, goal-driven design framework for aligning embodied robot decisions with users, organizational goals, and deployment settings.",
    overview: "A robot that works in the lab may not fit the social, organizational, and physical realities of deployment. This work uses an information-systems design science lens to connect embodiment choices to context and goals.",
    focus: "Embodied robot design, deployment context, organizational goals, and real-world application.",
    method: "Contextual and goal-driven framework development grounded in IS design science.",
    contribution: "Offers a structured way to reason from real-world context and stakeholder goals toward appropriate embodied robot design choices."
  },
  {
    id: "trust-pathways-hybrid-teams",
    category: "under-review",
    status: "Under review",
    year: "Applied AI",
    thumbnail: "assets/papers/trust-pathways-hybrid-teams.png",
    keywords: ["Robot trust", "Human identification", "Hybrid teams"],
    title: "Building Trust in Robots, Identifying with Humans: Distinct Trust Pathways in Hybrid",
    authors: "Sangseok You, Yanting Wang, and Lionel P. Robert Jr.",
    venue: "Under review at Applied Artificial Intelligence",
    summary: "Investigates how trust in robot teammates and identification with human teammates can follow distinct pathways inside hybrid human–robot teams.",
    overview: "Hybrid teams contain different kinds of partners. This manuscript distinguishes the pathway through which people come to trust robotic teammates from the pathway through which they identify with human teammates.",
    focus: "Trust in robots, human identification, and hybrid human–robot teams.",
    method: "Manuscript under peer review; methodological details are not publicly summarized in the CV.",
    contribution: "Clarifies that effective hybrid teamwork may depend on different relational mechanisms for robot and human teammates."
  },
  {
    id: "online-news-under-stress",
    category: "under-review",
    status: "Under review",
    year: "APJIS",
    thumbnail: "assets/papers/online-news-under-stress.svg",
    keywords: ["News believability", "Stress", "Digital behavior"],
    title: "Online News Appraisal Under Stress: How Internal and External Resources Shape News Believability and Behavior",
    authors: "Yanting Wang, Sangseok You, and Daphne Chang",
    venue: "Under review at Asia Pacific Journal of Information Systems",
    summary: "Examines how stress changes online news appraisal and how people’s internal and external resources shape believability judgments and behavior.",
    overview: "When people encounter online news under stress, their ability to assess believability may depend on both personal resources and support in the surrounding information environment.",
    focus: "Online news appraisal, stress, perceived believability, and digital behavior.",
    method: "Manuscript under peer review; methodological details are not publicly summarized in the CV.",
    contribution: "Connects stress and coping resources to the way people judge and act on online information."
  },
  {
    id: "social-cues-explainability",
    category: "working",
    status: "Working paper",
    year: "In development",
    thumbnail: "assets/papers/perceived-robot-explainability.png",
    keywords: ["Perceived robot explainability", "Human–robot teams", "Social cues"],
    title: "Perceived robot explainability in human-robot team",
    authors: "Yanting Wang and Sangseok You",
    venue: "Target journal: MIS Quarterly",
    summary: "Tests how social cues influence perceived robot explainability across different collaborative task types.",
    overview: "The usefulness of a robot’s social cues may depend on what people and robots are trying to accomplish together. This project compares collaborative task types to understand when social behavior makes a robot feel more explainable.",
    focus: "Social cues, perceived explainability, and collaborative task type.",
    method: "Wizard-of-Oz online experiment.",
    contribution: "Develops a task-sensitive account of how social cues can support explainability in human–robot collaboration."
  },
  {
    id: "trust-repair-service-failure",
    category: "working",
    status: "Working paper",
    year: "In development",
    thumbnail: "assets/papers/trust-repair-service-failure.png",
    keywords: ["Trust repair", "Service failure", "Behavioral intention"],
    title: "Trust Repair in Human–Robot Interaction After Service Failure",
    authors: "Yanting Wang, Sangseok You, Younghoon Chang, Jaehyun Park, Sunghan Ryu, and Seoyoun Lee",
    venue: "Target journal: Information Systems Research",
    summary: "Investigates which recovery strategies help service robots rebuild trust after failure, and how robot responses shape perception and behavioral intention.",
    overview: "Service robots will fail. The consequential design question is what happens next: which responses feel accountable and effective, and which strategies help users become willing to rely on the robot again.",
    focus: "Service failure, trust recovery strategies, user perception, and behavioral intention.",
    method: "Lab experiment and online experiment.",
    contribution: "Identifies response strategies that can repair trust after robot service failure and links them to downstream user behavior."
  },
  {
    id: "vr-mr-spatial-learning",
    category: "working",
    status: "Working paper",
    year: "In development",
    thumbnail: "assets/papers/vr-mr-spatial-learning.jpg",
    keywords: ["VR / MR", "Spatial learning", "Affordances"],
    title: "Comparing VR and MR for Spatial Learning",
    authors: "Mincheol Shin, Yanting Wang, Jaeeun Lim, and Sangseok You",
    venue: "Manuscript under development",
    summary: "Compares how Virtual Reality and Mixed Reality support spatial learning through their distinct structural affordances.",
    overview: "VR and MR provide different relationships between digital information, the learner, and physical space. This project examines how those structural differences influence spatial learning.",
    focus: "Virtual Reality, Mixed Reality, structural affordances, and spatial learning.",
    method: "Lab experiment.",
    contribution: "Explains how the affordances of immersive media can lead to different spatial learning outcomes."
  }
];

const categoryLabels = { published: "Published", "under-review": "Under review", working: "Working paper" };
const panels = [...document.querySelectorAll("[data-panel]")];
const tabs = [...document.querySelectorAll("[role='tab'][data-tab-target]")];
const tabTriggers = [...document.querySelectorAll("[data-tab-target]")];
const paperDialog = document.getElementById("paper-dialog");
const homePaperGrid = document.getElementById("home-paper-grid");
const publicationLists = document.getElementById("publication-lists");
let currentFilter = "all";
let syncingDialog = false;

function paperCard(paper) {
  return `<article class="paper-card${paper.featured ? " is-featured" : ""}" data-category="${paper.category}">
    <div class="paper-card-top"><span class="paper-status">${paper.status}</span><span class="paper-year">${paper.year}</span></div>
    <div class="paper-card-content">
      <div class="paper-thumbnail" data-thumbnail-for="${paper.id}">
        ${paper.thumbnail ? `<img src="${paper.thumbnail}" alt="Visual for ${paper.title}">` : `<div class="paper-thumbnail-placeholder"><span aria-hidden="true">+</span><small>Thumbnail reserved</small></div>`}
      </div>
      <div class="paper-card-copy">
        <h3>${paper.title}</h3><p class="paper-authors">${paper.authors}</p><p class="paper-summary">${paper.summary}</p>
        <div class="paper-keywords" aria-label="Keywords">${paper.keywords.map((keyword) => `<span>${keyword}</span>`).join("")}</div>
      </div>
    </div>
    <button class="paper-card__link" type="button" data-paper="${paper.id}" aria-label="Read details for ${paper.title}">More <span aria-hidden="true">→</span></button>
  </article>`;
}

function renderHomePapers() {
  const visiblePapers = currentFilter === "all" ? papers : papers.filter((paper) => paper.category === currentFilter);
  homePaperGrid.innerHTML = visiblePapers.map(paperCard).join("");
}

function renderPublicationLists() {
  const groups = [["Peer-reviewed publications", "published"], ["Papers under review", "under-review"], ["Working papers", "working"]];
  publicationLists.innerHTML = groups.map(([label, category]) => {
    const groupPapers = papers.filter((paper) => paper.category === category);
    return `<section class="publication-group" aria-labelledby="group-${category}">
      <h3 id="group-${category}">${label}</h3><div class="publication-group-list">
      ${groupPapers.map((paper, index) => `<button class="publication-row" type="button" data-paper="${paper.id}">
        <span class="publication-row-index">${String(index + 1).padStart(2, "0")}</span>
        <span class="publication-row-thumbnail" data-thumbnail-for="${paper.id}">
          ${paper.thumbnail ? `<img src="${paper.thumbnail}" alt="Visual for ${paper.title}">` : `<span class="publication-row-placeholder">Thumbnail reserved</span>`}
        </span>
        <span><span class="publication-row-title">${paper.title}</span><span class="publication-row-meta">${paper.authors} · ${paper.venue}</span></span>
        <span class="publication-row-arrow" aria-hidden="true">→</span></button>`).join("")}
      </div></section>`;
  }).join("");
}

function activateTab(tabName, updateHash = true) {
  const requestedTab = tabName === "publications" ? "research" : tabName;
  const validTab = panels.some((panel) => panel.dataset.panel === requestedTab) ? requestedTab : "home";
  panels.forEach((panel) => { const active = panel.dataset.panel === validTab; panel.hidden = !active; panel.classList.toggle("is-active", active); });
  tabs.forEach((tab) => { const active = tab.dataset.tabTarget === validTab; tab.classList.toggle("is-active", active); tab.setAttribute("aria-selected", String(active)); tab.tabIndex = active ? 0 : -1; });
  if (updateHash) history.pushState(null, "", `#tab=${validTab}`);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function fillDialog(paper) {
  document.getElementById("dialog-title").textContent = paper.title;
  document.getElementById("dialog-authors").textContent = paper.authors;
  document.getElementById("dialog-venue").textContent = paper.venue;
  document.getElementById("dialog-overview").textContent = paper.overview;
  document.getElementById("dialog-focus").textContent = paper.focus;
  document.getElementById("dialog-method").textContent = paper.method;
  document.getElementById("dialog-contribution").textContent = paper.contribution;
  document.getElementById("dialog-badges").innerHTML = `<span>${categoryLabels[paper.category]}</span><span>${paper.year}</span>`;
}

function openPaper(paperId, updateHash = true) {
  const paper = papers.find((item) => item.id === paperId);
  if (!paper) return;
  fillDialog(paper);
  syncingDialog = true;
  if (!paperDialog.open) paperDialog.showModal();
  syncingDialog = false;
  if (updateHash) history.pushState(null, "", `#paper=${paper.id}`);
  document.getElementById("dialog-back").focus();
}

function closePaper(updateHash = true) {
  syncingDialog = true;
  if (paperDialog.open) paperDialog.close();
  syncingDialog = false;
  if (updateHash) history.pushState(null, "", "#tab=home");
}

function syncFromHash() {
  const [type, target] = window.location.hash.replace(/^#/, "").split("=");
  if (type === "paper" && target) { openPaper(target, false); return; }
  if (paperDialog.open) closePaper(false);
  activateTab(type === "tab" ? target : "home", false);
}

tabTriggers.forEach((trigger) => trigger.addEventListener("click", () => activateTab(trigger.dataset.tabTarget)));
document.addEventListener("click", (event) => { const paperButton = event.target.closest("[data-paper]"); if (paperButton) openPaper(paperButton.dataset.paper); });
document.querySelectorAll("[data-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    currentFilter = button.dataset.filter;
    document.querySelectorAll("[data-filter]").forEach((chip) => { const active = chip === button; chip.classList.toggle("is-active", active); chip.setAttribute("aria-pressed", String(active)); });
    renderHomePapers();
  });
});
tabs.forEach((tab, index) => {
  tab.addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    let nextIndex = index;
    if (event.key === "ArrowLeft") nextIndex = (index - 1 + tabs.length) % tabs.length;
    if (event.key === "ArrowRight") nextIndex = (index + 1) % tabs.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = tabs.length - 1;
    tabs[nextIndex].focus(); activateTab(tabs[nextIndex].dataset.tabTarget);
  });
});
document.getElementById("dialog-back").addEventListener("click", () => closePaper());
document.getElementById("dialog-close").addEventListener("click", () => closePaper());
paperDialog.addEventListener("close", () => { if (!syncingDialog && window.location.hash.startsWith("#paper=")) history.pushState(null, "", "#tab=home"); });
window.addEventListener("hashchange", syncFromHash);

renderHomePapers();
renderPublicationLists();
document.getElementById("current-year").textContent = new Date().getFullYear();
syncFromHash();
