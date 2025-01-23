<template>
    <div class="bg-dark text-light">
      <!-- Nav Bar -->
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand fw-bold" href="#">Hi There!</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link" href="#about">About Me</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#education">Education</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#course">Course</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#experience">IT Experience</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#hobbies">Hobbies</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#goals">Goals</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#gallery">Gallery</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#guestbook">Guestbook</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  
      <!-- Overlay with Modal -->
      <div id="overlay">
        <div class="overlay-content">
          <h1 class="text-light">🚧 Under Construction 🚧</h1>
          <p class="text-light">I'm working hard to improve this site. Stay tuned!</p>
          <div>
            <button
              class="btn btn-primary mt-3"
              data-bs-toggle="modal"
              data-bs-target="#youtubeModal"
            >
              Enter Lobby
            </button>
            <button class="btn btn-secondary mt-3" @click="closeOverlay">
              Close
            </button>
          </div>
        </div>
      </div>
  
      <!-- Modal -->
      <div
        class="modal fade"
        id="youtubeModal"
        tabindex="-1"
        aria-labelledby="youtubeModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="youtubeModalLabel">Waiting Room</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="ratio ratio-16x9">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/MYPVQccHhAQ?si=6kw4wOA0FPiwLxRg"
                  title="Loby"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Content Sections -->
      <div class="container text-center py-5">
        <h1 class="text-info fw-bold display-4">Kathryn Oroceo</h1>
        <img
          src="https://github.com/kporoceo/webprog-image-repo/blob/main/pfp.jpg?raw=true"
          width="150"
          height="150"
          alt="Profile Picture"
          class="rounded-circle border border-info border-3 shadow-lg"
        />
        <p class="mt-3 fst-italic text-light-emphasis">
          Aspiring IT Professional | Co-owner of PETKINGDOM PH
        </p>
      </div>
      <!-- Additional sections go here -->
  
      <!-- Gallery -->
      <div class="container mb-5">
        <div class="p-4 bg-dark-subtle text-dark rounded-3 shadow">
          <h3 class="fw-bold text-info"><i class="fas fa-images"></i> Picture Gallery</h3>
          <p>📸 Work in Progress...</p>
          <div id="gallery" class="gallery"></div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        imageUrls: [
          "https://github.com/kporoceo/webprog-image-repo/blob/main/pk%20w%20cousins.jpg?raw=true",
          "https://github.com/kporoceo/webprog-image-repo/blob/main/pk%20with%20cousisns%202.jpg?raw=true",
          "https://github.com/kporoceo/webprog-image-repo/blob/main/pk%20with%20cousins%203.jpg?raw=true",
          "https://github.com/kporoceo/webprog-image-repo/blob/main/me%20n%20mary%20pk.jpg?raw=true",
        ],
      };
    },
    mounted() {
      this.generateGallery();
    },
    methods: {
      closeOverlay() {
        document.getElementById("overlay").style.display = "none";
      },
      generateGallery() {
        const galleryContainer = document.getElementById("gallery");
        galleryContainer.innerHTML = ""; // Clear existing content
  
        this.imageUrls.forEach((url) => {
          const img = document.createElement("img");
          img.src = url;
          img.alt = "Gallery Image";
          galleryContainer.appendChild(img);
        });
      },
    },
  };
  </script>
  
  <style>
  /* Styles from style.css */
  #overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    z-index: 1050;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .overlay-content {
    text-align: center;
    animation: fadeIn 2s ease-in-out;
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 20px;
  }
  .gallery img {
    width: 200px;
    height: auto;
    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  </style>
  