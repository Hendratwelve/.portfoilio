// Sample projects data - update this array to add/edit projects easily
const projects = [

    {
  
      title: "Duplex Drawing",
  
      image: "assets/Untitled3.jpg",
  
      client: "Dr XXXXXX",
  
      skills: "HTML, CSS, JavaScript",
  
      description: "A complete detail of a residential buiding(DUPLEX)",
  
      caseStudyLink: "assets/duplex11gg.pdf"
  
    },
  
    {
  
      title: "Ware House Drawing and Details",
  
      image: "assets/images8.jpg",
  
      client: "UI/UX Designer",
  
      software: "ArchiCAD 2020",
  
      description: "Design of 829m^2 WareHouse with Offices",
  
     
  
      caseStudyLink: "assets/ware house_ drawing main.pdf"
  
    },

    {
  
      title: "Apartment Building",
  
      image: "assets/Untitled36.jpg",
  
      client: "Lead Developer",
  
      skills: "HTML, CSS, JavaScript",
  
      description: "Effective utilisation of small plot",
  
      caseStudyLink: "assets/PLOT 0.5 tolal.pdf"
  
    },

    {
  
      title: "LIME TREATMENT OF DIESEL CONTAMINATED TROPICAL LATERITES FOR GEOTECHNICAL APPLICATIONS.",
  
      image: "assets/images (1).jpeg",
  
      client: "Lead Developer",
  
      skills: "HTML, CSS, JavaScript",
  
      description: "This study investigates the reuse of diesel-contaminated soils in engineering, emphasizing the role of lime treatment to enhance their properties for geotechnical applications. The research aligns with new policies promoting the repurposing of contaminated materials. It specifically examines the effects of diesel contamination on lateritic soil and evaluates lime's effectiveness in restoring its properties.",
      
  
      caseStudyLink: "assets/2019224051(Journal)11.pdf"
  
    },

    {
  
      title: "Project One",
  
      image: "assets/project1.jpg",
  
      client: "Lead Developer",
  
      skills: "HTML, CSS, JavaScript",
  
      description: "A responsive web app that helps users track their tasks efficiently.",
  
      caseStudyLink: "#"
  
    },
    
    {
  
      title: "Project One",
  
      image: "assets/project1.jpg",
  
      client: "Lead Developer",
  
      skills: "HTML, CSS, JavaScript",
  
      description: "A responsive web app that helps users track their tasks efficiently.",
  
      caseStudyLink: "#"
  
    },
  
    // Add more projects as needed
  
  ];
  
  // Function to create project cards dynamically
  
  function loadProjects() {
  
    const container = document.getElementById("projects-container");
  
    container.innerHTML = "";
  
    projects.forEach((project) => {
  
      const card = document.createElement("div");
  
      card.className = "project-card";
  
      card.innerHTML = `
  
        <img src="${project.image}" alt="${project.title} screenshot" />
  
        <div class="project-content">
  
          <h3>${project.title}</h3>
  
          
  
          
  
          <p>${project.description}</p>
  
          
  
          ${project.caseStudyLink ? `<p><a href="${project.caseStudyLink}" target="_blank" rel="noopener">check project</a></p>` : ""}
  
        </div>
  
      `;
  
      container.appendChild(card);
  
    });
  
  }
  
  // Contact form submission handler (simple example)
  
  document.getElementById("contact-form").addEventListener("submit", function (e) {
  
    e.preventDefault();
  
    alert("Thank you for your message! I will get back to you soon.");
  
    this.reset();
  
  });
  
  // Initialize
  
  document.addEventListener("DOMContentLoaded", () => {
  
    loadProjects();
  
  });
  
  