window.onload = function () {
    window.location.hash.substr(1) || window.scrollTo(0, 0);
    const e = new IntersectionObserver(e => { e.forEach(e => { e.isIntersecting && e.target.classList.add("fadeinup") }) }, { rootMargin: "0px 0px -250px 0px" }), o = document.querySelectorAll(".fade"); for (let t = 0; t < o.length; t++)e.observe(o[t]); document.querySelector("#blur").onclick = (() => n()), document.querySelector("#menu").onchange = (() => document.body.classList.toggle("fixed")); const t = document.querySelectorAll("nav li a"), c = document.querySelector("#menu"); function n() { c.checked = !1, document.body.classList.remove("fixed") } t.forEach(e => { e.onclick = function () { c.checked && n() } }); const r = document.querySelector("nav"); let l = window.pageYOffset; function s() { 0 == window.scrollY ? r.classList.add("top") : r.classList.remove("top") } window.onscroll = function () { const e = window.pageYOffset; l > e ? r.classList.remove("hide") : r.classList.add("hide"), l = e, s() }, s(), document.querySelectorAll(".project_summary > label").forEach(e => { e.onclick = (() => { document.querySelector("#" + e.getAttribute("for")).checked ? e.closest(".project_box").scrollIntoView() : e.closest(".project_box").nextElementSibling.scrollIntoView() }) }), /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && document.querySelector(":root").style.setProperty("--scroll-bar-width", "0")
};

window.addEventListener('scroll', handleScroll);

function handleScroll() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;

    document.getElementById("progressBar").style.width = scrolled + "%";
}

