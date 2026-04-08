import './AbbVieContainer.css';
import { refBanner } from '../../helpers/reference';

export default {
  title: 'Components/AbbVieContainer',
  parameters: {
    docs: {
      description: {
        component: '**Production reference:** [all pages](https://www.abbvie.com/) (abbvie.com)\n\nPrimary layout wrapper used on 318/321 pages. Applies border-radius (top-left only), size constraints, and height to content sections.',
      },
    },
  },
};

/**
 * DefaultRadius — Container with the standard 24px top-left border-radius.
 * The most common variant across the site.
 */
export const DefaultRadius = () => `
  ${refBanner([{label:'All Pages',url:'https://www.abbvie.com/'}])}
  <div class="abbvie-container abbvie-container--default-radius abbvie-container--large">
    <div class="abbvie-container__inner" style="background:#f1f3ff; padding-bottom:40px;">
      <h2 style="font-family:'F37 Lineca Book',Helvetica,sans-serif; font-size:32px; color:#071d49; margin:0 0 16px;">Section Heading</h2>
      <p style="font-family:'Roboto Regular',Roboto,sans-serif; font-size:16px; line-height:22px; color:#071d49; max-width:640px;">
        This container uses the default 24px top-left border-radius. It is the most common layout wrapper on the site, appearing on nearly every page.
      </p>
    </div>
  </div>
`;

/**
 * MediumRadius — Container with the 40px top-left border-radius.
 * Used for sections that need a slightly more pronounced curve.
 */
export const MediumRadius = () => `
  ${refBanner([{label:'All Pages',url:'https://www.abbvie.com/'}])}
  <div class="abbvie-container abbvie-container--medium-radius abbvie-container--large">
    <div class="abbvie-container__inner" style="background:#071d49; padding-bottom:40px;">
      <h2 style="font-family:'F37 Lineca Book',Helvetica,sans-serif; font-size:32px; color:#fff; margin:0 0 16px;">Medium Radius Section</h2>
      <p style="font-family:'Roboto Regular',Roboto,sans-serif; font-size:16px; line-height:22px; color:#fff; max-width:640px;">
        This container uses the medium 40px top-left border-radius, creating a more pronounced curve at the top-left corner.
      </p>
    </div>
  </div>
`;

/**
 * LargeRadius — Container with the 64px top-left border-radius.
 * Used for hero-adjacent sections and feature areas with background imagery.
 */
export const LargeRadius = () => `
  ${refBanner([{label:'All Pages',url:'https://www.abbvie.com/'}])}
  <div class="abbvie-container abbvie-container--large-radius abbvie-container--xx-large">
    <div class="abbvie-container__inner" style="background:linear-gradient(135deg, #071d49 0%, #0d3a8f 100%); padding-bottom:60px;">
      <h2 style="font-family:'F37 Lineca Book',Helvetica,sans-serif; font-size:40px; color:#fff; margin:0 0 16px;">Large Radius with Background</h2>
      <p style="font-family:'Roboto Regular',Roboto,sans-serif; font-size:16px; line-height:22px; color:#fff; max-width:640px;">
        This container uses the large 64px top-left border-radius. Often paired with background imagery or gradients for hero-adjacent sections.
      </p>
    </div>
  </div>
`;

/**
 * OverlapContainer — Negative margin overlap showing how content sections
 * can overlap the hero banner above them (e.g., press release lists).
 */
export const OverlapContainer = () => `
  ${refBanner([{label:'Homepage',url:'https://www.abbvie.com/'}])}
  <div style="background:#071d49; padding:60px 55px 140px;">
    <h2 style="font-family:'F37 Lineca Book',Helvetica,sans-serif; font-size:40px; color:#fff; margin:0;">Hero Area</h2>
  </div>
  <div class="abbvie-container abbvie-container--overlap abbvie-container--default-radius abbvie-container--large">
    <div class="abbvie-container__inner" style="background:#fff; padding-bottom:40px; box-shadow:0 4px 16px rgba(0,0,0,0.08);">
      <h3 style="font-family:'F37 Lineca Book',Helvetica,sans-serif; font-size:24px; color:#071d49; margin:0 0 12px;">Press Releases</h3>
      <p style="font-family:'Roboto Regular',Roboto,sans-serif; font-size:16px; line-height:22px; color:#071d49;">
        This container uses margin-top: -112px to overlap the hero section above, creating a layered visual effect commonly seen with press release listings.
      </p>
    </div>
  </div>
`;
