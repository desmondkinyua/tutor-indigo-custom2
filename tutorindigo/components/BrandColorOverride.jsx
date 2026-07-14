const BrandColorOverride = () => {
  useEffect(() => {
    const styleId = 'indigo-brand-color-override';
    if (document.getElementById(styleId)) {
      return;
    }
    const style = document.createElement('style');
    style.id = styleId;
    // Overrides Paragon's design tokens so branded components (buttons, links,
    // badges, etc.) pick up the custom primary color without rebuilding @edx/brand.
    // !important is required: the brand/paragon theme CSS scopes these same
    // tokens under higher-specificity selectors (e.g. html[data-brand-theme-variant]),
    // so a plain :root override loses the cascade regardless of DOM order.
    style.textContent = `
      :root {
        --pgn-color-primary-base: #1E5F73FF !important;
        --pgn-color-primary-100: #FAFBFCFF !important;
        --pgn-color-primary-200: #D2DADDFF !important;
        --pgn-color-primary-300: #9BAEB4FF !important;
        --pgn-color-primary-400: #608591FF !important;
        --pgn-color-primary-600: #1B5769FF !important;
        --pgn-color-primary-700: #194E5EFF !important;
        --pgn-color-primary-800: #184959FF !important;
        --pgn-color-primary-900: #164654FF !important;
        --pgn-color-primary-light: #FCFDFDFF !important;

        --pgn-color-action-default-primary-base: #1E5F73FF !important;
        --pgn-color-action-default-primary-100: #FAFBFCFF !important;
        --pgn-color-action-default-primary-200: #D2DADDFF !important;
        --pgn-color-action-default-primary-300: #9BAEB4FF !important;
        --pgn-color-action-default-primary-400: #608591FF !important;
        --pgn-color-action-default-primary-500: #1E5F73FF !important;
        --pgn-color-action-default-primary-600: #1C5768FF !important;
        --pgn-color-action-default-primary-700: #194D5EFF !important;
        --pgn-color-action-default-primary-800: #184A59FF !important;
        --pgn-color-action-default-primary-900: #174553FF !important;

        --pgn-color-badge-focus-bg-primary: #1E5F73FF !important;
        --pgn-color-badge-focus-box-shadow-primary: #1E5F730D !important;

        /* Accent color for "brand"-variant buttons/links (e.g. Masquerade bar,
           "Looking for a challenge" widget, empty-state CTAs). Kept as a
           separate accent so it doesn't compete with the teal primary. */
        --pgn-color-brand-base: #FFB400FF !important;
        --pgn-color-brand-100: #FFF9EBFF !important;
        --pgn-color-brand-200: #FFECBFFF !important;
        --pgn-color-brand-300: #FFDD8CFF !important;
        --pgn-color-brand-400: #FFC947FF !important;
        --pgn-color-brand-600: #E5A200FF !important;
        --pgn-color-brand-700: #CC9000FF !important;
        --pgn-color-brand-800: #B27E00FF !important;
        --pgn-color-brand-900: #996C00FF !important;

        --pgn-color-action-default-brand-base: #996C00FF !important;
        --pgn-color-action-default-brand-100: #FFECBFFF !important;
        --pgn-color-action-default-brand-200: #FFDD8CFF !important;
        --pgn-color-action-default-brand-300: #FFC947FF !important;
        --pgn-color-action-default-brand-400: #E5A200FF !important;
        --pgn-color-action-default-brand-500: #996C00FF !important;
        --pgn-color-action-default-brand-600: #8A6100FF !important;
        --pgn-color-action-default-brand-700: #7A5600FF !important;
        --pgn-color-action-default-brand-800: #6B4B00FF !important;
        --pgn-color-action-default-brand-900: #5C4000FF !important;

        /* Amber is a light, high-luminance color: dark text keeps buttons/links
           readable (white text here would fail contrast). */
        --pgn-color-btn-text-brand: #1F2933FF !important;
        --pgn-color-btn-hover-text-brand: #1F2933FF !important;
        --pgn-color-btn-active-text-brand: #1F2933FF !important;
        --pgn-color-link-brand-hover: #7A5600FF !important;
        --pgn-color-link-brand-inline-decoration: #FFB4004D !important;
        --pgn-color-link-brand-inline-hover-base: #7A5600FF !important;
        --pgn-color-link-brand-inline-hover-decoration: #7A5600FF !important;
      }

      html[data-paragon-theme-variant='dark'] {
        --pgn-color-primary-base: #AEE5F6FF !important;
        --pgn-color-primary-100: #8EB3BFFF !important;
        --pgn-color-primary-500: #748B92FF !important;
        --pgn-color-primary-700: #5A6F78FF !important;
        --pgn-color-primary-border: #778292FF !important;
        --pgn-color-primary-light: #292B2CFF !important;
      }
    `;
    document.head.appendChild(style);
  }, []);

  return null;
};
