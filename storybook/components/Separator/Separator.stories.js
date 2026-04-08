import './Separator.css';
import { refBanner } from '../../helpers/reference';

export default {
  title: 'Components/Separator',
  parameters: {
    docs: {
      description: {
        component: '**Production reference:** [all pages](https://www.abbvie.com/) (abbvie.com)\n\nSpacing and divider element used on 318/321 pages with 12 different height variants. Available as a visible divider line or invisible spacer.',
      },
    },
  },
};

const heights = [1, 8, 16, 24, 32, 48, 64, 80, 96, 112, 128, 144];

/**
 * AllHeights — All 12 separator height variants stacked with labels.
 * Each separator is shown as a spacer with a visible background to illustrate the height.
 */
export const AllHeights = () => `
  ${refBanner([{label:'All Pages',url:'https://www.abbvie.com/'}])}
  <div style="max-width:600px;">
    ${heights.map(h => `
      <div style="display:flex; align-items:center; gap:16px; margin-bottom:8px;">
        <span style="font-family:'Roboto Regular',Roboto,sans-serif; font-size:14px; color:#666b7a; min-width:80px; text-align:right;">h${h} (${h}px)</span>
        <div style="flex:1; background:#f1f3ff; border:1px solid #a6b5e0;">
          <div class="separator separator--spacer separator--h${h}"></div>
        </div>
      </div>
    `).join('')}
  </div>
`;

/**
 * DividerLine — The visible 1px divider line variant.
 * Used as a content separator between sections.
 */
export const DividerLine = () => `
  ${refBanner([{label:'All Pages',url:'https://www.abbvie.com/'}])}
  <div style="max-width:600px;">
    <p style="font-family:'Roboto Regular',Roboto,sans-serif; font-size:16px; line-height:22px; color:#071d49;">
      Content above the divider line.
    </p>
    <div class="separator separator--divider separator--h1"></div>
    <p style="font-family:'Roboto Regular',Roboto,sans-serif; font-size:16px; line-height:22px; color:#071d49;">
      Content below the divider line. The divider is a 1px solid #e0e0e0 border-top.
    </p>
  </div>
`;
