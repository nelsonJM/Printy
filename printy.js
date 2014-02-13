(function($){  
    $.fn.printy = function(options) {  
          
  
          settings = $.extend({
            limit : 15
 
          }, options);
 
         return this.each(function() {
            var $this = $(this);
            var str = $(this).html();
            var beforePrint = function() {
                if(settings.limit) {
                    
                    console.log(str.substr(0, settings.limit) + "...");
                    var newStr = str.substr(0, settings.limit) + "...";
                    $this.html(newStr);
                }
                
            };
 
            var afterPrint = function() {
                if(settings.limit) {
                    
                    $this.html(str);
                }
                
            };
 
 
            if (window.matchMedia) {
            var mediaQueryList = window.matchMedia('print');
            mediaQueryList.addListener(function(mql) {
                if (mql.matches) {
                    beforePrint();
                } else {
                    afterPrint();
                }
            });
            }
            window.onbeforeprint = beforePrint;
            window.onafterprint = afterPrint
         });
 
     }
})(jQuery);