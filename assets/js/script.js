$(document).ready(function () {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $(".navbar").toggleClass("nav-toggle");
  });

  $(window).on("scroll load", function () {
    $("#menu").removeClass("fa-times");
    $(".navbar").removeClass("nav-toggle");

    if (window.scrollY > 60) {
      document.querySelector("#scroll-top").classList.add("active");
    } else {
      document.querySelector("#scroll-top").classList.remove("active");
    }

    // scroll spy
    $("section").each(function () {
      let height = $(this).height();
      let offset = $(this).offset().top - 200;
      let top = $(window).scrollTop();
      let id = $(this).attr("id");

      if (top > offset && top < offset + height) {
        $(".navbar ul li a").removeClass("active");
        $(".navbar").find(`[href="#${id}"]`).addClass("active");
      }
    });
  });

  // smooth scrolling
  $('a[href*="#"]').on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      500,
      "linear",
    );
  });

  // <!-- emailjs to mail contact form data -->
  $("#contact-form").submit(function (event) {
    emailjs.init("cxxTj4zos-JD_ncy1");

    emailjs
      .sendForm("service_uextl2s", "template_oxlbnxt", "#contact-form")
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          document.getElementById("contact-form").reset();
          alert("Form Submitted Successfully");
        },
        function (error) {
          console.log("FAILED...", error);
          alert("Form Submission Failed! Try Again");
        },
      );
    event.preventDefault();
  });
  // <!-- emailjs to mail contact form data -->
});

document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "visible") {
    document.title = "Portfolio | Modar Alhariri";
    $("#favicon").attr("href", "assets/images/favicon.png");
  } else {
    document.title = "Come Back To Portfolio";
    $("#favicon").attr("href", "assets/images/favhand.png");
  }
});

// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
  strings: [
    "frontend development",
    "backend development",
    "full stack web development",
    "web development",
  ],
  loop: true,
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 500,
});
// <!-- typed js effect ends -->

// async function fetchData(type = "skills") {
//     let response
//     type === "skills" ?
//         response = await fetch("skills.json")
//         :
//         response = await fetch("./projects/projects.json")
//     const data = await response.json();
//     return data;
// }
// skills list
let skills = {
  html: {
    name: "HTML5",
    icon: "https://cdn.simpleicons.org/html5",
  },
  css: {
    name: "CSS3",
    icon: "https://cdn.simpleicons.org/css",
  },
  javascript: {
    name: "JavaScript",
    icon: "https://cdn.simpleicons.org/javascript",
  },
  bootstrap: {
    name: "Bootstrap",
    icon: "https://cdn.simpleicons.org/bootstrap",
  },
  php: {
    name: "PHP",
    icon: "https://cdn.simpleicons.org/php",
  },
  laravel: {
    name: "Laravel",
    icon: "https://cdn.simpleicons.org/laravel",
  },
  react: {
    name: "React",
    icon: "https://cdn.simpleicons.org/react",
  },
  materialui: {
    name: "Material UI",
    icon: "https://cdn.simpleicons.org/mui",
  },
  mysql: {
    name: "MySQL",
    icon: "https://cdn.simpleicons.org/mysql",
  },
  git: {
    name: "Git",
    icon: "https://cdn.simpleicons.org/git",
  },
  github: {
    name: "GitHub",
    icon: "https://s3-alpha.figma.com/hub/file/2730955475/resized/800x480/d2106736-b929-46de-b12b-e8e6f2775d9c-cover.png",
  },
  // Soft Skills

  problemSolving: {
    name: "Problem Solving",
    icon: "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAyL3Zwcm9qZWN0b2xkMS1hdW0tNzM3LWpvYjE3MjItcC5wbmc.png",
    category: "soft",
  },
  teamwork: {
    name: "Teamwork",
    icon: "https://cdn3.vectorstock.com/i/1000x1000/03/12/teamwork-building-rgb-color-icon-vector-33390312.jpg",
    category: "soft",
  },
  communication: {
    name: "Communication",
    icon: "https://cdn-icons-png.flaticon.com/512/6156/6156952.png",
    category: "soft",
  },
  adaptability: {
    name: "Adaptability",
    icon: "https://tse2.mm.bing.net/th/id/OIP.pJz-eE6VZujRifq7dTDmBAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    category: "soft",
  },
  timeManagement: {
    name: "Time Management",
    icon: "https://tse2.mm.bing.net/th/id/OIP.6iCE6jUTQSwVM_qRjncx5gHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    category: "soft",
  },
  continuousLearning: {
    name: "Continuous Learning",
    icon: "https://tse1.mm.bing.net/th/id/OIP.0n6Tid5-DRaX_UGa52V8hgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    category: "soft",
  },
};

function showSkills(skills) {
  let skillsContainer = document.getElementById("skillsContainer");

  let skillHTML = "";

  Object.values(skills).forEach((skill) => {
    skillHTML += `
            <div class="bar">
                <div class="info">
                    <img src="${skill.icon}" alt="${skill.name}" width="50px" />
                    <span>${skill.name}</span>
                </div>
            </div>
        `;
  });

  skillsContainer.innerHTML = skillHTML;
}
showSkills(skills);

// project section
let projects = {
  thikra: {
    name: "Thikra -In progress",
    desc: "A project aimed at creating a **digital memory book** through which messages and memories can be collected from friends and close people.",
    image: "thikra",
    category: "web",

    technologies: ["React", "Laravel", " REST API", "MySQL", "Material UI"],

    links: {
      view: "https://www.linkedin.com/feed/update/urn:li:activity:7503471649640529920/",
      code: "#",
    },
  },
  portfolio: {
    name: "Personal Portfolio",
    desc: "A responsive personal portfolio to showcase my skills and projects.",
    image: "portfolio",
    category: "web",

    technologies: ["HTML5", "CSS3", "JavaScript"],

    links: {
      view: "https://your-portfolio-link.com",
      code: "https://github.com/your-username/portfolio",
    },
  },

  todoApp: {
    name: "Todo App",
    desc: "A task management application to organize daily tasks.The goal of this project was to practice React fundamentals .",
    image: "todo",
    category: "web",

    technologies: [
      "React",
      "JavaScript",
      "HTML5",
      "material ui",
      "LocalStorage",
    ],

    links: {
      view: "https://react-to-do-list-modar.netlify.app/",
      code: "https://github.com/Modar-Alhariri/to-do-list-using-react",
    },
  },
  Prayer_Times_App: {
    name: "Prayer Times App",
    desc: "A small JavaScript project I built while practicing JavaScript advance  and API fundamentals.",
    image: "pray",
    category: "web",

    technologies: [
      "JavaScript",
      "Axios",
      "HTML5",
      "CSS",
      "Bootstrap",
      "AlAdhan API",
    ],

    links: {
      view: "https://modar-alhariri.github.io/prayer-times-javaScript-/",
      code: "https://github.com/Modar-Alhariri/prayer-times-javaScript-",
    },
  },
};
// show projects with filter
function showProjects(projects) {
  let projectsContainer = document.querySelector("#work .box-container");
  let projectHTML = "";

  Object.values(projects)
    .filter((project) => project.category !== "android")
    .slice(0, 10)
    .forEach((project) => {
      projectHTML += `
                <div class="box tilt">
                    <img
                        draggable="false"
                        src="assets/images/projects/${project.image}.jpg"
                        alt="${project.name}"
                        loading="lazy"
                    />

                    <div class="content">
                        <div class="tag">
                            <h3>${project.name}</h3>
                        </div>

                        <div class="desc">
                            <p>${project.desc}</p>
                            <div class="technologies">
                             ${project.technologies
                               .map(
                                 (tech) => `
                              <span class="tech">${tech}</span>
                             `,
                               )
                               .join("")}
                        </div>
                            <div class="btns" style="margin-bottom: 120px; margin-top:10px">
                                <a
                                    href="${project.links.view}"
                                    class="btn"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i class="fas fa-eye"></i> View
                                </a>

                                <a  
                                    href="${project.links.code}"
                                    class="btn"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Code <i class="fas fa-code"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
    });

  projectsContainer.innerHTML = projectHTML;

  // Vanilla Tilt
  VanillaTilt.init(document.querySelectorAll("#work .tilt"), {
    max: 15,
  });

  // Scroll Reveal
  const srtop = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 1000,
    reset: true,
  });

  srtop.reveal("#work .box", {
    interval: 200,
  });
}

showProjects(projects);

fetchData().then((data) => {
  showSkills(data);
});

fetchData("projects").then((data) => {
  showProjects(data);
});

// <!-- tilt js effect starts -->
VanillaTilt.init(document.querySelectorAll(".tilt"), {
  max: 15,
});
// <!-- tilt js effect ends -->

// pre loader start
// function loader() {
//     document.querySelector('.loader-container').classList.add('fade-out');
// }
// function fadeOut() {
//     setInterval(loader, 500);
// }
// window.onload = fadeOut;
// pre loader end

// disable developer mode
document.onkeydown = function (e) {
  if (e.keyCode == 123) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
    return false;
  }
};

// Start of Tawk.to Live Chat
var Tawk_API = Tawk_API || {},
  Tawk_LoadStart = new Date();
(function () {
  var s1 = document.createElement("script"),
    s0 = document.getElementsByTagName("script")[0];
  s1.async = true;
  s1.src = "https://embed.tawk.to/60df10bf7f4b000ac03ab6a8/1f9jlirg6";
  s1.charset = "UTF-8";
  s1.setAttribute("crossorigin", "*");
  s0.parentNode.insertBefore(s1, s0);
})();
// End of Tawk.to Live Chat

/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 1000,
  reset: true,
});

/* SCROLL HOME */
srtop.reveal(".home .content h3", { delay: 200 });
srtop.reveal(".home .content p", { delay: 200 });
srtop.reveal(".home .content .btn", { delay: 200 });

srtop.reveal(".home .image", { delay: 400 });
srtop.reveal(".home .linkedin", { interval: 600 });
srtop.reveal(".home .github", { interval: 800 });
srtop.reveal(".home .twitter", { interval: 1000 });
srtop.reveal(".home .telegram", { interval: 600 });
srtop.reveal(".home .instagram", { interval: 600 });
srtop.reveal(".home .dev", { interval: 600 });

/* SCROLL ABOUT */
srtop.reveal(".about .content h3", { delay: 200 });
srtop.reveal(".about .content .tag", { delay: 200 });
srtop.reveal(".about .content p", { delay: 200 });
srtop.reveal(".about .content .box-container", { delay: 200 });
srtop.reveal(".about .content .resumebtn", { delay: 200 });

/* SCROLL SKILLS */
srtop.reveal(".skills .container", { interval: 200 });
srtop.reveal(".skills .container .bar", { delay: 400 });

/* SCROLL EDUCATION */
srtop.reveal(".education .box", { interval: 200 });

/* SCROLL PROJECTS */
srtop.reveal(".work .box", { interval: 200 });

/* SCROLL EXPERIENCE */
srtop.reveal(".experience .timeline", { delay: 400 });
srtop.reveal(".experience .timeline .container", { interval: 400 });

/* SCROLL CONTACT */
srtop.reveal(".contact .container", { delay: 400 });
srtop.reveal(".contact .container .form-group", { delay: 400 });
