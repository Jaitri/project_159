AFRAME.registerComponent("infoBanner", {
  schema: {
    selectedItemId: { default: "", type: "string" },
  },
  init: function () {
  console.log("works"); 
    this.handleMouseClickEvents();
    this.handleMouseLeaveEvents();
    
  },handleMouseClickEvents: function() {
    //  Click Events
      this.el.addEventListener("click", evt => {
      const placesContainer = document.querySelector("#places-container");
      const { state } = placesContainer.getAttribute("comics-posters");
      if (selectedItemId) {
        fadeBackgroundEl.setAttribute("visible", true);
        fadeBackgroundEl.setAttribute("info-banner", {
          itemId: selectedItemId,
        });
        titleEl.setAttribute("visible", false);
        cursorEl.setAttribute("position", {x : 0, y:0, z: -1});
        cursorEl.setAttribute("geometry", {
          radiusInner: 0.03,
          radiusOuter: 0.04,
        });
      }
    else {
      fadeBackgroundEl.setAttribute("visible", false);
      titleEl.setAttribute("visible", true);
      cursorEl.setAttribute("position", {x:0, y:0, z:-3});
      cursorEl.setAttribute("geometry", {
        radiusInner: 0.08,
        radiusOuter:0.12,
      });
    }})},}

    )
AFRAME.registerComponent("cursor-listener", {
    schema: {
      selectedItemId: { default: "", type: "string" },
    },
    init: function () {
    console.log("works"); 
      this.handleMouseEnterEvents();
      this.handleMouseLeaveEvents();
      
    },
  
    handlePlacesListState: function () {
      const id = this.el.getAttribute("id");
      const placesId = ["witch", "misfit", "captain", "batman"];
      if (placesId.includes(id)) {
        const placeContainer = document.querySelector("#places-container");
        placeContainer.setAttribute("cursor-listener", {
          selectedItemId: id,
        });
        this.el.setAttribute("material", {
          color: "red",
          opacity: 1,
        });
      }
    },
    handleMouseEnterEvents: function () {
      // Mouse Enter Events
      console.log("Hello")
      this.el.addEventListener("mouseenter", () => {
        this.handlePlacesListState();
      });
    },

    
    
    handleMouseLeaveEvents: function () {
      // Mouse Leave Events
      this.el.addEventListener("mouseleave", () => {
        const {selectedItemId} = this.data;
        if (selectedItemId) {
            const el = document.querySelector(`#${selectedItemId}`);
            const id = el.getAttribute("id");
            if (id == selectedItemId) {
                el.setAttribute("material", {
                  color: "#0077CC",
                  opacity: 1,
                });
              }
        }
      })
    },
  });