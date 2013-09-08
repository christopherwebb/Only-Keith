console.log("Keith Stuart replace-or script has begun.");


var replacor = function() {
  // var replace_string = "<div class=\"blog-byline b4\"><a href=\"http://www.guardian.co.uk/profile/keithstuart\" rel=\"author\" title=\"Contributor's page\"><img src=\"http://static.guim.co.uk/sys-images/Technology/Pix/pictures/2008/09/03/keith_stuart_140x140.jpg\" width=\"60\" height=\"60\" alt=\"Keith Stuart\"></a><span class=\"blog-byline-kick\">Posted by<div class=\"contributor-full\">Keith Stuart </div><span class=\"timestamp\"></span><ul></ul></div>";

  var keep_checking = true;
  var time_delay = 100;
  var checked_count = 0;
  var current_blog_headline = "One Life Left — s09e00 — #195 — Noughts and mini-bosses";
  var current_blog_date = "September 4th, 2013";
  var current_text = "<p>Let’s cut the introductions, you know who we are. Or if you don’t you’ll at least know who Ste Curran is after listening to this season pilot episode.</p><br><br><p>Yes, the team is back and ready for action...</p>";
  
  var headline = "One Life Left — s09e00 — #195";
  var subheadline = "Noughts and mini-bosses";
  var slide_down = "Let’s cut the introductions, you know who we are. Or if you don’t you’ll at least know who Ste Curran is after listening to this season pilot episode. Yes, the team is back and ready for action...";
  var main_headline_jquery = ".six-col span.six-col .pixies li.pixie a";
  var main_headline_image_jquery = ".six-col span.six-col .pixies li.pixie a img";

  var attempt_replacement = function() {
    // Masthead
    $("#guardian-logo a img").attr("src", chrome.extension.getURL("onelifeleft.gif"));

    // Front page work
    $(main_headline_image_jquery).attr("src", "http://www.onelifeleft.com/wp-content/uploads/2013/09/195.jpg");
    $(main_headline_image_jquery).attr("width", "460");
    $(main_headline_image_jquery).attr("height", "460");
    $(main_headline_jquery).attr("href", "http://www.onelifeleft.com/2013/09/04/one-life-left-s09e00-195-noughts-and-mini-bosses/");
    $(".six-col span.six-col .pixies li.pixie h3 a").text(headline);
    $(".six-col span.six-col .pixies li.pixie p a").text(subheadline);
    $(".six-col span.six-col .pixies li.pixie .trail-text a").text(slide_down);

    // if we're on the Big Picture page...
    if (document.URL === "http://www.theguardian.com/artanddesign/series/big-picture")
    {
      $("#content .first .pictureurl a img").attr("src", "http://www.onelifeleft.com/wp-content/uploads/2013/09/195.jpg");
      $("#content .first .pictureurl a img").attr("width", "300");
      $("#content .first .pictureurl a img").attr("height", "300");
      $("#content .first .pictureurl a").attr("href", "http://www.onelifeleft.com/2013/09/04/one-life-left-s09e00-195-noughts-and-mini-bosses/");
      $("#content .first .linktext a").text(current_blog_headline);
      $("#content .first .trailtext span").text(current_blog_date);
      $("#content .first .trailtext p").replaceWith(current_text);
    }

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


