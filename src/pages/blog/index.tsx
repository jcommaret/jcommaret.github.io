import { useState, useEffect, useMemo } from 'react';
import sanitizeHtml from 'sanitize-html';
import { MediumPost, MediumApiResponse } from '../../types/types';

import img from '../../assets/img/images';
import './index.scss';

function Blog() {
  const [posts, setPosts] = useState<MediumPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fallbackImages = useMemo(() => [
    img.blogImage1,
    img.blogImage2,
    img.blogImage3,
    img.blogImage4,
    img.blogImage5,
    img.blogImage6,
    img.blogImage7,
    img.blogImage8 // Ajoutez autant d'images que nécessaire
  ], []); // tableau de dépendances vide car les images sont statiques

  useEffect(() => {
    const fetchMediumPosts = async () => {
      try {
        const response = await fetch(
          'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@jcommaret'
        );
        
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des articles');
        }

        const data: MediumApiResponse = await response.json();
        setPosts(data.items.map((item, index) => ({
          title: item.title,
          thumbnail: fallbackImages[index % fallbackImages.length],
          categories: item.categories,
          pubDate: new Date(item.pubDate).toLocaleDateString('fr-FR'),
          link: item.link,
          description: sanitizeHtml(item.description, { allowedTags: [], allowedAttributes: {} }).slice(0, 150) + '...'
        })));
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      } finally {
        setLoading(false);
      }
    };

    fetchMediumPosts();
  }, [fallbackImages]);

  if (loading) return <div>Chargement des articles...</div>;
  if (error) return <div>Erreur : {error}</div>;


  return (
    <article className="blog active" data-page="blog">
      <header>
        <h2>Blog</h2>
      </header>
      <section className="blog-posts">
        <ul className="blog-posts-list">
          {posts.map((post, index) => (
            <li key={index} className="blog-post-item">
              <a href={post.link} target="_blank" rel="noopener noreferrer">
                <figure className="blog-banner-box">
                  <img 
                    src={post.thumbnail} 
                    alt={post.title}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = fallbackImages[index % fallbackImages.length];
                      target.onerror = null;
                    }}
                    loading="lazy"
                  />
                </figure>
                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">{post.categories[0]}</p>
                    <span className="dot"></span>
                    <time dateTime={post.pubDate}>{post.pubDate}</time>
                  </div>
                  <h3 className="h3 blog-item-title">{post.title}</h3>
                  <p className="blog-text">{post.description}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}

export default Blog;
