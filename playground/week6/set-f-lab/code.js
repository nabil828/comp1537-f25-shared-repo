addF = function () {
  x = Number($('#op1').val())
  y = Number($('#op2').val())
  // console.log(x + y);
  $("#resultPara").html(`Result: ${x + y}`)
  $("#historyDIv").append(`
    <div class="blueClass">
        Result: ${x + y} 
        <button class="hideBtns">Hide This</button>
    </div>
    `)

}

function hideBtnsF() {
  console.log(111);
  $(this).parent().hide()
}

function setup() {
  $("#addBtn").click(addF)
  $("body").on("click", ".hideBtns", hideBtnsF)
}

jQuery(document).ready(setup)