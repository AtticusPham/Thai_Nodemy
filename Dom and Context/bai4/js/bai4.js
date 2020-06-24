$('#btn-calculate').on('click', function() {
    let num1 = $('#num1');
    let num2 = $('#num2');
    let result = num1.val()*1 + num2.val()*1;
    document.getElementById('result').innerHTML = result;
});

