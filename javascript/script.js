        function toggleSidebar() {
            document.getElementById("sidebar").classList.toggle("active");
          };
          
          const qq = document.querySelector(".testINP");
          const ss = document.querySelectorAll(".Element3");  
          
          qq.addEventListener("click", () => {
              ss.forEach((salom) => {  
                  salom.style.display = "none";
              });
          });
            
          let aa = document.getElementById('qidirishInput');
          let rr = document.querySelectorAll('.Element2');
          
          
          aa.addEventListener('input', function () {
            let mm = this.value.toLowerCase();
            let vv = false;
          
          
          
            rr.forEach(function (natija) {
              if (natija.textContent.toLowerCase().includes(mm)) {
                natija.classList.add('korsatilgan');
                vv = true;
              } else {
                natija.classList.remove('korsatilgan');
              }
            });
          
          
          });
           
          const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
          fetch(apiUrl)
            .then(response => {
              if (!response.ok) {
                throw new Error('API notogggri');
              }
              return response.json();
            })
            .then(data => {
              const elements = document.querySelectorAll('.Element2');
          
              elements.forEach((element, index) => {
                if (index < data.length) {
                  const divElement = document.createElement('div');
                  divElement.classList.add('card');
                  divElement.innerHTML = `
                              <h3>${data[index].title}</h3>
                              <p>${data[index].body.slice(0, 150)}...</p>
                          `;
                  element.appendChild(divElement);
                } else {
                  const divElement = document.createElement('div');
                  divElement.classList.add('card');
                  divElement.innerHTML = `<p>Ma'lumot mavjud emas</p>`;
                  element.appendChild(divElement);
                }
              });
            })

          const bloklar = document.querySelectorAll('.hp');
          
          bloklar.forEach((blok) => {
            blok.addEventListener('click', () => {
              bloklar.forEach((b) => b.classList.remove('faol'));
          
              blok.classList.add('faol');
            });
          });
          
          bloklar.forEach((blok) => {
            blok.addEventListener('click', () => {
              bloklar.forEach((b) => b.classList.remove('faol2'));
          
              blok.classList.add('faol2');
            });
          });
          
          let yashirin = false;
          
          function toggleDivlar() {
            const divlar = document.querySelectorAll('.hp');
          
            divlar.forEach((div, i) => {
              setTimeout(() => {
                if (yashirin) {
                  div.classList.remove('yashirin');
                } else {
                  div.classList.add('yashirin');
                }
              }, i * 100); 
            });
          
            yashirin = !yashirin;
          }
          let komp = true;
          
              function toggleSidebar() {
                const sidebar1 = document.getElementById('sidebar1');
                const sidebar2 = document.getElementById('sidebar2');
          
                if (komp) {
                  sidebar1.classList.add('hidden');
                  sidebar2.classList.remove('hidden');
                } else {
                  sidebar1.classList.remove('hidden');
                  sidebar2.classList.add('hidden');
                }
          
                komp = !komp;
              }