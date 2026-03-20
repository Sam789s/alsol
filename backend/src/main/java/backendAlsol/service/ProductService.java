package backendAlsol.service;

import org.springframework.stereotype.Service;
import java.util.List;
import backendAlsol.model.Product;
import backendAlsol.repository.ProductRepository;

@Service
public class ProductService {

    private final ProductRepository repo;

    public ProductService(ProductRepository repo) {
        this.repo = repo;
    }

    public List<Product> getAllProducts() {
        return repo.findAll();
    }

    public Product saveProduct(Product product) {
        return repo.save(product);
    }

    public void deleteProduct(Long id) {
        repo.deleteById(id);
    }
}