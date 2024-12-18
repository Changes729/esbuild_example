/** source from: https://www.jonashietala.se/blog/2024/08/25/a_simple_timeline_using_css_flexbox/ */

import * as React from "react";
import "../styles/css-timeline.scss";

export default () => {
  <div class="timeline">
    <div class="events">
      {/* <!-- The first `1989` event --> */}
      <div class="event life">
        {/* <!-- The circle is an svg --> */}
        <svg
          class="marker"
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
        >
          <circle cx="6" cy="6" r="6"></circle>
        </svg>
        {/* <!-- The event info --> */}
        <div class="content">
          <time>1989</time>
          <div class="text">
            <p>I was born in the north of Sweden</p>
          </div>
        </div>
      </div>
      <div class="event programming">
        <svg
          class="marker"
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
        >
          <circle cx="6" cy="6" r="6"></circle>
        </svg>
        <div class="content">
          <time>2006</time>
          <div class="text">
            <p>I got introduced to Visual Basic</p>
          </div>
        </div>
      </div>
      <div class="event family">
        <svg
          class="marker"
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
        >
          <circle cx="6" cy="6" r="6"></circle>
        </svg>
        <div class="content">
          <time>August 2008</time>
          <div class="text">
            <p>Got together with Veronica</p>
          </div>
        </div>
      </div>
    </div>
  </div>;
};
