<script setup></script>
<template>
  <!-- Contact Form -->
  <div class="col-md-8">
    <div class="row justify-content-center mb-4">
      <div class="col-6 col-sm-8 d-flex justify-content-between">
        <a href="https://www.linkedin.com/in/ibmabdulsalam">
          <i class="fa fa-x fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/ibmabdulsalam">
          <i class="fab fa-linkedin-in fa-2x"></i>
        </a>
        <a href="https://www.github.com/moriire">
          <i class="fa-2x fab fa-github fa-spin"></i>
        </a>
        <a href="https://www.facebook.com/IBMobolaji/">
          <i class="fa-2x fab fa-facebook-f"></i>
        </a>
      </div>
    </div>
    <div class="card shadow border-0">
      <div class="card-body">
        <form action="/send-message" method="POST">
          <div class="input-group mb-3">
            <span class="input-group-text"><i class="fa fa-user"></i></span>
            <div class="form-floating">
              <label for="name">Your Name</label>
              <input type="text" class="form-control" id="name" name="name" required />
            </div>
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text"><i class="fa fa-envelope"></i></span>
            <div class="form-floating">
              <label for="email">Your Email</label>
              <input
                type="email"
                class="form-control"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>
          <div class="form-floating mb-3">
            <label for="message">Your Message</label>
            <textarea
              class="form-control"
              id="message"
              name="message"
              rows="5"
              placeholder="Write your message"
              required
            ></textarea>
          </div>
          <div class="text-center">
            <button type="submit" class="btn btn-primary">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
