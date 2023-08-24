// number count for stats, using jQuery animate

$('.counting').each(function () {
  var $this = $(this),
    countTo = $this.attr('data-count');

  $({ countNum: $this.text() }).animate({
    countNum: countTo
  },

    {

      duration: 3000,
      easing: 'linear',
      step: function () {
        $this.text(Math.floor(this.countNum));
      },
      complete: function () {
        $this.text(this.countNum);
        //alert('finished');
      }

    });


});


// decimal count
$('.counting-new').each(function () {
  var $this = $(this),
    countTo = $this.attr('data-count');  // Update countTo to 5

  $({ countNum: $this.text() }).animate({
    countNum: countTo
  },

    {

      duration: 3000,
      easing: 'linear',
      step: function (now) {
        var formattedNumber = now.toFixed(3);  // Format to three decimal places
        $this.text(formattedNumber);
      },
      complete: function () {
        $this.text(this.countNum.toFixed(3));  // Set the final count with three decimal places
        //alert('finished');
      }

    });
});
