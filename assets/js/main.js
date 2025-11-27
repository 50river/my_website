document.addEventListener('DOMContentLoaded', () => {
  // 1. Navbar Scroll Effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
	if (window.scrollY > 50) {
	  navbar.classList.add('bg-white/90', 'backdrop-blur-md', 'shadow-sm', 'py-4');
	  navbar.classList.remove('bg-transparent', 'py-6');
	} else {
	  navbar.classList.remove('bg-white/90', 'backdrop-blur-md', 'shadow-sm', 'py-4');
	  navbar.classList.add('bg-transparent', 'py-6');
	}
  });

  // 2. Mobile Menu Toggle
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-link');
  let isMenuOpen = false;

  menuBtn.addEventListener('click', () => {
	isMenuOpen = !isMenuOpen;
	if (isMenuOpen) {
	  mobileMenu.classList.remove('hidden');
	  menuBtn.innerHTML = '<i data-lucide="x"></i>';
	} else {
	  mobileMenu.classList.add('hidden');
	  menuBtn.innerHTML = '<i data-lucide="menu"></i>';
	}
	lucide.createIcons(); // Re-render icon
  });

  // Close menu when link is clicked
  mobileLinks.forEach(link => {
	link.addEventListener('click', () => {
	  isMenuOpen = false;
	  mobileMenu.classList.add('hidden');
	  menuBtn.innerHTML = '<i data-lucide="menu"></i>';
	  lucide.createIcons();
	});
  });

  // 3. Works Filter
  const filterBtns = document.querySelectorAll('.filter-btn');
  const workItems = document.querySelectorAll('.work-item');

  filterBtns.forEach(btn => {
	btn.addEventListener('click', () => {
	  // Update active button style
	  filterBtns.forEach(b => {
		b.classList.remove('bg-slate-800', 'text-white', 'shadow-lg');
		b.classList.add('bg-white', 'text-slate-600', 'hover:bg-slate-100');
	  });
	  btn.classList.remove('bg-white', 'text-slate-600', 'hover:bg-slate-100');
	  btn.classList.add('bg-slate-800', 'text-white', 'shadow-lg');

	  // Filter items
	  const filterValue = btn.getAttribute('data-filter');
	  workItems.forEach(item => {
		if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
		  item.classList.remove('hidden');
		} else {
		  item.classList.add('hidden');
		}
	  });
	});
  });
});
