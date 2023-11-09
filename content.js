
for (let i = 0; i < 12; i++) {
  const box = document.createElement('div');
  box.style.position = 'fixed';
  box.style.left = '20px';
  box.style.top = `${120 + i * 50}px`; 
  box.style.width = '450px';
  box.style.height = '60px';
  box.style.backgroundColor = '#ffb88c';
  box.style.zIndex = '9999'; 

  document.body.appendChild(box);

  let timeout;


  box.addEventListener('mouseenter', () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      box.style.display = 'none'; 
    },100); 
  });

 
  box.addEventListener('mouseleave', () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      box.style.display = 'block'; 
    }, 1000); 
  });
}
