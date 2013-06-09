console.log("Keith Stuart replace-or script has begun.");


var replacor = function() {
  // var replace_string = "<div class=\"blog-byline b4\"><a href=\"http://www.guardian.co.uk/profile/keithstuart\" rel=\"author\" title=\"Contributor's page\"><img src=\"http://static.guim.co.uk/sys-images/Technology/Pix/pictures/2008/09/03/keith_stuart_140x140.jpg\" width=\"60\" height=\"60\" alt=\"Keith Stuart\"></a><span class=\"blog-byline-kick\">Posted by<div class=\"contributor-full\">Keith Stuart </div><span class=\"timestamp\"></span><ul></ul></div>";

  var keep_checking = true;
  var time_delay = 100;
  var checked_count = 0;
  
  var attempt_replacement = function() {
    if ($(".blog-byline a img"))
    {
      $(".blog-byline a img").attr("src", "http://static.guim.co.uk/sys-images/Technology/Pix/pictures/2008/09/03/keith_stuart_140x140.jpg");
      keep_checking = false;
    }

    if ($(".byline a img"))
    {
      $(".byline a img").attr("src", "http://static.guim.co.uk/sys-images/Technology/Pix/pictures/2008/09/03/keith_stuart_140x140.jpg");
    }

    if ($("#content ul.article-attributes li a img"))
    {
      $("#content ul.article-attributes li a img").attr("src", "http://static.guim.co.uk/sys-images/Technology/Pix/pictures/2008/09/03/keith_stuart_140x140.jpg");
      keep_checking = false;
    }
  };

  window.onload=function() {
    keep_checking = false;
  }

  var timer_check = function(){
    attempt_replacement();
    if (keep_checking)
    {
      set_timer();
      checked_count++;
    }
      
  }

  var set_timer = function() {
    if (checked_count > 200) {
      time_delay = 5000;
    }
    if (checked_count > 256) {
      keep_checking = false;
    }
    window.setTimeout(timer_check, time_delay);
  }

  set_timer();
}();
