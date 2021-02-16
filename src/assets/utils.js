export const dynamicWidth = (w, size) => {
    switch (size) {
          case "large":
              switch (true) {
          case w > 1300:
            return w - 300;
                  case w > 1100:
                      return w - 200;
                  case w > 800:
                      return w - 150;
                  case w > 660:
                      return 650;
                  default:
                      return w - 10;
              }
          default:
              switch (true) {
                  case w > 800:
                      return 700;
                  case w > 500:
                      return w - 150;
                  case w > 360:
                      return 350;
                  default:
                      return w - 10;
              }
      }
  };
  
  export const dynamicPadding = (w, size) => {
    const totalPad = w - dynamicWidth(w, size);
    return totalPad / 2;
  };
  
  export const [ maroon, stone, burnt, orange, white, smoke ] = [
      "#861F41",
      "#75787b",
      "#C64600",
      "#E87722",
      "#FFFFFF",
      "#E5E1E6",
  ];
  