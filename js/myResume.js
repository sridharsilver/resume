function expandBtnClicked() {
    setGradientOverlayBg();
    setMyResumeHeight();
    setDownloadCvBtn();
}

function setGradientOverlayBg() {
    var gradientOverlayResume = document.getElementById('gradientOverlayResume');
    // gradientOverlayResume.style.background = 'linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1))';
    gradientOverlayResume.style.background = 'linear-gradient(to bottom, rgba(255, 119, 0, 0), rgba(255, 119, 0, 0), rgba(7, 4, 0, 0.5))';
}

function setMyResumeHeight() {
    var myResume = document.getElementById('myResume');
    var myResumeExpandBtn = document.getElementById('myResumeExpandBtn');
    var width = window.innerWidth;
    var height;

    if (width < 576) {
        height = '497px';
    } else if (width < 768) {
        height = '730px';
    } else if (width < 992) {
        height = '985px';
    } else if (width < 1200) {
        height = '1325px';
    } else if (width < 1440) {
        height = '1580px';
    } else {
        height = '1834px';
    }

    myResume.style.height = height;
    myResumeExpandBtn.style.display = 'none';
}

function setDownloadCvBtn() {
    var downloadCvBtn = document.getElementById('downloadCvBtn');
    downloadCvBtn.style.display='block';
}