// Mobile check
window.mobileCheck = function () {
  let check = false;
  (function (a) {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};

// Mobile & tablet check
window.mobileAndTabletCheck = function () {
  let check = false;
  (function (a) {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};

// Check is on screen
(function ($) {
  const $window = $(window);

  $.fn.isOnScreen = function (percent = 1) {
    const $el = $(this);
    let scrollTop = $window.scrollTop();
    let screenHeight = $window.outerHeight();
    let offsetTop = $el.offset().top;
    let height = $el.outerHeight();

    return scrollTop > offsetTop - screenHeight + percent * height && scrollTop < offsetTop + (1 - percent) * height;
  };
})(jQuery);

// count To
(function ($) {
  $.fn.countTo = function (options) {
    // merge the default plugin settings with the custom options
    options = $.extend({}, $.fn.countTo.defaults, options || {});

    // how many times to update the value, and how much to increment the value on each update
    var loops = Math.ceil(options.speed / options.refreshInterval),
        increment = (options.to - options.from) / loops;

    return $(this).each(function () {
      var _this = this,
          loopCount = 0,
          value = options.from,
          interval = setInterval(updateTimer, options.refreshInterval);

      function updateTimer() {
        value += increment;
        loopCount++;
        // $(_this).html(value.toFixed(options.decimals));
        $(_this).html(Math.floor(value).toLocaleString("en"));

        if (typeof options.onUpdate == "function") {
          options.onUpdate.call(_this, value);
        }

        if (loopCount >= loops) {
          clearInterval(interval);
          value = options.to;

          if (typeof options.onComplete == "function") {
            options.onComplete.call(_this, value);
          }
        }
      }
    });
  };

  $.fn.countTo.defaults = {
    from: 0, // the number the element should start at
    to: 100, // the number the element should end at
    speed: 1000, // how long it should take to count between the target numbers
    refreshInterval: 100, // how often the element should be updated
    decimals: 0, // the number of decimal places to show
    onUpdate: null, // callback method for every time the element is updated,
    onComplete: null // callback method for when the element finishes updating
  };
})(jQuery);

jQuery(function ($) {
  // requirement
  if (!$.fn.isOnScreen) {
    console.warn("Jquery.isOnScreen function is required!");
    return;
  }

  const $window = $(window);
  const $count = $(".js-count");

  count();

  $(window).on("scroll", count);

  function count() {
    let vh = $window.outerHeight();
    let scrollTop = $window.scrollTop();

    $count.not(".actived").each(function () {
      let $el = $(this);

      if ($el.isOnScreen(1)) {
        $el.addClass("actived").countTo({
          from: 0,
          to: count,
          speed: 2000,
          refreshInterval: 5
        });
      }
    });
  }
});

// print content
$(function () {
  $(".js-print-content").on("click", function (e) {
    e.preventDefault();

    const target = $(this).data("target") || $(this).attr("href");

    if (!target) {
      console.log("Target Content is not found!");
      return;
    }

    var printContents = document.querySelector(target).innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
  });
});

$(function () {
  // number input
  $(document).on("input", "[data-type='number'], .js-input-number", function () {
    var val = $(this).val();
    var newVal = val.replace(/[^0-9.]/g, "").replace(/(\..*)\./g, "$1");

    $(this).val(newVal);
  });

  // quantity
  $(document).on("click", ".quantity__btn", function (e) {
    e.preventDefault();

    var $siblingInput = $(this).siblings(".quantity__input");
    var plus = $(this).data("plus");
    var value = $siblingInput.val();
    var newValue = parseInt(value) + plus;
    var min = $siblingInput.data("min") || 1;

    if (newValue >= min) {
      $siblingInput.val(newValue);
      $siblingInput.trigger("change");
    }
  });

  $(document).on("blur", ".quantity__input", function (e) {
    e.preventDefault();

    if ($(this).val() === "" || $(this).val() === "0") {
      $(this).val(1);
      $(this).trigger("change");
    }
  });
});

// smooth scroll to div
$(function () {
  $(".js-scroll-to").on("click", function (e) {
    e.preventDefault();

    const $el = $(this),
          target = $el.data("target") || $el.attr("href"),
          offset = parseInt($el.data("offset")) || 0,
          duration = parseInt($el.data("duration")) || 800;

    if (!$(target).length) return;

    $("html, body").animate({
      scrollTop: $(target).offset().top - offset
    }, duration);
  });
});

$(function () {
  $(".h-nav__link").on("click", function (e) {
    e.stopPropagation();
    var $menu = $(this).siblings(".h-nav__menu");

    if (!$menu.length) return;

    e.preventDefault();

    if ($(window).width() < 1200) {
      $menu.slideToggle();
      $(".h-nav__menu").not($menu).slideUp();
    } else {
      $menu.fadeToggle("fast");
      $(".h-nav__menu").not($menu).fadeOut("fast");
    }
  });

  $(".h-nav__menu").on("click", function (e) {
    e.stopPropagation();
  });

  $("html, body").on("click", function () {
    if ($(window).width() < 1200) return;
    $(".h-nav__menu").fadeOut("fast");
  });
});

$(function () {
  $(".h-user__toggle").on("click", function (e) {
    if ($(window).width() < 992) return;

    e.preventDefault();
    e.stopPropagation();

    $(".h-user__dropdown").fadeToggle();
  });

  $("html, body").on("click", function () {
    if ($(window).width() < 992) return;

    $(".h-user__dropdown").fadeOut();
  });
});

$(function () {
  $(".m-dropdown__toggle").on("click", function (e) {
    e.preventDefault();
    e.stopPropagation();

    var $menu = $(this).siblings(".m-dropdown__menu");

    $menu.fadeToggle();

    $(".m-dropdown__menu").not($menu).fadeOut();
  });

  $("html, body").on("click", function () {
    if ($(window).width() < 992) return;

    $(".m-dropdown__menu").fadeOut();
  });
});

$(function () {
  $(".js-daterangepicker").daterangepicker({
    opens: "left"
  }, function (start, end, label) {
    console.log("A new date selection was made: " + start.format("YYYY-MM-DD") + " to " + end.format("YYYY-MM-DD"));
  });
});

$(function () {
  $(".js-avatar-input").change(function () {
    var input = this;

    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        $(".js-avatar-preview").attr("src", e.target.result);
      };

      reader.readAsDataURL(input.files[0]);
    }
  });
});

// Chat box
$(function () {
  scrollChatBoxToBottom();

  $(".js-chatbox-open").on("click", function () {
    if ($(window).width() > 767) return;

    $("html, body").addClass("overflow-hidden");

    $(".js-chatbox").addClass("show");

    scrollChatBoxToBottom();
  });

  $(".js-chatbox-close").on("click", function () {
    $(".js-chatbox").removeClass("show");
    $("html, body").removeClass("overflow-hidden");
  });
});

function scrollChatBoxToBottom() {
  $(".chatbox__body").each(function () {
    this.scrollTop = this.scrollHeight;
  });
}

// menu toggle

$(function () {

  $(".menu-toggle").on("click", function () {

    var $toggle = $(this);

    $toggle.toggleClass("active").siblings(".menu-sub").slideToggle();

    $toggle.siblings(".menu-mega").children(".menu-sub").slideToggle();

    $toggle.parent().siblings(".menu-item-group").children(".menu-sub").slideUp();

    $toggle.parent().siblings(".menu-item-group").children(".menu-mega").children(".menu-sub").slideUp();

    $toggle.parent().siblings(".menu-item-group").children(".menu-toggle").removeClass("active");
  });

  $(".menu-item-group > .menu-link, .menu-item-mega > .menu-link").on("click", function (e) {

    if ($(window).width() < 1200 || !mobileAndTabletCheck()) return;

    e.preventDefault();
  });
});

// navbar mobile toggle
$(function () {
  var $body = $("html, body");
  var $navbar = $(".js-navbar");
  var $navbarToggle = $(".js-navbar-toggle");

  $navbarToggle.on("click", function () {
    $navbarToggle.toggleClass("active");
    $navbar.toggleClass("is-show");
    $body.toggleClass("overflow-hidden");
  });
});

// require _scroll-to-dip.js
$(function () {
  var $moveTop = $(".btn-movetop");
  var $window = $(window);

  if (!$moveTop.length) return;

  $window.on("scroll", function () {
    if ($window.scrollTop() > 150) {
      $moveTop.addClass("show");

      return;
    }

    $moveTop.removeClass("show");
  });
});

$(function () {
  $(".sticky-btns__toggle").on("click", function (e) {
    e.preventDefault();

    $(".sticky-btns").toggleClass("active");
  });
});

// n-select
$(function () {
  $(".n-select__field").on("click", "span", function (e) {
    e.stopPropagation();
    $(this).parent().siblings(".n-select__dropdown").fadeToggle();
  });

  $("html, body").on("click", function () {
    $(".n-select__dropdown").fadeOut();
  });
});