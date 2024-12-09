interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  loading?: "lazy" | "eager";
}

function ResponsiveImage({
  src,
  alt,
  className = "",
  sizes = "100vw",
  loading = "lazy",
}: ResponsiveImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      sizes={sizes}
      srcSet={`
        ${src} 300w,
        ${src} 600w,
        ${src} 900w,
        ${src} 1200w
      `}
    />
  );
}

export default ResponsiveImage;
