<script lang="ts">
  import { page } from '$app/stores';
  import { logo } from '$lib/assets/images';

  let menuOpen = $state(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/products', label: 'Our Products' },
    { href: '/auction', label: 'Auction' },
    { href: '/contact', label: 'Contact' }
  ];

  function toggleMenu() {
    menuOpen = !menuOpen;
  }

  function closeMenu() {
    menuOpen = false;
  }
</script>

<nav class="navbar">
  <div class="nav-inner">
    <a href="/" class="brand" onclick={closeMenu}>
      <img src={logo} alt="Wandhe Coffee Estate" class="brand-logo" />
      <span class="brand-name">Wandhe Coffee Estate</span>
    </a>

    <ul class="nav-links">
      {#each navLinks as link}
        <li>
          <a
            href={link.href}
            class="nav-link"
            class:active={$page.url.pathname === link.href}
          >{link.label}</a>
        </li>
      {/each}
    </ul>

    <button class="hamburger" onclick={toggleMenu} aria-label="Toggle menu" aria-expanded={menuOpen}>
      <span class:open={menuOpen}></span>
      <span class:open={menuOpen}></span>
      <span class:open={menuOpen}></span>
    </button>
  </div>
</nav>

{#if menuOpen}
  <div class="mobile-menu">
    <ul>
      {#each navLinks as link}
        <li>
          <a
            href={link.href}
            class="mobile-link"
            class:active={$page.url.pathname === link.href}
            onclick={closeMenu}
          >{link.label}</a>
        </li>
      {/each}
    </ul>
  </div>
{/if}

<style>
  .navbar {
    position: sticky;
    top: 0;
    z-index: 100;
    background: var(--white);
    border-bottom: 1px solid var(--cream-dark);
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }

  .nav-inner {
    width: 100%;
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .brand-logo {
    width: 36px;
    height: 36px;
    object-fit: cover;
    border-radius: 50%;
  }

  .brand-name {
    font-family: var(--font-serif);
    font-size: 18px;
    font-weight: 600;
    color: var(--brown-800);
    letter-spacing: 0.2px;
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 36px;
  }

  .nav-link {
    font-family: var(--font-sans);
    font-size: 14px;
    font-weight: 400;
    color: var(--text-secondary);
    letter-spacing: 0.2px;
    position: relative;
    transition: color 0.2s;
  }

  .nav-link::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 1px;
    background: var(--brown-600);
    transition: width 0.25s ease;
  }

  .nav-link:hover,
  .nav-link.active {
    color: var(--brown-600);
  }

  .nav-link:hover::after,
  .nav-link.active::after {
    width: 100%;
  }

  .hamburger {
    display: none;
    flex-direction: column;
    gap: 5px;
    padding: 4px;
    background: none;
    border: none;
    cursor: pointer;
  }

  .hamburger span {
    display: block;
    width: 24px;
    height: 1.5px;
    background: var(--brown-700);
    transition: transform 0.25s ease, opacity 0.25s ease;
  }

  .hamburger span:nth-child(1).open {
    transform: translateY(6.5px) rotate(45deg);
  }

  .hamburger span:nth-child(2).open {
    opacity: 0;
  }

  .hamburger span:nth-child(3).open {
    transform: translateY(-6.5px) rotate(-45deg);
  }

  .mobile-menu {
    position: fixed;
    top: var(--nav-height);
    left: 0;
    right: 0;
    background: var(--white);
    border-bottom: 1px solid var(--cream-dark);
    z-index: 99;
    padding: 20px 0 28px;
  }

  .mobile-menu ul {
    display: flex;
    flex-direction: column;
  }

  .mobile-link {
    display: block;
    padding: 14px 40px;
    font-size: 15px;
    color: var(--text-secondary);
    transition: color 0.2s, background 0.2s;
  }

  .mobile-link:hover,
  .mobile-link.active {
    color: var(--brown-600);
    background: var(--cream);
  }

  @media (max-width: 768px) {
    .nav-inner {
      padding: 0 20px;
    }

    .nav-links {
      display: none;
    }

    .hamburger {
      display: flex;
    }

    .brand-name {
      font-size: 16px;
    }
  }
</style>
