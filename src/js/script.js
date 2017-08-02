'use strict';
import Navigation from './components/navigation';
import BlogSocialMedia from './components/blog-social-media';

function appInit() {
  // Init Mobile Nav
  if (document.querySelector(".mobile-hamburger-button-container")) {
    const navigation  = new Navigation ();
  }

  // Init Social Media Container
  if (document.querySelector(".blog-social-media-container")) {
    const blogSocialMedia  = new BlogSocialMedia ();
  }
}

appInit();
