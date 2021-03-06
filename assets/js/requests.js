$(() => {
  /**
   * Busca se CPF está Blacklist
   */
  const formSearch = $('#form-search');

  formSearch.submit(() => {
    const alertSuccess = $('#alert-sucess');
    const alertError = $('#alert-error');
    const inputCpf = $('#form-search .input-cpf');

    $.get(formSearch.attr('action') + inputCpf.val())
      .done(() => {
        alertSuccess.addClass('d-none');
        return alertError.removeClass('d-none');
      })
      .fail((err) => {
        if (err.status === 500) {
          return swal('Oops', 'Ocorreu algum erro inesperado, tente novamente!', 'error');
        }

        if (typeof err.responseJSON.msg !== 'undefined') {
          return swal('Oops', err.responseJSON.msg, 'error');
        }

        alertError.addClass('d-none');
        return alertSuccess.removeClass('d-none');
      });

    return false;
  });

  /**
   * Adiciona CPF na Blacklist
   */
  const formAdd = $('#form-add');

  formAdd.submit(() => {
    swal({
      title: 'Você tem certeza?',
      text: 'Que deseja incluir este CPF a blacklist!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          $.post(
            formAdd.attr('action').slice(0, -1),
            formAdd.serialize(),
          )
            .done(() => {
              swal('Yeah', 'CPF adicionado a blacklist com sucesso!', 'success')
                .then(() => window.location.reload());
            })
            .fail(() => swal('Oops', 'Este CPF já consta na blacklist!', 'error'));
        }
      });


    return false;
  });

  /**
 * Remove CPF na Blacklist
 */
  const formRemove = $('#form-remove');

  formRemove.submit(() => {
    const inputCpf = $('#form-remove .input-cpf');
    swal({
      title: 'Você tem certeza?',
      text: 'Que deseja remover este CPF da blacklist!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          $.ajax({
            url: formRemove.attr('action') + inputCpf.val(),
            type: 'DELETE',
          })
            .done(() => {
              swal('Yeah', 'CPF removido da blacklist com sucesso!', 'success')
                .then(() => window.location.reload());
            })
            .fail(() => swal('Oops', 'Este CPF já foi removido da blacklist!', 'error'));
        }
      });

    return false;
  });
});
