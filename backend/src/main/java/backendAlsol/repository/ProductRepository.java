package backendAlsol.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import backendAlsol.model.Product;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
}