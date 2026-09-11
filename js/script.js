/* =========================================================
   DONNEES DU PORTFOLIO
   -> Modifie ces tableaux pour mettre le site à jour.
========================================================= */

const SKILLS = [
  { name: "Python", level: "Intermédiaire", fill: 65 },
  { name: "Java", level: "Intermédiaire", fill: 65 },
  { name: "JavaScript", level: "Intermédiaire", fill: 65 },
];

/* Emplacements prêts pour tes projets : remplace name / description / tags /
   demoUrl / codeUrl pour chaque projet. Ajoute ou supprime des blocs pour
   avoir plus ou moins de trois cartes. Laisse demoUrl ou codeUrl vide ("")
   si le lien n'existe pas encore : le bouton correspondant n'apparaîtra
   simplement pas. */
const PROJECTS = [
  {
    file: "projet_1",
    name: "Gestion et génération de bulletins scolaires",
    description: "Développé dans le cadre de la gestion scolaire d'un établissement, ce projet avait pour objectif d'automatiser la génération des bulletins et la gestion des liens d'accès aux résultats, avec une logique centralisée côté backend et une base de données MySQL. Résultat : une application fonctionnelle, actuellement en ligne et pouvant utilisée en conditions réelles.",
    tags: [["JavaScript", "Backend", "MySQL"]],
    demoUrl: "https://bulletin-inptic.vercel.app/",
    codeUrl: "",
  },
  {
    file: "projet_2",
    name: "LibreService 2.0",
    description: "Marketplace de mise en relation entre clients et prestataires de services à la personne (plombiers, électriciens, coiffeurs, ménage, cours particuliers...) à Libreville. Chaque prestataire doit être validé par un administrateur avant d'apparaître dans l'annuaire, garantissant des profils fiables. Les clients peuvent rechercher par catégorie ou quartier, consulter les avis, contacter directement les prestataires et échanger via une messagerie interne.",
    tags: ["Node.js", "Express", "JWT"],
    demoUrl: "https://libreservice-20-production.up.railway.app",
    codeUrl: "https://github.com/lemymba-hash/-libreservice-2.0-",
  },

];

const FORMATION = [
  { date: "2026", title: "Licence Professionnelle en Génie Informatique — En cours", text: "INPTIC, Libreville (Gabon)" },
  { date: "2025", title: "Diplôme de Technicien Supérieur (DTS) en Génie Informatique", text: "INPTIC, Libreville (Gabon)" },
  { date: "2023", title: "Baccalauréat — Série D", text: "Lycée Georges Mabignath, Libreville (Gabon)" },
  { date: "2020", title: "Brevet d'Études du Premier Cycle (BEPC)", text: "Collège Public de Batavéa, Libreville (Gabon)" },
];

const EXPERIENCES = [
  {
    date: "2025",
    title: "Projet informatique en équipe — SASI Gabon, Libreville",
    text: "Participation à la réalisation d'un projet informatique en équipe, avec une contribution spécifique à une partie du développement. Cette expérience m'a permis de travailler en collaboration avec d'autres étudiants, de mettre en pratique mes connaissances et de mieux comprendre les différentes étapes de réalisation d'un projet informatique.",
  },
];

const CERTIFICATIONS = [
  {
    title: "Introduction à l'IoT — Cisco (2025)",
    text: "Formation certifiante portant sur les fondamentaux de l'Internet des objets (IoT) et la découverte de ses principales applications.",
  },
];

/* =========================================================
   RENDU DYNAMIQUE
========================================================= */

function renderSkills(){
  const list = document.getElementById("skills-list");
  list.innerHTML = SKILLS.map((s, i) => `
    <div class="skill-row" data-fill="${s.fill}">
      <span class="skill-name">${s.name}</span>
      <div class="skill-track">
        <div class="skill-fill" id="skill-fill-${i}"></div>
      </div>
      <span class="skill-pct">${s.level}</span>
    </div>
  `).join("");
}

function renderProjects(){
  const grid = document.getElementById("projects-grid");
  grid.innerHTML = PROJECTS.map(p => `
    <article class="project-card">
      <div class="project-card-bar">
        <span class="dot dot-red"></span>
        <span class="dot dot-yellow"></span>
        <span class="dot dot-green"></span>
        <span class="project-card-name">${p.file}</span>
      </div>
      <div class="project-card-body">
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <div class="project-tags">
          ${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}
        </div>
        <div class="project-links">
          ${p.demoUrl ? `<a href="${p.demoUrl}" target="_blank" rel="noopener">Voir le projet</a>` : ""}
          ${p.codeUrl ? `<a href="${p.codeUrl}" target="_blank" rel="noopener">GitHub</a>` : ""}
        </div>
      </div>
    </article>
  `).join("");
}

function renderTimeline(containerId, items){
  const el = document.getElementById(containerId);
  el.innerHTML = items.map(item => `
    <div class="timeline-item">
      <span class="timeline-date">${item.date}</span>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    </div>
  `).join("");
}

function renderCertifications(){
  const grid = document.getElementById("certif-grid");
  grid.innerHTML = CERTIFICATIONS.map(c => `
    <div class="certif-card">
      <h3>${c.title}</h3>
      <p>${c.text}</p>
    </div>
  `).join("");
}

/* =========================================================
   EFFET DE FRAPPE DANS LE TERMINAL (hero)
========================================================= */

function typeTerminal(){
  const codeEl = document.getElementById("terminal-code");
  const roleEl = document.getElementById("typed-role");
  const lines = [
    "class Developpeur:",
    "    nom = \"MBA-OBAME EZEZENG Lemy-Wannel\"",
    "    domaine = \"Genie Informatique\"",
    "    competences = [\"Python/\", \"Java\", \"JavaScript\"]",
    "",
    "    def objectif(self):",
    "        return \"Apprendre, pratiquer, construire des solutions utiles\"",
  ];
  const fullText = lines.join("\n");
  const roles = ["Développeur Full Stack", "Étudiant en Génie Informatique"];

  let i = 0;
  function step(){
    if (i <= fullText.length){
      codeEl.textContent = fullText.slice(0, i);
      i++;
      setTimeout(step, 14);
    }
  }
  step();

  if (roleEl){
    let roleIndex = 0;
    function cycleRole(){
      roleEl.textContent = roles[roleIndex % roles.length];
      roleIndex++;
      setTimeout(cycleRole, 2600);
    }
    cycleRole();
  }
}

/* =========================================================
   ANIMATION DES BARRES DE COMPETENCES AU SCROLL
========================================================= */

function observeSkills(){
  const rows = document.querySelectorAll(".skill-row");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        const row = entry.target;
        const fillValue = row.getAttribute("data-fill");
        const fill = row.querySelector(".skill-fill");
        fill.style.width = fillValue + "%";
        observer.unobserve(row);
      }
    });
  }, { threshold: 0.4 });
  rows.forEach(row => observer.observe(row));
}

/* =========================================================
   NAVIGATION MOBILE
========================================================= */

function setupNav(){
  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("main-nav");
  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => nav.classList.remove("open"));
  });
}

/* =========================================================
   FORMULAIRE DE CONTACT (visuel uniquement pour l'instant)
========================================================= */

function setupContactForm(){
  const form = document.getElementById("contact-form");
  const note = document.getElementById("form-note");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    note.textContent = "Message prêt à être envoyé — connecte un service d'envoi (Formspree, EmailJS...) pour l'activer.";
    form.reset();
  });
}

/* =========================================================
   INIT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  renderProjects();
  renderTimeline("formation-timeline", FORMATION);
  renderTimeline("experiences-timeline", EXPERIENCES);
  renderCertifications();
  typeTerminal();
  observeSkills();
  setupNav();
  setupContactForm();
  document.getElementById("footer-year").textContent = new Date().getFullYear();
});
