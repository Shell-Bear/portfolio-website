document.addEventListener('DOMContentLoaded', function () {
    const icons = document.querySelectorAll('.icon');
    const infoSection = document.querySelector('.info-section');

    function loadSection(id) {
        switch (id) {
            case 'home-icon':
                infoSection.innerHTML = `
                    <div class="home-info">
                        <h1>Neeraj Kumar</h1>
                        <p class="job-title">Technical Support</p>
                    </div>
                `;
                break;
            case 'about-icon':
                infoSection.innerHTML = `
                    <h3>About Me</h3>
                    <p>Hello, My name is a Neeraj Kumar. I reside in Delhi,Rohini Location with my family. I have done my graduation from Delhi University in 2018 & I completed my Schooling From CBSE Broad in 2015.  <br>  <br>I have over 6 years of experience working in a Technical Support role. With 6 years of diverse experience, I have had the opportunity to work with three esteemed organizations: Precision Informatic, NTT DATA, and ALP Consulting. At Precision Informatic, I held roles as a Backup Engineer or Field Engineer, delivering technical support to prominent clients such as DDB Mudra, Laxmi Bank, Bajaj Allianz, Samsung, and others. I was later entrusted with an onsite technical position at Bajaj Allianz. In my role at NTT DATA, I served as a Deskside Support Engineer at CITI Bank, ensuring seamless IT operations. Currently, I am with ALP Consulting, where I continue to provide expert support to clients such as Concentrix.</p>
                    <p> <br> My Other details :- <br> </p>
                    <p> <br> Age: 26</p>
                    <p>Residence: Delhi,INDIA</p>
                    <p>Address: North West Delhi,Rohini Sec 23, Delhi - 110086</p>
                    <p>Email: neerajkumar.nee333@gmail.com</p>
                    <p>Phone: +91 8368101548</p>
                `;
                break;
            case 'resume-icon':
                infoSection.innerHTML = `
                    <div class="resume-section">
                        <div class="resume-left">
                            <h3 class="resume-title">Resume</h3>
                            <div class="experience">
                                <h4 class="section-title">Experience</h4>
                                <div class="experience-item">
                                    <div class="experience-details">
                                        <h5>Remote Desktop Support</h5>
                                        <p>ALP Concentrix (2021 - Current)</p>
                                        <p>I manage ticket queues in BMC Remedy, troubleshoot software and OS issues, provide remote support, and handle VPN and Active Directory administration.</p>
                                    </div>
                                    <div class="timeline">
                                        <div class="circle"></div>
                                        <div class="line"></div>
                                    </div>
                                </div>
                                <div class="experience-item">
                                    <div class="experience-details">
                                        <h5>Desk Side Support</h5>
                                        <p>NTT DATA (10/2019 - 11/2021)</p>
                                        <p>I provide end-user support for CITI Bank, manage ServiceNow ticket queues, troubleshoot OS and software issues, and collaborate on projects like Windows migration and hardware upgrades.</p>
                                    </div>
                                    <div class="timeline">
                                        <div class="circle"></div>
                                        <div class="line"></div>
                                    </div>
                                </div>
                                <div class="experience-item">
                                    <div class="experience-details">
                                        <h5>System Engineer</h5>
                                        <p>Precision Informatic (M) Pvt. Ltd. (04/2018 - 09/2019)</p>
                                        <p>provide support to multiple Client. I deliver end-user support, manage Sapphire IMS ticket queues, troubleshoot OS and hardware issues, and provide software and networking support, including basic printer assistance.</p>
                                    </div>
                                    <div class="timeline">
                                        <div class="circle"></div>
                                        <div class="line"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="education">
                                <h4 class="section-title">Education</h4>
                                <div class="education-item">
                                    <div class="education-details">
                                        <h5>Bachelor of Arts (BA Hons.)</h5>
                                        <p>University of Delhi (2015-2018)</p>
                                    </div>
                                    <div class="timeline">
                                        <div class="circle"></div>
                                        <div class="line"></div>
                                    </div>
                                </div>
                                <div class="education-item">
                                    <div class="education-details">
                                        <h5>Higher Secondary Education (12th)</h5>
                                        <p>CBSE Board - Central Board of Secondary Education (2015)</p>                    
                                    </div>
                                    <div class="timeline">
                                        <div class="circle"></div>
                                        <div class="line"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="resume-right">
                            <div class="technical-tools">
                                <h4 class="section-title">Technical/Tools Skills</h4>
                                <div class="skill-bar">
                                    <h4 class="skill-title">Troubleshooting</h4>
                                    <div class="bar">
                                        <div class="bar-fill" style="width: 90%;"></div>
                                        <div class="percentage">90%</div>
                                    </div>
                                </div>
                                <div class="skill-bar">
                                    <h4 class="skill-title">Ticketing Tools</h4>
                                    <div class="bar">
                                        <div class="bar-fill" style="width: 80%;"></div>
                                        <div class="percentage">80%</div>
                                    </div>
                                </div>
                                <div class="skill-bar">
                                    <h4 class="skill-title">Remote Tools</h4>
                                    <div class="bar">
                                        <div class="bar-fill" style="width: 85%;"></div>
                                        <div class="percentage">85%</div>
                                    </div>
                                </div>
                                <div class="skill-bar">
                                    <h4 class="skill-title">Hardware Troubleshooting</h4>
                                    <div class="bar">
                                        <div class="bar-fill" style="width: 90%;"></div>
                                        <div class="percentage">90%</div>
                                    </div>
                                </div>
                            </div>
                            <div class="scripting-skills">
                                <h4 class="section-title">Scripting Skills</h4>
                                <div class="skill-bar">
                                    <h4 class="skill-title">Python</h4>
                                    <div class="bar">
                                        <div class="bar-fill" style="width: 60%;"></div>
                                        <div class="percentage">60%</div>
                                    </div>
                                </div>
                                <div class="skill-bar">
                                    <h4 class="skill-title">Shell Scripting</h4>
                                    <div class="bar">
                                        <div class="bar-fill" style="width: 50%;"></div>
                                        <div class="percentage">50%</div>
                                    </div>
                                </div>
                            </div>
                            <div class="linux-skills">
                                <h4 class="section-title">Linux Skills</h4>
                                <div class="skill-bar">
                                    <h4 class="skill-title">RHEL 7</h4>
                                    <div class="bar">
                                        <div class="bar-fill" style="width: 60%;"></div>
                                        <div class="percentage">60%</div>
                                    </div>
                                </div>
                                <div class="skill-bar">
                                    <h4 class="skill-title">Command Line/Terminal</h4>
                                    <div class="bar">
                                        <div class="bar-fill" style="width: 60%;"></div>
                                        <div class="percentage">60%</div>
                                    </div>
                                </div>
                                <div class="skill-bar">
                                    <h4 class="skill-title">Package Management (RPM, YUM, DNF)</h4>
                                    <div class="bar">
                                        <div class="bar-fill" style="width: 60%;"></div>
                                        <div class="percentage">60%</div>
                                    </div>
                                </div>
                            </div>
                            <div class="certificates">
                                <h4 class="section-title">Certificates/Courses</h4>
                                <div class="certificate-box">
                                    <div class="certificate">
                                        <div>A+N+</div>
                                        <div>JetKing</div>
                                    </div>
                                    <div class="certificate">
                                        <div>RHEL7</div>
                                        <div>Rooman Technology</div>
                                    </div>
                                    <div class="certificate">
                                        <div>Python</div>
                                        <div>Coding byte</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                break;
            case 'contact-icon':
                infoSection.innerHTML = `
                    <div class="contact-info">
                        <div class="box">
                            <i class="fas fa-map-marker-alt"></i>
                            <p>Delhi, India</p>
                        </div>
                        <div class="box">
                            <i class="fas fa-phone-alt"></i>
                            <p>+91 8368101548</p>
                        </div>
                        <div class="box">
                            <i class="fas fa-envelope"></i>
                            <p>Neerajkumar.nee33@gmail.com</p>
                        </div>
                        <div class="box">
                            <i class="fab fa-linkedin"></i>
                            <p>neeraj-kumar-nnk</p>
                        </div>
                    </div>
                    <div class="map-container">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d27993.008739005152!2d77.07934892522259!3d28.715777489606065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sDelhi%2CRohini%2023!5e0!3m2!1sen!2sin!4v1724511792095!5m2!1sen!2sin"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                    <div class="message-form">
                        <form id="contact-form">
                            <label for="name">Name:</label>
                            <input type="text" id="name" name="name" required>
                            
                            <label for="email">Email:</label>
                            <input type="email" id="email" name="email" required>
                            
                            <label for="message">Message:</label>
                            <textarea id="message" name="message" rows="4" required></textarea>
                            
                            <button type="submit">Send Message</button>
                        </form>
                    </div>
                `;
                break;
            default:
                break;
        }
    }

    // Set the default page to "Home" when the site loads
    loadSection('home-icon');

    icons.forEach(icon => {
        icon.addEventListener('click', () => {
            const id = icon.id;
            loadSection(id);
        });
    });

    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    let currentIndex = 0;
    const sections = ['home-icon', 'about-icon', 'resume-icon', 'contact-icon'];

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + sections.length) % sections.length;
        document.getElementById(sections[currentIndex]).click();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % sections.length;
        document.getElementById(sections[currentIndex]).click();
    });

    document.addEventListener('mousemove', function(e) {
        const x = (e.clientX / window.innerWidth) * 80; 
        const y = (e.clientY / window.innerHeight) * 80;

        document.body.style.backgroundPosition = `${50 - x}% ${50 - y}%`;
    });

    // Initialize EmailJS
    emailjs.init('yU2StdMXPE1rOO8xq'); // Replace with your EmailJS user ID

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Send the form data using EmailJS
        emailjs.sendForm('service_59tkd7j', 'template_tbo67k9', this)
            .then(function(response) {
                alert('Message sent successfully!');
                document.getElementById('contact-form').reset(); // Reset the form
            }, function(error) {
                alert('Failed to send the message. Please try again.');
            });
    });
});
