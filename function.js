$(function(){
    // funções de abrir e fechar formulário//
    abrirJanela();
    verificarCliqueFechar();

    function abrirJanela() {
       $('.btn').click(function(e){
        e.stopPropagation();
           $('.bg').fadeIn();/*outra forma usar o show*/
       });
    }

    function verificarCliqueFechar() {
        var el = $('body,.closeBtn');
        el.click(function(){
           $('.bg').fadeOut();
        });
        $('.form').click(function(e){
            e.stopPropagation();
        });
    }
     // Eventos do formulário//

    $('input[type=text]').focus(function(){
        resetarCampoInvalido($(this));
    });

    $('form#form1').submit(function(e){
        e.preventDefault();
         var nome = $('input[name=nome]').val();
         var telefone = $('input[name=telefone]').val();
         var email = $('input[name=email]').val();
         
         if(verificarNome(nome) == false) {
            aplicarCampoInvalido($('input[name=nome]'));
         } else if(verificarTelefone(telefone) == false) {
            aplicarCampoInvalido($('input[name=telefone]'));
         }else if(verificarEmail(email)== false) {
            aplicarCampoInvalido($('input[name=email]'));
         }

         else {
            alert("Formulário enviado com sucesso!");
        }

        });

       // funções para estilizar o campo do formulário//
    
        function aplicarCampoInvalido(el) {
            el.css('color','red');
            el.css('border','2px solid red');
            el.val('Campo Invalido!');
            //el.data('invalido','true');
        }
         
        function resetarCampoInvalido(el) {
            el.css('color','#ccc');
            el.css('border','2px solid #0381ff');
            el.val('');
        }

        // funções para verificar nossos campos//
       
        function verificarNome(nome) {
            if(nome == '') {
                return false;
            }
            var amount = nome.split(' ').length;
            var splitStr = nome.split(' ');
           if( amount >= 2) {
              for(var i = 0; i < amount; i++) {
                  if(splitStr[i].match(/^[A-Z]{1}[a-z]{1,}$/)) {
   
                  } else {
                     return false;
                  }
              }
           
           }else {
              return false;
           }
        }

        function verificarTelefone(telefone) {
            if(telefone == '') {
                return false; 
            }

            if(telefone.match(/^\([0-9]{2}\)[0-9]{4}-[0-9]{4}$/) == null) {
                return false;
            }
        }
       
        function verificarEmail(email) {
            if(email == '') 
            return false;

            if(email.match(/^([a-z0-9-_.]{1,})+@+([a-z.]{1,})$/) == null) {
                return false;
            }
        }
});

//$(function() {
   //var frase = 'Olá Mundo';
  // var verificar = frase.match(/ola/);

   //console.log(verificar);
//});

//$(function(){
  // var frase = 'Pedro@hotmail.com';
  // var verifica = frase.match(/^(,*?)@(,*?)$/);

  // if(verifica != null) {
  //  console.log('Encontramos algo!');
   // console.log(verifica);
   // console.log(verifica[1]);
   // console.log(verifica[2]);
    //console.log(verifica[3]);
  // }else {
   //  console.log('Encontramos nada!');
  // }
//});

