const sendFormspreeEmail = window.sendFormspreeEmail;


// Import des données
const data = window.data;

const { useState, useEffect, useRef } = React;

// Hook personnalisé pour la gestion du thème
const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return [theme, toggleTheme];
};

// Hook personnalisé pour la gestion de la langue
const useLanguage = () => {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('language');
    const browserLang = navigator.language.startsWith('fr') ? 'fr' : 'en';
    return saved || browserLang;
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.setAttribute('lang', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'fr' ? 'en' : 'fr');
  };

  return [language, toggleLanguage];
};

// Hook pour les animations au scroll
const useScrollReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};

// Composant Header
const Header = ({ language, toggleLanguage, toggleTheme, theme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = {
    fr: ['Accueil', 'Profil', 'Expériences', 'Formation', 'Projets', 'Compétences', 'Contacter'],
    en: ['Home', 'Profile', 'Experience', 'Education', 'Projects', 'Skills', 'Contact']
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="header">
      <nav className="nav">
        <a href="#home" className="logo" onClick={() => scrollToSection('home')}>
          HC
        </a>
        
        <ul className={`nav-links ${isMenuOpen ? 'nav-links-mobile' : ''}`}>
          {navItems[language].map((item, index) => (
            <li key={item}>
              <a 
                href={`#${['home', 'profile', 'experience', 'education', 'projects', 'skills', 'contact'][index]}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(['home', 'profile', 'experience', 'education', 'projects', 'skills', 'contact'][index]);
                }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-controls">
          <button 
            className="lang-toggle"
            onClick={toggleLanguage}
            title={language === 'fr' ? 'Switch to English' : 'Passer en Français'}
          >
            {language === 'fr' ? 'EN' : 'FR'}
          </button>
          
          <button 
            className="theme-toggle"
            onClick={toggleTheme}
            title={theme === 'light' ? 'Mode sombre' : 'Mode clair'}
          >
            <i className={`fas ${theme === 'light' ? 'fa-moon' : 'fa-sun'}`}></i>
          </button>
          
          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </nav>
    </header>
  );
};

// Composant Hero
const Hero = ({ data, language }) => {
  return (
    <section id="home" className="hero">
      <div className="hero-content fade-in-up">
        <img 
          src="./assets/img/photo.jpg" 
          alt={data.name}
          className="hero-avatar"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
        <h1>{data.name}</h1>
        <p className="subtitle">{data.title}</p>
        <p className="description">{data.profile}</p>
        
        <div className="cta-buttons">
          <a 
            href="./assets/Hamza_CHEHAIBI.pdf" 
            className="btn btn-primary"
            download
            target="_blank"
          >
            <i className="fas fa-download"></i>
            {language === 'fr' ? 'Télécharger CV' : 'Download CV'}
          </a>
          
          <a 
            href="#contact" 
            className="btn btn-secondary"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <i className="fas fa-envelope"></i>
            {language === 'fr' ? 'Me Contacter' : 'Contact Me'}
          </a>
        </div>
      </div>
    </section>
  );
};

// Composant Experience
const Experience = ({ data, language }) => {
  return (
    <section id="experience" className="section scroll-reveal">
      <h2 className="section-title">
        {language === 'fr' ? 'Expériences' : 'Experience'}
      </h2>
      
      <div className="cards-grid">
        {data.experience.map((exp, index) => (
          <div key={index} className="card">
            <div className="card-header">
              <div>
                <h3 className="card-title">{exp.title}</h3>
                <p className="card-subtitle">{exp.location}</p>
              </div>
              <span className="card-date">{exp.date}</span>
            </div>
            
            <div className="card-content">
              <ul>
                {exp.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Composant Education
const Education = ({ data, language }) => {
  return (
    <section id="education" className="section scroll-reveal">
      <h2 className="section-title">
        {language === 'fr' ? 'Formation' : 'Education'}
      </h2>
      
      <div className="cards-grid">
        {data.education.map((edu, index) => (
          <div key={index} className="card">
            <div className="card-header">
              <div>
                <h3 className="card-title">{edu.degree}</h3>
                <p className="card-subtitle">{edu.school}</p>
              </div>
              <span className="card-date">{edu.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Composant Projects
const Projects = ({ data, language }) => {
  return (
    <section id="projects" className="section scroll-reveal">
      <h2 className="section-title">
        {language === 'fr' ? 'Projets' : 'Projects'}
      </h2>

      <div className="cards-grid">
        {data.projects.map((project, index) => (
          <div key={index} className="card">
            <div className="card-header">
              <div>
                <h3 className="card-title">{project.title}</h3>
                <p className="card-subtitle">{project.technologies}</p>
              </div>
              <span className="card-date">{project.date}</span>
            </div>
            <div className="card-content">
              <p>{project.description}</p>
              {project.link && (
                <a
                  href={project.link}
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {language === 'fr' ? 'Voir le projet' : 'View Project'}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


// Composant Skills
const Skills = ({ data, language }) => {
  const skillTitles = {
    fr: {
      telecom: 'Télécommunications & Réseaux',
      tools: 'Outils & Logiciels',
      programming: 'Programmation & Systèmes'
    },
    en: {
      telecom: 'Telecommunications & Networks',
      tools: 'Tools & Software',
      programming: 'Programming & Systems'
    }
  };

  return (
    <section id="skills" className="section scroll-reveal">
      <h2 className="section-title">
        {language === 'fr' ? 'Compétences' : 'Skills'}
      </h2>
      
      <div className="skills-grid">
        {Object.entries(data.skills).map(([key, value]) => (
          <div key={key} className="skill-category">
            <h3>{skillTitles[language][key]}</h3>
            <p>{value}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// Composant Certifications
const Certifications = ({ data, language }) => {
  return (
    <section id="certifications" className="section scroll-reveal">
      <h2 className="section-title">
        {language === 'fr' ? 'Certifications' : 'Certifications'}
      </h2>
      
      <div className="certifications-list">
        {data.certifications.map((cert, index) => (
          <div key={index} className="certification-item">
            <i className="fas fa-certificate" style={{color: 'var(--text-accent)', marginRight: '0.5rem'}}></i>
            {cert}
          </div>
        ))}
      </div>
    </section>
  );
};

// Composant Languages
const Languages = ({ data, language }) => {
  const languageItems = data.languages.split(', ').map(lang => {
    const [name, level] = lang.split(' (');
    return { name, level: level?.replace(')', '') || '' };
  });

  return (
    <section id="languages" className="section scroll-reveal">
      <h2 className="section-title">
        {language === 'fr' ? 'Langues' : 'Languages'}
      </h2>
      
      <div className="languages-grid">
        {languageItems.map((lang, index) => (
          <div key={index} className="language-item">
            <strong>{lang.name}</strong>
            <span>{lang.level}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

// Composant Contact
const Contact = ({ data, language }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const result = await sendFormspreeEmail(formData);
    
    if (result.success) {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      setSubmitStatus('error');
    }
    
    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus(''), 5000);
  };

  const labels = {
    fr: {
      title: 'Contact',
      name: 'Nom complet',
      email: 'Email',
      subject: 'Sujet',
      message: 'Message',
      send: 'Envoyer',
      sending: 'Envoi...',
      success: 'Message envoyé avec succès !',
      error: 'Erreur lors de l\'envoi. Veuillez réessayer.'
    },
    en: {
      title: 'Contact',
      name: 'Full Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      send: 'Send',
      sending: 'Sending...',
      success: 'Message sent successfully!',
      error: 'Error sending message. Please try again.'
    }
  };

  return (
    <section id="contact" className="section scroll-reveal">
      <h2 className="section-title">{labels[language].title}</h2>
      
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">{labels[language].name}</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">{labels[language].email}</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="subject">{labels[language].subject}</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="message">{labels[language].message}</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        
        <button 
          type="submit" 
          className="btn btn-primary"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span className="loading"></span>
              {labels[language].sending}
            </>
          ) : (
            <>
              <i className="fas fa-paper-plane"></i>
              {labels[language].send}
            </>
          )}
        </button>
        
        {submitStatus === 'success' && (
          <p style={{color: 'green', marginTop: '1rem', textAlign: 'center'}}>
            {labels[language].success}
          </p>
        )}
        
        {submitStatus === 'error' && (
          <p style={{color: 'red', marginTop: '1rem', textAlign: 'center'}}>
            {labels[language].error}
          </p>
        )}
      </form>
    </section>
  );
};

// Composant Footer
const Footer = ({ data, language }) => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a 
          href={data.contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          title="LinkedIn"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        
        <a 
          href={data.contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          title="GitHub"
        >
          <i className="fab fa-github"></i>
        </a>
        
        <a 
          href={`mailto:${data.contact.email}`}
          className="social-link"
          title="Email"
        >
          <i className="fas fa-envelope"></i>
        </a>
      </div>
      
      <p style={{color: 'var(--text-secondary)'}}>
        © 2025 {data.name}. {language === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'}
      </p>
    </footer>
  );
};

// Composant principal App
const App = () => {
  const [theme, toggleTheme] = useTheme();
  const [language, toggleLanguage] = useLanguage();
  
  useScrollReveal();
  
  const currentData = data[language];

  return (
    <div className="App">
      <Header 
        language={language}
        toggleLanguage={toggleLanguage}
        toggleTheme={toggleTheme}
        theme={theme}
      />
      
      <main>
        <Hero data={currentData} language={language} />
        <Experience data={currentData} language={language} />
        <Education data={currentData} language={language} />
        <Projects data={currentData} language={language} />
        <Skills data={currentData} language={language} />
        <Certifications data={currentData} language={language} />
        <Languages data={currentData} language={language} />
        <Contact data={currentData} language={language} />
      </main>
      
      <Footer data={currentData} language={language} />
    </div>
  );
};

// Rendu de l'application
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

