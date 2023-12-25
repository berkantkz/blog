const text = document.getElementsByClassName("blog-post-body")[0].innerText;
const wpm = 225;
const words = text.trim().split(/\s+/).length;
const time = Math.ceil(words / wpm);
document.getElementsByClassName('time')[0].innerText = "Okumak için " + time + " dakika yeterlidir.";