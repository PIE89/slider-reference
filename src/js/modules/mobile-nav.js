function mobileNav() {
  // Mobile nav button
  const openBtn = document.querySelector("#mobileOpen");
  const closeBtn = document.querySelector("#btnClose");
  const overlay = document.querySelector(".mobile-nav-overlay");
  const mobileNav = document.querySelector(".mobile-nav");

  openBtn.onclick = toggleMobileNav;
  mobileNav.onclick = function (e) {
    e.stopPropagation();
  };
  closeBtn.onclick = toggleMobileNav;
  overlay.onclick = toggleMobileNav;

  function toggleMobileNav() {
    overlay.classList.toggle("mobile-nav-overlay--open");
    mobileNav.classList.toggle("mobile-nav--open");
    document.body.classList.toggle("no-scroll");
  }
}

export default mobileNav;
