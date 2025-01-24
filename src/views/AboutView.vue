<script setup>
import { ref } from 'vue';
import ImagesSlider from './components/ImagesSlider.vue';
const items = ref([
  "/src/assets/personal-1.png",
  "/src/assets/personal-1.png",
  "/src/assets/personal-1.png",
  "/src/assets/personal-1.png",
  "/src/assets/personal-1.png",
])
</script>
<template>
  <div class="col-lg-5 mb-lg-0 text-center">
    <!--img
      src="/src/assets/personal-1.png"
      alt="Ibraheem Abdulsalam Mobolaji"
      class=".rounded-circle img-fluid .shadow"
    /-->
    <ImagesSlider :items="items" />
  </div>
  <div class="col-lg-7">
    <div class="row align-items-center">
      <div class="col-lg-10">
        <h3 class="mb-4">Software Developer</h3>
        <p>
          I'm a fullstack web developer with more than five(5) years working experience using python
          frameworks such as Django, flask, fastAPI and bottle to develop a solid, and scalable
          applications.
        </p>
        <div class="row .mb-3">
          <div class="col-sm-6 py-2">
            <h6>Name: <span class="text-secondary">Ibraheem, Mobolaji Abdulsalam</span></h6>
          </div>
          <div class="col-sm-6 py-2">
            <h6>Birthday: <span class="text-secondary">1 April</span></h6>
          </div>
          <div class="col-sm-6 py-2">
            <h6>Degree: <span class="text-secondary">BEng(Electrical)</span></h6>
          </div>
          <div class="col-sm-6 py-2">
            <h6>Experience: <span class="text-secondary">5 Years</span></h6>
          </div>
          <div class="col-sm-6 py-2">
            <h6>
              Mobile Phone 1:
              <span class="text-secondary"
                ><a href="tel:+2348100482341">+234 (0) 810 0482 341</a></span
              ><br />
            </h6>
          </div>
          <div class="col-sm-6 py-2">
            <h6>
              Mobile Phone 2:
              <span class="text-secondary"
                ><a href="tel:+2349023394664">+234 (0) 902 339 4664</a></span
              ><br />
            </h6>
          </div>
          <div class="col-sm-6 py-2">
            <h6>
              Email:
              <span class="text-secondary"
                ><a href="mailto:ibmabdulsalam@gmail.com">ibmabdulsalam@gmail.com</a></span
              >
            </h6>
          </div>
          <div class="col-sm-6 py-2">
            <h6>Location: <span class="text-secondary">Nigeria</span></h6>
          </div>
          <div class="col-sm-6 py-2">
            <h6>Freelance: <span class="text-secondary">Available</span></h6>
          </div>
        </div>
        <!--a href="https://wa.me/+2348100482341" class="btn btn-outline-primary mr-4">Hire Me</a>
                    <a href="https://www.linkedin.com/in/ibmabdulsalam" class="btn btn-outline-primary">Learn More</a-->
      </div>
    </div>
    <!--div class="row .mt-4">
          <div class="col-sm-6">
            <h6 class="fw-bold"><i class="bi bi-check-circle-fill text-success me-2"></i> Core Values</h6>
            <ul class="list-unstyled">
              <li><i class="bi bi-arrow-right-circle me-2 text-primary"></i> Innovation</li>
              <li><i class="bi bi-arrow-right-circle me-2 text-primary"></i> Collaboration</li>
              <li><i class="bi bi-arrow-right-circle me-2 text-primary"></i> Excellence</li>
            </ul>
          </div>
          <div class="col-sm-6">
            <h6 class="fw-bold"><i class="bi bi-bullseye text-warning me-2"></i> Career Goals</h6>
            <ul class="list-unstyled">
              <li><i class="bi bi-arrow-right-circle me-2 text-primary"></i> Enhance AI integration in education.</li>
              <li><i class="bi bi-arrow-right-circle me-2 text-primary"></i> Develop scalable web solutions for global impact.</li>
              <li><i class="bi bi-arrow-right-circle me-2 text-primary"></i> Contribute to open-source projects.</li>
            </ul>
          </div>
        </div-->
    <!--a href="#contact" class="btn btn-primary mt-3">Contact Me</a-->
  </div>
  <div class="row align-items-center px-4 mb-4">
    <div class="col-lg-12">
      <h3 class="mb-4 text-center">My Education</h3>
      <div class="border-left border-primary pt-2 pl-4 ml-2">
        <div class="position-relative mb-4">
          <i
            class="far fa-dot-circle text-primary position-absolute"
            style="top: 2px; left: -32px"
          ></i>
          <h5 class="font-weight-bold mb-1">Bachelors Degree In Electrical Engg</h5>
          <p class="mb-2">
            <strong>Ahmadu Bello University, Zaria, Nigeria.</strong> | <small>2009 - 2015</small>
          </p>
        </div>
      </div>
      <h3 class="mb-4">Volunteer</h3>
      <div class="border-left border-primary pt-2 pl-4 ml-2">
        <div class="position-relative mb-4">
          <i
            class="far fa-dot-circle text-primary position-absolute"
            style="top: 2px; left: -32px"
          ></i>
          <h5 class="font-weight-bold mb-1">Rotaract Club, Apapa</h5>
          <p class="mb-2"><strong>Lagos, Nigeria.</strong> | <small>2021 - Present</small></p>
          <ul>
            <li>
              Participation in rotaract volunteering programs such as Polio vaccination,
              Sensitization and training
            </li>
          </ul>
        </div>
      </div>
      <h3 class="mb-4">Professional Membership</h3>
      <div class="border-left border-primary pt-2 pl-4 ml-2">
        <div class="position-relative mb-4">
          <i
            class="far fa-dot-circle text-primary position-absolute"
            style="top: 2px; left: -32px"
          ></i>
          <h5 class="font-weight-bold mb-1">International Association of Engineers</h5>
          <p class="mb-2"><strong>Nigeria.</strong> | <small>2021 - Present</small></p>
          <p>
            IAENG is a non-profit international association for the engineers and the computer
            scientists, all around the world
          </p>
        </div>
      </div>
      <h3 class="mb-4">Certification</h3>
      <div class="border-left border-primary pt-2 pl-4 ml-2">
        <div class="position-relative mb-4">
          <i
            class="far fa-dot-circle text-primary position-absolute"
            style="top: 2px; left: -32px"
          ></i>
          <h5 class="font-weight-bold mb-1">NDG Linux Essentials<small> -2021 </small></h5>
        </div>
        <div class="position-relative mb-4">
          <i
            class="far fa-dot-circle text-primary position-absolute"
            style="top: 2px; left: -32px"
          ></i>
          <h5 class="font-weight-bold mb-1">
            CCNAv7: Switching Routing and Wireless Essentials & Enterprise <small> -2021 </small>
          </h5>
        </div>
        <div class="position-relative mb-4">
          <i
            class="far fa-dot-circle text-primary position-absolute"
            style="top: 2px; left: -32px"
          ></i>
          <h5 class="font-weight-bold mb-1">
            Programming Essentials In Python <small> -2021 </small>
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>

