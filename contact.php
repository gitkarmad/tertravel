<?php
$page_title = "Contact Us - Ter Travel in Bhutan";
$page_description = "Get in touch with Ter Travel to start planning your perfect Bhutanese adventure. Contact our local experts today.";

// Handle form submission
$message_sent = false;
$error_message = '';

if ($_POST) {
    $name = htmlspecialchars(trim($_POST['name'] ?? ''));
    $email = htmlspecialchars(trim($_POST['email'] ?? ''));
    $phone = htmlspecialchars(trim($_POST['phone'] ?? ''));
    $country = htmlspecialchars(trim($_POST['country'] ?? ''));
    $tour_type = htmlspecialchars(trim($_POST['tour_type'] ?? ''));
    $group_size = htmlspecialchars(trim($_POST['group_size'] ?? ''));
    $duration = htmlspecialchars(trim($_POST['duration'] ?? ''));
    $budget = htmlspecialchars(trim($_POST['budget'] ?? ''));
    $travel_date = htmlspecialchars(trim($_POST['travel_date'] ?? ''));
    $message = htmlspecialchars(trim($_POST['message'] ?? ''));
    
    // Basic validation
    if (empty($name) || empty($email) || empty($country)) {
        $error_message = 'Please fill in all required fields.';
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $error_message = 'Please enter a valid email address.';
    } else {
        // Here you would typically send an email or save to database
        // For demo purposes, we'll just show a success message
        $message_sent = true;
        
        // Example email sending (uncomment and configure for production)
        /*
        $to = 'info@tertravelinbhutan.com';
        $subject = 'New Tour Inquiry from ' . $name;
        $email_body = "Name: $name\nEmail: $email\nPhone: $phone\nCountry: $country\nTour Type: $tour_type\nGroup Size: $group_size\nDuration: $duration\nBudget: $budget\nTravel Date: $travel_date\nMessage: $message";
        $headers = "From: $email\r\nReply-To: $email\r\n";
        
        if (mail($to, $subject, $email_body, $headers)) {
            $message_sent = true;
        } else {
            $error_message = 'Sorry, there was an error sending your message. Please try again.';
        }
        */
    }
}

include 'includes/header.php';
?>

<section class="page-hero">
    <div class="hero-overlay"></div>
    <div class="container">
        <div class="hero-content">
            <h1>Contact Us</h1>
            <p>Ready to embark on your Bhutanese adventure? Get in touch with our local experts to start planning your perfect journey to the Land of the Thunder Dragon.</p>
        </div>
    </div>
</section>

<?php if ($message_sent): ?>
<section class="success-message">
    <div class="container">
        <div class="success-card">
            <h3>Thank You!</h3>
            <p>Your inquiry has been received. We will get back to you within 24 hours with a personalized itinerary and quote.</p>
        </div>
    </div>
</section>
<?php endif; ?>

<?php if ($error_message): ?>
<section class="error-message">
    <div class="container">
        <div class="error-card">
            <h3>Error</h3>
            <p><?php echo $error_message; ?></p>
        </div>
    </div>
</section>
<?php endif; ?>

<section class="contact-section">
    <div class="container">
        <div class="contact-grid">
            <!-- Contact Information -->
            <div class="contact-info">
                <h2>Get in Touch</h2>
                <p>Our friendly team is here to help you plan the perfect Bhutanese experience. Contact us through any of the methods below.</p>
                
                <div class="contact-methods">
                    <div class="contact-method">
                        <div class="method-icon">
                            <i class="icon-location"></i>
                        </div>
                        <div class="method-content">
                            <h4>Office Address</h4>
                            <p>Norzin Lam, Thimphu<br>Post Box 123<br>Bhutan</p>
                        </div>
                    </div>
                    
                    <div class="contact-method">
                        <div class="method-icon">
                            <i class="icon-phone"></i>
                        </div>
                        <div class="method-content">
                            <h4>Phone Numbers</h4>
                            <p>Office: +975 2 123456<br>Mobile: +975 17123456<br>Emergency: +975 17654321</p>
                        </div>
                    </div>
                    
                    <div class="contact-method">
                        <div class="method-icon">
                            <i class="icon-email"></i>
                        </div>
                        <div class="method-content">
                            <h4>Email Addresses</h4>
                            <p>General: info@tertravelinbhutan.com<br>Bookings: bookings@tertravelinbhutan.com<br>Support: support@tertravelinbhutan.com</p>
                        </div>
                    </div>
                    
                    <div class="contact-method">
                        <div class="method-icon">
                            <i class="icon-whatsapp"></i>
                        </div>
                        <div class="method-content">
                            <h4>WhatsApp</h4>
                            <p>+975 17123456</p>
                            <a href="https://wa.me/97517123456" class="btn btn-whatsapp">Chat on WhatsApp</a>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Contact Form -->
            <div class="contact-form-section">
                <div class="form-card">
                    <h3>Plan Your Bhutan Trip</h3>
                    <p>Fill out the form below and we'll get back to you within 24 hours with a personalized itinerary and quote.</p>
                    
                    <form method="POST" class="contact-form" id="contact-form" onsubmit="return validateContactForm()">
                        <div class="form-row">
                            <div class="form-group">
                                <label for="name">Full Name *</label>
                                <input type="text" id="name" name="name" required value="<?php echo $_POST['name'] ?? ''; ?>">
                            </div>
                            <div class="form-group">
                                <label for="email">Email Address *</label>
                                <input type="email" id="email" name="email" required value="<?php echo $_POST['email'] ?? ''; ?>">
                            </div>
                        </div>
                        
                        <div class="form-row">
                            <div class="form-group">
                                <label for="phone">Phone Number</label>
                                <input type="tel" id="phone" name="phone" value="<?php echo $_POST['phone'] ?? ''; ?>">
                            </div>
                            <div class="form-group">
                                <label for="country">Country *</label>
                                <input type="text" id="country" name="country" required value="<?php echo $_POST['country'] ?? ''; ?>">
                            </div>
                        </div>
                        
                        <div class="form-row">
                            <div class="form-group">
                                <label for="tour_type">Tour Type *</label>
                                <select id="tour_type" name="tour_type" required>
                                    <option value="">Select tour type</option>
                                    <option value="cultural" <?php echo ($_POST['tour_type'] ?? '') == 'cultural' ? 'selected' : ''; ?>>Cultural Tours</option>
                                    <option value="trekking" <?php echo ($_POST['tour_type'] ?? '') == 'trekking' ? 'selected' : ''; ?>>Trekking & Nature</option>
                                    <option value="spiritual" <?php echo ($_POST['tour_type'] ?? '') == 'spiritual' ? 'selected' : ''; ?>>Spiritual Journeys</option>
                                    <option value="festival" <?php echo ($_POST['tour_type'] ?? '') == 'festival' ? 'selected' : ''; ?>>Festival Tours</option>
                                    <option value="luxury" <?php echo ($_POST['tour_type'] ?? '') == 'luxury' ? 'selected' : ''; ?>>Luxury Escapes</option>
                                    <option value="custom" <?php echo ($_POST['tour_type'] ?? '') == 'custom' ? 'selected' : ''; ?>>Custom Tour</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="group_size">Group Size *</label>
                                <select id="group_size" name="group_size" required>
                                    <option value="">Number of travelers</option>
                                    <option value="1" <?php echo ($_POST['group_size'] ?? '') == '1' ? 'selected' : ''; ?>>Solo Traveler</option>
                                    <option value="2" <?php echo ($_POST['group_size'] ?? '') == '2' ? 'selected' : ''; ?>>2 People</option>
                                    <option value="3-4" <?php echo ($_POST['group_size'] ?? '') == '3-4' ? 'selected' : ''; ?>>3-4 People</option>
                                    <option value="5-8" <?php echo ($_POST['group_size'] ?? '') == '5-8' ? 'selected' : ''; ?>>5-8 People</option>
                                    <option value="9+" <?php echo ($_POST['group_size'] ?? '') == '9+' ? 'selected' : ''; ?>>9+ People</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="form-row">
                            <div class="form-group">
                                <label for="duration">Preferred Duration</label>
                                <select id="duration" name="duration">
                                    <option value="">Trip duration</option>
                                    <option value="3-5" <?php echo ($_POST['duration'] ?? '') == '3-5' ? 'selected' : ''; ?>>3-5 Days</option>
                                    <option value="6-8" <?php echo ($_POST['duration'] ?? '') == '6-8' ? 'selected' : ''; ?>>6-8 Days</option>
                                    <option value="9-12" <?php echo ($_POST['duration'] ?? '') == '9-12' ? 'selected' : ''; ?>>9-12 Days</option>
                                    <option value="13+" <?php echo ($_POST['duration'] ?? '') == '13+' ? 'selected' : ''; ?>>13+ Days</option>
                                    <option value="flexible" <?php echo ($_POST['duration'] ?? '') == 'flexible' ? 'selected' : ''; ?>>Flexible</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="budget">Budget Range (per person)</label>
                                <select id="budget" name="budget">
                                    <option value="">Select budget range</option>
                                    <option value="under-1000" <?php echo ($_POST['budget'] ?? '') == 'under-1000' ? 'selected' : ''; ?>>Under $1,000</option>
                                    <option value="1000-2000" <?php echo ($_POST['budget'] ?? '') == '1000-2000' ? 'selected' : ''; ?>>$1,000 - $2,000</option>
                                    <option value="2000-3000" <?php echo ($_POST['budget'] ?? '') == '2000-3000' ? 'selected' : ''; ?>>$2,000 - $3,000</option>
                                    <option value="3000-5000" <?php echo ($_POST['budget'] ?? '') == '3000-5000' ? 'selected' : ''; ?>>$3,000 - $5,000</option>
                                    <option value="5000+" <?php echo ($_POST['budget'] ?? '') == '5000+' ? 'selected' : ''; ?>>$5,000+</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label for="travel_date">Preferred Travel Date</label>
                            <input type="date" id="travel_date" name="travel_date" value="<?php echo $_POST['travel_date'] ?? ''; ?>">
                        </div>
                        
                        <div class="form-group">
                            <label for="message">Additional Information</label>
                            <textarea id="message" name="message" rows="5" placeholder="Tell us about your interests, special requirements, or any questions you have..."><?php echo $_POST['message'] ?? ''; ?></textarea>
                        </div>
                        
                        <button type="submit" class="btn btn-primary btn-full">Send Inquiry</button>
                    </form>
                </div>
            </div>
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

.success-message, .error-message {
    padding: 20px 0;
}

.success-card, .error-card {
    background-color: var(--forest-green-light);
    border: 1px solid var(--forest-green);
    border-radius: 8px;
    padding: 20px;
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
}

.error-card {
    background-color: var(--bhutan-red-light);
    border-color: var(--bhutan-red);
}

.contact-section {
    padding: 80px 0;
    background-color: var(--gray-50);
}

.contact-grid {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 48px;
}

.contact-methods {
    margin-top: 32px;
}

.contact-method {
    display: flex;
    gap: 16px;
    margin-bottom: 32px;
}

.method-icon {
    width: 48px;
    height: 48px;
    background-color: var(--forest-green-light);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.method-icon i {
    font-size: 24px;
    color: var(--forest-green);
}

.method-content h4 {
    margin-bottom: 8px;
    color: var(--gray-900);
}

.method-content p {
    color: var(--gray-600);
    margin-bottom: 8px;
}

.form-card {
    background-color: var(--white);
    border-radius: 12px;
    padding: 32px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.form-card h3 {
    margin-bottom: 8px;
}

.form-card > p {
    color: var(--gray-600);
    margin-bottom: 32px;
}

.contact-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}

.form-group {
    display: flex;
    flex-direction: column;
}

.form-group label {
    margin-bottom: 8px;
    font-weight: 500;
    color: var(--gray-700);
}

.form-group input,
.form-group select,
.form-group textarea {
    padding: 12px 16px;
    border: 1px solid var(--gray-300);
    border-radius: 8px;
    font-size: 16px;
    transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--forest-green);
    box-shadow: 0 0 0 3px rgba(5, 150, 105, 0.1);
}

.form-group textarea {
    resize: vertical;
    min-height: 120px;
}

.btn-full {
    width: 100%;
    padding: 16px;
    font-size: 18px;
}

@media (max-width: 768px) {
    .contact-grid {
        grid-template-columns: 1fr;
        gap: 32px;
    }
    
    .form-row {
        grid-template-columns: 1fr;
        gap: 16px;
    }
    
    .form-card {
        padding: 24px;
    }
}
</style>

<?php include 'includes/footer.php'; ?>
