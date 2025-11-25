package com.unicornemporium.config;

import com.unicornemporium.model.Product;
import com.unicornemporium.repository.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;

@Component
public class DataInitializer implements CommandLineRunner {
    
    private final ProductRepository productRepository;

    public DataInitializer(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }
    
    @Override
    public void run(String... args) {
        if (productRepository.count() == 0) {
            initializeProducts();
        }
    }
    
    private void initializeProducts() {
        List<Product> products = Arrays.asList(
            createProduct(1L, "Sparkle Supreme", 9999.0, "classic", "🦄",
                "A classic white unicorn with a golden horn and the ability to grant wishes",
                Arrays.asList("Wish Granting", "Night Vision", "Gentle Temperament")),
                
            createProduct(2L, "Rainbow Dash", 12999.0, "rainbow", "🌈",
                "Creates rainbows wherever it goes. Perfect for parties and special events",
                Arrays.asList("Rainbow Creation", "Super Speed", "Weather Control")),
                
            createProduct(3L, "Celestial Star", 15999.0, "celestial", "⭐",
                "Born from stardust with cosmic powers. Glows beautifully at night",
                Arrays.asList("Starlight Aura", "Teleportation", "Cosmic Wisdom")),
                
            createProduct(4L, "Mystic Moon", 14999.0, "celestial", "🌙",
                "Silver-maned beauty with lunar powers. Guards dreams and prevents nightmares",
                Arrays.asList("Dream Protection", "Moonbeam", "Peaceful Presence")),
                
            createProduct(5L, "Fire Phoenix", 18999.0, "rare", "🔥",
                "Rare fire unicorn with phoenix-like abilities. Can be reborn from flames",
                Arrays.asList("Fire Immunity", "Rebirth", "Heat Generation")),
                
            createProduct(6L, "Crystal Princess", 11999.0, "classic", "💎",
                "Adorned with magical crystals. Her mane sparkles like diamonds",
                Arrays.asList("Crystal Magic", "Healing Powers", "Royal Lineage")),
                
            createProduct(7L, "Thunder Strike", 16999.0, "rare", "⚡",
                "Commands thunder and lightning. Protects against dark forces",
                Arrays.asList("Lightning Control", "Storm Summoning", "Electric Speed")),
                
            createProduct(8L, "Bubble Bliss", 10999.0, "rainbow", "🫧",
                "Creates magical bubbles that carry joy and laughter. Perfect for children",
                Arrays.asList("Bubble Magic", "Joy Aura", "Gentle Nature")),
                
            createProduct(9L, "Cherry Blossom", 13999.0, "rainbow", "🌸",
                "Spring unicorn that makes flowers bloom. Brings new life wherever she walks",
                Arrays.asList("Flower Growth", "Spring Magic", "Healing Touch"))
        );
        
        productRepository.saveAll(products);
        System.out.println("✨ Initialized " + products.size() + " magical unicorns!");
    }
    
    private Product createProduct(Long id, String name, Double price, String category, 
                                 String image, String description, List<String> features) {
        Product product = new Product();
        product.setId(id);
        product.setName(name);
        product.setPrice(price);
        product.setCategory(category);
        product.setImage(image);
        product.setDescription(description);
        product.setFeatures(features);
        return product;
    }
}
