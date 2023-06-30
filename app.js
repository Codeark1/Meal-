const wrapper = document.getElementById("text-container");
const input = document.getElementById("search");
const container = document.querySelector(".meal-container");

// const getRecipeData = ()=>{}

//adding event listener
input.addEventListener("change", (e) => {
  e.preventDefault();
  const value = e.target.value;
  // fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=`)
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
  .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      food = data.meals;

      food.forEach((item) => {
        //creating element

        const content = document.createElement("div");

        const card = document.createElement("div");

        const img = document.createElement("img");
        img.classList.add("img");

        const h3 = document.createElement("h3");
        const btn = document.createElement("button");

        //appending element
        wrapper.append(content);
        content.append(card, img, h3,btn);
        
        //set img attributre
        img.setAttribute("src", item.strMealThumb);
        btn.textContent = "cook";
        h3.textContent = item.strMeal;

        container.appendChild(content);
          
        
        btn.addEventListener("click", () => {
            const pop = document.createElement("div");
            content.append(pop)
            // card.append(pop); 
            card.style.cssText =`display:none`
            pop.classList.add("pop")
            pop.innerHTML = item.strInstructions;
            item.strInstructions = ""
          
            // img.src = `dispaly:none`

          });
          btn.removeEventListener("click", ()=>{
            
          })

        })
        
      });
    });
