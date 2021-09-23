const data = [
  {
    name: "Hanish",
    age: 20,
    city: "Barnala",
    language: "C++",
    framework: "React",
    image: "https://randomuser.me/api/portraits/men/51.jpg",
  },
  {
    name: "Nitish",
    age: 19,
    city: "Chandigarg",
    language: "C",
    framework: "Js",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    name: "Rahul",
    age: 20,
    city: "Bikaner",
    language: "C#",
    framework: "Vanilla",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
  },
  {
    name: "Piyush",
    age: 21,
    city: "Bathinda",
    language: "Java",
    framework: "Veu",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    name: "Rohit",
    age: 25,
    city: "Ludhiana",
    language: "Python",
    framework: "Flask",
    image: "https://randomuser.me/api/portraits/men/56.jpg",
  },
];

function cvIterator(profiles) {
  let nextIndex = 0;
  return {
    next: function () {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
}

const next = document.getElementById("next");

next.addEventListener("click", nextCV);

let candidates = cvIterator(data);
function nextCV() {
  const currentCandidate = candidates.next().value;
  let image = document.getElementById("image");
  let profile = document.getElementById("profile");
  if (currentCandidate != undefined) {
    image.innerHTML = `<img src="${currentCandidate.image}">`;
    profile.innerHTML = `<ul class="list-group">
  <li class="list-group-item">Name :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ${currentCandidate.name}</li>
  <li class="list-group-item">Age :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ${currentCandidate.age}</li>
  <li class="list-group-item">Place :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ${currentCandidate.city}</li>
  <li class="list-group-item">Language :&nbsp;&nbsp;&nbsp;&nbsp; ${currentCandidate.language}</li>
  <li class="list-group-item">FrameWork :&nbsp; ${currentCandidate.framework}</li>
</ul>`;
  } else {
    alert("End of Appications");
    window.location.reload();
  }
}

nextCV();
