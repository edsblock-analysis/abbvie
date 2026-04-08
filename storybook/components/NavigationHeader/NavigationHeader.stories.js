import './NavigationHeader.css';
import { refBanner } from '../../helpers/reference';

export default {
  title: 'Components/NavigationHeader',
  parameters: {
    docs: {
      description: {
        component: '**Production reference:** [All pages](https://www.abbvie.com/) — present on all 321 pages\n\nGlobal header with AbbVie logo, 5-item primary navigation (Who We Are, Science, Patients, Join Us, Sustainability), utility buttons (MORE, GLOBAL, Search), and mega-menu accordion. Desktop: 88px height, horizontal nav. Mobile: 72px, hamburger menu.',
      },
    },
  },
};

const searchIcon = `<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><line x1="16.5" y1="16.5" x2="21" y2="21"/></svg>`;
const globeIcon = `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`;
const moreIcon = `<svg viewBox="0 0 24 24"><circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/></svg>`;
const hamburgerIcon = `<svg viewBox="0 0 24 24"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`;

/**
 * DesktopNav — Full desktop header at ≥1024px.
 * Logo + 5 nav items + MORE + GLOBAL + Search.
 */
export const DesktopNav = () => {
  const el = document.createElement('div');
  el.innerHTML = refBanner([{label:'All Pages',url:'https://www.abbvie.com/'}]) + `
    <header class="nav-header">
      <a href="/" class="nav-header__logo">
        <img src="/images/abbvie-logo.svg" alt="AbbVie" />
      </a>

      <ul class="nav-header__primary">
        <li class="nav-header__primary-item">
          <button class="nav-header__primary-btn" data-menu="who-we-are">Who We Are</button>
        </li>
        <li class="nav-header__primary-item">
          <button class="nav-header__primary-btn" data-menu="science">Science</button>
        </li>
        <li class="nav-header__primary-item">
          <button class="nav-header__primary-btn" data-menu="patients">Patients</button>
        </li>
        <li class="nav-header__primary-item">
          <button class="nav-header__primary-btn" data-menu="join-us">Join Us</button>
        </li>
        <li class="nav-header__primary-item">
          <button class="nav-header__primary-btn" data-menu="sustainability">Sustainability</button>
        </li>
      </ul>

      <ul class="nav-header__utility">
        <li>
          <button class="nav-header__util-btn">
            <span class="nav-header__util-icon">${moreIcon}</span>
            MORE
          </button>
        </li>
        <li>
          <button class="nav-header__util-btn">
            <span class="nav-header__util-icon">${globeIcon}</span>
            GLOBAL
          </button>
        </li>
        <li>
          <button class="nav-header__search-btn" aria-label="Search AbbVie.com">
            ${searchIcon}
          </button>
        </li>
      </ul>

      <button class="nav-header__hamburger" aria-label="Menu">
        ${hamburgerIcon}
      </button>
    </header>
  `;
  return el;
};

/**
 * WithMegaMenu — Desktop header with an open mega-menu panel.
 * Shows the dropdown content for "Who We Are".
 */
export const WithMegaMenu = () => {
  const el = document.createElement('div');
  el.innerHTML = refBanner([{label:'All Pages',url:'https://www.abbvie.com/'}]) + `
    <header class="nav-header">
      <a href="/" class="nav-header__logo">
        <img src="/images/abbvie-logo.svg" alt="AbbVie" />
      </a>

      <ul class="nav-header__primary">
        <li class="nav-header__primary-item">
          <button class="nav-header__primary-btn" style="color:#0066f5">Who We Are</button>
        </li>
        <li class="nav-header__primary-item">
          <button class="nav-header__primary-btn">Science</button>
        </li>
        <li class="nav-header__primary-item">
          <button class="nav-header__primary-btn">Patients</button>
        </li>
        <li class="nav-header__primary-item">
          <button class="nav-header__primary-btn">Join Us</button>
        </li>
        <li class="nav-header__primary-item">
          <button class="nav-header__primary-btn">Sustainability</button>
        </li>
      </ul>

      <ul class="nav-header__utility">
        <li>
          <button class="nav-header__util-btn">
            <span class="nav-header__util-icon">${moreIcon}</span>
            MORE
          </button>
        </li>
        <li>
          <button class="nav-header__util-btn">
            <span class="nav-header__util-icon">${globeIcon}</span>
            GLOBAL
          </button>
        </li>
        <li>
          <button class="nav-header__search-btn" aria-label="Search AbbVie.com">
            ${searchIcon}
          </button>
        </li>
      </ul>

      <button class="nav-header__hamburger" aria-label="Menu">
        ${hamburgerIcon}
      </button>
    </header>

    <div class="nav-header__mega-menu active" style="position:relative;">
      <ul class="nav-header__mega-menu-list">
        <li class="nav-header__mega-menu-item">
          <button class="nav-header__mega-menu-btn">Our Principles</button>
        </li>
        <li class="nav-header__mega-menu-item">
          <button class="nav-header__mega-menu-btn">Operating with Integrity</button>
        </li>
        <li class="nav-header__mega-menu-item">
          <button class="nav-header__mega-menu-btn">Key Facts</button>
        </li>
        <li class="nav-header__mega-menu-item">
          <button class="nav-header__mega-menu-btn">Our Leaders</button>
        </li>
        <li class="nav-header__mega-menu-item">
          <button class="nav-header__mega-menu-btn">Policies & Disclosures</button>
        </li>
        <li class="nav-header__mega-menu-item">
          <button class="nav-header__mega-menu-btn">Our Stories</button>
        </li>
        <li class="nav-header__mega-menu-item">
          <button class="nav-header__mega-menu-btn">Brand Partnerships</button>
        </li>
      </ul>
      <button class="nav-header__mega-cta">Go to Page</button>
    </div>
  `;
  return el;
};

/**
 * MobileNav — Header at mobile viewport (<1024px).
 * Shows logo + search + hamburger only.
 */
export const MobileNav = () => {
  const el = document.createElement('div');
  el.style.maxWidth = '375px';
  el.innerHTML = refBanner([{label:'All Pages (mobile)',url:'https://www.abbvie.com/'}]) + `
    <header class="nav-header" style="padding: 0 2rem; height: 7.2rem;">
      <a href="/" class="nav-header__logo">
        <img src="/images/abbvie-logo.svg" alt="AbbVie" style="width:7.7rem; height:1.4rem;" />
      </a>

      <ul class="nav-header__primary" style="display:none;"></ul>
      <ul class="nav-header__utility" style="display:none;"></ul>

      <button class="nav-header__search-btn" aria-label="Search" style="margin-left:auto; margin-right:1.6rem;">
        ${searchIcon}
      </button>

      <button class="nav-header__hamburger" aria-label="Menu" style="display:flex;">
        ${hamburgerIcon}
      </button>
    </header>
  `;
  return el;
};
