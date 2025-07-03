// contact-config.js (à placer dans le même dossier que index.html)
window.FORMSPREE_CONFIG = {
  endpoint: 'https://formspree.io/f/xqabjdep',
  method: 'POST'
};

window.sendFormspreeEmail = async (formData) => {
  try {
    const response = await fetch(window.FORMSPREE_CONFIG.endpoint, {
      method: window.FORMSPREE_CONFIG.method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      return { success: true };
    } else {
      throw new Error('Erreur lors de l\'envoi');
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Instructions pour configurer Formspree:
// 1. Aller sur https://formspree.io/
// 2. Créer un compte gratuit
// 3. Créer un nouveau formulaire
// 4. Copier l'ID du formulaire dans FORMSPREE_CONFIG.endpoint
// 5. Remplacer la fonction handleSubmit dans script.js par:
/*
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
*/

