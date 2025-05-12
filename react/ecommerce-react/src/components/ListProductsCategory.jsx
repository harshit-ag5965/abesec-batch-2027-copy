import ProductCategory from './ProductCategory';

const ListProductsCategory = () => {
  return (
    <>
      <section class='categories'>
        <h1>Shop by Category</h1>
        <div class='categories-grid'>
          <ProductCategory
            productCategoryDetails={{
              name: 'Men',
              image: 'https://i.postimg.cc/pXx4vsBT/menstyle.avif',
            }}
          />
          <ProductCategory
            productCategoryDetails={{
              name: 'Woman',
              image: 'https://i.postimg.cc/pXx4vsBT/menstyle.avif',
            }}
          />
          <ProductCategory
            productCategoryDetails={{
              name: 'Kids',
              image: 'https://i.postimg.cc/Fzb6cShN/kidsstyle.avif',
            }}
          />
          <ProductCategory
            productCategoryDetails={{
              name: 'Home and Living',
              image: 'https://i.postimg.cc/pXx4vsBT/menstyle.avif',
            }}
          />
          <ProductCategory
            productCategoryDetails={{
              name: 'Beauty',
              image: 'https://i.postimg.cc/J45wHfhZ/beauty.avif',
            }}
          />
        </div>
      </section>
    </>
  );
};

export default ListProductsCategory;
