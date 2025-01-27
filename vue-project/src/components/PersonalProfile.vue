<template>
<div class="container">
    <!-- Personal Profile Section -->
    <div class="personal-profile">
        <h1>Personal Profile</h1>
        <img src="https://github.com/kporoceo/webprog-image-repo/blob/main/pfp.jpg?raw=true" 
            width="100" height="100" alt="Profile Picture">
        <p class="mt-3 fst-italic text-light-emphasis">Aspiring IT Professional | Co-owner of PETKINGDOM PH</p>
    </div>

``
    <div class="grid-container">
        <div class="about-me">
            <h3>About Me:</h3>
            <p> I am a co-owner of PETKINGDOM PH at San Lorenzo Place Mall in Chino Roces.
                <br>This is a family business that I started alongside my siblings and cousins during the pandemic.
                <br> Thankfully, we are still in operation to this day.
                <br> Check us out on:
                <a href="https://www.facebook.com/PETKINGDOMPH" target="_blank">Facebook</a>,
                <a href="https://www.instagram.com/petkingdomph/" target="_blank">Instagram</a>, and
                <a href="https://shopee.ph/petkingdomph" target="_blank">Shopee</a>!
            </p>
        </div>

        <div class="education">
            <h3>Education:</h3>
            <p>My Post-HS Academic Timeline</p>
            <ul>
                <li>UST-SHS: Accountancy, Business, and Management Strand Graduate, 2016-2018</li>
                <li>UST-AMV: Bachelor of Science in Accountancy (disc.), 2018-2021 </li>
                <li>APC-SOCIT: Bachelor of Science in Information Technology with specialization in Mobile and Internet Technologies (curr.), 2022 onwards </li>
            </ul>
        </div>

        <div class="course">
            <h3>Course:</h3>
            <p>As seen above, I am currently taking <span class="highlight">BSIT-MI with Cybersecurity</span> track as my elective.
            <br> I am an irregular transferee student but technically on my 3rd A.Y. here on APC.
            </p>
        </div>

        <div class="it-experience">
            <h3>IT Experience:</h3>
            <p>WIP</p>
        </div>

        <div class="hobbies">
            <h3>Hobbies & Interests:</h3>
            <p>WIP</p>
        </div>

        <div class="goals">
            <h3>Goals in Life:</h3>
            <table style="width:100%">
                <thead>
                    <tr>
                        <th>2025</th>
                        <th>2026</th>
                        <th>2027</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>TOPIK Certification 🇰🇷</td>
                        <td>Part-time Job (Internship Shortcut 🤔)</td>
                        <td>Graduation! (Super Delayed 🥶)</td>
                    </tr>
                    <tr>
                        <td>Cybersecurity Credentials</td>
                        <td>More Credentials</td>
                        <td>Professionally enter the IT Industry</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <div class="gallery">
        <h3>Picture Gallery:</h3>
        <div class="gallery">
          <a target="_blank" href="https://github.com/kporoceo/webprog-image-repo/blob/main/pk%20w%20cousins.jpg?raw=true">
            <img src="https://github.com/kporoceo/webprog-image-repo/blob/main/pk%20w%20cousins.jpg?raw=true" alt="pk with cousins" width="600" height="400">
          </a>
            <div class="desc">Add a description of the image here</div>
        </div>

        <div class="gallery">
          <a target="_blank" href="https://github.com/kporoceo/webprog-image-repo/blob/main/pk%20with%20cousisns%202.jpg?raw=true">
            <img src="https://github.com/kporoceo/webprog-image-repo/blob/main/pk%20with%20cousisns%202.jpg?raw=true" alt="pk with cousins 2" width="600" height="400">
          </a>
            <div class="desc">Add a description of the image here</div> 
        </div>

        <div class="gallery">
          <a target="_blank" href="https://github.com/kporoceo/webprog-image-repo/blob/main/pk%20with%20cousins%203.jpg?raw=true">
            <img src="https://github.com/kporoceo/webprog-image-repo/blob/main/pk%20with%20cousins%203.jpg?raw=true" alt="pk with cousins 3" width="600" height="400">
          </a>
            <div class="desc">Add a description of the image here</div>
        </div>

        <div class="gallery">
          <a target="_blank" href="https://github.com/kporoceo/webprog-image-repo/blob/main/me%20n%20mary%20pk.jpg?raw=true">
            <img src="https://github.com/kporoceo/webprog-image-repo/blob/main/me%20n%20mary%20pk.jpg?raw=true" alt="me and mary" width="600" height="400">
          </a>
            <div class="desc">My sister and I.</div>
        </div>
    </div>
</div>
</template>

<script></script>

<style>
div.gallery {
  margin: 5px;
  border: 1px solid #ccc;
  float: left;
  width: 180px;
}

div.gallery:hover {
  border: 1px solid #777;
}

div.gallery img {
  width: 100%;
  height: auto;
}

div.desc {
  padding: 15px;
  text-align: center;
}

body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
    color: #333;
}

.container {
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.personal-profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    text-align: center;
}

.personal-profile img {
    border-radius: 50%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.grid-container {
    display: grid;
    grid-template-columns: 1fr; /* One column layout */
    gap: 20px;
}

.about-me, .education, .course, .it-experience, .hobbies, .goals, .picture-gallery {
    background-color: rgba(255, 255, 255, 0.8);
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.highlight {
    background-color: #ffe58a;
    padding: 0 4px;
    font-weight: bold;
    color: #333;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px 0;
    font-size: 14px;
}

table th, table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
}

table th {
    background-color: #2196F3;
    color: white;
}

table td {
    background-color: #f9f9f9;
}


</style>