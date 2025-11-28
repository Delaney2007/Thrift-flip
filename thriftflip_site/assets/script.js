
// Simple mobile menu toggle
document.addEventListener('DOMContentLoaded', function(){
  const btn = document.getElementById('menuBtn');
  const nav = document.getElementById('nav');
  if(!btn) return;
  btn.addEventListener('click', function(){
    const open = nav.style.display === 'flex';
    nav.style.display = open ? 'none' : 'flex';
    btn.setAttribute('aria-expanded', String(!open));
  });

  // Simple contact form handler (client-side only) to show success
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      alert('Thanks! We received your message (demo only).');
      form.reset();
    });
  }
});
