var bgModal = document.querySelector('.bg-modal'),
    modalAll = document.querySelector('.modal-all'),
    modalIn = document.querySelector('.modal-in'),
    modalInPay = document.querySelector('.modal-pay'),
    modalInComp = document.querySelector('.modal-comp'),
    modalInTel = document.querySelector('.modal-tel'),
    modalOut = document.querySelectorAll('.modal-out'),
    modalOutD = document.querySelectorAll('.modal-out-d'),
    modalFinish = document.querySelector('.modal-container.finish'),
    modalPay = document.querySelector('.modal-container.pay'),
    modalComp = document.querySelector('.modal-container.complaint'),
    modalTel = document.querySelector('.modal-container.tel'),
    modalContainer = document.querySelectorAll('.modal-container');

    TweenMax.set([bgModal], {
      display: 'none',
      opacity: 0,
      scale: .9
    });

    TweenMax.set(modalContainer, {
      display: 'none',
      opacity: 0,
      y: -100
    });

    TweenMax.set(modalAll,{
      display: 'block',
      opacity:1
    })

    let modal = {
      in: function(el) {
        TweenMax.to([bgModal],.5, {
          display: 'block',
          opacity: 1,
          scale: 1
        });
        TweenMax.to([el],2, {
          display: 'block',
          opacity: 1,
          y:0,
          ease: Elastic.easeOut.config(.5, 0.3)
        });
      },
      out: function(el) {
        TweenMax.to([bgModal],.5, {
          opacity: 0,
          scale: .9,
        });
        TweenMax.to([el],.5, {
          opacity: 0,
          y:-100, 
        });
        TweenMax.set([bgModal,el], {
          display: 'none',
          delay: .5
        });
      }
    }


    modalIn.addEventListener('click',function (e) {
      e.preventDefault()
      modal.in(modalFinish)
    });


    if(modalInPay != null) {
      modalInPay.addEventListener('click',function (e) {
        e.preventDefault()
        modal.in(modalPay)
      });
    }

    if(modalInComp != null) {
      modalInComp.addEventListener('click',function (e) {
        e.preventDefault()
        modal.in(modalComp)
      });
    }

    if(modalInTel != null) {
      modalInTel.addEventListener('click',function (e) {
        e.preventDefault()
        modal.in(modalTel)
      });
    }



    for(let item = 0; item < modalOut.length; item ++) {
  
      modalOut[item].addEventListener('click',function (e) {
        e.preventDefault()
        modal.out(modalFinish);
        modal.out(modalPay);
        modal.out(modalComp);
        modal.out(modalTel);
      })

    }

    for(let item = 0; item < modalOutD.length; item ++) {
  
      modalOutD[item].addEventListener('click',function (e) {
        e.preventDefault()
        modal.out(modalFinish);
        modal.out(modalTel);
      })

    }



    let  sub = document.querySelectorAll('.content-sub'),
          item = document.querySelectorAll('.item');

          let tl2 = new TimelineMax();
     if(item != null) {
      for(let is = 0; is < item.length; is ++) {
        item[is].addEventListener('click', function (e) {
          e.preventDefault();

          TweenMax.set(item, {className:"-=active"});
          TweenMax.set(item[is], {className:"+=active"});

          let cls =  item[is].getAttribute('data-view'); 
        
          tl2.clear(true);
          tl2.staggerTo(sub,.5,{
            display: 'none',
            opacity: 0,
            y: 60
          }).to(document.getElementsByClassName(cls)[0],.5,{
            display: 'block',
            opacity: 1,
            y: 0
          });
          
        })
    }
     }

     TweenMax.set(document.querySelector('.content-all-itens'),{
      display: 'block'
    });


    TweenMax.set(sub,{
      display: 'none',
      opacity: 0,
      y: 100
    });

    TweenMax.set(sub[0],{
      display: 'block',
      opacity: 1,
      y: 0
    });
