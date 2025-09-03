package online.threadly.product.repository;

import online.threadly.product.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface ProductRepository extends JpaRepository<Product, UUID> {
    Optional<Product> findBySlug(String slug);

    // SELECT * FROM products WHERE brand = 'POLO';
    List<Product> findAllByBrand(String brand);
}
