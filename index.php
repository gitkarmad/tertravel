<?php
$page_title = "Ter Travel in Bhutan - Discover Hidden Treasures";
$page_description = "Experience authentic Bhutanese culture, spiritual journeys, and Himalayan adventures with Ter Travel. Your trusted local guide to the Last Shangri-La.";
include 'includes/header.php';
?>

<!-- Hero Section -->
<section class="hero">
    <div class="hero-overlay"></div>
    <div class="hero-content">
        <h1>Discover Hidden Treasures</h1>
        <p class="hero-subtitle">with Ter Travel in Bhutan</p>
        <p class="hero-description">
            Experience the Last Shangri-La through authentic cultural journeys, spiritual adventures, and breathtaking Himalayan landscapes
        </p>
        <div class="hero-buttons">
            <a href="tours.php" class="btn btn-primary">Explore Tours</a>
            <a href="contact.php" class="btn btn-secondary">Plan Your Trip</a>
        </div>
    </div>
</section>

<!-- Quick Contact Bar -->
<section class="quick-contact">
    <div class="container">
        <div class="quick-contact-content">
            <div class="quick-contact-text">
                <h3>Ready to explore Bhutan?</h3>
                <p>Contact us for personalized travel planning</p>
            </div>
            <div class="quick-contact-buttons">
                <a href="https://wa.me/97517123456" class="btn btn-whatsapp">
                    <i class="icon-whatsapp"></i> WhatsApp
                </a>
                <a href="tel:+97517123456" class="btn btn-phone">
                    <i class="icon-phone"></i> Call Now
                </a>
                <a href="mailto:info@tertravelinbhutan.com" class="btn btn-email">
                    <i class="icon-email"></i> Email Us
                </a>
            </div>
        </div>
    </div>
</section>

<!-- Featured Tours -->
<section class="featured-tours">
    <div class="container">
        <div class="section-header">
            <h2>Featured Tour Packages</h2>
            <p>Carefully crafted experiences that showcase the best of Bhutan's culture, nature, and spirituality</p>
        </div>

        <div class="tours-grid">
            <?php
            $featured_tours = [
                [
                    'id' => 1,
                    'title' => 'Cultural Heritage Tour',
                    'duration' => '7 Days',
                    'price' => '$1,200 - $1,800',
                    'image' => 'assets/images/cultural-tour.jpg',
                    'category' => 'Cultural',
                    'highlights' => ['Paro Taktsang', 'Punakha Dzong', 'Thimphu Sightseeing'],
                    'description' => 'Immerse yourself in Bhutan\'s rich cultural heritage with visits to ancient dzongs, monasteries, and traditional craft centers.'
                ],
                [
                    'id' => 2,
                    'title' => 'Himalayan Trekking Adventure',
                    'duration' => '10 Days',
                    'price' => '$1,800 - $2,500',
                    'image' => 'assets/images/trekking-tour.jpg',
                    'category' => 'Trekking',
                    'highlights' => ['Druk Path Trek', 'Mountain Views', 'Alpine Lakes'],
                    'description' => 'Challenge yourself with breathtaking treks through pristine Himalayan landscapes and experience Bhutan\'s untouched wilderness.'
                ],
                [
                    'id' => 3,
                    'title' => 'Spiritual Journey',
                    'duration' => '5 Days',
                    'price' => '$900 - $1,400',
                    'image' => 'assets/images/spiritual-tour.jpg',
                    'category' => 'Spiritual',
                    'highlights' => ['Meditation Sessions', 'Monastery Visits', 'Spiritual Guidance'],
                    'description' => 'Find inner peace through guided meditation, monastery visits, and spiritual teachings from Buddhist masters.'
                ]
            ];

            foreach ($featured_tours as $tour): ?>
                <div class="tour-card">
                    <div class="tour-image">
                        <img src="<?php echo $tour['image']; ?>" alt="<?php echo $tour['title']; ?>">
                        <span class="tour-category"><?php echo $tour['category']; ?></span>
                    </div>
                    <div class="tour-content">
                        <h3><?php echo $tour['title']; ?></h3>
                        <div class="tour-meta">
                            <span><i class="icon-clock"></i> <?php echo $tour['duration']; ?></span>
                            <span><i class="icon-users"></i> 2-12 people</span>
                        </div>
                        <ul class="tour-highlights">
                            <?php foreach ($tour['highlights'] as $highlight): ?>
                                <li><i class="icon-location"></i> <?php echo $highlight; ?></li>
                            <?php endforeach; ?>
                        </ul>
                        <div class="tour-footer">
                            <span class="tour-price"><?php echo $tour['price']; ?></span>
                            <a href="tour-details.php?id=<?php echo $tour['id']; ?>" class="btn btn-primary">View Details</a>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>

        <div class="section-footer">
            <a href="tours.php" class="btn btn-outline">View All Tours</a>
        </div>
    </div>
</section>

<!-- Why Choose Us -->
<section class="why-choose-us">
    <div class="container">
        <div class="section-header">
            <h2>Why Choose Ter Travel?</h2>
            <p>Your trusted partner for authentic Bhutanese experiences</p>
        </div>

        <div class="features-grid">
            <div class="feature">
                <div class="feature-icon">
                    <i class="icon-users"></i>
                </div>
                <h3>Local Expertise</h3>
                <p>Born and raised in Bhutan, we know every hidden gem and cultural nuance</p>
            </div>
            <div class="feature">
                <div class="feature-icon">
                    <i class="icon-location"></i>
                </div>
                <h3>Personalized Service</h3>
                <p>Tailored itineraries designed around your interests and preferences</p>
            </div>
            <div class="feature">
                <div class="feature-icon">
                    <i class="icon-star"></i>
                </div>
                <h3>Sustainable Tourism</h3>
                <p>Committed to preserving Bhutan's environment and supporting local communities</p>
            </div>
            <div class="feature">
                <div class="feature-icon">
                    <i class="icon-phone"></i>
                </div>
                <h3>24/7 Support</h3>
                <p>Round-the-clock assistance throughout your journey in Bhutan</p>
            </div>
        </div>
    </div>
</section>

<!-- Testimonials Preview -->
<section class="testimonials-preview">
    <div class="container">
        <div class="section-header">
            <h2>What Our Travelers Say</h2>
            <p>Real experiences from our valued guests</p>
        </div>

        <div class="testimonials-grid">
            <?php
            $testimonials = [
                [
                    'name' => 'Sarah Johnson',
                    'country' => '🇺🇸 USA',
                    'rating' => 5,
                    'text' => 'Ter Travel made our Bhutan trip absolutely magical. The cultural insights and personalized service were exceptional!'
                ],
                [
                    'name' => 'Hiroshi Tanaka',
                    'country' => '🇯🇵 Japan',
                    'rating' => 5,
                    'text' => 'Professional, knowledgeable guides and perfectly organized itinerary. Bhutan\'s beauty exceeded all expectations.'
                ],
                [
                    'name' => 'Emma Wilson',
                    'country' => '🇬🇧 UK',
                    'rating' => 5,
                    'text' => 'The spiritual journey tour was life-changing. Ter Travel\'s attention to detail and local expertise was outstanding.'
                ]
            ];

            foreach ($testimonials as $testimonial): ?>
                <div class="testimonial-card">
                    <div class="testimonial-rating">
                        <?php for ($i = 0; $i < $testimonial['rating']; $i++): ?>
                            <i class="icon-star filled"></i>
                        <?php endfor; ?>
                    </div>
                    <p class="testimonial-text">"<?php echo $testimonial['text']; ?>"</p>
                    <div class="testimonial-author">
                        <strong><?php echo $testimonial['name']; ?></strong>
                        <span><?php echo $testimonial['country']; ?></span>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>

        <div class="section-footer">
            <a href="testimonials.php" class="btn btn-outline">Read More Reviews</a>
        </div>
    </div>
</section>

<!-- CTA Section -->
<section class="cta-section">
    <div class="container">
        <h2>Ready for Your Bhutanese Adventure?</h2>
        <p>Let us create an unforgettable journey tailored just for you. Contact us today to start planning your dream trip to the Land of the Thunder Dragon.</p>
        <div class="cta-buttons">
            <a href="contact.php" class="btn btn-primary">Get Free Quote</a>
            <a href="travel-info.php" class="btn btn-secondary">Travel Information</a>
        </div>
    </div>
</section>

<?php include 'includes/footer.php'; ?>
