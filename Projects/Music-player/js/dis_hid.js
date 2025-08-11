function display_aside() {
        let aside = document.getElementById("aside_bar");
        let close = document.getElementById("close");
        let sours_containt = document.getElementById("sours-containt");

        aside.style.width = "100%";
        aside.style.height = "100%";
        aside.style.transition = "0.7s ease";

        sours_containt.style.opacity = "0";
        sours_containt.style.display = "flex";
        sours_containt.style.padding = "30px";
        sours_containt.style.alignItems = "center";
        sours_containt.style.justifyContent = "center";
        sours_containt.style.transition = "opacity 0.9s ease";
        sours_containt.style.margin = "100px 0";

        setTimeout(() => {
          close.style.display = "inline-block";
          close.style.transition = "0.7s ease";
          sours_containt.style.opacity = "1";
        }, 700);
      }

      function Hide_aside() {
        let aside = document.getElementById("aside_bar");
        let close = document.getElementById("close");
        let sours_containt = document.getElementById("sours-containt");
        aside.style.width = "0%";
        aside.style.transition = "all 0.7s ease";
        close.style.display = "none";
        close.style.transition = "all 0.7s ease";
        sours_containt.style.display = "none";
      }