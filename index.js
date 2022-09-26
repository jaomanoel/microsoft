function btnSlideLeft(){
    const divRight = document.querySelector('#manual-btn-right')
    const divLeft = document.querySelector('#manual-btn-left')
    const conteinerDefault = document.querySelector('.conteiner1') // microsoft
    const conteiner = document.querySelector('.conteiner2') //game pass

    divLeft.style.backgroundColor = "black";
    divRight.style.backgroundColor ='transparent';

    conteinerDefault.className = 'conteiner conteiner1'
    conteiner.className = "conteiner conteiner2 hidden";
}

function btnSlideRight(){
    const divRight = document.querySelector('#manual-btn-right')
    const divLeft = document.querySelector('#manual-btn-left')
    const conteinerDefault = document.querySelector('.conteiner2') //game pass
    const conteiner = document.querySelector('.conteiner1') // microsoft

    divLeft.style.backgroundColor = "transparent";
    divRight.style.backgroundColor ='black';

    conteinerDefault.className = 'conteiner conteiner2'
    conteiner.className = 'conteiner conteiner1 hidden';
}

function btnNavHidden(open=false){
    const visible = document.querySelector('.toda-nav')
    const conteinerDefault = document.querySelector('.conteiner1') // microsoft
    const conteiner = document.querySelector('.conteiner2') //game pass
    const navigation = document.querySelector('.manual-navigation')
    var ok = false;
    
    var time = setInterval((e) => {
        if(!ok) {
            if(open != false){
                document.querySelector('.content').addEventListener('click', function(){
                    visible.className = 'toda-nav hidden'
                    conteinerDefault.className = 'conteiner conteiner1'
                    conteiner.className = 'conteiner conteiner2 hidden'
                    navigation.className = 'manual-navigation'
                    
                    ok = true;
                })
            }else{
                visible.className = 'toda-nav'
                conteinerDefault.className = 'conteiner conteiner1 hidden'
                conteiner.className = 'conteiner conteiner2 hidden'
                navigation.className = 'manual-navigation hidden'

                open = true
            }
        }else{
            window.location.reload();
        }
    }, 200)
}


function btnMenuResponsive(open=false){
    const menuResposive = document.querySelector('.menu-responsive-main')
    const conteinerDefault = document.querySelector('.conteiner1') // microsoft
    const conteiner = document.querySelector('.conteiner2') //game pass
    const navigation = document.querySelector('.manual-navigation')
    const  conteinerBuy = document.querySelector('.buy')

    var ok = false;

    var time = setInterval((e) => {
        if(!ok) {
            if(open != false){
                document.querySelector('.content').addEventListener('click', function(){
                    conteinerDefault.className= 'conteiner1'
                    conteiner.className = 'conteiner2 ';
                    
                    ok = true;
                })
            }else{
                menuResposive.className = 'menu-responsive-main'
               
                conteinerDefault.className = 'conteiner hidden'
                conteiner.className = 'conteiner hidden'
                navigation.style.top = '87%'
                conteinerBuy.style.margin = '30px 0'
                open = true
            }
        }else{
            
        }
    }, 200)
}