<?php
$page_title = "About Us - Ter Travel in Bhutan";
$page_description = "Learn about Ter Travel's story, our local expertise, and why we're your trusted partner for authentic Bhutanese experiences.";
include 'includes/header.php';
?>

<section class="page-hero">
    <div class="hero-overlay"></div>
    <div class="container">
        <div class="hero-content">
            <h1>About Ter Travel</h1>
            <p>Born from a deep love for Bhutan and a desire to share its magic with the world, Ter Travel has been creating authentic Bhutanese experiences since 2010.</p>
        </div>
    </div>
</section>

<section class="about-story">
    <div class="container">
        <div class="content-grid">
            <div class="content-text">
                <h2>Our Story</h2>
                <p>Ter Travel was founded with a simple yet profound vision: to share the authentic beauty and wisdom of Bhutan with travelers seeking more than just a vacation. Our name "Ter" means "treasure" in Dzongkha, reflecting our belief that Bhutan itself is a treasure waiting to be discovered.</p>
                
                <p>What started as a small family business has grown into one of Bhutan's most trusted travel agencies, but we've never lost sight of our core values: authenticity, sustainability, and genuine care for our guests and our homeland.</p>
                
                <p>Every tour we design is infused with local knowledge passed down through generations, combined with modern comfort and safety standards. We don't just show you Bhutan; we help you experience it as we do - with reverence, joy, and deep appreciation.</p>
            </div>
            <div class="content-image">
                <img src="assets/images/about-story.jpg" alt="Our Story">
            </div>
        </div>
    </div>
</section>

<section class="team-section">
    <div class="container">
        <div class="section-header">
            <h2>Meet Our Team</h2>
            <p>Our passionate team of local experts brings decades of combined experience and genuine love for Bhutan</p>
        </div>
        
        <div class="team-grid">
            <?php
            $team_members = [
                [
                    'name' => 'Tenzin Wangchuk',
                    'role' => 'Founder & CEO',
                    'image' => 'assets/images/team-tenzin.jpg',
                    'bio' => 'Born in Thimphu, Tenzin has over 15 years of experience in Bhutanese tourism. His passion for sharing Bhutan\'s culture and natural beauty drives our mission.',
                    'specialties' => ['Cultural Tours', 'Government Relations', 'Sustainable Tourism']
                ],
                [
                    'name' => 'Pema Lhamo',
                    'role' => 'Tour Operations Manager',
                    'image' => 'assets/images/team-pema.jpg',
                    'bio' => 'With a background in hospitality and deep knowledge of Bhutanese traditions, Pema ensures every tour is authentic and memorable.',
                    'specialties' => ['Festival Tours', 'Cultural Experiences', 'Guest Relations']
                ],
                [
                    'name' => 'Karma Dorji',
                    'role' => 'Trekking Guide & Safety Expert',
                    'image' => 'assets/images/team-karma.jpg',
                    'bio' => 'A certified mountain guide with extensive knowledge of Bhutan\'s trekking routes and wilderness areas. Safety and adventure go hand in hand with Karma.',
                    'specialties' => ['High Altitude Trekking', 'Wilderness Safety', 'Mountain Photography']
                ]
            ];
            
            foreach ($team_members as $member): ?>
                <div class="team-card">
                    <div class="team-image">
                        <img src="<?php echo $member['image']; ?>" alt="<?php echo $member['name']; ?>">
                    </div>
                    <div class="team-content">
                        <h3><?php echo $member['name']; ?></h3>
                        <p class="team-role"><?php echo $member['role']; ?></p>
                        <p class="team-bio"><?php echo $member['bio']; ?></p>
                        <div class="team-specialties">
                            <strong>Specialties:</strong>
                            <ul>
                                <?php foreach ($member['specialties'] as $specialty): ?>
                                    <li><?php echo $specialty; ?></li>
                                <?php endforeach; ?>
                            </ul>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<section class="cta-section">
    <div class="container">
        <h2>Ready to Discover Bhutan?</h2>
        <p>Let our local expertise and passion for Bhutan create an unforgettable journey tailored just for you.</p>
        <div class="cta-buttons">
            <a href="tours.php" class="btn btn-primary">Explore Our Tours</a>
            <a href="contact.php" class="btn btn-secondary">Contact Us Today</a>
        </div>
    </div>
</section>

<style>
.page-hero {
    padding: 120px 0 80px;
    background: linear-gradient(rgba(5, 150, 105, 0.8), rgba(5, 150, 105, 0.8)),
                url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3') center/cover;
    color: var(--white);
    text-align: center;
}

.about-story {
    padding: 80px 0;
    background-color: var(--white);
}

.content-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    align-items: center;
}

.content-image img {
    width: 100%;
    border-radius: 12px;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

.team-section {
    padding: 80px 0;
    background-color: var(--gray-50);
}

.team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 32px;
}

.team-card {
    background-color: var(--white);
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.team-card:hover {
    transform: translateY(-4px);
}

.team-image {
    height: 250px;
    overflow: hidden;
}

.team-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.team-content {
    padding: 24px;
}

.team-role {
    color: var(--forest-green);
    font-weight: 600;
    margin-bottom: 12px;
}

.team-bio {
    color: var(--gray-600);
    margin-bottom: 16px;
}

.team-specialties ul {
    list-style: none;
    margin-top: 8px;
}

.team-specialties li {
    font-size: 14px;
    color: var(--gray-600);
    margin-bottom: 4px;
    padding-left: 16px;
    position: relative;
}

.team-specialties li::before {
    content: "•";
    color: var(--forest-green);
    position: absolute;
    left: 0;
}

@media (max-width: 768px) {
    .content-grid {
        grid-template-columns: 1fr;
        gap: 32px;
    }
    
    .team-grid {
        grid-template-columns: 1fr;
    }
}
</style>

<?php include 'includes/footer.php'; ?>
