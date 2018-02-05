module.exports = {
  ENDPOINT_API_V1: 'http://127.0.0.1:3000/api/v1',

  STATUS_200: 200,
  STATUS_201: 201,
  STATUS_500: 500,
  STATUS_404: 404,

  MSG_CPF_ADDED_BLACKLIST: 'CPF Incluído com sucesso na blacklist',
  MSG_CPF_INCLUDED_BLACKLIST: 'Este CPF já consta na blacklist',

  MSG_CPF_REMOVED_BLACKLIST: 'CPF removido com sucesso da blacklist',
  MSG_CPF_NOT_FOUND_ON_BLACKLIST: 'CPF não se encontra na blacklist',

  MSG_FREE: 'FREE',
  MSG_BLOCK: 'BLOCK',

  CPF_TEST_FREE: '012.345.678-90',
  CPF_TEST_FREE_WITHOUT_FORMAT: '66510432269',
  CPF_TEST_BLOCK: '167.031.789-76',
  CPF_TEST_BLOCK_WITHOUT_FORMAT: '52485688117',

  MSG_CPF_INVALIDO: 'O CPF informado é inválido',

  REQUEST_NOT_FOUND: 'Requisição não encontrada',
  INTERNAL_SERVER_ERROR: 'Ocorreu algum erro inesperado, revise os dados informados!',
};
