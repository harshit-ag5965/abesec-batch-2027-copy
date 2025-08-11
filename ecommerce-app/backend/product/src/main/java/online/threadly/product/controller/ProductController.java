package online.threadly.product.controller;

import online.threadly.product.model.Product;
import online.threadly.product.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    // this needs to be converted to a ADMIN API
    @PostMapping
    public Product createProduct(@RequestBody Product product) {
        return productService.createProduct(product);
    }

    @GetMapping
    public List<Product> getProducts() {
        return productService.getProducts();
    }

    // http://localhost:8082/api/v1/products/slug/men-slim-fit-smart-formal-shirt
    @GetMapping("/slug/{slug}")
    public Product getProductBySlug(@PathVariable String slug) {
        return productService.getProductBySlug(slug);
    }

    // http://localhost:8082/api/v1/products/ea1e7f2f-409d-4681-b3e9-d80fd3a7b042
    @GetMapping("/{id}")
    public Product getProduct(@PathVariable UUID id) {
        return productService.getProduct(id);
    }
}
