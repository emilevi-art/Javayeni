function toggleSection(sectionId, element) {
    const section = document.getElementById(sectionId);
    const isHidden = section.style.display === "none" || section.style.display === "";
    section.style.display = isHidden ? "block" : "none";
  
    if (element) {
      element.textContent = (isHidden ? "[-] " : "[+] ") + element.textContent.slice(4);
    }
  }
  
  function addEducation() {
    const year = prompt("Təhsil ili (məsələn: 2025 - 2029):");
    const uni = prompt("Universitetin adı:");
    const field = prompt("İxtisas:");
    if (year && uni && field) {
      const edu = document.createElement("div");
      edu.innerHTML = `<p>${year}</p><p>${uni}</p><p>${field}</p>`;
      document.getElementById("education").appendChild(edu);
    }
  }
  
  function addSkill() {
    const skillName = prompt("Yeni bacarığın adını daxil et:");
    if (skillName) {
      const skill = document.createElement("p");
      skill.textContent = skillName;
      document.getElementById("skills").appendChild(skill);
    }
  }
  
  function addExperience() {
    const company = prompt("Şirkətin adı:");
    const year = prompt("İş ili:");
    const position = prompt("Vəzifə:");
    const description = prompt("Qısa təsvir:");
    if (company && year && position && description) {
      const exp = document.createElement("div");
      exp.innerHTML = `
        <p><strong>${company}</strong> (${year})</p>
        <p>${position}</p>
        <p>${description}</p>
      `;
      document.getElementById("experience").appendChild(exp);
    }
  }
  