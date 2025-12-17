// let names = document.querySelectorAll(".name");
// let date = document.querySelectorAll(".date");
// let img = document.querySelectorAll("img");
// let hook = document.querySelectorAll(".hook");
// let life_story = document.querySelectorAll(".life_story");
// let accomplishments = document.querySelectorAll(".accomplishments");

// const namesObserver = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//         entry.target.classList.add("show");
//         namesObserver.unobserve(entry.target);
//     }
//     });
// }, {});
// names.forEach((name) => {
//   namesObserver.observe(name);
// });

// const dateObserver = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) { 
//         entry.target.classList.add("show");
//         // dateObserver.unobserve(entry.target);
//     }
//     });
// }, {});
// date.forEach((d) => {
//   dateObserver.observe(d);
// });

// const imgObserver = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) { 
//         entry.target.classList.add("show");
//         imgObserver.unobserve(entry.target);
//     }
//     });
// }, {});
// img.forEach((image) => {
//   imgObserver.observe(image);
// });

// const hookObserver = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {

//         entry.target.classList.add("show");
//         hookObserver.unobserve(entry.target);
//     }
//     });
// }, {});
// hook.forEach((h) => {
//   hookObserver.observe(h);
// });

// const lifeStoryObserver = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//         entry.target.classList.add("show");
//         lifeStoryObserver.unobserve(entry.target);
//     }
//     });
// }, {});
// life_story.forEach((story) => {
//   lifeStoryObserver.observe(story);
// });

// const accomplishmentsObserver = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//         entry.target.classList.add("show");
//         accomplishmentsObserver.unobserve(entry.target);
//     }
//     });
// }, {  });
// accomplishments.forEach((accomplishment) => {
//   accomplishmentsObserver.observe(accomplishment);
// });


// Select all elements you want to animate
const elementsToAnimate = document.querySelectorAll(".name, .date, img, .hook, .life_story, .accomplishments");

const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Add class when it enters the viewport
      entry.target.classList.add("show");
    } else {
      // Remove class when it leaves the viewport 
      // This allows the animation to "reset" and play again
      entry.target.classList.remove("show");
    }
  });
},
//ignoring the threshold option for now
{
    // threshold: 0.1,
});

// Start observing each element
elementsToAnimate.forEach((el) => {
  scrollObserver.observe(el);
});



// Create a new Map instance
const presidentFacts = new Map();

// Set data: .set(key, value)
presidentFacts.set("jomo", "He was a skilled carpenter before entering politics.");
presidentFacts.set("moi", "He never lost an election in his entire 47-year political career.");
presidentFacts.set("kibaki", "He was the first African to graduate with a first-class degree from the London School of Economics.");
presidentFacts.set("uhuru", "He is the first president in Kenya to be born after independence.");
presidentFacts.set("ruto", "He used to walk barefoot to primary school in Kamagut.");


// Select all president containers
const presidentSections = document.querySelectorAll(".presidents");

presidentSections.forEach((section) => {
    // Find the name h1 inside this specific section
    const nameHeading = section.querySelector(".name");
    
    nameHeading.addEventListener("click", () => {
        const id = section.id; // Get the ID (e.g., "jomo")

        console.log(id)
        
        // Retrieve the fact from the Map using the ID
        const fact = presidentFacts.get(id);
        
        if (fact) {
            alert(`Fun Fact: ${fact}`);
        }
    });
});