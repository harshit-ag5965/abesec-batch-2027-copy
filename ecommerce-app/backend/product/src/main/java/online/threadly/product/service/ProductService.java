package online.threadly.product.service;

import online.threadly.product.model.Product;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Service
public class ProductService {

    public List<Product> getProducts() {
        return List.of(
                createProduct(
                        "Cotton T-Shirt",
                        "cotton-tshirt",
                        new String[]{
                                "https://example.com/images/tshirt1.jpg",
                                "https://example.com/images/tshirt2.jpg"
                        },
                        "Threadly",
                        "High-quality cotton T-shirt perfect for casual wear.",
                        100,
                        499.99,
                        4.5,
                        120,
                        true
                ),
                createProduct(
                        "Denim Jeans",
                        "denim-jeans",
                        new String[]{
                                "https://example.com/images/jeans1.jpg",
                                "https://example.com/images/jeans2.jpg"
                        },
                        "DenimCo",
                        "Comfortable and durable denim jeans with a modern fit.",
                        50,
                        1199.00,
                        4.2,
                        85,
                        false
                ),
                createProduct(
                        "Hoodie Sweatshirt",
                        "hoodie-sweatshirt",
                        new String[]{
                                "https://example.com/images/hoodie1.jpg"
                        },
                        "UrbanWear",
                        "Warm and stylish hoodie with front pockets.",
                        75,
                        899.50,
                        4.8,
                        200,
                        true
                )
        );
    }

    private Product createProduct(
            String name,
            String slug,
            String[] images,
            String brand,
            String description,
            int stock,
            double price,
            double rating,
            int ratingCount,
            boolean isFeatured
    ) {
        Product product = new Product();
        product.setId(UUID.randomUUID());
        product.setName(name);
        product.setSlug(slug);
        product.setImages(images);
        product.setBrand(brand);
        product.setDescription(description);
        product.setStock(stock);
        product.setPrice(price);
        product.setRating(rating);
        product.setRatingCount(ratingCount);
        product.setIsFeatured(isFeatured);
        product.setCreatedAt(LocalDateTime.now());
        return product;
    }
}
