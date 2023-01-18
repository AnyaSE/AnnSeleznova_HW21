const siteButton = document.getElementById('website__button');

siteButton.addEventListener('click', linkCheck);

function linkCheck () {
    const websiteLink = document.getElementById('website__link').value;
    let newWebsiteLink = '';
    if (!(websiteLink.includes('http') || websiteLink.includes('https'))) {
        const requiredInput = 'http://';
        newWebsiteLink = requiredInput + websiteLink;
        return window.location = newWebsiteLink;
    } else {
        return window.location = websiteLink;
    }
};
