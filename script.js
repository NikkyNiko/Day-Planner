$(document).ready(function() {

    function displayTime() {
        $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));
        $('#currentTime').text(dayjs().format('h:mm:ss'));
    }

    displayTime();
    setInterval(displayTime, 1000);

    function updateHour() {
        let currentHour = dayjs().hour();
        let timeBlocks = $('.time-block');
        timeBlocks.each(function() {
            let blockHour = parseInt($(this).attr('id'));
            if (currentHour > blockHour) {
                $(this).addClass('past');
            } else if (currentHour === blockHour) {
                $(this).removeClass('past').addClass('present');
            } else {
                $(this).removeClass('past present').addClass('future');
            }
        });
    }

    updateHour();
    setInterval(updateHour, 10000);

    $('.saveBtn').click(function () {
        const eventText = $(this).siblings('.description').val();
        const hour = $(this).parent().attr('id');
        localStorage.setItem(hour, eventText);
    });
});