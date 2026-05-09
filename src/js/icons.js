/**
 * Font Awesome SVG icons — self-hosted, no kit required
 * Only imports the specific icons used on the site.
 * Packages: @fortawesome/free-regular-svg-icons, @fortawesome/free-brands-svg-icons, @fortawesome/free-solid-svg-icons
 */
import { library, dom } from '@fortawesome/fontawesome-svg-core';

// Regular style icons
import {
  faCamera,
  faImage,
  faEnvelope,
  faCopy,
  faCommentDots,   // fa-comment-smile not in free set — closest alternative
  faComment,
} from '@fortawesome/free-regular-svg-icons';

// Solid style icons (used only for icons not available in the free regular set)
import {
  faSquareRss,    // fa-square-rss — solid only, used with fa-solid class
  faCode,        // fa-display-code not in free set — using faCode as closest match
  faBagShopping, // shopping bag icon for Photography Store link
} from '@fortawesome/free-solid-svg-icons';

// Brand icons
import {
  faMastodon,
  faInstagram,
  fa500px,
  faFlickr,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

library.add(
  // Regular
  faCamera,
  faImage,
  faEnvelope,
  faCopy,
  faCommentDots,
  faComment,
  // Solid
  faSquareRss,
  faCode,
  faBagShopping,
  // Brands
  faMastodon,
  faInstagram,
  fa500px,
  faFlickr,
  faLinkedin,
  faTwitter,
);

// Replace <i class="fa-..."> elements with inline SVGs
dom.i2svg();
