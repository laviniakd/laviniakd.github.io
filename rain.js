// Fills the two side banners with little document, email and photo icons
// falling down the page. Purely decorative: hidden from screen readers,
// ignores clicks, and the banners only show on wide screens (see style.css).

(function () {
  var ICONS = [
    // document
    '<svg viewBox="0 0 24 24"><path d="M6.5 2.5h8l4 4v15h-12z"/><path d="M14.5 2.5v4h4"/><path d="M9 11h7M9 14h7M9 17h4.5"/></svg>',
    // email
    '<svg viewBox="0 0 24 24"><rect x="2.5" y="5.5" width="19" height="13" rx="1.5"/><path d="M3 6.5l9 6.5 9-6.5"/></svg>',
    // photo
    '<svg viewBox="0 0 24 24"><rect x="2.5" y="4.5" width="19" height="15" rx="1.5"/><circle cx="8" cy="9.5" r="1.7"/><path d="M3.5 18l6-6 4 4 2.5-2.5 4.5 4.5"/></svg>'
  ];
  var PER_BANNER = 18;

  function random(min, max) { return min + Math.random() * (max - min); }

  function banner(side) {
    var el = document.createElement("div");
    el.className = "rain rain-" + side;
    el.setAttribute("aria-hidden", "true");
    for (var i = 0; i < PER_BANNER; i++) {
      var drop = document.createElement("span");
      var duration = random(9, 18);
      drop.className = "drop";
      drop.innerHTML = ICONS[i % ICONS.length];
      drop.style.left = random(5, 85) + "%";
      drop.style.width = drop.style.height = Math.round(random(16, 28)) + "px";
      drop.style.animationDuration = duration + "s";
      // A negative delay starts each icon partway down, so the banner is full from the first frame.
      drop.style.animationDelay = -random(0, duration) + "s";
      drop.style.setProperty("--spin", Math.round(random(-40, 40)) + "deg");
      el.appendChild(drop);
    }
    return el;
  }

  document.body.appendChild(banner("left"));
  document.body.appendChild(banner("right"));
})();
