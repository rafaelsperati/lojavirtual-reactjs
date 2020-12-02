module.exports = {
    mode: process.env.NODE_ENV === 'production' ? "live" : 'sandbox',
    sandbox: process.env.NODE_ENV === 'production' ? false : true,
    sandbox_email: process.env.NODE_ENV === 'production' ? null : 'c08135013878336885525@sandbox.pagseguro.com.br',
    email: 'rafaelsperati@gmail.com',
    token: '48896C41E31749F681BA1B964CBAA066',
    notificationURL: "https://api.loja-teste.ampliee.com/v1/api/pagamentos/notificacao",
}