(() => {
  const config = window.siteConfig;
  if (!config) return;

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
  const owner = config.owner;

  $$('[data-owner-name]').forEach((node) => { node.textContent = owner.name; });
  $$('[data-owner-short]').forEach((node) => { node.textContent = owner.shortName || owner.name; });
  $$('[data-owner-role]').forEach((node) => { node.textContent = owner.role; });
  $$('[data-owner-location]').forEach((node) => { node.textContent = owner.location; });
  $$('[data-owner-email]').forEach((node) => {
    node.textContent = owner.email;
    if (node.tagName === 'A') node.href = `mailto:${owner.email}`;
  });
  $$('[data-owner-availability]').forEach((node) => { node.textContent = owner.availability; });
  $$('[data-current-year]').forEach((node) => { node.textContent = new Date().getFullYear(); });
  $$('[data-contact-setup]').forEach((node) => { node.textContent = config.contact.setupNote; });

  $$('[data-social]').forEach((node) => {
    const key = node.dataset.social;
    if (config.social[key]) node.href = config.social[key];
  });

  const whatsapp = $('[data-whatsapp]');
  if (whatsapp) {
    const message = encodeURIComponent(owner.whatsappMessage || 'Hi Faith, I found your portfolio.');
    whatsapp.href = `https://wa.me/${owner.whatsappNumber}?text=${message}`;
    whatsapp.setAttribute('aria-label', `Chat with ${owner.name} on WhatsApp`);
  }

const projectList = $('[data-projects]');

function getYouTubeEmbedUrl(url) {
  try {
    const parsedUrl = new URL(url);

    // YouTube Shorts
    if (parsedUrl.pathname.startsWith('/shorts/')) {
      const videoId = parsedUrl.pathname
        .split('/shorts/')[1]
        .split('/')[0];

      return `https://www.youtube.com/embed/${videoId}`;
    }

    // Normal YouTube video
    if (parsedUrl.pathname === '/watch') {
      const videoId = parsedUrl.searchParams.get('v');

      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`;
      }
    }

    // YouTube short domain: youtu.be/VIDEO_ID
    if (parsedUrl.hostname === 'youtu.be') {
      const videoId = parsedUrl.pathname.substring(1).split('/')[0];

      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`;
      }
    }

    // Already an embed URL
    if (parsedUrl.pathname.startsWith('/embed/')) {
      return url;
    }

    return url;

  } catch {
    return url;
  }
}

if (projectList) {
  projectList.innerHTML = config.projects.map((project) => {

    // =========================
    // VIDEO / YOUTUBE PROJECT
    // =========================

    if (project.type === 'video') {
      const embedUrl = getYouTubeEmbedUrl(project.image);

      return `
        <article
          class="project-card reveal"
          data-accent="${project.accent || 'terracotta'}"
        >
          <div class="project-media project-video">
            <span class="project-index">${project.number}</span>

            <iframe
              src="${embedUrl}"
              title="${project.imageAlt || project.title}"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>

          <div class="project-info">
            <div>
              <h3 class="project-title">${project.title}</h3>

              <p class="project-meta">
                ${project.category} · ${project.year}
              </p>

              <p class="project-description">
                ${project.description}
              </p>
            </div>

            <a
              class="project-link"
              href="${project.href || '#contact'}"
              aria-label="Learn more about ${project.title}"
            >↗</a>
          </div>
        </article>
      `;
    }

    // =========================
    // IMAGE PROJECT
    // =========================

    return `
      <article
        class="project-card reveal"
        data-accent="${project.accent || 'terracotta'}"
      >
        <a
          class="project-media"
          href="${project.href || '#contact'}"
          aria-label="View ${project.title} project"
        >
          <span class="project-index">${project.number}</span>

          <img
            src="${project.image}"
            alt="${project.imageAlt}"
            loading="lazy"
          />
        </a>

        <div class="project-info">
          <div>
            <h3 class="project-title">${project.title}</h3>

            <p class="project-meta">
              ${project.category} · ${project.year}
            </p>

            <p class="project-description">
              ${project.description}
            </p>
          </div>

          <a
            class="project-link"
            href="${project.href || '#contact'}"
            aria-label="Learn more about ${project.title}"
          >↗</a>
        </div>
      </article>
    `;

  }).join('');
}

  const serviceList = $('[data-services]');
  if (serviceList && config.services) {
    serviceList.innerHTML = config.services.map((service) => `
      <article class="service-card reveal">
        <div class="service-number">${service.number}</div>
        <div class="service-copy">
          <p class="service-tag">${service.tag}</p>
          <h3>${service.title}</h3>
          <p>${service.description}</p>
        </div>
        <a class="service-arrow" href="#contact" aria-label="Ask Faith about ${service.title}">↗</a>
      </article>
    `).join('');
  }

  const header = $('[data-header]');
  const menuToggle = $('.menu-toggle');
  const navLinks = $$('.site-nav a');
  const closeMenu = () => {
    if (!header || !menuToggle) return;
    header.classList.remove('nav-open');
    document.body.classList.remove('menu-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  };
  menuToggle?.addEventListener('click', () => {
    const isOpen = header.classList.toggle('nav-open');
    document.body.classList.toggle('menu-open', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
  navLinks.forEach((link) => link.addEventListener('click', closeMenu));

  const form = $('#contact-form');
  const status = $('#form-status');
  const submitButton = form ? $('button[type="submit"]', form) : null;
  form?.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    if (!config.contact.formSubmitEndpoint || config.contact.formSubmitEndpoint.includes('faith@example.com')) {
      status.textContent = 'Please update the owner email and FormSubmit endpoint in config.js before sending.';
      status.className = 'form-status error';
      return;
    }
    const originalLabel = submitButton.innerHTML;
    submitButton.disabled = true;
    submitButton.innerHTML = '<span>Sending…</span><span aria-hidden="true">↗</span>';
    status.textContent = '';
    status.className = 'form-status';
    const formData = new FormData(form);
    formData.set('_subject', `${config.contact.subjectPrefix} ${formData.get('name')}`);
    try {
      const response = await fetch(config.contact.formSubmitEndpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData
      });
      const result = await response.json();
      if (!response.ok || result.success === false) throw new Error(result.message || 'Unable to send');
      status.textContent = config.contact.successMessage;
      status.className = 'form-status success';
      form.reset();
    } catch (error) {
      status.textContent = 'Something went wrong while sending. Please email Faith directly instead.';
      status.className = 'form-status error';
    } finally {
      submitButton.disabled = false;
      submitButton.innerHTML = originalLabel;
    }
  });

  const revealNodes = $$('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, instance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          instance.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealNodes.forEach((node) => observer.observe(node));
  } else {
    revealNodes.forEach((node) => node.classList.add('is-visible'));
  }
})();