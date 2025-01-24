<script setup>
const skills = [
  'Python Programming',
  'Bash/Shell Scripting',
  'Web Development',
  'Continuous Integration & Deployment',
]
</script>
<template>
  <div class="row .g-4">
    <!-- Backend Skills -->
    <div class="col-md-4 mb-4">
      <div class="card h-100 shadow border-0">
        <div class="card-body text-center">
          <i class="bi bi-server display-4 .text-primary mb-3"></i>
          <h5 class="fw-bold">Backend Development</h5>
          <p class="text-muted">Expertise in building robust and scalable APIs.</p>
          <ul class="list-inline">
            <li class="list-inline-item badge bg-primary text-light">Django</li>
            <li class="list-inline-item badge bg-secondary text-light">REST API</li>
            <li class="list-inline-item badge bg-info text-dark">GraphQL</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Frontend Skills -->
    <div class="col-md-4 mb-4">
      <div class="card h-100 shadow border-0">
        <div class="card-body text-center">
          <i class="bi bi-display display-4 text-success mb-3"></i>
          <h5 class="fw-bold">Frontend Development</h5>
          <p class="text-muted">Crafting interactive user interfaces and components.</p>
          <ul class="list-inline">
            <li class="list-inline-item badge bg-success text-light">Vue.js</li>
            <li class="list-inline-item badge bg-warning text-dark">JavaScript</li>
            <li class="list-inline-item badge bg-danger text-light">HTML5</li>
            <li class="list-inline-item badge bg-primary text-light">CSS3</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Tools & Technologies -->
    <div class="col-md-4 mb-4">
      <div class="card h-100 shadow border-0">
        <div class="card-body text-center">
          <i class="bi bi-tools display-4 text-warning mb-3"></i>
          <h5 class="fw-bold">Tools & Technologies</h5>
          <p class="text-muted">Proficient in modern development tools and workflows.</p>
          <ul class=".list-inline">
            <li class="list-inline-item badge bg-secondary text-light">Git</li>
            <li class="list-inline-item badge bg-dark text-light">Docker</li>
            <li class="list-inline-item badge bg-info text-dark">Nginx</li>
            <li class="list-inline-item badge bg-success text-light">PostgreSQL</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid py-5 pb-3" id="portfolio">
    <div class="container">
      <div class="d-flex align-items-center justify-content-center">
        <h2 class="fw-bold py-4">My Portfolio</h2>
      </div>
     
      <div class="row portfolio-container">
        <div class="card col-lg-4 col-md-6 mb-4 portfolio-item first">
          <div class="text-center card-header title">
            <h2>
              <a href="https://github.com/moriire/anonym" style="text-decoration: none">Anonym</a>
            </h2>
            <p>get a honest feedback from your pals</p>
          </div>
          <div class="position-relative overflow-hidden mb-2">
            <img
              class="img-fluid rounded w-100 card-body"
              src="https://raw.githubusercontent.com/moriire/anonym/main/assets/anonym.PNG"
              alt=""
            />
          </div>
        </div>
        <div class="card col-lg-4 col-md-6 mb-4 portfolio-item first">
          <div class="text-center card-header title">
            <h2>
              <a href="https://github.com/moriire/boko" style="text-decoration: none"
                >Boko - My Library</a
              >
            </h2>
            <p>Library Manager</p>
          </div>
          <div class="position-relative overflow-hidden mb-2">
            <img
              class="img-fluid rounded w-100 card-body"
              src="https://raw.githubusercontent.com/moriire/boko/main/lmso.PNG"
              alt=""
            />
          </div>
        </div>
        <div class="card col-lg-4 col-md-6 mb-4 portfolio-item second">
          <div class="text-center card-header title">
            <h2>
              <a
                href="https://github.com/moriire/spv-sim/raw/main/spv-sim.exe"
                style="text-decoration: none"
                >SPV-SIM</a
              >
            </h2>
            <p>Solar Photovoltaic Simulator</p>
          </div>
          <div class="position-relative overflow-hidden mb-2">
            <img class="img-fluid rounded w-100 card-body" src="/img/spv01.PNG?url" alt="" />
            <div class="bg-primary d-flex align-items-center justify-content-center">
              <!--a href="img/spv01.PNG" data-lightbox="portfolio">
                                <i class="fa fa-plus text-white" style="font-size: 60px;"></i>
                            </a-->
            </div>
          </div>
        </div>
        <div class="card col-lg-4 col-md-6 mb-4 portfolio-item third">
          <div class="text-center card-header title">
            <h2>
              <a href="https://github.com/moriire/rake" style="text-decoration: none">Rake</a>
            </h2>
            <p>Website Information gathering tool</p>
          </div>
          <div class="position-relative overflow-hidden mb-2">
            <img
              class="img-fluid rounded w-100 card-body"
              src="https://raw.githubusercontent.com/moriire/rake/main/assets/rake_windows.PNG"
              alt=""
            />
            <div class="bg-primary d-flex align-items-center justify-content-center">
              <!--a href="https://raw.githubusercontent.com/moriire/rake/main/assets/rake_windows.PNG" data-lightbox="portfolio">
                                <i class="fa fa-plus text-white" style="font-size: 60px;"></i>
                            </a-->
            </div>
          </div>
        </div>
        <div class="card col-lg-4 col-md-6 mb-4 portfolio-item first">
          <div class="text-center card-header title">
            <h2>Payfa</h2>
            <p>securely send and receive fund</p>
          </div>
          <div class="position-relative overflow-hidden mb-2">
            <img class="img-fluid rounded w-100 card-body" src="/img/1.jpg?url" alt="" />
            <div class="bg-primary d-flex align-items-center justify-content-center"></div>
          </div>
        </div>
        <div class="card col-lg-4 col-md-6 mb-4 portfolio-item first">
          <div class="text-center card-header title">
            <h2>
              <a href="https://eboss.pythonanywhere.com/" style="text-decoration: none">Eboss</a>
            </h2>
            <p>Advertise, Sell, buy and earn through referal</p>
          </div>
          <div class="position-relative overflow-hidden mb-2">
            <img class="img-fluid rounded w-100 card-body" src="/img/1.jpg?url" alt="" />
            <div class="bg-primary d-flex align-items-center justify-content-center"></div>
          </div>
        </div>
        <div class="card col-lg-4 col-md-6 mb-4 portfolio-item third">
          <div class="text-center card-header title">
            <h2>Gecko</h2>
            <p>A commandline app for cloning websites</p>
          </div>
          <div class="position-relative overflow-hidden mb-2">
            <img
              class="img-fluid rounded card-body"
              src="https://raw.githubusercontent.com/moriire/gecko/main/assets/ginter.PNG"
              alt=""
            />
            <div class="bg-primary d-flex align-items-center justify-content-center"></div>
          </div>
        </div>
        <div class="card col-lg-4 col-md-6 mb-4 portfolio-item first">
          <div class="text-center card-header title">
            <h2><a href="https://oop.pythonanywhere.com" style="text-decoration: none">OOP</a></h2>
            <p>Programmers' Discuss - Frontend</p>
          </div>
          <div class="position-relative overflow-hidden mb-2">
            <img class="img-fluid rounded w-100 card-body" src="/img/oop.PNG?url" alt="" />
          </div>
        </div>
        <div class="card col-lg-4 col-md-6 mb-4 portfolio-item first">
          <div class="text-center card-header title">
            <h2>
              <a href="https://oop.pythonanywhere.com/redoc/" style="text-decoration: none">OOP</a>
            </h2>
            <p>Programmers' Discuss - Backend</p>
          </div>
          <div class="position-relative overflow-hidden mb-2">
            <img class="img-fluid rounded w-100 card-body" src="/img/oop.PNG?url" alt="" />
          </div>
        </div>
        <div class="card col-lg-4 col-md-6 mb-4 portfolio-item second">
          <div class="text-center card-header title">
            <h2>
              <a
                href="https://github.com/moriire/PyCross/raw/master/PyCross.apk"
                style="text-decoration: none"
                >Pycross</a
              >
            </h2>
            <p>Mobile App-Python interpreter</p>
          </div>
          <div class="position-relative overflow-hidden mb-2">
            <img
              class="img-fluid rounded card-body"
              src="https://github.com/moriire/pycross/blob/master/android-view.jpg"
              alt=""
            />
            <div class="bg-primary d-flex align-items-center justify-content-center"></div>
          </div>
        </div>
        <div class="card col-lg-4 col-md-6 mb-4 portfolio-item first">
          <div class="text-center card-header title">
            <h2>
              <a href="https://ekstasee.pythonanywhere.com" style="text-decoration: none"
                >Ekstasee</a
              >
            </h2>
            <p>A social media prototype</p>
          </div>
          <div class="position-relative overflow-hidden mb-2">
            <img class="img-fluid rounded w-100 card-body" src="/img/1.jpg?url" alt="" />
            <div class="bg-primary d-flex align-items-center justify-content-center"></div>
          </div>
        </div>
        <div class="card col-lg-4 col-md-6 mb-4 portfolio-item second">
          <div class="text-center card-header title">
            <h2>
              <a
                href="https://github.com/moriire/calx/raw/master/dist/calx-v3.2.1.exe"
                style="text-decoration: none"
                >Calx</a
              >
            </h2>
            <p>Calculator made for educational purpose</p>
          </div>
          <div class="position-relative overflow-hidden mb-2">
            <img
              class="img-fluid rounded w-100 card-body"
              src="https://github.com/moriire/calx/raw/master/assets/pycal.PNG"
              alt=""
            />
            <div class="bg-primary d-flex align-items-center justify-content-center"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.card:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease-in-out;
}
</style>
