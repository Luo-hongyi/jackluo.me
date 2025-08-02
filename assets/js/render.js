function renderExperience() {
    const experienceGrid = document.querySelector('.experience-grid');
    if (!experienceGrid) return;

    experienceGrid.innerHTML = '';

    experienceData.forEach(exp => {
        const experienceItem = document.createElement('div');
        experienceItem.className = 'experience-item';

        const achievementsList = exp.achievements.map(achievement => {
            if (typeof achievement === 'object' && achievement.subItems) {
                const subItemsList = achievement.subItems.map(subItem =>
                    `<li class="list-item">${subItem}</li>`
                ).join('');
                return `<li class="list-item">${achievement.text}<ul>${subItemsList}</ul></li>`;
            }
            return `<li class="list-item">${achievement}</li>`;
        }).join('');

        experienceItem.innerHTML = `
            <div class="experience-content">
                <h3>${exp.company}</h3>
                <div class="company-description">${exp.description}</div>
                <div class="date">${exp.date}</div>
                <div class="position">${exp.position}</div>
                <ul>${achievementsList}</ul>
            </div>
        `;

        experienceGrid.appendChild(experienceItem);
    });
}

function renderProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid) return;

    projectsGrid.innerHTML = '';

    projectsData.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';

        const techTags = project.techTags.map(tag =>
            `<span class="tech-tag">${tag}</span>`
        ).join('');

        const detailsList = project.details.map(detail =>
            `<li class="list-item">${detail}</li>`
        ).join('');

        const githubSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M544 160C544 124.7 515.3 96 480 96L160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160zM361.8 471.7C361.8 469.9 361.8 465.7 361.9 460.1C362 448.7 362 431.3 362 416.4C362 400.8 356.8 390.9 350.7 385.7C387.7 381.6 426.7 376.5 426.7 312.6C426.7 294.4 420.2 285.3 409.6 273.6C411.3 269.3 417 251.6 407.9 228.6C394 224.3 362.2 246.5 362.2 246.5C335.6 239 305.6 239 279 246.5C279 246.5 247.2 224.3 233.3 228.6C224.2 251.5 229.8 269.2 231.6 273.6C221 285.3 216 294.4 216 312.6C216 376.2 253.3 381.6 290.3 385.7C285.5 390 281.2 397.4 279.7 408C270.2 412.3 245.9 419.7 231.4 394.1C222.3 378.3 205.9 377 205.9 377C189.7 376.8 204.8 387.2 204.8 387.2C215.6 392.2 223.2 411.4 223.2 411.4C232.9 441.1 279.3 431.1 279.3 431.1C279.3 440.1 279.4 452.8 279.4 461.7C279.4 466.5 279.5 470.3 279.5 471.7C279.5 476 276.5 481.2 268 479.7C202 457.6 155.8 394.8 155.8 321.4C155.8 229.6 226 159.9 317.8 159.9C409.6 159.9 484 229.6 484 321.4C484.1 394.8 439.3 457.7 373.3 479.7C364.9 481.2 361.8 476 361.8 471.7zM271.3 416.9C271.1 415.4 272.4 414.1 274.3 413.7C276.2 413.5 278 414.3 278.2 415.6C278.5 416.9 277.2 418.2 275.2 418.6C273.3 419 271.5 418.2 271.3 416.9zM262.2 420.1C260 420.3 258.5 419.2 258.5 417.7C258.5 416.4 260 415.3 262 415.3C263.9 415.1 265.7 416.2 265.7 417.7C265.7 419 264.2 420.1 262.2 420.1zM247.9 417.9C246 417.5 244.7 416 245.1 414.7C245.5 413.4 247.5 412.8 249.2 413.2C251.2 413.8 252.5 415.3 252 416.6C251.6 417.9 249.6 418.5 247.9 417.9zM235.4 410.6C233.9 409.3 233.5 407.4 234.5 406.5C235.4 405.4 237.3 405.6 238.8 407.1C240.1 408.4 240.6 410.4 239.7 411.2C238.8 412.3 236.9 412.1 235.4 410.6zM226.9 400.6C225.8 399.1 225.8 397.4 226.9 396.7C228 395.8 229.7 396.5 230.6 398C231.7 399.5 231.5 401.2 230.4 402.1C229.3 402.8 228 402.1 226.9 400.6zM286.2 425.5C286.2 424.1 287.8 423.1 289.4 423.5C291 423.8 292.2 425.3 291.9 426.7C291.6 428.1 290.1 429.1 288.5 428.7C286.9 428.4 285.9 426.9 286.2 425.5zM300.2 429.6C300.5 428.2 302.1 427.3 303.7 427.7C305.3 428.1 306.5 429.6 306.2 431C305.9 432.4 304.3 433.3 302.7 432.9C301.1 432.6 299.9 431 300.2 429.6z"/></svg>`;

        projectCard.innerHTML = `
            <div class="project-content">
                <h3>${project.title}</h3>
                <a href="${project.githubUrl}" target="_blank" class="github-icon">${githubSvg}</a>
                <div class="tech-tags">${techTags}</div>
                <p>${project.summary}</p>
                <div class="project-details" id="${project.id}-details">
                    <ul>${detailsList}</ul>
                </div>
                <span class="toggle-details" data-target="${project.id}-details">Show more details</span>
            </div>
        `;

        projectsGrid.appendChild(projectCard);
    });
}

function renderSkills() {
    const skillsContainer = document.querySelector('#skills .skills-container');
    if (!skillsContainer) return;

    skillsContainer.innerHTML = '';

    Object.keys(skillsData).forEach(category => {
        const skillCategory = document.createElement('div');
        skillCategory.className = 'skill-category';

        const skills = skillsData[category].map(skill =>
            `<span class="skill-tag">${skill}</span>`
        ).join('');

        skillCategory.innerHTML = `
            <h3>${category}</h3>
            <div class="skills">${skills}</div>
        `;

        skillsContainer.appendChild(skillCategory);
    });
}

function renderEducation() {
    const educationGrid = document.querySelector('.education-grid');
    if (!educationGrid) return;

    educationGrid.innerHTML = '';

    educationData.forEach(edu => {
        const educationCard = document.createElement('div');
        educationCard.className = 'education-card';

        educationCard.innerHTML = `
            <h3>${edu.school}</h3>
            <div class="degree">${edu.degree}</div>
            <div class="date">${edu.date}</div>
            <p>${edu.description}</p>
        `;

        educationGrid.appendChild(educationCard);
    });
}

function renderContact() {
    const contactList = document.querySelector('.contact-list');
    const heroSocial = document.getElementById('hero-social');

    if (contactList) contactList.innerHTML = '';
    if (heroSocial) heroSocial.innerHTML = '';

    if (typeof contactData === 'undefined') return;

    const iconSVGs = {
        email: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M112 128C85.5 128 64 149.5 64 176C64 191.1 71.1 205.3 83.2 214.4L291.2 370.4C308.3 383.2 331.7 383.2 348.8 370.4L556.8 214.4C568.9 205.3 576 191.1 576 176C576 149.5 554.5 128 528 128L112 128zM64 260L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 260L377.6 408.8C343.5 434.4 296.5 434.4 262.4 408.8L64 260z"/></svg>`,
        phone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M224.2 89C216.3 70.1 195.7 60.1 176.1 65.4L170.6 66.9C106 84.5 50.8 147.1 66.9 223.3C104 398.3 241.7 536 416.7 573.1C493 589.3 555.5 534 573.1 469.4L574.6 463.9C580 444.2 569.9 423.6 551.1 415.8L453.8 375.3C437.3 368.4 418.2 373.2 406.8 387.1L368.2 434.3C297.9 399.4 241.3 341 208.8 269.3L253 233.3C266.9 222 271.6 202.9 264.8 186.3L224.2 89z"/></svg>`,
        linkedin: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M512 96L127.9 96C110.3 96 96 110.5 96 128.3L96 511.7C96 529.5 110.3 544 127.9 544L512 544C529.6 544 544 529.5 544 511.7L544 128.3C544 110.5 529.6 96 512 96zM231.4 480L165 480L165 266.2L231.5 266.2L231.5 480L231.4 480zM198.2 160C219.5 160 236.7 177.2 236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160zM480.3 480L413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480z"/></svg>`,
        github: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M237.9 461.4C237.9 463.4 235.6 465 232.7 465C229.4 465.3 227.1 463.7 227.1 461.4C227.1 459.4 229.4 457.8 232.3 457.8C235.3 457.5 237.9 459.1 237.9 461.4zM206.8 456.9C206.1 458.9 208.1 461.2 211.1 461.8C213.7 462.8 216.7 461.8 217.3 459.8C217.9 457.8 216 455.5 213 454.6C210.4 453.9 207.5 454.9 206.8 456.9zM251 455.2C248.1 455.9 246.1 457.8 246.4 460.1C246.7 462.1 249.3 463.4 252.3 462.7C255.2 462 257.2 460.1 256.9 458.1C256.6 456.2 253.9 454.9 251 455.2zM316.8 72C178.1 72 72 177.3 72 316C72 426.9 141.8 521.8 241.5 555.2C254.3 557.5 258.8 549.6 258.8 543.1C258.8 536.9 258.5 502.7 258.5 481.7C258.5 481.7 188.5 496.7 173.8 451.9C173.8 451.9 162.4 422.8 146 415.3C146 415.3 123.1 399.6 147.6 399.9C147.6 399.9 172.5 401.9 186.2 425.7C208.1 464.3 244.8 453.2 259.1 446.6C261.4 430.6 267.9 419.5 275.1 412.9C219.2 406.7 162.8 398.6 162.8 302.4C162.8 274.9 170.4 261.1 186.4 243.5C183.8 237 175.3 210.2 189 175.6C209.9 169.1 258 202.6 258 202.6C278 197 299.5 194.1 320.8 194.1C342.1 194.1 363.6 197 383.6 202.6C383.6 202.6 431.7 169 452.6 175.6C466.3 210.3 457.8 237 455.2 243.5C471.2 261.2 481 275 481 302.4C481 398.9 422.1 406.6 366.2 412.9C375.4 420.8 383.2 435.8 383.2 459.3C383.2 493 382.9 534.7 382.9 542.9C382.9 549.4 387.5 557.3 400.2 555C500.2 521.8 568 426.9 568 316C568 177.3 455.5 72 316.8 72zM169.2 416.9C167.9 417.9 168.2 420.2 169.9 422.1C171.5 423.7 173.8 424.4 175.1 423.1C176.4 422.1 176.1 419.8 174.4 417.9C172.8 416.3 170.5 415.6 169.2 416.9zM158.4 408.8C157.7 410.1 158.7 411.7 160.7 412.7C162.3 413.7 164.3 413.4 165 412C165.7 410.7 164.7 409.1 162.7 408.1C160.7 407.5 159.1 407.8 158.4 408.8zM190.8 444.4C189.2 445.7 189.8 448.7 192.1 450.6C194.4 452.9 197.3 453.2 198.6 451.6C199.9 450.3 199.3 447.3 197.3 445.4C195.1 443.1 192.1 442.8 190.8 444.4z"/></svg>`,
    };

    contactData.forEach(contact => {
        const isExternal = contact.url.startsWith('http');
        const targetAttribute = isExternal ? ' target="_blank"' : '';

        // Render to main contact list
        if (contactList) {
            const contactItem = document.createElement('div');
            contactItem.className = 'contact-item';
            contactItem.innerHTML = `
                ${iconSVGs[contact.icon] || ''}
                <a href="${contact.url}"${targetAttribute}>${contact.label}</a>
            `;
            contactList.appendChild(contactItem);
        }

        // Render to hero social links
        if (heroSocial) {
            const socialLink = document.createElement('a');
            socialLink.href = contact.url;
            socialLink.setAttribute('aria-label', contact.type);
            if (isExternal) {
                socialLink.target = '_blank';
            }
            socialLink.innerHTML = iconSVGs[contact.icon] || '';
            heroSocial.appendChild(socialLink);
        }
    });
}

function renderPersonalInfo() {
    if (typeof personalData === 'undefined') return;
    const nameEl = document.getElementById('hero-name');
    const pronunciationEl = document.getElementById('hero-pronunciation');
    const titleEl = document.getElementById('hero-title');
    if (nameEl) nameEl.textContent = personalData.name;
    if (pronunciationEl) pronunciationEl.textContent = personalData.pronunciation;
    if (titleEl) titleEl.textContent = personalData.title;
}

function renderSummary() {
    if (typeof summary === 'undefined') return;
    const summaryEl = document.getElementById('summary-content');
    if (summaryEl) summaryEl.textContent = summary;
}

function initializeData() {
    renderPersonalInfo();
    renderSummary();
    renderExperience();
    renderProjects();
    renderSkills();
    renderEducation();
    renderContact();
    bindProjectToggleEvents();
}

function bindProjectToggleEvents() {
    const toggleButtons = document.querySelectorAll('.toggle-details');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const detailsElement = document.getElementById(targetId);

            if (detailsElement) {
                const isExpanded = detailsElement.classList.contains('expanded');

                if (isExpanded) {
                    detailsElement.style.height = '0px';
                    detailsElement.classList.remove('expanded');
                    this.textContent = 'Show more details';
                } else {
                    // Set height to scrollHeight to trigger transition
                    detailsElement.style.height = detailsElement.scrollHeight + 'px';
                    detailsElement.classList.add('expanded');
                    this.textContent = 'Show less';

                    // After transition, set height to auto
                    setTimeout(() => {
                        if (detailsElement.classList.contains('expanded')) {
                            detailsElement.style.height = 'auto';
                        }
                    }, 300); // Match CSS transition duration
                }
            }
        });
    });
}

function setupNavigation() {
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links a');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    navLinksItems.forEach(item => {
        item.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    });

    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    initializeData();
    setupNavigation();
});