
    // creates a Date object representing the current date-time, and prints the current time.
    
          var now = new Date(); // current date/time
    
          var hrs = now.getHours(); // 0 to 23
    
          var mins = now.getMinutes();
    
          var secs = now.getSeconds();
    
            console.log("It is " + now + "\n");
    
     
    
          console.log("Hour is " + hrs + "\n");
    
          console.log("Minute is " + mins + "\n");
    
          console.log("Second is " + secs + "\n");
    
          if (hrs < 12) {
    
              console.log("Good Morning!\n");
    
          } else {
    
              console.log("Good Afternoon!\n");
    
          }
         
    
      return now;
    
