function changeBackground(imageSrc) {
    console.log('Background change triggered with image source:', imageSrc);
    const homeSection = document.querySelector('.home');
    
    // gradient layer
    homeSection.style.backgroundImage = 
        `linear-gradient(to bottom, rgba(0, 209, 255, 0) 50%, rgba(0, 209, 255, 1) 100%), url('${imageSrc}')`;
    
    // size & position
    homeSection.style.backgroundSize = 'cover';
    homeSection.style.backgroundPosition = 'center';
}