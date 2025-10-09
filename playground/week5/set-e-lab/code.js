function addBtnF() {
  x = $("#op1").val()
  y = $("#op2").val()
  result = parseInt(x) + parseInt(y)
  $('#resultPara').html(`Result: ${x} + ${y} = ${result}`)
  $('#historyDiv').append(`
    <div class="bg-cyan-600">
      Result: ${x} + ${y} = ${result}
      <button class="hideBtns" >Hide Me!</button>
    </div`
  )
}

function delBtnF() {
  $(this).parent().hide()
}

function setup() {
  jQuery("#addBtn").click(addBtnF);
  jQuery("body").on("click", ".hideBtns", delBtnF);

}

$(document).ready(setup)