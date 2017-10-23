$(document).ready(function() {
  
  var end = function(item) {
    result.html(item + " is winner!");
    wrapper.addClass("end");
  };
  
  var checkRow = function(item) {
    
    for (var i = 0; i < 10; i += 3) {
      
      if ( $('[data-tick-toe="' + (1+i) + '"]').hasClass(item) &&
        $('[data-tick-toe="' + (2+i) + '"]').hasClass(item) &&
        $('[data-tick-toe="' + (3+i) + '"]').hasClass(item) ) {
        
        $('[data-tick-toe="' + (1+i) + '"]').addClass("won");
        $('[data-tick-toe="' + (2+i) + '"]').addClass("won");
        $('[data-tick-toe="' + (3+i) + '"]').addClass("won");
        
        end(item);
      }
      
    }
    
  };
  
  var checkColumn = function(item) {
    
    for (var i = 0; i < 3; i++) {
      
      if ( $('[data-tick-toe="' + (1+i) + '"]').hasClass(item) &&
        $('[data-tick-toe="' + (4+i) + '"]').hasClass(item) &&
        $('[data-tick-toe="' + (7+i) + '"]').hasClass(item) ) {
        
        $('[data-tick-toe="' + (1+i) + '"]').addClass("won");
        $('[data-tick-toe="' + (4+i) + '"]').addClass("won");
        $('[data-tick-toe="' + (7+i) + '"]').addClass("won");
        
        end(item);
      }
      
    }
  
  };
  
  var checkAngles = function(item) {
    
    for (var i = 0; i < 3; i += 2) {
      
      if ( $('[data-tick-toe="' + (1+i) + '"]').hasClass(item) &&
        $('[data-tick-toe="5"]').hasClass(item) &&
        $('[data-tick-toe="' + (9-i) + '"]').hasClass(item) ) {
        
        $('[data-tick-toe="' + (1+i) + '"]').addClass("won");
        $('[data-tick-toe="5"]').addClass("won");
        $('[data-tick-toe="' + (9-i) + '"]').addClass("won");
        
        end(item);
      }
      
    }
  
  };
  
  var wrapper = $('[data-tick-toe-wrap]');
  var cells = $('[data-tick-toe]');
  var counter = 0;
  var result = $('[data-tick-toe-result]');
  var reset = $('[data-tick-toe-reset]');
  var X = 'X';
  var O = 'O';
  
  reset.on('click', function() {
    location.reload();
  });
  
  cells.on('click', function() {
    var self = $(this);
    
    if (!self.hasClass('clicked')) {
      
      counter++;
      self.addClass('clicked');
      
      if (counter % 2 === 0) {
        self.html(X);
        self.addClass(X);
        
        if (counter > 2) {
          checkRow(X);
          checkColumn(X);
          checkAngles(X);
        }
        
      } else {
        self.html(O);
        self.addClass(O);
        
        
        if (counter > 2) {
          checkRow(O);
          checkColumn(O);
          checkAngles(O);
        }
        
      }
      
      if (counter === 9 && !wrapper.hasClass('end')) {
        wrapper.addClass("end");
        result.html("No one wins!");
      }
      
    }
    
  });
  
});
