'use strict';

class BlogSocialMedia {
  constructor() {
    this.socialMediaContainer = document.querySelector('.blog-social-media-container');
    this.toggleSocialMedia();
  }

  toggleSocialMedia() {
    window.addEventListener('scroll', function () {
      this.socialMediaContainer.setAttribute('data-state', 'active')
    }.bind(this));
  }
}

export default BlogSocialMedia;
