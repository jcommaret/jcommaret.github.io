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
  image: string;
  title: string;
  category: string;
  content: {
    text: string;
    technologies?: string;
    link?: string;
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
  type: "testimonial" | "project";
  data: Project | Testimonial;
}

export interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  loading?: "lazy" | "eager";
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

export interface MediumPost {
  title: string;
  thumbnail: string;
  categories: string[];
  pubDate: string;
  link: string;
  description: string;
}

export interface MediumApiResponse {
  status: string;
  feed: {
    url: string;
    title: string;
    link: string;
    author: string;
    description: string;
    image: string;
  };
  items: MediumPost[];
}
