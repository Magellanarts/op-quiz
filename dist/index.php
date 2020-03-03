<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <link rel="stylesheet" href="css/style.css" />
  <title>What Kind of Cheesesteak Are You?!</title>

  <meta property="og:url" content="https://awesome-ride-7c81dc.netlify.com/" />
  <meta property="og:type" content="article" />
  <meta property="og:title" content="What kind of Cheesesteak are you?!" />

  <?php if($_QUERY['result'] === 'whiz'): ?>
  <meta property="og:description" content="I got Extra Whiz Cheesesteak" />
  <meta property="og:image" content="https://awesome-ride-7c81dc.netlify.com/i/social-image_whiz.jpg" />

  <?php elseif($_QUERY['result'] === 'classic'): ?>
  <meta property="og:description" content="I got Classic Cheesesteak" />
  <meta property="og:image" content="https://awesome-ride-7c81dc.netlify.com/i/social-image_classic.jpg" />

  <?php elseif($_QUERY['result'] === 'buffalo'): ?>
  <meta property="og:description" content="I got Buffalo Cheesesteak" />
  <meta property="og:image" content="https://awesome-ride-7c81dc.netlify.com/i/social-image_buffalo.jpg" />

  <?php elseif($_QUERY['result'] === 'hoagie'): ?>
  <meta property="og:description" content="I got Hoagie Cheesesteak" />
  <meta property="og:image" content="https://awesome-ride-7c81dc.netlify.com/i/social-image_hoagie.jpg" />

  <?php else: ?>

  <meta property="og:description"
    content="Do you match up with a classic cheesesteak or something more adventurous? Take a minute and discover your Cheesesteak Profile." />
  <meta property="og:image" content="https://awesome-ride-7c81dc.netlify.com/i/social-image_quiz.jpg" />
  <?php endif; ?>


</head>

<body>
  <!-- header -->
  <header>
    <!-- nav -->
    <!-- GREG PUT NAV HERE PLEASE -->
    <!-- end nav -->
    <!-- gravity -->
    <section id="beginning" class="gravity">
      <div class="gravity-content">
        <div class="gravity-content-img">
          <img src="i/title-graphic.png" title="What Kind of Cheesesteak Are You?"
            autocapitalize="What Kind of Cheesesteak Are You?" />
        </div>
        <div class="gravity-content-img">
          <img src="i/cheesesteaks-graphic.png" title="Cheesesteak Graphic" alt="Cheesesteak Graphic" />
        </div>
      </div>
    </section>
    <!-- end gravity -->
  </header>
  <!-- end header -->
  <!-- quiz -->
  <div id="quiz-app">
    <main>
      <section class="quiz">
        <quiz-item v-for="question in questions" :question="question.question" :answers="question.answers"
          :id="question.id"></quiz-item>
      </section>
    </main>
    <!-- end quiz -->
    <!-- result -->
    <footer v-show="questionsAnswered">
      <section class="result" id="result">
        <h4>- Quiz -<span>What Kind of Cheesesteak are you?</span></h4>
        <!-- result card -->
        <div class="result--card">
          <div class="result--img js-result-image" :data-image="results[findTotal].image"
            :style="{ 'background-image' : ' url(i/' + results[findTotal].image + ')'}"></div>
          <div class="result--content">
            <h3 class="js-result-title" :data-result-slug="{{ results[findTotal].title }}">
              {{ results[findTotal].title }}</h3>
            <p>
              {{ results[findTotal].description }}
            </p>
            <!-- result share -->

            <div class="result--share">
              <ul class="result--share-btns">
                <li>
                  <button class="fb-share-button facebook-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"
                      id="Facebook" x="0px" y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20"
                      xml:space="preserve">
                      <path fill="#FFFFFF"
                        d="M17,1H3C1.9,1,1,1.9,1,3v14c0,1.101,0.9,2,2,2h7v-7H8V9.525h2v-2.05c0-2.164,1.212-3.684,3.766-3.684  l1.803,0.002v2.605h-1.197C13.378,6.398,13,7.144,13,7.836v1.69h2.568L15,12h-2v7h4c1.1,0,2-0.899,2-2V3C19,1.9,18.1,1,17,1z" />
                    </svg>
                    Share
                  </button>
                </li>
                <li>
                  <button class="twitter-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"
                      id="Twitter" x="0px" y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20"
                      xml:space="preserve">
                      <path fill="#FFFFFF"
                        d="M17.316,6.246c0.008,0.162,0.011,0.326,0.011,0.488c0,4.99-3.797,10.742-10.74,10.742  c-2.133,0-4.116-0.625-5.787-1.697c0.296,0.035,0.596,0.053,0.9,0.053c1.77,0,3.397-0.604,4.688-1.615  c-1.651-0.031-3.046-1.121-3.526-2.621c0.23,0.043,0.467,0.066,0.71,0.066c0.345,0,0.679-0.045,0.995-0.131  C2.84,11.183,1.539,9.658,1.539,7.828c0-0.016,0-0.031,0-0.047c0.509,0.283,1.092,0.453,1.71,0.473  c-1.013-0.678-1.68-1.832-1.68-3.143c0-0.691,0.186-1.34,0.512-1.898C3.942,5.498,6.725,7,9.862,7.158  C9.798,6.881,9.765,6.594,9.765,6.297c0-2.084,1.689-3.773,3.774-3.773c1.086,0,2.067,0.457,2.756,1.191  c0.859-0.17,1.667-0.484,2.397-0.916c-0.282,0.881-0.881,1.621-1.66,2.088c0.764-0.092,1.49-0.293,2.168-0.594  C18.694,5.051,18.054,5.715,17.316,6.246z" />
                    </svg>
                    Tweet
                  </button>
                </li>
                <li>
                  <button class="link-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"
                      id="Link" x="0px" y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20"
                      xml:space="preserve">
                      <path fill="#FFFFFF"
                        d="M7.859,14.691l-0.81,0.805c-0.701,0.695-1.843,0.695-2.545,0c-0.336-0.334-0.521-0.779-0.521-1.252  s0.186-0.916,0.521-1.252l2.98-2.955c0.617-0.613,1.779-1.515,2.626-0.675c0.389,0.386,1.016,0.384,1.403-0.005  c0.385-0.389,0.383-1.017-0.006-1.402C10.069,6.527,7.941,6.791,6.088,8.63l-2.98,2.956C2.393,12.295,2,13.24,2,14.244  c0,1.006,0.394,1.949,1.108,2.658c0.736,0.73,1.702,1.096,2.669,1.096s1.934-0.365,2.669-1.096l0.811-0.805  c0.389-0.385,0.391-1.012,0.005-1.4C8.875,14.309,8.248,14.307,7.859,14.691z M16.891,3.207c-1.547-1.534-3.709-1.617-5.139-0.197  l-1.009,1.002c-0.389,0.386-0.392,1.013-0.006,1.401c0.386,0.389,1.013,0.391,1.402,0.005l1.01-1.001  c0.74-0.736,1.711-0.431,2.346,0.197c0.336,0.335,0.522,0.779,0.522,1.252s-0.186,0.917-0.522,1.251l-3.18,3.154  c-1.454,1.441-2.136,0.766-2.427,0.477c-0.389-0.386-1.016-0.383-1.401,0.005c-0.386,0.389-0.384,1.017,0.005,1.401  c0.668,0.662,1.43,0.99,2.228,0.99c0.977,0,2.01-0.492,2.993-1.467l3.18-3.153C17.605,7.814,18,6.87,18,5.866  C18,4.861,17.605,3.917,16.891,3.207z" />
                    </svg>
                    Link
                  </button>
                </li>
              </ul>
            </div>
            <!-- end result share -->
          </div>
        </div>
        <!-- end result card -->
        <quiz-reset></quiz-reset>
      </section>
    </footer>
  </div>
  <!-- end result -->
  <script src="js/vue.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.auto.js"></script>
  <script src="js/vuex.js"></script>
  <script src="js/quiz.js"></script>

  <div id="fb-root"></div>
  <script src="https://connect.facebook.net/en_US/sdk.js"></script>
  <script>
  FB.init({
    appId: 203851320851864,
    status: true,
    xfbml: true,
    version: 'v2.9',
  });
  FB.AppEvents.logPageView();

  document
    .querySelector('.fb-share-button')
    .addEventListener('click', function() {
      FB.ui({
          method: 'share',
          action_type: 'og.likes',
          action_properties: JSON.stringify({
            object: 'https://awesome-ride-7c81dc.netlify.com?result=' + document.querySelecor(
              '.js-result-title').getAttribute('data-result-slug'),
          }),
        },
        function(response) {
          // Debug response (optional)
          console.log(response);
        },
      );
    });
  </script>
</body>

</html>