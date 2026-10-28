
import { useProducts } from "../../../features/products/hooks/useProducts";
import ProductCard from "../../../features/products/components/ProductCard/ProductCard";
import styles from "./ProductsPage.module.css";

const ProductsPage = () => {
  const { products, loading, error } = useProducts();

  if (loading) {
    return (
      <main className={`container py-5 ${styles.page}`}>
        <div className={styles.statusPanel} role="status">
          <span className={styles.loadingRing} />
          <span>INITIALIZING GRID...</span>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className={`container py-5 ${styles.page}`}>
        <div className={styles.errorPanel} role="alert">
          <span className={styles.sectionLabel}>SYSTEM ERROR</span>
          <p>Error loading products: {String(error)}</p>
        </div>
      </main>
    );
  }

  return (
    <main className={`container py-4 ${styles.page}`}>
      <header className={styles.pageHeader}>
        <div>
          <span className={styles.sectionLabel}>
            GRID / ITEM DATABASE
          </span>
          <h1 className={styles.pageTitle}>PRODUCTS</h1>
          <p className={styles.pageSubtitle}>
            Explore the collection. Choose your next acquisition.
          </p>
        </div>

        <div className={styles.productCount}>
          <span>AVAILABLE ITEMS</span>
          <strong>{products.length}</strong>
        </div>
      </header>

      {products.length === 0 ? (
        <div className={styles.statusPanel}>
          NO ITEMS FOUND IN THE GRID
        </div>
      ) : (
        <div className={`row ${styles.productGrid}`}>
          {products.map((product) => (
            <div
              key={product.id}
              className={`col-12 col-sm-6 col-md-4 col-lg-3 ${styles.productColumn}`}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default ProductsPage;
