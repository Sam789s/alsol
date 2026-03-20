package backendAlsol.controller;

import org.springframework.web.bind.annotation.*;
import java.util.List;
import backendAlsol.model.Product;
import backendAlsol.service.ProductService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/products")
public class ProductController {

    private final ProductService service;

    public ProductController(ProductService service) {
        this.service = service;
    }

    @GetMapping
    public List<Product> getAll() {
        return service.getAllProducts();
    }

    @PostMapping
    public Product create(@RequestBody Product product) {
        return service.saveProduct(product);
    }

    @PutMapping("/{id}")
    public Product update(@PathVariable Long id, @RequestBody Product product) {
        product.setId(id);
        return service.saveProduct(product);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.deleteProduct(id);
    }
}