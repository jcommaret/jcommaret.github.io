
export interface NavItem {
  name: string;
  path: string;
}

export interface Contact {
  icon: string;
  title: string;
  link: string;
}

export interface Social {
  icon: string;
  link: string;
}

export interface Project {
  id: number;
  image: string;
  title: string;
  category: string;
  content: {
    text: string;
    technologies: string;
    link: string;
  };
}

export interface Testimonial {
  image: string;
  title: string;
  content: {
    text: string;
  };
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: string;
  title: string;
  content: {
    text: string;
    technologies?: string;
    link?: string;
  };
  type: 'testimonial' | 'project';
}

export interface ImageAssets {
  socialPreview: string;
  myAvatar: string;
  iconDev: string;
  iconApp: string;
  blogImage1: string;
  blogImage2: string;
  blogImage3: string;
  blogImage4: string;
  blogImage5: string;
  blogImage6: string;
  projectImage1: string;
  projectImage2: string;
  projectImage3: string;
  avatarImage1: string;
  avatarImage2: string;
  avatarImage3: string;
  avatarImage4: string;
}

