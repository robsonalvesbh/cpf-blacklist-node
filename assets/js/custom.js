$(() => {
  const inputCpfSearch = $('#form-search .input-cpf');

  inputCpfSearch.change(() => {
    $('.input-cpf').val(inputCpfSearch.val());
  });
});
