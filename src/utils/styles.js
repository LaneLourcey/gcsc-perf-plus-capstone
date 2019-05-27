import { css } from 'styled-components';

const styleVars = {
  colors: {
    grays: [
      '#F8F9FA',
      '#CECFD7',
      '#A6A6B4',
      '#807F91',
      '#5D5E6E',
      '#3C3E4B',
      '#1F2026',
    ],
    main: [
      '#EFE1FA',
      '#B883D4',
      '#944EAD',
      '#772F87',
      '#622562',
      '#3E1938',
      '#1A0B15',
    ],
    secondary: [
      '#E8F4E9',
      '#95DFAA',
      '#4FCA84',
      '#13B673',
      '#0F7057',
      '#17433D',
      '#0C1616',
    ],
    accent: [
      '#FAEDE1',
      '#F1C489',
      '#E7B750',
      '#DEB429',
      '#876F24',
      '#53491D',
      '#19170B',
    ],
  },
  mixins: {
    // use in component with ${styleVars.mixins.mixinName}
    materialShadow: [
      css`
        box-shadow: 0 1.5px 4px rgba(0, 0, 0, 0.24),
          0 1.5px 6px rgba(0, 0, 0, 0.12);
      `,
      css`
        box-shadow: 0 3px 12px rgba(0, 0, 0, 0.23),
          0 3px 12px rgba(0, 0, 0, 0.16);
      `,
      css`
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.23),
          0 10px 40px rgba(0, 0, 0, 0.19);
      `,
      css`
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.22),
          0 14px 56px rgba(0, 0, 0, 0.25);
      `,
      css`
        box-shadow: 0 15px 24px rgba(0, 0, 0, 0.22),
          0 19px 76px rgba(0, 0, 0, 0.3);
      `,
    ],
  },
};

// OPACITIES

// DividerOnLightBG: transparentize(0.88, '#000');
// DividerOnDarkBG:  transparentize(0.8, '#fff');

// IconOnLightBG-Active-Focused: transparentize(0.13, '#000');
// IconOnLightBG-Active-Unfocused: transparentize(0.46, '#000');
// IconOnLightBG-Inactive: transparentize(0.62, '#000');
// IconOnDarkBG-Active-Focused: transparentize(0, '#fff');
// IconOnDarkBG-Active-Unfocused: transparentize(0.3, '#fff');
// IconOnDarkBG-Inactive: transparentize(0.5, '#fff');

// TextOnLightBG-HighEmphasis: transparentize(0.13, '#000');
// TextOnLightBG-MedEmphasis: transparentize(0.4, '#000');
// TextOnLightBG-Disabled: transparentize(0.62, '#000');

export default styleVars;
