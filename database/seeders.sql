-- Insert Categories
INSERT INTO categories (name, description, slug, created_at, updated_at) VALUES
('Electronics', 'Latest electronic gadgets and devices', 'electronics', NOW(), NOW()),
('Fashion', 'Clothing, shoes, and accessories', 'fashion', NOW(), NOW()),
('Home & Kitchen', 'Home appliances and kitchenware', 'home-kitchen', NOW(), NOW()),
('Sports & Outdoors', 'Sports equipment and outdoor gear', 'sports-outdoors', NOW(), NOW()),
('Books', 'Physical and digital books', 'books', NOW(), NOW()),
('Toys & Games', 'Toys, games, and entertainment', 'toys-games', NOW(), NOW());

-- Insert Products for Electronics
INSERT INTO products (category_id, name, description, price, discount_price, stock_quantity, sku, image_url, rating, review_count, is_active, created_at, updated_at) VALUES
(1, 'Wireless Bluetooth Headphones', 'High-quality wireless headphones with noise cancellation. 30-hour battery life and premium sound quality.', 2999.00, 1999.00, 50, 'ELEC-001', 'https://via.placeholder.com/300x300?text=Wireless+Headphones', 4.5, 128, TRUE, NOW(), NOW()),
(1, 'USB-C Fast Charging Cable', 'Durable USB-C cable with fast charging support up to 100W. Perfect for smartphones and laptops.', 599.00, 399.00, 200, 'ELEC-002', 'https://via.placeholder.com/300x300?text=USB-C+Cable', 4.2, 87, TRUE, NOW(), NOW()),
(1, '4K Webcam HD', '4K Ultra HD webcam with built-in microphone. Perfect for video calls and streaming.', 4999.00, 3499.00, 35, 'ELEC-003', 'https://via.placeholder.com/300x300?text=4K+Webcam', 4.6, 156, TRUE, NOW(), NOW()),
(1, 'Portable Power Bank 20000mAh', 'High-capacity power bank with fast charging. Compatible with all devices.', 1999.00, 1299.00, 80, 'ELEC-004', 'https://via.placeholder.com/300x300?text=Power+Bank', 4.3, 234, TRUE, NOW(), NOW()),
(1, 'Smart LED Light Bulb', 'WiFi-enabled LED bulb with RGB colors. Control from your smartphone.', 799.00, 499.00, 120, 'ELEC-005', 'https://via.placeholder.com/300x300?text=Smart+Light', 4.4, 98, TRUE, NOW(), NOW()),
(1, 'Mechanical Gaming Keyboard', 'RGB mechanical keyboard with cherry switches. Perfect for gaming and typing.', 3999.00, 2799.00, 45, 'ELEC-006', 'https://via.placeholder.com/300x300?text=Gaming+Keyboard', 4.7, 203, TRUE, NOW(), NOW());

-- Insert Products for Fashion
INSERT INTO products (category_id, name, description, price, discount_price, stock_quantity, sku, image_url, rating, review_count, is_active, created_at, updated_at) VALUES
(2, 'Men\'s Cotton T-Shirt', 'Premium quality 100% cotton t-shirt. Available in multiple colors and sizes.', 499.00, 299.00, 150, 'FASH-001', 'https://via.placeholder.com/300x300?text=Cotton+T-Shirt', 4.2, 145, TRUE, NOW(), NOW()),
(2, 'Women\'s Athletic Leggings', 'Comfortable and stretchy athletic leggings with pockets. Perfect for gym and casual wear.', 1299.00, 799.00, 100, 'FASH-002', 'https://via.placeholder.com/300x300?text=Athletic+Leggings', 4.5, 189, TRUE, NOW(), NOW()),
(2, 'Running Shoes Pro Max', 'Lightweight and comfortable running shoes with cushioning support.', 3999.00, 2999.00, 60, 'FASH-003', 'https://via.placeholder.com/300x300?text=Running+Shoes', 4.6, 267, TRUE, NOW(), NOW()),
(2, 'Winter Wool Jacket', 'Warm and stylish winter jacket with water-resistant coating.', 5999.00, 3999.00, 40, 'FASH-004', 'https://via.placeholder.com/300x300?text=Winter+Jacket', 4.7, 156, TRUE, NOW(), NOW()),
(2, 'Casual Blue Jeans', 'Classic blue denim jeans with a modern fit. Perfect for everyday wear.', 1599.00, 999.00, 120, 'FASH-005', 'https://via.placeholder.com/300x300?text=Blue+Jeans', 4.3, 198, TRUE, NOW(), NOW()),
(2, 'Fashion Sunglasses UV400', 'Stylish sunglasses with UV400 protection. Perfect for sunny days.', 899.00, 499.00, 200, 'FASH-006', 'https://via.placeholder.com/300x300?text=Sunglasses', 4.4, 112, TRUE, NOW(), NOW());

-- Insert Products for Home & Kitchen
INSERT INTO products (category_id, name, description, price, discount_price, stock_quantity, sku, image_url, rating, review_count, is_active, created_at, updated_at) VALUES
(3, 'Stainless Steel Cookware Set', 'Complete 8-piece stainless steel cookware set with non-stick coating.', 4999.00, 2999.00, 50, 'HOME-001', 'https://via.placeholder.com/300x300?text=Cookware+Set', 4.6, 178, TRUE, NOW(), NOW()),
(3, 'Electric Coffee Maker', 'Automatic coffee maker with timer and brew strength control. Makes up to 12 cups.', 2999.00, 1999.00, 70, 'HOME-002', 'https://via.placeholder.com/300x300?text=Coffee+Maker', 4.5, 143, TRUE, NOW(), NOW()),
(3, 'Kitchen Knife Set 5-Piece', 'Professional kitchen knife set with ergonomic handles and sharp blades.', 1999.00, 1299.00, 90, 'HOME-003', 'https://via.placeholder.com/300x300?text=Knife+Set', 4.7, 234, TRUE, NOW(), NOW()),
(3, 'Microwave Oven 25L', 'Digital microwave oven with 25-liter capacity. Multiple heating modes.', 5999.00, 3999.00, 35, 'HOME-004', 'https://via.placeholder.com/300x300?text=Microwave', 4.4, 87, TRUE, NOW(), NOW()),
(3, 'Bamboo Cutting Board Set', 'Eco-friendly bamboo cutting boards set of 3. Naturally antimicrobial.', 799.00, 499.00, 160, 'HOME-005', 'https://via.placeholder.com/300x300?text=Cutting+Boards', 4.5, 112, TRUE, NOW(), NOW()),
(3, 'LED Kitchen Under Cabinet Lights', 'Bright LED lights for under cabinet kitchen lighting. Easy installation.', 1299.00, 799.00, 110, 'HOME-006', 'https://via.placeholder.com/300x300?text=Cabinet+Lights', 4.3, 95, TRUE, NOW(), NOW());

-- Insert Products for Sports & Outdoors
INSERT INTO products (category_id, name, description, price, discount_price, stock_quantity, sku, image_url, rating, review_count, is_active, created_at, updated_at) VALUES
(4, 'Yoga Mat Premium 6mm', 'Non-slip yoga mat with carrying strap. Perfect for yoga and pilates.', 1299.00, 799.00, 140, 'SPORT-001', 'https://via.placeholder.com/300x300?text=Yoga+Mat', 4.6, 189, TRUE, NOW(), NOW()),
(4, 'Dumbbells Set Adjustable', 'Adjustable dumbbells set 5-25kg. Great for home gym workout.', 7999.00, 4999.00, 30, 'SPORT-002', 'https://via.placeholder.com/300x300?text=Dumbbells', 4.7, 267, TRUE, NOW(), NOW()),
(4, 'Tent Camping 4 Person', 'Waterproof tent for 4 persons. Easy setup and portable design.', 3999.00, 2499.00, 45, 'SPORT-003', 'https://via.placeholder.com/300x300?text=Camping+Tent', 4.5, 156, TRUE, NOW(), NOW()),
(4, 'Bicycle Water Bottle 750ml', 'Insulated water bottle keeps drinks cold for 24 hours. Lightweight and durable.', 599.00, 399.00, 250, 'SPORT-004', 'https://via.placeholder.com/300x300?text=Water+Bottle', 4.4, 134, TRUE, NOW(), NOW()),
(4, 'Professional Badminton Racket', 'Lightweight badminton racket with carbon fiber frame. High performance.', 1999.00, 1299.00, 80, 'SPORT-005', 'https://via.placeholder.com/300x300?text=Badminton+Racket', 4.6, 98, TRUE, NOW(), NOW()),
(4, 'Jump Rope Speed Training', 'Professional speed jump rope for cardio and fitness training.', 499.00, 299.00, 200, 'SPORT-006', 'https://via.placeholder.com/300x300?text=Jump+Rope', 4.3, 145, TRUE, NOW(), NOW());

-- Insert Products for Books
INSERT INTO products (category_id, name, description, price, discount_price, stock_quantity, sku, image_url, rating, review_count, is_active, created_at, updated_at) VALUES
(5, 'The Complete Web Development Guide', 'Comprehensive guide to web development covering HTML, CSS, JavaScript, and frameworks.', 899.00, 599.00, 100, 'BOOK-001', 'https://via.placeholder.com/300x300?text=Web+Development', 4.5, 234, TRUE, NOW(), NOW()),
(5, 'Python Programming for Beginners', 'Learn Python from scratch. Perfect for beginners with practical examples.', 799.00, 499.00, 120, 'BOOK-002', 'https://via.placeholder.com/300x300?text=Python+Guide', 4.6, 189, TRUE, NOW(), NOW()),
(5, 'The Art of Problem Solving', 'Master algorithms and data structures with step-by-step solutions.', 1299.00, 799.00, 70, 'BOOK-003', 'https://via.placeholder.com/300x300?text=Problem+Solving', 4.7, 156, TRUE, NOW(), NOW()),
(5, 'Digital Marketing Mastery', 'Complete guide to digital marketing strategies and social media marketing.', 1099.00, 699.00, 85, 'BOOK-004', 'https://via.placeholder.com/300x300?text=Digital+Marketing', 4.4, 112, TRUE, NOW(), NOW()),
(5, 'Business Excellence Handbook', 'Learn business management, leadership, and entrepreneurship skills.', 1399.00, 899.00, 60, 'BOOK-005', 'https://via.placeholder.com/300x300?text=Business+Handbook', 4.5, 98, TRUE, NOW(), NOW()),
(5, 'Self-Improvement Daily Guide', 'Daily tips and strategies for personal development and success.', 699.00, 399.00, 150, 'BOOK-006', 'https://via.placeholder.com/300x300?text=Self-Improvement', 4.3, 203, TRUE, NOW(), NOW());

-- Insert Products for Toys & Games
INSERT INTO products (category_id, name, description, price, discount_price, stock_quantity, sku, image_url, rating, review_count, is_active, created_at, updated_at) VALUES
(6, 'Building Blocks Set 1000 Pieces', 'Creative building blocks set for kids and adults. Develop creativity and imagination.', 1499.00, 999.00, 100, 'TOY-001', 'https://via.placeholder.com/300x300?text=Building+Blocks', 4.6, 178, TRUE, NOW(), NOW()),
(6, 'Board Game Family Pack', 'Collection of 5 classic board games for family entertainment.', 1999.00, 1299.00, 80, 'TOY-002', 'https://via.placeholder.com/300x300?text=Board+Games', 4.5, 145, TRUE, NOW(), NOW()),
(6, 'Remote Control Drone 4K Camera', 'Professional RC drone with 4K camera and 30-minute flight time.', 8999.00, 5999.00, 25, 'TOY-003', 'https://via.placeholder.com/300x300?text=RC+Drone', 4.7, 267, TRUE, NOW(), NOW()),
(6, 'Puzzle Game 3D Mystery Cube', 'Challenging 3D puzzle cube that improves problem-solving skills.', 599.00, 399.00, 180, 'TOY-004', 'https://via.placeholder.com/300x300?text=Puzzle+Cube', 4.4, 134, TRUE, NOW(), NOW()),
(6, 'Kids Action Figure Bundle', 'Set of 12 action figures from popular movies and series.', 1299.00, 799.00, 120, 'TOY-005', 'https://via.placeholder.com/300x300?text=Action+Figures', 4.5, 189, TRUE, NOW(), NOW()),
(6, 'Educational Science Kit', 'STEM learning kit with experiments and educational activities for kids.', 1799.00, 1099.00, 60, 'TOY-006', 'https://via.placeholder.com/300x300?text=Science+Kit', 4.6, 156, TRUE, NOW(), NOW());

-- Insert Demo User
INSERT INTO users (first_name, last_name, email, password_hash, phone, address, city, state, postal_code, country, is_active, created_at, updated_at) VALUES
('Demo', 'User', 'demo@example.com', '$2a$10$O9iT7YP8k8R9k8R9k8R9k8R9k8R9k8R9k8R9k8R9k8R9k8R9k8R9k', '9876543210', '123 Main Street', 'Mumbai', 'Maharashtra', '400001', 'India', TRUE, NOW(), NOW());

COMMIT;
