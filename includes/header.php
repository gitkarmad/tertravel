<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo isset($page_title) ? $page_title : 'Ter Travel in Bhutan'; ?></title>
    <meta name="description" content="<?php echo isset($page_description) ? $page_description : 'Experience authentic Bhutanese culture with Ter Travel'; ?>">
    <meta name="keywords" content="Bhutan travel, Bhutan tours, cultural tours, trekking Bhutan, spiritual journey, Himalayan adventure">
    
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="assets/images/favicon.ico">
    
    <!-- CSS -->
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="assets/css/icons.css">
    
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <header class="header">
        <!-- Top Bar -->
        <div class="top-bar">
            <div class="container">
                <div class="top-bar-content">
                    <div class="contact-info">
                        <span><i class="icon-phone"></i> +975 17123456</span>
                        <span><i class="icon-email"></i> info@tertravelinbhutan.com</span>
                    </div>
                    <div class="social-links">
                        <a href="https://wa.me/97517123456" class="whatsapp-link">
                            <i class="icon-whatsapp"></i> WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Main Navigation -->
        <nav class="main-nav">
            <div class="container">
                <div class="nav-content">
                    <!-- Updated logo to use the actual Ter Travels logo image -->
                    <div class="logo">
                        <a href="index.php">
                            <img src="assets/images/logo.jpg" alt="Ter Travels - Experience the Extraordinary" class="logo-image">
                        </a>
                    </div>

                    <ul class="nav-menu" id="nav-menu">
                        <li><a href="index.php" class="<?php echo basename($_SERVER['PHP_SELF']) == 'index.php' ? 'active' : ''; ?>">Home</a></li>
                        <li><a href="about.php" class="<?php echo basename($_SERVER['PHP_SELF']) == 'about.php' ? 'active' : ''; ?>">About Us</a></li>
                        <li><a href="tours.php" class="<?php echo basename($_SERVER['PHP_SELF']) == 'tours.php' ? 'active' : ''; ?>">Tours</a></li>
                        <li><a href="travel-info.php" class="<?php echo basename($_SERVER['PHP_SELF']) == 'travel-info.php' ? 'active' : ''; ?>">Travel Info</a></li>
                        <li><a href="gallery.php" class="<?php echo basename($_SERVER['PHP_SELF']) == 'gallery.php' ? 'active' : ''; ?>">Gallery</a></li>
                        <li><a href="testimonials.php" class="<?php echo basename($_SERVER['PHP_SELF']) == 'testimonials.php' ? 'active' : ''; ?>">Testimonials</a></li>
                        <li><a href="blog.php" class="<?php echo basename($_SERVER['PHP_SELF']) == 'blog.php' ? 'active' : ''; ?>">Blog</a></li>
                        <li><a href="contact.php" class="<?php echo basename($_SERVER['PHP_SELF']) == 'contact.php' ? 'active' : ''; ?>">Contact</a></li>
                    </ul>

                    <div class="nav-actions">
                        <a href="contact.php" class="btn btn-primary">Book Now</a>
                        <button class="mobile-menu-toggle" id="mobile-menu-toggle">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    </header>

    <main class="main-content">

</main>
</body>
</html>
