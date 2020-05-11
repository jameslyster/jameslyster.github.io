$(document).ready(() => {
    console.log('Ready To Go!!');
    
    $('#meetTheTeam').click(()=>{
        console.log('clicked');
        $('.cardContainer').each(()=>{
            let highestBox=0;
            console.log('InsidecontainerLoop');

            $('.cardColumn', this).each(()=>{
                console.log('inside columnloop');
                if($(this).height() > highestBox) {
                    highestBox = $(this).height();
                }
            });
            $('.cardColumn',this).height(highestBox);
        });
    });
        

});