// 1. Add this import statement at the top
import ArticleContent from "./[slug]/page";

export default function ResourceArticlesPage() {
  // Wrap the object in Promise.resolve() to handle the Next.js async params requirement
  const defaultParams = Promise.resolve({ 
    slug: "traditional-vs-solo-health-collective-difference" 
  });

  return <ArticleContent params={defaultParams} />;
}