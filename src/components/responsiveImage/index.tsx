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
  // Vérifier si l'URL est absolue
  const isAbsoluteUrl = src.startsWith("http") || src.startsWith("data:");
  const imagePath = isAbsoluteUrl ? src : src;

  return (
    <img
      src={imagePath}
      alt={alt}
      className={className}
      loading={loading}
      sizes={sizes}
    />
  );
}

export default ResponsiveImage;
