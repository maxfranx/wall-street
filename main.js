
// Reveal on scroll (IntersectionObserver)
document.addEventListener('DOMContentLoaded', function(){
  const revealEls = document.querySelectorAll('.reveal');
  const options = { threshold: 0.12 };
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){ 
        e.target.classList.add('visible');
      }
    });
  }, options);
  revealEls.forEach(el=> obs.observe(el));

  // More buttons open modals
  document.querySelectorAll('.more-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const target = btn.getAttribute('data-target');
      const modal = new bootstrap.Modal(document.querySelector(target));
      modal.show();
    });
  });

  // Gallery modal
  document.querySelectorAll('.gallery-img').forEach(img=>{
    img.addEventListener('click', ()=>{
      const src = img.getAttribute('src');
      const cap = img.getAttribute('data-caption')||'';
      document.getElementById('galleryModalImg').src = src;
      document.getElementById('galleryCaption').textContent = cap;
      const gm = new bootstrap.Modal(document.getElementById('galleryModal'));
      gm.show();
    });
  });

  // Cinematic overlay fade
  const overlay = document.getElementById('cinematic-overlay');
  setTimeout(()=>{
    overlay.classList.add('hide');
  }, 700);
});
